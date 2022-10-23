module.exports = {
  title: '測試 VuePress GitHub Actions',
  description: 'Terraform manage guide',
  base: '/VuePressDemo_GitHubActions/',
  repo: 'https://github.com/MichaelNien/VuePressDemo_GitHubActions',
  plugins: [
	'vuepress-plugin-mermaidjs'
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