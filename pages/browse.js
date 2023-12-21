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
      <main className="w-full">
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
                <a className="w-full relative flex py-6 lg:py-10 px-3 block focus:outline-none focus:ring-4">
                  {post.data.himage && (
                    <img className="md:w-1/2 md:max-w-xs border border-slate-950" src={`${post.data.himage}`}></img>
                  )}
                  <div className="pl-6 text-2xl md:w-3/5">
                    {post.data.category && (
                      <p className="mb-4 text-base">
                        <span className="border rounded-full border-slate-950 px-3 py-1">{post.data.category}</span>
                      </p>
                    )}
                    <h2 className="pb-6 leading-10">{post.data.title}</h2>
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
