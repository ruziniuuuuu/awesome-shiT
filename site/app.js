const state = {
  data: null,
  query: "",
  scope: "all",
  concept: null,
  branchesExpanded: false,
  ascending: !window.matchMedia("(max-width: 680px)").matches,
}

const $ = (selector, root = document) => root.querySelector(selector)
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)]
const escapeHtml = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[
        character
      ],
  )

const dateValue = (record) => record.createdAt ?? null
const yearValue = (record) => Number(String(record.createdAt ?? "").slice(0, 4)) || 0
const archivedDate = (record) =>
  record.createdAt ? formatDate(record.createdAt) : `建档 ${formatDate(record.checkedAt)}`
const formatDate = (value) => {
  if (!value) return "日期待核"
  const text = String(value)
  return /^\d{4}-\d{2}-\d{2}/.test(text) ? text.slice(0, 10) : text
}
const conceptTitle = (slug) =>
  state.data.concepts.find((concept) => concept.slug === slug)?.title ?? slug

function matches(record) {
  const year = yearValue(record)
  if (state.scope === "recent" && (year < 2024 || year > 2026)) return false
  if (state.scope === "old" && year >= 2024) return false
  if (state.concept && !record.concepts?.includes(state.concept)) return false
  if (!state.query) return true
  const haystack = [
    record.title,
    record.summary,
    record.reason,
    record.language,
    ...(record.concepts ?? []).flatMap((concept) => [concept, conceptTitle(concept)]),
  ]
    .join(" ")
    .toLowerCase()
  return haystack.includes(state.query)
}

function renderStats() {
  const repositories = state.data.repositories
  $("[data-stat='repositories']").textContent = repositories.length
  $("[data-stat='concepts']").textContent = state.data.concepts.length
  $("[data-stat='research']").textContent = state.data.research.length
  const years = repositories.map(yearValue).filter(Boolean)
  $("[data-stat='earliest']").textContent = years.length ? Math.min(...years) : "待核"
  $("[data-generated]").textContent =
    "快照 " + new Date(state.data.generatedAt).toLocaleDateString("zh-CN")
}

function renderBranches() {
  const counts = new Map()
  for (const repo of state.data.repositories) {
    for (const concept of repo.concepts ?? []) {
      counts.set(concept, (counts.get(concept) ?? 0) + 1)
    }
  }
  const container = $("[data-branches]")
  container.replaceChildren()
  const ranked = [...counts.entries()].sort((left, right) => right[1] - left[1])
  const visible = state.branchesExpanded ? ranked : ranked.slice(0, 16)
  if (state.concept && !visible.some(([slug]) => slug === state.concept)) {
    const selected = ranked.find(([slug]) => slug === state.concept)
    if (selected) visible.push(selected)
  }
  container.classList.toggle("is-expanded", state.branchesExpanded)
  visible.forEach(([slug, count], index) => {
      const concept = state.data.concepts.find((item) => item.slug === slug)
      const button = document.createElement("button")
      button.type = "button"
      button.className = "branch-card"
      if (state.concept === slug) button.classList.add("is-active")
      button.innerHTML = `<span>BRANCH ${String(index + 1).padStart(2, "0")}</span><b>${escapeHtml(
        concept?.title ?? slug,
      )}</b><span>${escapeHtml(concept?.definition || "工程化二创支系")}</span><em>${count} 件</em>`
      button.addEventListener("click", () => {
        state.concept = state.concept === slug ? null : slug
        renderBranches()
        renderTimeline()
        $("#chronicle").scrollIntoView({ behavior: "smooth" })
      })
      container.append(button)
    })
  const toggle = $("[data-branch-toggle]")
  toggle.hidden = ranked.length <= 16
  toggle.setAttribute("aria-expanded", String(state.branchesExpanded))
  toggle.textContent = state.branchesExpanded
    ? "收起支系"
    : `展开全部 ${ranked.length} 条支系`
}

