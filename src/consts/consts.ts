enum AppRoute {
    Login = '/login',
    Main = '/'

}

enum ApiRoute {
    Contacts = '/contacts',
    Users = '/users'
}

enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
}

export {
    AppRoute,
    AuthorizationStatus,
    ApiRoute
}