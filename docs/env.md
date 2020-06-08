OhMyForm's configuration is done with environment variables. To set an option for OhMyForm, open/create your .env file and set add `ENV_VAR=somevalue` to set the ENV_VAR variable to the value `somevalue`.

| Name | Description | Default | Available Values |
|------|-------------|---------|------------------|
| NODE_ENV | Set which version of the app you want to run(either secure/SSL, dev, prod or test) | `development` | One of: `development` `production` `test` `secure` |
| BASE_URL | | `localhost:3000` | a valid url |
| MONGODB_URI `required` | URI of the MONGODB server/db that your server will use | `localhost/mean` | A valid MongoDB URI |
| REDIS_URL | URI of the Redis instance that your server will use | NULL |  A valid Redis URI like `redis://127.0.0.1:6379` |
| SIGNUP_DISABLED | Set this flag to disable signups. |  `FALSE` | "TRUE" or "FALSE" |
| MAILER_URI `required` | URI of an email instance | `smtp://localhost:1025`
| SECRET_KEY `required` | Secret to encrypt / validate JWT Tokens | | |
| MAILER_FROM | Email address that all mail should be sent from. | `OhMyForm <no-reply@localhost>` | A valid email |
| CREATE_ADMIN | Setting this variable will create a admin user on startup with credentials as specified below | `FALSE` | "TRUE" or "FALSE" |
| ADMIN_EMAIL | Email of generated admin user | `admin@ohmyform.com` | A valid email |
| ADMIN_USERNAME | Username of generated admin user | `root` | A string |
| ADMIN_PASSWORD | Password of generated admin user | `root` | A string |


### yet to be ported env variables

#### SUBDOMAINS_DISABLED

Set this flag to disable subdomains. (Useful if hosting behind an uncontrolled domain or without a wildcard SSL cert)

Default: `FALSE`<br>
Values: "TRUE" or "FALSE"

#### APP_NAME

Sets the `<title>` property of your webapp.

Default: `OhMyForm`<br>
Values: A string


#### APP_DESC

Sets the,property of your webapp.

Default: `Opensource form builder alternative to TypeForm`<br>
Values: A string


#### APP_KEYWORDS

Sets the value of the <meta> description attribute.

Default: `typeform, pdfs, forms, opensource, formbuilder, google forms, nodejs`<br>
Values: A comma-seperated list of phrases/words


