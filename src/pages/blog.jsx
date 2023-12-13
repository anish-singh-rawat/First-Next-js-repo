import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs)
  return (
    <>
      {
        blogs.length > 0 && blogs.map((allItem, index) => (
          <div className="container mt-3" key={index}>
            <div className="row">
              <div className="col">
                <div className="subject mt-5"
                  style={{ fontWeight: 'bold', fontSize: '23px' }}>
                  Language : {allItem.subject}
                </div>
                <div className="title mt-2">
                  Feature's :  {allItem.title}
                </div>
                <div className="content mt-2">
                  Discription :  {allItem.content}
                </div>
                <div className="mt-2">
                  <Link href={`/blogpost/${allItem.subject}`}
                    style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
                    slug : {allItem.slug.substr(0,50)} more....
                  </Link>
                </div>
              </div>
            </div>
          </div>))
      }
    </>
  )
}
export async function getServerSideProps(context){
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()
  return {
    props : {allBlogs},
  }
}
export default Blog