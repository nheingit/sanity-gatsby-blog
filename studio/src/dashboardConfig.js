export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6028555f24ed4f09787b5ac0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jb1frbt1',
                  apiId: '2dca47da-5bd5-4471-b3c7-bf0c0c63a354'
                },
                {
                  buildHookId: '6028555f9b021bca1c1e1d11',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5essj3gk',
                  apiId: '5f1a6871-d6e5-4327-9e9d-47ba7addda22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nheingit/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5essj3gk.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
