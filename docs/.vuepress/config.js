const { description } = require('../../package')

module.exports = {
    title: 'Notes',
    description: description,
    base: '/notes/',
    head: [
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ],
    theme: "book",
    themeConfig: {
        repo: 'yzhang-gh/notes',
        editLinks: false,
        docsDir: 'docs',
        lastUpdated: 'Last updated',
        smoothScroll: true,
        nav: [],
        sidebar: [
            {
                title: 'Classic Machine Learning',
                collapsable: false,
                children: [
                    'ml/learning-theory',
                ]
            },
            {
                title: 'Python',
                collapsable: false,
                children: [
                    'python/miniconda',
                    'python/matplotlib',
                ]
            },
            {
                title: 'Windows',
                collapsable: false,
                children: [
                    'windows/context-menu',
                ]
            },
            {
                title: 'Others',
                collapsable: true,
                children: [
                    'others/latex',
                    'others/shell',
                    'others/vim',
                    'others/genetics',
                ]
            },
            {
                title: 'Japanese',
                collapsable: false,
                children: [
                    'jp/beginner-unit-1-3',
                    'jp/beginner-unit-4-6',
                    'jp/beginner-unit-7-9',
                ]
            },
        ]
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        [
            '@vuepress/google-analytics',
            {
                ga: 'UA-177325112-1',
            },
        ],
    ],
    markdown: {
        extendMarkdown: md => {
            md.set({ breaks: true })
            md.use(require('markdown-it-footnote'))
        },
    }
}