build-prod:
	npm run build

deploy: build-prod
	s3_website cfg apply
	s3_website push

