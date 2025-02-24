import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Layout from '../../components/Layout';
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

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {

  const yearOfProject = new Date(frontMatter.date).getFullYear()

  return (
    (<Layout>
      <SEO title={`${frontMatter.title} – Francesca Morini`} description={frontMatter.description} />
      <article className="md:px-0 mt-10 px-4 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white mb-10">
            {frontMatter.title}
          </h1>
          {frontMatter.description && (
            <p className="text-xl italic mb-6">{frontMatter.description}</p>
          )}
          {frontMatter.link && (<div className="mb-10 mt-10">
            <h6 className="uppercase text-sm border-b md:mr-10 text-sm">Link:</h6>
            <Link href={frontMatter.link} legacyBehavior>
              <div className="inline-flex relative cursor-pointer text-sm leading-none">
                <a className="inline-block align-middle uppercase">Go to project</a>
                {/* <ArrowIcon className="h-[18px] inline-block align-middle" /> */}
              </div>
            </Link>
          </div>)}
          <div className="mb-10 mt-10 md:grid md:grid-cols-2">
            <div className="md:mr-10 md:mb-0 mb-10 text-sm">
              <h6 className="uppercase border-b">Team and partners:</h6>
              {frontMatter.authors && (
                <div className="p-0">{frontMatter.authors.map((author, a) => (
                  <p className="inline flex-1 mr-1" key={a}>{author}{a !== frontMatter.authors.length - 1 ? ',' : ''}</p>
                ))}</div>
              )}
            </div>
            <div className="md:mr-10 text-sm">
              <h6 className="uppercase border-b">Year:</h6>
              <p>{yearOfProject}</p>
            </div>
          </div>
          {/* <img className="mt-4" src={frontMatter.himage} /> */}
        </header>
        <main>
          <article className="mt-10 mb-10 pb-10 border-b dark:prose-dark w-full text-base [&>p]:mt-10 [&>p>img]:border [&>h3]:text-2xl [&>h3]:mt-10 [&>h3]:border-t [&>h3]:pt-6">
            <MDXRemote {...source} components={components} />
          </article>
        </main>
        <div className="grid mb-10 md:grid-cols-2 lg:-mx-24 mt-12">
          {prevPost && (
            <Link href={`/projects/${prevPost.slug}`} legacyBehavior>
              <div className="cursor-pointer float-left">
                <a className="no-underline py-8 px-10 text-center md:text-right backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition flex flex-col">
                  <ArrowIcon className="w-[20px] transform rotate-180 mx-auto md:mr-0 mt-auto" />
                  <p className="text-base uppercase text-gray-500 dark:text-white dark:opacity-60">
                    Previous
                  </p>
                  <h4 className="text-gray-700 dark:text-white">
                    {prevPost.title}
                  </h4>
                </a>
              </div>
            </Link>
          )}
          {nextPost && (
            <Link href={`/projects/${nextPost.slug}`} legacyBehavior>
              <div className="cursor-pointer">
                <a className="no-underline py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition flex flex-col">
                  <ArrowIcon className="w-[20px] mt-auto mx-auto md:ml-0" />
                  <p className="uppercase text-base text-gray-500 dark:text-white dark:opacity-60">
                    Next
                  </p>
                  <h4 className="text-gray-700 dark:text-white">
                    {nextPost.title}
                  </h4>
                </a>
              </div>
            </Link>
          )}
        </div>
      </article>
    </Layout>)
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
