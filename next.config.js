// @ts-check

const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: [
      'media.licdn.com',  // LinkedIn para logos das empresas
      'yt3.googleusercontent.com'  // Google User Content para logos
    ],
  },
  // Aqui você pode adicionar outras configurações específicas do seu projeto.
};

module.exports = withNextIntl(config);
