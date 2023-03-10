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
        <div className='content-wrapper'>
          <Header/>
          <h2 className='title'>JOYDAY Dictionary</h2>
          <div className="dictionary-terms">
            {posts.reverse().map(post => (
              <Link 
                key={post.id} 
                href={post.route} 
                
              >
                <div className="dictionary-term">
                  {post.fields.name}
                  <Image
                    src="/images/arrow.svg"
                    alt="Arrow Icon"
                    width={24}
                    height={24}
                  />
                </div>
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