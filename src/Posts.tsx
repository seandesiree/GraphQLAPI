import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_POSTS = gql`
  {
    posts {
      title
      body
    }
  }
`;


const GET_POSTS_WITH_ID = gql`
  {
    posts {
      id
      userId
      title
      body
    }
  }
`;


const GET_POSTS_BY_USER_ID = (userId: number) => gql`
  {
    posts(filter: { userId: ${userId} }) {
      id
      userId
      title
      body
    }
  }
`;

const Posts: React.FC = () => {
  const [userId, setUserId] = useState(1); 
  const { loading, error, data } = useQuery(GET_POSTS_WITH_ID);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.posts.map((post: { id: number; userId: number; title: string; body: string }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
