import Link from 'next/link';
import { getPages } from '../utils/mdx-utils';

import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Archive({ pages, globalData }) {
  return (
    (<Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="w-full h-fit relative">
        <div className="w-full h-screen relative">
          <ul className="w-full">
            {pages.map((page) => (
              <li
                key={page.filePath}
                className="flex backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border-t border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
              >
                <Link
                  as={`/articles/${page.filePath.replace(/\.md?$/, '')}`}
                  href={`/articles/[slug]`}
                  className="w-full relative flex-wrap md:flex-nowrap md:h-2/3 flex py-6 lg:py-10 px-3 block focus:outline-none focus:ring-4 hover:text-black no-underline">

                  <div className="px-6 md:pr-3 pt-6 md:pt-0 text-2xl">
                    <h2 className="pb-3 text-2xl">{page.data.title}</h2>
                  </div>
                  <div className="flex px-6 md:w-1/2">
                    <p className="text-sm m-auto pr-3 md:pr-0">Date of publication <span className="pl-3 md:pl-6">&#x273A;</span></p>
                    <p className="text-sm m-auto pr-3 md:pr-0">Read</p>
                    <ArrowIcon className="w-[20px] md:m-auto" />
                  </div>

                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>)
  );
}

export function getStaticProps() {
  const pages = getPages();
  const globalData = getGlobalData();

  return { props: { pages, globalData } };
}
