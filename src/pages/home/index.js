/**
* The home page
* @module pages/home
*/
`use strict`

import { getPosts } from '@src/services/post'

/**
* @function getStaticProps
* Get all the posts at build time
* @return {Post[]} All the posts in the database
**/
export async function getStaticProps() {
  return getPosts()
}

/**
* @function Home
* render the home page
* @param {Post[]} posts The list of Post
* @return {Object} The html of the home
**/
const Home = ({ posts }) => {
  console.log('posts', posts)
  return (
    <div>
      <h1>Home</h1>
      <div>
      })}
      </div>
    </div>
  )
}

export default Home
