const defaultAdminData = {
  username: process.env.ADMIN_USERNAME || 'dev@bndigital.co',
  password: process.env.ADMIN_PASSWORD || 'BNd1g1t@l',
  firstname: process.env.ADMIN_FIRSTNAME || 'BN',
  lastname: process.env.ADMIN_LASTNAME || 'Digital',
  email: process.env.ADMIN_EMAIL || 'dev@bndigital.co',
  blocked: false,
  isActive: true,
}

async function createSuperAdmin(strapi) {
  const admin = await strapi.query('admin::user').findOne({ username: defaultAdminData.username })
  try {
    if (!admin) {
      strapi.log.warn('[Strapi] No SuperAdmin found. Creating....')
      let superAdminRole = await strapi.query('admin::role').findOne({ code: 'strapi-super-admin' })
      if (!superAdminRole) {
        strapi.log.warn('[Strapi] No SuperAdmin role found. Creating....')
        superAdminRole = await strapi.query('admin::role').create({
          data: {
            name: 'Super Admin',
            code: 'strapi-super-admin',
            description: 'Super Admins can access and manage all features and settings.',
          },
        })
      }

      defaultAdminData.roles = [superAdminRole.id]
      defaultAdminData.password = await strapi.admin.services.auth.hashPassword(defaultAdminData.password)
      return await strapi.query('admin::user').create({ data: defaultAdminData })
    }
  } catch (error) {
    strapi.log.warn(`[Strapi] Failed creating super admin: ${error}`)
  }
  return admin
}

module.exports = { createSuperAdmin }
