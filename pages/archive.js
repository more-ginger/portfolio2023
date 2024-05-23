import Link from 'next/link';
import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Archive({ globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <main className="w-full h-full relative">
        <div className="w-full h-svh px-6">
          <ul className="w-full pt-20 md:pt-10 md:w-1/2 md:m-auto">
            <li className="max-h-[130px]">
              <h1 class="pt-5 md:pt-10 text-6xl">Places</h1>
              <img class=" relative -top-10 w-2/3 md:-left-2 md:w-3/4" src="/uploads/label_archive-places.png" />
            </li>
            <li className="max-h-[130px]">
              <h1 class="pt-5 md:pt-10 text-6xl">Projects</h1>
              <img class="relative -left-5 -top-5  w-2/3 md:-left-5 md:w-3/4" src="/uploads/label_archive-projects.png" />
            </li>
            <li className="max-h-[130px]">
              <h1 class="pt-5 md:pt-10 text-6xl">Read</h1>
              <img class="relative  -left-5 -top-10 w-2/3 md:-left-5 md:w-3/4" src="/uploads/label_archive-read.png" />
            </li>
            <li className="max-h-[130px]">
              <h1 class="pt-5 md:pt-10 text-6xl">Listen</h1>
              <img class="relative -left-5 -top-5  w-2/3 md:-left-5 md:w-3/4" src="/uploads/label_archive-listen.png" />

            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
