module.exports = {
  title: '測試 VuePress GitHub Actions',
  description: 'VuePress GitHub Actions',
  base: '/VuePressDemo_GitHubActions/',
  repo: 'https://github.com/MichaelNien/VuePressDemo_GitHubActions',
  plugins: [
	'vuepress-plugin-mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/index.md', '首頁']
    ],
    nav: [
      { text: '首頁', link: '/index.md' },
	  { text: 'Test1', link: '/demo/test.md' }
    ]
  }
}