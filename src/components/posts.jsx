import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  const ids = [
    { id: '1', name: 'Post 1' },
    { id: '2', name: 'Post 2' },
    { id: '3', name: 'Post 3' }
  ]

  const list = ids.map(item => {
    return (
      <span key={item.id}>
        <Link to={item.id}> {item.name}</Link>
      </span>
    )
  })

  return (
    <div>
      {list}
    </div>
  )
}
export default Posts;