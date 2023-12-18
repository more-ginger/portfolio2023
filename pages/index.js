import Layout from '../components/Layout';
import { getPages } from '../utils/mdx-utils';

export default function Index({ pages }) {
  // console.log(pages[0])
  const initialEssay = pages.filter((page) => {
    const ids = page.data.ID
    ids.find((id) => id === 'initial-essay')
    return ids.includes('initial-essay')
  })

  return (
    <Layout>
      {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
      <main className="w-full flex-grow pb-48">
        <div className="pl-5 pr-5 pt-5 pb-5">
          <h1>
            {initialEssay[0].data.title}
          </h1>
        </div>
        <div className="pl-5 pr-5 text-base">
          {initialEssay[0].data.paragraphs.map((par, p) => (
            <div key={par.paragraph}>
              <p className="pb-10">{par.paragraph}</p>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const pages = getPages();

  return { props: { pages } };
}