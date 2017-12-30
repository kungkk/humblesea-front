// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    api_url: 'http://localhost:8080/api',
    oauth_token_url: 'http://localhost:8080/oauth/token',
    site_oauth_client_id: 5, // (using Client Credentials Grant)
    site_oauth_client_secret: 'Y425x8fRHe7JN3hkW2Ob5yI9EgMX0C8VZqvoiRMG',
    site_oauth_scope: '',
    user_oauth_client_id: 6, // (using Password Grant)
    user_oauth_client_secret: 'KLSUW7EbrHdhd3ONS9QqWlfZ0sQZ0lOgWuQtr3tQ',
    user_oauth_scope: '*',
};


// testing commit 
