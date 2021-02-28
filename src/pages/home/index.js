const servicesPost = require('../../services/post')

export async function getStaticProps() {
  return servicesPost.getPosts()
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
