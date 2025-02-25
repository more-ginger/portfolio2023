import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Browse({ posts, globalData }) {
  return (
    (<Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="w-full relative cursor-auto">
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="flex backdrop-blur-lg dark:bg-gray-900 dark:bg-opacity-30 bg-opacity-10 cursor-pointer hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border-t border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/projects/${post.filePath.replace(/\.md?$/, '')}`}
                href={`/projects/[slug]`}
                className="w-full relative flex-wrap md:flex-nowrap flex py-6 lg:py-10 px-3 block focus:outline-none focus:ring-4 hover:text-black dark:hover:text-white no-underline">
                <div className='w-full relative flex-wrap md:flex-nowrap flex py-6 lg:py-10 px-3 block '>
                  {post.data.himage && (
                    <img className="max-h-[320px] mx-auto md:mx-0 md:w-1/2 md:max-w-xs border border-slate-950 dark:border-white" src={`${post.data.himage}`}></img>
                  )}
                  <div className="px-6 pt-6 text-2xl md:w-3/5">
                    <div className="flex flex-wrap mb-4">
                      {post.data.categories && post.data.categories.map((category, c) => (
                        <p className="text-xs" key={c}>
                          <span className="py-1 pl-1">{category}{c === post.data.categories.length - 1 ? ""  : ","}</span>
                        </p>
                      ))}
                    </div>
                    <h2 className="pb-3 text-2xl">{post.data.title}</h2>
                    {post.data.description && (
                      <div className="mb-4 text-sm h-30">
                        <p className="h-full overflow-hidden">
                          {post.data.description}
                        </p>
                      </div>
                    )}
                    <ArrowIcon className="w-[30px]" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>)
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
