`use strict`

import { getPosts } from '@src/services/post'

export async function getStaticProps() {
  return getPosts()
}

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
