import webpack from 'webpack'

export default (config: webpack.Configuration) => {
  return { ...config, output: { ...config.output, hashFunction: 'sha256' } }
}
