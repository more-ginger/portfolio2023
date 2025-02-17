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
      <div className="w-full">
        <div class="p-6">
          <h3>
            On this page, I share personal thoughts about my work, updates with my research, 
            and occasionally personal content.
            </h3>
        </div>
        <div className="essays-container w-full py-6">
          {essayPreviews.map((preview) => (
            <div key={preview.filepath} className="w-full overflow-x-hidden">
              <CustomLink 
                as={`/articles/${preview.filepath.replace(/\.md?$/, '')}`}
                href={`/articles/[slug]`}
              >
              <div className="flex w-full h-[300px] relative">
              <div className="absolute w-full left-[-150px] md:relative md:left-0">
                <img className='w-[300px] h-[300px] rounded-full border border-black md:m-auto' src={`/uploads/${preview.id}.jpg`}></img>
              </div>
              <div className="w-full ml-[160px] relative md:ml-2">
                <div className="absolute top-[80px]">
                  <h5 className="text-xs rounded-full border border-black px-2 inline-block">{preview.date}</h5>
                  <h3 className="text-3xl my-2">{preview.title}</h3>
                  <h5 className="text-xs rounded-full border border-black px-2 inline-block">#3 – Research journal</h5>
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

  return { props: { pages } };
}