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
        nav: [
            // { text: 'Machine Learning', link: '/' },
            { text: 'Software and Tools', link: '/software/' },
            { text: 'Languages', link: '/langs/' },
            { text: 'Others', link: '/others/' },
        ],
        sidebar: {
            '/langs/': [
                {
                    title: 'English',
                    collapsable: false,
                    children: [
                        'en/learned-in-uk',
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
                }
            ],
            '/ml/': [
                {
                    title: 'Machine Learning',
                    collapsable: false,
                    children: [
                        'learning-theory',
                    ]
                },
            ],
            '/programming/': [
                {
                    title: 'Python',
                    collapsable: false,
                    children: [
                        'python/miniconda',
                        'python/matplotlib',
                    ]
                },
                {
                    title: 'LaTeX',
                    collapsable: false,
                    children: [
                        'latex',
                    ]
                },
            ],
            '/software/': [
                {
                    title: 'Windows',
                    collapsable: false,
                    children: [
                        'windows/autohotkey',
                    ]
                },
                {
                    title: 'General',
                    collapsable: false,
                    children: [
                        'vim',
                    ]
                },
            ],
            '/others/': [
                {
                    title: 'Misc.',
                    collapsable: false,
                    children: [
                        'characters',
                        'genetics',
                    ]
                },
            ],
            '/': ['']
        }
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
                .use(require('@neilsustc/markdown-it-katex'))
        },
    }
}