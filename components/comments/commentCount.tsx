import { getCommentCount } from '@/lib/data'
import React from 'react'

export default async function CommentCount({postId}:{postId?:string}) {
    const commentCount = await getCommentCount(postId as String)
  return (
    <span className='px-1'>{commentCount}</span>
  )
}
