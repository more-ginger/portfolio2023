import Layout from '../components/Layout';
import CustomLink from '../components/CustomLink';
import { getArticles } from '../utils/mdx-utils';
import { getGlobalData } from '../utils/global-data';

export default function Index({ pages, globalData }) {
  
  const essayPreviews = pages.map((article, a) => {
    const mydate = new Date(article.data.date);
    const parsedDate = `${mydate.getDay()} ${globalData.months[mydate.getMonth()]} ${mydate.getFullYear()}`
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
      <div className="w-full">
        <div className="p-6 md:flex">
          <div className="mx-6 border-l border-black md:w-1/3">
            <img src={`/uploads/journal.png`}/>
          </div>
          <div className="mx-6 mt-10 md:w-2/3 md:ml-4">
            <h1>Work journal</h1>
            <h3>
              On this page, I share personal thoughts about my work and updates about my research.
            </h3>
          </div>
        </div>
        <div className="essays-container w-full py-6">
          {essayPreviews.map((preview) => (
            <div key={preview.filepath} className="w-full overflow-x-hidden group">
              <CustomLink 
                as={`/articles/${preview.filepath.replace(/\.md?$/, '')}`}
                href={`/articles/[slug]`}
              >
              <div className="flex w-full h-[300px] relative">
              <div className="absolute min-w-[300px] left-[-150px] md:relative md:left-0 md:group-hover:left-2 transition-all">
                <img className='article-header' src={`/uploads/${preview.id}.jpg`}></img>
              </div>
              <div className="w-full ml-[160px] relative md:ml-5">
                <div className="absolute top-[80px]">
                  <h5 className="label">{preview.date}</h5>
                  <h3 className="text-3xl my-2">{preview.title}</h3>
                  <h5 className="label">#3 – Research journal</h5>
                </div>
              </div>
              </div>
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
  const globalData = getGlobalData();

  return { 
    props: { pages, globalData },
    
  };
}