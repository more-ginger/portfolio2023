import { getGlobalData } from '../../utils/global-data';
import {
  getArticleBySlug,
  articleFilesPaths,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
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

export default function ArchivePage({ source, frontMatter }) {
  console.log(source)
  return (
    <Layout>
          <article className="[&>*]:my-10 mx-6">
            <h1>{frontMatter.title}</h1>

            {source.map((paragraph, p) => (
              <MDXRemote {...paragraph} key={p} components={components} />        
            ))}
          </article>
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
