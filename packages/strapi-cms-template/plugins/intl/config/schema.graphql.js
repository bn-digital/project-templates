module.exports = {
  resolver: {
    Query: {
      currencies: {
        resolver: 'plugins::intl.intl.findCurrencies',
      },
      currency: {
        resolver: 'plugins::intl.intl.findCurrency',
      },
      countries: {
        resolver: 'plugins::intl.intl.findCountries',
      },
      country: {
        resolver: 'plugins::intl.intl.findCountry',
      },
    },
  },
}
