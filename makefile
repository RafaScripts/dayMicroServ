.PHONY: build

up:
	docker-compose up -d

stop:
	docker-compose stop

rm:
	docker-compose rm

build:
	docker-compose build --no-cache
