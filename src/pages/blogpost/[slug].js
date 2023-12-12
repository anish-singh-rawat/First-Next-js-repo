import { useRouter } from 'next/router'
import React from 'react'

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query
  return (
    <div>
      <h3 className='mt-3 mx-4'>
        <center>
          Here is the contact of your URL paramenters
        </center>
      </h3>
      <br />
      <div className='mx-4'>
        <center>
          <h3>
            {slug}
          </h3>
        </center>
      </div>
    </div>
  )
}

export default Slug