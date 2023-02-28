import React from "react";
import getPosts from "../lib/getPosts";
import { marked } from "marked";

export default function post({ post }) {
  console.log(post);
  return (
    <main>
      <div className="container mx-auto w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-6/12 p-4">
        <h1 className="font-bold text-2xl">{post.fields.name}</h1>
        <img src="https://picsum.photos/800/200" alt="random image" className=" max-w-full" />

        {/* <div dangerouslySetInnerHTML={{ __html: marked(post.description) }} className="mt-10"></div> */}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: {
      post: post.route,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const post = posts.find((post) => post.route === params.post);
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}


// export async function getStaticProps() {
//   const posts = await getPosts();

//   return {
//     props: {
//       posts,
//       revalidate: 10, // In seconds 
//     },
//   };
// }