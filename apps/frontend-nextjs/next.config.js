const withTranspiledModules = require('next-transpile-modules')([
  "apollo-client-custom"
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTranspiledModules(nextConfig)
