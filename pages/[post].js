import React from "react";
import Head from 'next/head';
import getPosts from "../lib/getPosts";
import Link from 'next/link'
import { marked } from "marked";
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { SidebarLeft } from '../components/sidebar-left'
import { SidebarRight } from '../components/sidebar-right'

export default function post({ post, posts }) {
  return (
    <div className="term-page">
      <Head>
        <title>JOYDAY | {post.fields.name}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <SidebarLeft/>
        <Header/>
        <div className='content-wrapper'>
          <div className='intro'>
            <h3>{post.fields.name}</h3>
          </div>
          <div className='dictionary-wrapper'>
            <div className="dictionary-item">
              <div className="item-header">
                <h5>Definition</h5>
              </div>
              <div className='item-content'>
                <div dangerouslySetInnerHTML={{ __html: marked(post.fields.definition) }} />
              </div>
            </div>

            {post.fields.examples && 
              <div className="dictionary-item">
                <div className="item-header">
                  <h5>Examples of {post.fields.name}</h5>
                </div>
                <div className='item-content'>
                  <div dangerouslySetInnerHTML={{ __html: marked(post.fields.examples) }} />
                </div>
              </div>
            }

            {post.fields.moving_forward && 
              <div className="dictionary-item">
                <div className="item-header">
                  <h5>How to move forward</h5>
                </div>
                <div className='item-content'>
                  <div dangerouslySetInnerHTML={{ __html: marked(post.fields.moving_forward) }} />
                </div>
              </div>
            }

            {post.fields.affirmation && 
              <div className="dictionary-item">
                <div className="item-header">
                  <h5>{post.fields.name} affirmation</h5>
                </div>
                <div className='item-content'>
                  <div dangerouslySetInnerHTML={{ __html: marked(post.fields.affirmation) }} />
                </div>
              </div>
            }

            {post.fields.effects && 
                <div className="dictionary-item">
                  <div className="item-header">
                    <h5>What happens after dealing with {post.fields.name}?</h5>
                  </div>
                  <div className='item-content'>
                    <div dangerouslySetInnerHTML={{ __html: marked(post.fields.effects) }} />
                  </div>
                </div>
              }
            
              {post.fields.sources && 
                <div className="dictionary-item">
                  <div className="item-header">
                    <h5>Sources</h5>
                  </div>
                  <div className='item-content links'>
                    <div dangerouslySetInnerHTML={{ __html: marked(post.fields.sources) }} />
                  </div>
                </div>
              }
              {post.fields.related_terms && 
                <div className="dictionary-item">
                  <div className="item-header">
                    <h5>Related Terms</h5>
                  </div>
                  <div className='item-content links'>
                    <div>
                      <ul>
                        {post.fields.related_terms.map(term => (
                          posts.map(item => (
                            item.id === term && (
                              <Link 
                                key={post.id} 
                                href={item.route}
                              >
                                <li>
                                  <a>{item.fields.name}</a>
                                </li>
                              </Link>
                            )
                          ))
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              }
          </div>
        <Footer/>
      </div>
      <SidebarRight/>
    </main>
    </div>
    
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
      posts
    },
    revalidate: 1,
  };
}