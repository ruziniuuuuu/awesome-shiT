.PHONY: install preview build clean

install:
	npm ci

preview:
	npm run wiki:preview

build:
	npm run wiki:build

clean:
	rm -rf public .quartz-cache
