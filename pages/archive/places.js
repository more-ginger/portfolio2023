import Layout from '../../components/Layout';
// import Map from '../../components/Map';
import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';
import placesData from '../../public/data/places.json'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../components/Map'), {
    ssr: false,
})

export default function Places({ globalData }) {
    let selectedPlace = placesData.features[0].properties.name

    function changeMapCenter(newCenter) {
        selectedPlace = newCenter.properties.name
    }
    // console.log(selectedPlace)

    return (
        <Layout>
            {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
            <main className="w-full h-full">
                <div className="w-full h-full px-6 bg-red-200">
                    <div className="title bg-red-300 md:w-1/2">Title</div>
                    <div className="title bg-red-400 md:w-1/2">In the past years I was lucky enough to travel a lot. Be it for personal reasons or work-related, I compiled a small personal archive of places I love.</div>
                    <div className="container md:flex">
                        <div className="map-container bg-green-300 w-full">
                            <DynamicMap placesData={placesData.features} currentMapCenter={selectedPlace} />
                        </div>
                        <div className="list-container w-full bg-blue-300">
                            {placesData.features.map((place, p) => (
                                <p key={p} onClick={(e) => changeMapCenter(place)}>{place.properties.name}</p>
                            ))}
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