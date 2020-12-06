module.exports = {
  siteMetadata: {
    siteTitle: 'Collect Pro UI Kit',
    defaultTitle: 'Collect Pro UI Kit',
    siteTitleShort: 'UI Kit',
    siteDescription: 'UI kit for the Collect Pro app.',
    siteUrl: 'https://collectpro.github.io/ui',
    siteAuthor: 'Brodie Daff <brodie@bxvd.dev>',
    siteImage: '/banner.png',
    siteLanguage: 'en',
    themeColor: '#00E2FF',
    basePath: '/',
    pathPrefix: '/public'
  },
  plugins: [
    {
      resolve: '@rocketseat/gatsby-theme-docs',
      options: {
        configPath: 'src/config',
        docsPath: 'src/docs',
        githubUrl: 'https://github.com/rocketseat/gatsby-themes',
        baseDir: 'examples/gatsby-theme-docs',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rocketseat Gatsby Themes',
        short_name: 'RS Gatsby Themes',
        start_url: '/',
        background_color: '#ffffff',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://rocketdocs.netlify.com',
      },
    },
    'gatsby-plugin-offline',
  ],
};
