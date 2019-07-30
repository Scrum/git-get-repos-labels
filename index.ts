import graphqlGot = require('graphql-got');

interface options {
  owner: string,
  name: string,
  token: string
}

export default ({owner, name, token}: options) => graphqlGot('https://api.github.com/graphql', {
    query: `{
      repository(owner: "${owner}", name: "${name}") {
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
  }).then(({response: {body: {repository: {labels: {edges}}}}}) => edges);

// .then(response => {
//   // '59bd8d5eb1980b7f926f2d106f4f2f0312fdf97d'
//   return 
//   console.log();
// });

