build-prod:
	echo build

deploy: build-prod
	s3_website cfg apply
	s3_website push

