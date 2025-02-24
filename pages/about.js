import Layout from '../components/Layout';
import Link from 'next/link';
import { getArticles } from '../utils/mdx-utils';;
import curriculumVitae from '../public/data/personal.json'
import SEO from '../components/SEO';

const publications = curriculumVitae[0].publications.reverse()
const talks = curriculumVitae[0].talks.reverse()
// const conferences = curriculumVitae[0].exhibitions
const clients = curriculumVitae[0].clients.reverse()

export default function About({ pages }) {

  return (
    (<Layout>
      <SEO title="About Francesca" description="My name is Francesca. I am a designer, researcher, and amateur baker. Currently, I work at Södertörn University, Huddinge, Stockholm." />
      <main className="w-full flex-grow text-pretty mb-10">
        <div className="pl-5 pr-5 pt-5 pb-5 md:mt-6">
          <div className="w-full flex flex-wrap">
            <div className="md:w-1/3">
              <img className="border border-slate-950 dark:border-white" src="/uploads/about-portait.jpg"></img>
              <p className="text-xs mt-2">This is me with one of my chickens ❤️</p>
            </div>
            <div className="w-full h-fit md:w-2/3 md:pl-6 flex flex-wrap">
              <div className="w-full pt-6 px-4 md:pt-0">
                <p className="">
                  I am an information designer, researcher, and amateur baker.
                  I research data visualization and data journalism. I have a PhD in Media and Communication Studies from <a href="https://www.sh.se/english/sodertorn-university">Södertörn University</a>, Huddinge, Sweden.<br/><br/>
                  I work as a post-doc at the <a href="https://www.filmuniversitaet.de/">Film University Babelsberg KONRAD WOLF</a>, Potsdam, Germany.
                  I am associated with the <a href="https://mlml.io/m/francesca-morini/">Metalab Harvard & Berlin</a> and with the <a href="https://uclab.fh-potsdam.de/people/francesca-morini/">UCLAB</a> at the University of Applied Sciences Potsdam, Germany.
                </p>
                <div className="w-full m-auto pt-2 mt-2  text-center  border-t border-t-red-300 border-dotted">🥨</div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full block mt-6">
              <div>
                <div>
                  <h3 className="w-full text-red-600 border-b border-b-red-600 dark:text-red-300 dark:border-b-red-300 cursor-pointer">Publications</h3>
                  <div className={`mt-0`}>
                    <table className="text-sm my-4 border-separate border-spacing-3">
                      <tbody>
                        {
                          publications.map((pub, p) => (
                            <tr className="" key={p}>
                              <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted pr-6 align-top text-xs">{pub.year}</td>
                              <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted align-top"><Link href={pub.link} legacyBehavior>{pub.title}</Link></td>
                              <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted align-top text-xs">{pub.publication}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-red-600 dark:text-red-300 dark:border-b-red-300 border-b border-b-red-600 cursor-pointer" onClick={() => toggleList('teaching')}>Teaching and talks</h3>
                  <div className={`mt-0 `}>
                    <table className="text-sm my-4 border-separate border-spacing-3">
                      <tbody>
                        {talks.map((talk, t) => (
                          <tr className="border-b border-b-red-600 dark:border-b-red-300 border-dotted" key={t}>
                            <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted pr-6 align-top text-xs">{talk.year}</td>
                            <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted align-top">{talk.icon}</td>
                            <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted align-top">{talk.title}</td>
                            <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted align-top text-xs">{talk.place}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-red-600 border-b border-b-red-600 dark:text-red-300 dark:border-b-red-300 cursor-pointer">Selected clients</h3>
                  <div className={`transition-all`}>
                    <div className="text-sm w-full my-4">
                      <p>
                        {clients.map((client, c) => (
                          <span className="pr-1" key={c}>{client} &#x26AC;</span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>)
  );
}

export function getStaticProps() {
  const pages = getArticles();

  return { props: { pages } };
}