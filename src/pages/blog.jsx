import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <>
      <center>
        <h3>
          <div> this is my Blog page</div>
        </h3>
      </center>
      <br />
      <Link href={`/blogpost/learn-JavaScript`}>
        <center>
          <h2>
            learn js
          </h2>
        </center>
      </Link>
    </>
  )
}

export default Blog