import React from 'react'
import {posts} from '../data.js'
import Card from '../components/Card.jsx'

const Home = () => {
  return (
    <div className='home'>
        {posts.map(post=>(
            <Card key={post.id} post={post}/>
        ))}

    </div>
  )
}

export default Home