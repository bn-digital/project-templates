module.exports = {
  apps: [
    {
      name: 'website',
      script: 'npm',
      cwd: 'packages/website',
      watch: true,
      args: ['start'],
    },
    {
      name: 'cms',
      script: 'npm',
      watch: true,
      cwd: 'packages/cms',
      args: ['start'],
    },
  ],
}
