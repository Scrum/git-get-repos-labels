import graphqlGot = require('graphql-got');

interface options {
  owner: string,
  repo: string,
  token: string
}

export default ({owner, repo, token}: options) => graphqlGot('https://api.github.com/graphql', {
    query: `{
      repository(owner: "${owner}", name: "${repo}") {
        labels(last: 100) {
          edges {
            node {
              name
              color
              description
            }
          }
        }
      }
    }`, 
    token
  }).then(({body: {repository: {labels: {edges}}}}) => edges.map(({node}) => node));

