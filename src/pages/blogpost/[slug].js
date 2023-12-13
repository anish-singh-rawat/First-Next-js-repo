import React, { useState } from 'react'

const Slug = (props) => {
  const [blog, setBlog] = useState(props.allBlog)

  return (
    <div className='container mt-5 blog-container'>
      <div className="col">
      <div className="row">
        <div className="col mt-3" style={{fontWeight : 'bold'}}>
          <h4>
          { blog && blog.subject}
          </h4>
        </div>
        <div className="lorem mt-4">
          {blog && blog.content}
        </div>
      </div>
    </div>
    </div>
  )
}

export async function getServerSideProps(context){
    const { slug } = context.query
    let data = await  fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
    let allBlog = await data.json()

  return {
    props : {allBlog},
  }
}
export default Slug