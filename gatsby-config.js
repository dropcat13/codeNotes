module.exports = {
  siteMetadata: {
    title: 'catsNotes',
    description: `Coding repository`,
    author: 'Cat',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
      },
    },
  ],
}
