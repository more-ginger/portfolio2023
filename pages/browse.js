import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Browse({ posts, globalData }) {
  console.log('browse', posts)
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="w-full relative">
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="flex backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border-t border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/projects/${post.filePath.replace(/\.md?$/, '')}`}
                href={`/projects/[slug]`}
              >
                <a className="w-full relative flex-wrap md:flex-nowrap flex py-6 lg:py-10 px-3 block focus:outline-none focus:ring-4 hover:text-black no-underline">
                  {post.data.himage && (
                    <img className="max-h-[320px] mx-auto md:mx-0 md:w-1/2 md:max-w-xs border border-slate-950" src={`${post.data.himage}`}></img>
                  )}
                  <div className="px-6 pt-6 text-2xl md:w-3/5">
                    <div className="flex flex-wrap">
                      {post.data.categories && post.data.categories.map((category, c) => (
                        <p className="mb-4 text-sm mr-1" key={c}>
                          <span className="border rounded-full border-slate-950 px-3 py-1">{category}</span>
                        </p>
                      ))}
                    </div>
                    <h2 className="pb-3 text-2xl">{post.data.title}</h2>
                    {post.data.description && (
                      <div className="mb-4 text-sm h-30">
                        <p className="h-full text-pretty overflow-hidden">
                          {post.data.description}
                        </p>
                      </div>
                    )}
                    <ArrowIcon className="w-[30px]" />
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  console.log(posts)

  return { props: { posts, globalData } };
}
