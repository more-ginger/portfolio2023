import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';


export default function Places({ globalData }) {
    return (
        <Layout>
            {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
            <main className="w-full h-full">
                <div className="w-full h-full px-6 bg-red-200">
                    <div className="title bg-red-300 md:w-1/2">Title</div>
                    <div className="title bg-red-400 md:w-1/2">In the past years I was lucky enough to travel a lot. Be it for personal reasons or work-related, I compiled a small personal archive of places I love.</div>
                    <div className="container md:flex">
                        <div className="map-container bg-green-300 w-full">
                            Map
                        </div>
                        <div className="list-container w-full bg-blue-300">
                            List
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();

    return { props: { globalData } };
}