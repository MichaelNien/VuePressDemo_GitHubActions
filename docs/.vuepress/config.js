module.exports = {
  title: '測試 VuePress GitHub Actions',
  description: 'Terraform manage guide',
  base: '/VuePressDemo_GithubActions/',
  repo: 'https://github.com/MichaelNien/VuePressDemo_GithubActions',
  plugins: [
        'mermaidjs'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', '前言']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/shazi7804/terraform-manage-guide' }
    ]
  }
}