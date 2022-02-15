import { InjectionZone } from '@strapi/helper-plugin'

const HomePage = () => {
  return (
    <main>
      <h1>This is the homepage</h1>
      <InjectionZone area='my-plugin.homePage.right' />
    </main>
  )
}

export default {
  config: {
    auth: {
      logo: null,
    },
    head: {
      favicon: null,
    },
    locales: ['en'],
    menu: {
      logo: null,
    },
    theme: {
      colors: {},
    },
    tutorials: false,
    notifications: { release: false },
  },
  register(app) {
    app.createSettingSection({
      id: 'global.settings.app',
      intlLabel: { id: 'global.app', defaultMessage: 'Application' },
    })
  },
  bootstrap(app) {
    app.addSettingsLink('global', {
      intlLabel: { id: 'global.app', defaultMessage: 'Application' },
      id: 'global.app',
      to: '/secrets',
      Component: HomePage,
      permissions: {},
    })
  },
}
