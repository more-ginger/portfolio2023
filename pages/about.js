import Layout from '../components/Layout';
import Link from 'next/link';
import { getPages } from '../utils/mdx-utils';
import { useState, useRef, useEffect } from 'react';
import curriculumVitae from '../public/data/personal.json'
import SEO from '../components/SEO';

const INITIAL_LIST_NAME = ''

const publications = curriculumVitae[0].publications.reverse()
const talks = curriculumVitae[0].talks.reverse()
// const conferences = curriculumVitae[0].exhibitions
const clients = curriculumVitae[0].clients.reverse()

export default function About({ pages }) {
  const [showList, setShowList] = useState(false);
  const [listName, setListName] = useState(INITIAL_LIST_NAME);
  const prevListName = useRef(INITIAL_LIST_NAME)

  useEffect(() => {
    prevListName.current = listName;
  }, [listName]);

  function toggleList(list) {
    setShowList(!showList)

    if (showList === true && list !== '') {
      setShowList(showList)
    }

    if (showList === true && list === prevListName.current) {
      setShowList(false)
    }

    setListName(list)
  }

  return (
    <Layout>
      <SEO title="About Francesca" description="My name is Francesca. I am a designer, researcher, and amateur baker. Currently, I work at Södertörn University, Huddinge, Stockholm." />
      <main className="w-full flex-grow text-pretty">
        <div className="pl-5 pr-5 pt-5 pb-5 md:mt-6">
          <div className="w-full flex flex-wrap">
            <div className="md:w-1/2">
              <img className="border border-slate-950 dark:border-white" src="/uploads/about-portait.jpg"></img>
              <p className="text-sm">This is me with one of my chickens.</p>
            </div>
            <div className="w-full h-fit md:w-1/2 md:pl-6 flex flex-wrap">
              <div className="w-full pt-6 md:pt-0">
                <p className="md:text-2xl">
                  My name is Francesca. I am a designer, researcher, and amateur baker.
                  I research data visualization and data journalism. Currently, I work at Södertörn University, Huddinge, Stockholm.
                  I am associated with the UCLAB, at the University of Applied Sciences Potsdam, Brandenburg.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full block mt-3">
              <h3 className="pt-6 pb-2">Full CV:</h3>
              <div>
                <div>
                  <h3 className="w-full text-red-600 border-b border-b-red-600 dark:text-red-300 dark:border-b-red-300 cursor-pointer" onClick={() => toggleList('publications')}>Publications<span className="pl-1">{showList && listName === 'publications' ? "-" : "+"}</span></h3>
                  <div className={`mt-0 ${showList && listName === 'publications' ? "opacity-1" : "hidden opacity-0 h-0"}`}>
                    <table className="text-sm my-4 border-separate border-spacing-3">
                      <tbody>
                        {
                          publications.map((pub, p) => (
                            <tr className="" key={p}>
                              <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted pr-6 align-top text-xs">{pub.year}</td>
                              <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted align-top"><Link href={pub.link}>{pub.title}</Link></td>
                              <td className="border-t border-t-red-600 dark:border-t-red-300 border-dotted align-top text-xs">{pub.publication}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-red-600 dark:text-red-300 dark:border-b-red-300 border-b border-b-red-600 cursor-pointer" onClick={() => toggleList('teaching')}>Teaching and talks<span className="pl-1">{showList && listName == 'teaching' ? "-" : "+"}</span></h3>
                  <div className={`mt-0 ${showList && listName === 'teaching' ? "opacity-1" : "hidden opacity-0 h-0"}`}>
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
                {/* <div>
                <h3 className="text-red-600 border-b border-b-red-600 cursor-pointer" onClick={() => toggleList('conf')}>Conferences and exhibitions<span className="pl-1">+</span></h3>
                <div className={`mt-0 ${showList && listName === 'conf' ? "visible" : "hidden opacity-0 h-0"}`}>
                  <table className="text-sm w-full my-4">
                    <tbody>
                      {
                        conferences.map((ex, e) => (
                          <tr className="border-b border-b-red-600 border-dotted" key={e}>
                            <td className="pr-6 align-top">{ex.year}</td>
                            <td className="pr-6 align-top">{ex.icon}</td>
                            <td className="pr-6 align-top">{ex.title}</td>
                            <td className="align-top">{ex.place}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div> */}
                <div>
                  <h3 className="text-red-600 border-b border-b-red-600 dark:text-red-300 dark:border-b-red-300 cursor-pointer" onClick={() => toggleList('clients')}>Selected clients<span className="pl-1">{showList && listName === 'clients' ? "-" : "+"}</span></h3>
                  <div className={`transition-all ${showList && listName === 'clients' ? "h-fit opacity-1" : "h-0 opacity-0"}`}>
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
    </Layout>
  );
}

export function getStaticProps() {
  const pages = getPages();

  return { props: { pages } };
}