import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className='container mt-5 p-5 bg-light'>
      <Link className='fs-1 text-dark fw-light mb-3' href="/create-user">Create User</Link> <br />
      <Link className='fs-1 text-dark fw-light mb-3' href="/show-user">Show User</Link>
    </div>
  )
}
export default index