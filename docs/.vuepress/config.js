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
      ['/', '首頁'],
	  {
        title: 'Group 1',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          ['/demo/test.md', 'Test1']
        ]
      },
    ],
    nav: [
      {text: '首頁', link: '/' },
	  {text: 'Test1', link: '/demo/test.md' }
    ]
  }
}