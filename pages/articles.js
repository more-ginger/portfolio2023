import Layout from '../components/Layout';
import CustomLink from '../components/CustomLink';
import { getArticles } from '../utils/mdx-utils';

export default function Index({ pages }) {

  const month = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
  
  const essayPreviews = pages.map((article, a) => {
    const mydate = new Date(article.data.date);
    const parsedDate = `${mydate.getDay()} ${month[mydate.getMonth()]} ${mydate.getFullYear()}`
    return {
      title: article.data.title,
      date: parsedDate,
      id: article.data.ID,
      number: a + 1,
      filepath: article.filePath
    }
  })

  return (
    <Layout>
      <div>
        <div className="essays-container">
          {essayPreviews.map((preview) => (
            <div key={preview.filepath}>
              <CustomLink 
                as={`/articles/${preview.filepath.replace(/\.md?$/, '')}`}
                href={`/articles/[slug]`}
              >
              <div>
                <img className='rounded-full w-[300px] h-[300px]' src={`/uploads/${preview.id}.jpg`}></img>
              </div>
              <div>{preview.date}</div>
              <div>{preview.title}</div>
              <div>#3 – Research journal</div>
              </CustomLink>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const pages = getArticles();

  return { props: { pages } };
}