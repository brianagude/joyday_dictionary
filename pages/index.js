import React from "react";
import Head from 'next/head';
import getPosts from '../lib/getPosts';
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { SidebarLeft } from '../components/sidebar-left'
import { SidebarRight } from '../components/sidebar-right'

export default function Home({posts}) {
  return (
    <div className="home-page">
      <Head>
        <title>JOYDAY | Dictionary</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <SidebarLeft/>
        <Header/>
        <div className='content-wrapper'>
          <div className='intro'>
            <h3>Welcome to JOYDAY Dictionary</h3>
            <p>lil blurb about joyday dictionary</p>
          </div>
          <div className="dictionary-terms">
            {posts.reverse().map(post => (
              <Link 
                key={post.id} 
                href={post.route}
              >
                <a className="dictionary-term">
                  {post.fields.name}
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            ))}
          </div>
          <Footer/>
        </div>
        <SidebarRight/>
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