function recordCard(record, type = "repo") {
  const template = $("#record-template")
  const fragment = template.content.cloneNode(true)
  const article = $(".record-card", fragment)
  const isCulture = type === "culture"
  if (isCulture) article.classList.add("record-card--culture")
  $(".record-card__date", fragment).textContent = formatDate(
    isCulture ? record.date : record.createdAt,
  )
  if (!isCulture && !record.createdAt) {
    $(".record-card__date", fragment).textContent = archivedDate(record)
  }
  $(".record-card__meta", fragment).textContent = isCulture
    ? `文化节点 / ${record.certainty}`
    : `${record.language ?? "未标注"} / ${record.archived ? "已归档" : "公开 repo"}`
  $("h3", fragment).textContent = record.title
  $("p", fragment).textContent = record.summary || record.reason || "等待补充馆员摘要。"
  const concepts = $(".record-card__concepts", fragment)
  for (const concept of record.concepts ?? []) {
    const chip = document.createElement("span")
    chip.textContent = conceptTitle(concept)
    concepts.append(chip)
  }
  const open = $(".record-card__open", fragment)
  if (isCulture && !record.source) {
    open.textContent = "待考"
    open.disabled = true
  } else {
    open.addEventListener("click", () => openDossier(record, type))
  }
  return fragment
}

function renderTimeline() {
  const records = state.data.repositories.filter(matches)
  const cultural = state.data.culturalEvents.filter((event) => {
    if (state.scope === "recent" && event.year < 2024) return false
    if (state.scope === "old" && event.year >= 2024) return false
    if (state.concept && !event.concepts.includes(state.concept)) return false
    if (!state.query) return true
    return [event.title, event.summary, ...event.concepts.map(conceptTitle)]
      .join(" ")
      .toLowerCase()
      .includes(state.query)
  })
  const grouped = new Map()
  for (const repo of records) {
    const year = yearValue(repo) || "待核"
    if (!grouped.has(year)) grouped.set(year, [])
    grouped.get(year).push({ type: "repo", record: repo })
  }
  for (const event of cultural) {
    if (!grouped.has(event.year)) grouped.set(event.year, [])
    grouped.get(event.year).push({ type: "culture", record: event })
  }

  const years = [...grouped.keys()].sort((left, right) => {
    if (left === "待核") return 1
    if (right === "待核") return -1
    return state.ascending ? Number(left) - Number(right) : Number(right) - Number(left)
  })
  const timeline = $("[data-timeline]")
  timeline.replaceChildren()
  for (const year of years) {
    const block = document.createElement("section")
    block.className = "year-block"
    if (Number(year) >= 2024) block.id ||= Number(year) === 2026 ? "latest-year" : ""
    const label = document.createElement("div")
    label.className = "year-label"
    const items = grouped.get(year).sort((left, right) =>
      String(left.record.date ?? dateValue(left.record)).localeCompare(
        String(right.record.date ?? dateValue(right.record)),
      ),
    )
    if (!state.ascending) items.reverse()
    label.innerHTML = `<strong>${year}</strong><small>${items.length} 件记录</small>`
    const list = document.createElement("div")
    list.className = "year-records"
    items.forEach((item) => list.append(recordCard(item.record, item.type)))
    block.append(label, list)
    timeline.append(block)
  }
  $("[data-result-count]").textContent = `${records.length} 件正式史料 / ${cultural.length} 个文化节点`
  $("[data-empty]").hidden = years.length > 0
}

function renderLatest() {
  const container = $("[data-latest]")
  container.replaceChildren()
  ;[...state.data.repositories]
    .sort((left, right) =>
      String(right.pushedAt ?? dateValue(right) ?? "").localeCompare(
        String(left.pushedAt ?? dateValue(left) ?? ""),
      ),
    )
    .slice(0, 8)
    .forEach((record, index) => {
      const article = document.createElement("article")
      article.className = "latest-card"
      article.dataset.index = String(index + 1).padStart(2, "0")
      article.innerHTML = `
        <time>${escapeHtml(formatDate(record.pushedAt ?? dateValue(record)))}</time>
        <h3>${escapeHtml(record.title)}</h3>
        <p>${escapeHtml(record.summary || record.reason)}</p>
        <small>${escapeHtml((record.concepts ?? []).map(conceptTitle).join(" / "))}</small>
        <button type="button">调阅卷宗</button>`
      $("button", article).addEventListener("click", () => openDossier(record, "repo"))
      container.append(article)
    })
}

