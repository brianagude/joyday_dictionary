import Head from 'next/head';
import { marked } from 'marked';
import getPosts from '../lib/getPosts';

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>JOYDAY Dictionary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1>JOYDAY Dictionary</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h3>{post.fields.name}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: marked(post.fields.definition),
                }}
              />
            </li>
          ))}
        </ul>
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