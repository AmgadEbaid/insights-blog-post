import PostsList from '@/components/postsList'
import React from 'react'

export default function page({params}:{params:{id:string}}) {
  return (
    <PostsList autherId={params.id}></PostsList>
  )
}

