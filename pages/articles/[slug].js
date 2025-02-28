import { getGlobalData } from '../../utils/global-data';
import { useRouter } from 'next/router'
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
  
  const router = useRouter()
  
  const parsedDate = frontMatter?.date ? new Date(frontMatter.date) : null;

  const parsedPubDate = parsedDate
    ? `${parsedDate.getDate()} ${globalData.months[parsedDate.getMonth()]} ${parsedDate.getFullYear()}`
    : 'Date not available';


  if (router.isFallback) {
    return <div>Loading...</div>
  }


  console.log(frontMatter)
  return (
    <Layout>
      <SEO title={frontMatter.title} description={frontMatter.paragraphs[1].paragraph} />
        <div className="relative">
          <div className="sticky inline-block top-[100px] pr-3 left-6 back rounded-full border border-black lg:left-10">
            <div className="inline cursor-pointer">
              <div className="flex">
                  <div className="scale-50 rotate-180"><ArrowIcon/></div>
                    <div className="pt-[2px]">
                      <Link className="no-underline inline-block align-middle text-sm" href="/articles">Back</Link>
                    </div>
              </div>
            </div>
          </div>
          <figure className="w-full lg:z-index-40 lg:absolute lg:top-0 lg:left-[-340px] lg:w-fit">
            <div className="lg:fixed">
              <img className='article-header m-auto my-6' src={`/uploads/${frontMatter.ID[0]}.jpg`}></img>
            </div>

          </figure>
          <div>
               <div className="w-full text-center px-4 mt-6 md:text-left">
                  <h5>{parsedPubDate}</h5>
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

    if (!data || !parsedParagraphs) {
      return {
        notFound: true,
      }
    }

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
    fallback: false,
  };
};
