import { data } from 'autoprefixer';
import Layout from '../components/Layout';
import { getPages } from '../utils/mdx-utils';

export default function Index({ pages }) {
  
  const essayPreviews = pages.map((article, a) => {
    return {
      title: article.data.title,
      date: article.data.date,
      number: a + 1,
      filepath: article.filePath
    }
  })

  return (
    <Layout>
      <div>
        <div className="essays-container">
          {essayPreviews.map((preview) => (
            <div key={preview.filepath}>{preview.title}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const pages = getPages();

  return { props: { pages } };
}