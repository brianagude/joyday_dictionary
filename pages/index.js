import React from "react";
import Head from 'next/head';
import getPosts from '../lib/getPosts';

export default function Home({posts}) {
  return (
    <div className="home-page">
      <Head>
        <title>JOYDAY | Dictionary</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <style jsx>{styles }</style> */}
      </Head>
      <main>
        <h1>JOYDAY Dictionary</h1>
        <div className="dictionary-list">
          {posts.map(post => (
            <a key={post.id} href={post.route} className="dictionary-term">
              {post.fields.name}
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