OhMyForm's configuration is done with environment variables. To set an option for OhMyForm, open/create your .env file and set add `ENV_VAR=somevalue` to set the ENV_VAR variable to the value `somevalue`.


#### NODE_ENV

Set which version of the app you want to run(either secure/SSL, dev, prod or test)

Default: `development` <br>
One of: `development` `production` `test` `secure`

#### SESSION_SECRET

Value used to compute session hash

Default: `CHANGE_ME_PLEASE`

#### BASE_URL `required`

URL where the admin panel will live

Default: `localhost:3000`<br>
Values: A valid URL


#### MONGODB_URI `required`

URI of the MONGODB server/db that your server will use

Default: `localhost/mean`<br>
Values: A valid MongoDB URI


#### REDIS_URL `required only if ENABLE_CLUSTER_MODE=TRUE`

URI of the Redis instance that your server will use

Default: `redis://127.0.0.1:6379`<br>
Values: A valid Redis URI


#### SOCKET_PORT

Port that your SocketIO server will bind to

Default: `20523`<br>
Values: A valid port number from 0 - 65535


#### SOCKET_URL

Url that your SocketIO server will bind to

Default: `ws.ohmyform.com`<br>
Values: A valid URL


#### SIGNUP_DISABLED

Set this flag to disable signups.

Default: `FALSE`<br>
Values: "TRUE" or "FALSE"


#### SUBDOMAINS_DISABLED

Set this flag to disable subdomains. (Useful if hosting behind an uncontrolled domain or without a wildcard SSL cert)

Default: `FALSE`<br>
Values: "TRUE" or "FALSE"


#### ENABLE_CLUSTER_MODE

Disable support for running OhMyForm with pm2's cluster mode. Disabling this allows you to not run a Redis instance. 

Default: `FALSE`<br>
Values:"TRUE" or "FALSE"


#### MAILER_EMAIL_ID `required`

Username credential for the SMTP MAIL service used to send signup/verification/lost password emails.

Default: `N/A`<br>
Values: A string


#### MAILER_PASSWORD `required`

Password credential for the SMTP MAIL service used to send signup/verification/lost password emails.

Default: ''<br>
Values: A string


#### MAILER_FROM

Email address that all mail should be sent from.

Default: `noreply@tellform.com`<br>
Values: A valid email


#### MAILER_SERVICE_PROVIDER `required only if MAILER_SMTP_HOST is not set`

A "well-known" email service that is supported by nodemail. If MAILER_SMTP_HOST is enabled, this is ignored.

Default: ''<br>
Values: A service from [https://nodemailer.com/smtp/well-known/](https://nodemailer.com/smtp/well-known/)


#### MAILER_SMTP_HOST `required only if MAILER_SERVICE_PROVIDER is not set`

URL to the SMTP server of your choice

Default: ''<br>
Values: A valid URL


#### MAILER_SMTP_PORT `required only if MAILER_SMTP_HOST is set`

Port of the SMTP server of your choice.

Default: ''<br>
Values: A valid port number from 0 - 65535


#### MAILER_SMTP_SECURE `required only if MAILER_SMTP_HOST is set`

Boolean that enables/disables SSL support for your SMTP client.

Default: `FALSE`<br>
Values: "TRUE" or "FALSE"


#### CREATE_ADMIN

Setting this variable will create a admin user on startup with credentials as specified below

Default: `FALSE`<br>
Values: "TRUE" or "FALSE"


#### ADMIN_EMAIL

Email of generated admin user

Default: `admin@admin.com`<br>
Values: A valid email


#### ADMIN_USERNAME

Username of generated admin user

Default: `root`<br>
Values: A string


#### ADMIN_PASSWORD

Password of generated admin user

Default: `root`<br>
Values: A string


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


#### RAVEN_DSN

Set this to your Sentry.io Public DSN to enable remote logging

Default: `N/A`<br>
Values: A valid Sentry.io DSN


#### GOOGLE_ANALYTICS_ID

Set this to your GA id to enable GA tracking on your OhMyForm instance

Default: `N/A`<br>
Values: A valid Google Analytics ID
