const { GraphQLClient } = require('graphql-request')


export async function getPosts() {
  const graphcms = new GraphQLClient(
    'https://api-ap-northeast-1.graphcms.com/v2/cklbydjc8p15k01z3fd6bhvz3/master'
  )
  
  const { posts } = await graphcms.request(
    `
    query {
      posts {
        id,
        title
      }
    }
  `
  );

  return {
    props: {
      posts
    },
  };
}
