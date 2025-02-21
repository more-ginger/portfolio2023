import { getGlobalData } from '../../utils/global-data';
import Link from 'next/link';
import {
  getArticleBySlug,
  articleFilesPaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Layout from '../../components/Layout';
import ArrowIcon from '../../components/ArrowIcon';
import SEO from '../../components/SEO';

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Head,
};

export default function ArchivePage({ source, frontMatter, globalData }) {
  console.log(globalData)
  const parsedDate = new Date(frontMatter.date);
  const parsedPubDate = `${parsedDate.getDay()} ${globalData.months[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`
  return (
    <Layout>
        <div className="relative">
          <div className="sticky top-20 mx-4">
            <div className="back border border-black inline-block pr-3 rounded-full cursor-pointer">
              <div className="flex">
                  <div className="scale-50 rotate-180"><ArrowIcon/></div>
                    <div className="pt-[2px]">
                      <Link className="no-underline inline-block align-middle text-sm" href="/articles">Back</Link>
                    </div>
              </div>
            </div>
          </div>
          <figure className="w-full md:z-index-40 md:absolute md:top-0 md:left-[-340px] md:w-fit">
            <div className="md:fixed">
              <img className='article-header m-auto my-6  ' src={`/uploads/${frontMatter.ID[0]}.jpg`}></img>
            </div>

          </figure>
          <div>
               <div className="w-full text-center mx-4 mt-6 md:text-left">
                  <h5 className="label">{parsedPubDate}</h5>
                </div>
              </div>
          <article className="blog-article">
              <h1>{frontMatter.title}</h1>
              {source.map((paragraph, p) => (
                <MDXRemote {...paragraph} key={p} components={components} />        
              ))}
            </article>
        </div>

    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  // Remember: the console logs in the terminal, bc props are server-side 
  const globalData = getGlobalData();
  const { parsedParagraphs, data } = await getArticleBySlug(params.slug);

  return {
    props: {
      globalData,
      source: parsedParagraphs,
      frontMatter: data
    },
  };
};

export const getStaticPaths = async () => {
  const paths = articleFilesPaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};
