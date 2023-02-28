import React from "react";
import { useState, useEffect } from "react";
import Head from 'next/head';
import getPosts from '../lib/getPosts';
import { marked } from 'marked';

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts_ = async () => {
    const posts = await getPosts();
    setPosts(posts);
  }

  useEffect(() => {
    getPosts_();
  }, []); 

  return (
    <div>
      <Head>
        <title>JOYDAY Dictionary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>JOYDAY Dictionary</h1>
        <div className="dictionary-list">
          {posts.map(post => (

            <a key={post.id} href={post.id}>
              <h3>{post.fields.name}</h3>
              {/* <p>{post.id}</p>
              <p>{post.fields.route}</p>
              <p>{post.fields.examples}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(post.fields.definition),
                }}
              /> */}
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
      revalidate: 10, // In seconds 
    },
  };
}