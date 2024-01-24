import { getGlobalData } from '../../utils/global-data';
import {
  getPageBySlug,
  pageFilePaths,
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

export default function ArchivePage({
  frontMatter,
}) {

  return (
    <Layout>
      <article className="md:px-0 mt-10 px-4 md:px-0">
        <main>
          <div className="pl-5 pr-5 pt-5 pb-5">
            <h1 className="text-3xl border-b">
              {frontMatter.title}
            </h1>
          </div>
          <div className="pl-5 pr-5 text-base">
            {frontMatter.paragraphs.map((par, p) => (
              <div key={par.paragraph}>
                <p className="pb-10">{par.paragraph}</p>
              </div>
            ))}
          </div>
        </main>
      </article>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPageBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data
    },
  };
};

export const getStaticPaths = async () => {
  const paths = pageFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
