import Layout from '../components/Layout';
import { getPages } from '../utils/mdx-utils';

export default function About({ pages }) {
  return (
    <Layout>
      {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
      <main className="w-full flex-grow pb-48">
        <div className="pl-5 pr-5 pt-5 pb-5">
          <h1>
            About
          </h1>
        </div>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const pages = getPages();

  return { props: { pages } };
}