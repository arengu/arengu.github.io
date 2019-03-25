const siteConfig = {
  title: 'docs',
  tagline: 'User onboarding made simple',
  url: 'https://docs.arengu.com',
  baseUrl: '/',
  docsUrl: '',
  cname: 'docs.arengu.com',

  // Used for publishing and more
  projectName: 'documentation',
  organizationName: 'arengu',

  headerLinks: [
    {
      href: 'https://admin.arengu.com/#/login',
      label: 'Login',
    },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo-arengu.png',
  footerIcon: 'img/logo-arengu.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#20c997',
    secondaryColor: '#323d47d9',
  },

  /* Custom fonts for website */
  fonts: {
    titleFont: [
      "Montserrat",
      "sans-serif"
    ],
    normalFont: [
      "Work Sans",
      "sans-serif"
    ]
  },

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700|Work+Sans:200,300,400,500,600",
  ],

  copyright: `© ${new Date().getFullYear()} Arengu. All rights reserved.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  onPageNav: 'separate',
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // Boolean flag to indicate whether html files in /pages should be wrapped with Docusaurus site styles, header and footer.
  wrapPagesHTML: true,
};

module.exports = siteConfig;
