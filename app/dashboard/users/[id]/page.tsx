import Link from 'next/link'
import React from 'react'

const page = ( {params } : {params: {id: string}}) => {
  const {id } = params
  return (
    <>
    <h1>
        user id page {id}
      
    </h1>
    <Link href={"/dashboard"}>Back to dashboard</Link>
    </>
  )
}

export default page