function renderFieldwork() {
  const container = $("[data-fieldwork]")
  const emerging = $("[data-emerging]")
  container.replaceChildren()
  emerging.replaceChildren()
  const branchCounts = new Map()
  const formalConcepts = new Set(state.data.concepts.map((concept) => concept.slug))
  const technicalBranch =
    /(桌宠|游戏|工具|bot|tts|配音|编码|语音|数据|档案|互动|硬件|skill|agent|生产线|系统|复刻|编程|评测|minecraft)/i
  for (const record of state.data.research) {
    for (const concept of record.concepts ?? []) {
      branchCounts.set(concept, (branchCounts.get(concept) ?? 0) + 1)
    }
  }
  ;[...branchCounts.entries()]
    .filter(
      ([concept, count]) =>
        count >= 2 &&
        !formalConcepts.has(concept) &&
        /[\u3400-\u9fff]/.test(concept) &&
        !technicalBranch.test(concept),
    )
    .sort((left, right) => right[1] - left[1])
    .slice(0, 12)
    .forEach(([concept, count]) => {
      const item = document.createElement("span")
      item.innerHTML = `<b>${escapeHtml(concept)}</b><em>${count} 份候选</em>`
      emerging.append(item)
    })
  state.data.research.forEach((record, index) => {
    const row = document.createElement("article")
    row.className = "field-row"
    row.innerHTML = `
      <span class="field-row__index">${String(index + 1).padStart(2, "0")}</span>
      <a class="field-row__title" href="${escapeHtml(record.url)}" target="_blank" rel="noreferrer">${escapeHtml(record.title)}</a>
      <span class="field-row__summary">${escapeHtml(record.summary)}</span>
      <span class="field-row__status ${escapeHtml(record.status)}">${escapeHtml(record.status)}</span>`
    container.append(row)
  })
}

function openDossier(record, type) {
  const dialog = $("[data-dialog]")
  const content = $("[data-dialog-content]")
  const isCulture = type === "culture"
  const sourceEvidence = record.source
    ? [{ label: "文化节点公开出处", url: record.source }]
    : record.evidence
  const evidence = sourceEvidence?.length
    ? `<ul class="evidence-list">${sourceEvidence
        .map(
          (item) =>
            `<li><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a></li>`,
        )
        .join("")}</ul>`
    : "<p>当前卷宗暂无单独证据链接，事实以仓库 README 与 metadata 为准。</p>"
  content.innerHTML = `
    <span class="dossier-number">DOSSIER / ${escapeHtml(record.id ?? "CULTURE")}</span>
    <h2>${escapeHtml(record.title)}</h2>
    <dl class="dossier-facts">
      <div><dt>节点日期</dt><dd>${escapeHtml(isCulture ? formatDate(record.date) : archivedDate(record))}</dd></div>
      <div><dt>史料状态</dt><dd>${escapeHtml(isCulture ? record.certainty : record.status)}</dd></div>
      <div><dt>支系</dt><dd>${escapeHtml((record.concepts ?? []).map(conceptTitle).join(" / ") || "待分类")}</dd></div>
    </dl>
    <h3>摘要</h3>
    <p>${escapeHtml(record.summary || "暂无摘要。")}</p>
    ${record.reason ? `<h3>馆员批注</h3><p>${escapeHtml(record.reason)}</p>` : ""}
    <h3>证据目录</h3>
    ${evidence}
    ${record.url ? `<a class="github-link" href="${escapeHtml(record.url)}" target="_blank" rel="noreferrer">打开 GitHub 原件 ↗</a>` : ""}
  `
  dialog.showModal()
}

async function initialize() {
  const response = await fetch("./archive.json")
  if (!response.ok) throw new Error("档案数据加载失败")
  state.data = await response.json()
  renderStats()
  renderBranches()
  renderTimeline()
  renderLatest()
  renderFieldwork()

  $("[data-search]").addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase()
    renderTimeline()
  })
  $$("[data-scope]").forEach((button) =>
    button.addEventListener("click", () => {
      state.scope = button.dataset.scope
      $$("[data-scope]").forEach((item) =>
        item.classList.toggle("is-active", item === button),
      )
      renderTimeline()
    }),
  )
  $("[data-branch-toggle]").addEventListener("click", () => {
    state.branchesExpanded = !state.branchesExpanded
    renderBranches()
  })
  $("[data-sort]").addEventListener("click", (event) => {
    state.ascending = !state.ascending
    event.currentTarget.innerHTML = state.ascending
      ? "<span>时间</span> 古 → 今"
      : "<span>时间</span> 今 → 古"
    renderTimeline()
  })
  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault()
      $("[data-search]").focus()
    }
    if (event.key === "Escape" && $("[data-dialog]").open) $("[data-dialog]").close()
  })
  $("[data-close]").addEventListener("click", () => $("[data-dialog]").close())
  $("[data-dialog]").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close()
  })
}

initialize().catch((error) => {
  console.error(error)
  $("[data-result-count]").textContent = "档案加载失败，请稍后重试。"
})
