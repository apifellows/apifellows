# @apifellows - APIs With Love And Coffee

At [apifellows.com](https://www.apifellows.com/) we provide helpful tools, best practices and tutorials on our favourite topic of REST APIs, to be precise: OpenAPI 3.x.x specifications:

- [Online REST API Linter](https://www.apifellows.com/rest-api-linter)
- [REST API Guideilnes](https://www.apifellows.com/rest-api-guidelines)

Everything at @apifellows is an API - so this repository contains, how else could it be, our REST API specifications so you can integrate with us.

# @apifellows - REST API Specifications

[![@apifellows score for Online REST API Linter API](https://www.apifellows.com/wp-json/api-linter/v0/oas3/badges/checkurl?url=https://raw.githubusercontent.com/apifellows/apifellows/refs/heads/main/oas3/apifellows-rest-api-linter-v0.yaml)](https://www.apifellows.com/rest-api-linter?url=https://raw.githubusercontent.com/apifellows/apifellows/refs/heads/main/oas3/apifellows-rest-api-linter-v0.yaml)

The main features our API currently provides:

- /oas3/checkfile - Validate OAS3 provided as a file.
- /oas3/checkurl - Validate OAS3 provided via a publicly accessible URL.
- /oas3/checkyaml - Validate OAS3 provided as a YAML string in the request body.
- /oas3/badges/checkurl - Show the validation score of an OAS3 provided via a publicly accessible URL as image.