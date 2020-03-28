.PHONY: site-sh

# Shell into the app
site-sh:
	docker-compose run --rm posters-site bash
