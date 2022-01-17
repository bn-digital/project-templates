const defaultAdminUser = {
  username: process.env.ADMIN_USERNAME || 'dev@bndigital.co',
  password: process.env.ADMIN_PASSWORD || 'BNd1g1t@l',
  firstname: process.env.ADMIN_FIRSTNAME || 'BN',
  lastname: process.env.ADMIN_LASTNAME || 'Digital',
  email: process.env.ADMIN_EMAIL || 'dev@bndigital.co',
  blocked: false,
  isActive: true,
}

async function createSuperAdmin(strapi) {
  let admin = await strapi.query('admin::user').findOne({ username: defaultAdminUser.username })
  try {
    if (!admin) {
      strapi.log.warn('[Strapi] No SuperAdmin found. Creating....')
      let verifyRole = await strapi.query('admin::role').findOne({ code: 'strapi-super-admin' })
      if (!verifyRole) {
        strapi.log.warn('[Strapi] No SuperAdmin role found. Creating....')
        verifyRole = await strapi.query('admin::role').create({
          data: {
            name: 'Super Admin',
            code: 'strapi-super-admin',
            description: 'Super Admins can access and manage all features and settings.',
          },
        })
      }

      defaultAdminUser.roles = [verifyRole.id]
      defaultAdminUser.password = await strapi.admin.services.auth.hashPassword(defaultAdminUser.password)
      admin = await strapi.query('admin::user').create({ data: defaultAdminUser })
    }
  } catch (error) {
    console.error(error)
  }
  return admin
}

module.exports = { createSuperAdmin }
