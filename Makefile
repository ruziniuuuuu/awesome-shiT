.PHONY: preview build check snapshot clean

preview:
	npm run preview

build:
	npm run build

check:
	npm run check

snapshot:
	npm run snapshot

clean:
	rm -rf public
