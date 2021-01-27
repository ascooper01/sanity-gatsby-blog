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
                  buildHookId: '6011ef9cea79040113ae9ec0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p7s2obqq',
                  apiId: 'fc1fb1c5-a637-4090-8134-702355e3fdc5'
                },
                {
                  buildHookId: '6011ef9cd41e3f0115e7cdd3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ab9di3pm',
                  apiId: 'f0078ed1-2af7-40eb-8b30-cc8ade674116'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ascooper01/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ab9di3pm.netlify.app', category: 'apps' }
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
