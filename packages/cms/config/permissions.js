'use strict'

const publicPermissions = {
  'api::homepage.homepage': ['find'],
  'plugin::users-permissions.auth': ['callback', 'connect', 'emailConfirmation', 'forgotPassword', 'register', 'resetPassword', 'sendEmailConfirmation'],
}

const authenticatedPermissions = {
  ...publicPermissions,
  'plugin::users-permissions.auth': ['callback', 'connect'],
  'plugin::users-permissions.user': ['me'],
}

module.exports = {
  public: publicPermissions,
  authenticated: authenticatedPermissions,
}