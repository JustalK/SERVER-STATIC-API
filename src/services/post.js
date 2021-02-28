`use strict`

import graphCmsClient from '@src/services/libs/graphCmsClient'

export async function getPosts() {
  console.log(graphCmsClient)
  const { posts } = await graphCmsClient.request(
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
