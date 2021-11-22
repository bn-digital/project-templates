module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: Number.parseInt(env('PORT', '1337')),
})