PATH := $(PATH):$(HOME)/.local/bin:$(HOME)/bin:/bin:/usr/local/bin
SHELL := /usr/bin/env bash

.DEFAULT_GOAL := help

help:
	@printf "\033[36m\033[1m%-10s\033[0m%-55s\033[33m%s\n\n" target description usage
	@grep -E '^[a-zA-Z1-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN { FS = ": ## " }; { printf "\033[36m\033[1m%-10s\033[0m%-55s\033[33m%s\n", $$1, $$2, $$3 }'

build: ## Build containers for actual project
	$(info --> Build containers for actual project)
	@bin/app build

run: ## Run containers for actual project
	$(info --> Run containers for actual project)
	@bin/app run

stop: ## Stop containers for actual project
	$(info --> Stop containers for actual project)
	@bin/app stop

destroy: ## Remove containers for actual project
	$(info --> Remove containers for actual project)
	@bin/app destroy

install: ## Install dependencies for actual project
	$(info --> Install dependencies for actual project)
	@bin/app install
