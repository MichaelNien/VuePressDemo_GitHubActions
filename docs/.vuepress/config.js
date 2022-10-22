module.exports = {
  title: '測試 VuePress GitHub Actions',
  description: 'Terraform manage guide',
  base: '/VuePressDemo_GithubActions/',
  repo: 'https://github.com/MichaelNien/VuePressDemo_GithubActions',
  plugins: [
	'@renovamen/vuepress-plugin-mermaid'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', '前言']
    ],
    nav: [
      { text: 'Home', link: '/' },
	  { text: 'Test1', link: '/book/test.md' }
    ]
  }
}