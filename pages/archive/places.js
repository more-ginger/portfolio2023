import Layout from '../../components/Layout';
// import Map from '../../components/Map';
import { useState, useEffect, useRef } from "react";

import SEO from '../../components/SEO';
import { getGlobalData } from '../../utils/global-data';
import placesData from '../../public/data/places.json'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../components/Map'), {
    ssr: false,
})

export default function Places({ globalData }) {
    const [selectedPlace, setPlace] = useState(placesData.features[0].properties.name);
    const [areDataClean, setDataClean] = useState(false)

    // the function only runs once, on first render
    useEffect(() => {
        placesData.features.forEach((d) => {
            d.geometry.coordinates.reverse()
        })

        setDataClean(true)
        console.log(areDataClean)
    }, [])

    function changeMapCenter(newCenter) {
        setPlace(newCenter.properties.name)
    }

    return (
        <Layout>
            {/* <SEO title={globalData.name} description={globalData.blogTitle} /> */}
            <main className="w-full h-3/4">
                <div className="w-full h-full px-6">
                    <div className="title md:w-1/2"><img className="w-1/3 ml-[-10px]" src="/uploads/label_archive-places-no-icon.png" /></div>
                    <div className="title md:w-1/2 pb-2">In the past years I was lucky enough to travel a lot. Be it for personal reasons or work-related, I compiled a small personal archive of places I love.</div>
                    {areDataClean && <div className="container md:flex h-3/4 border-b-2 border-red-500">
                        <div className="map-container w-full md:h-full h-2/3">
                            <DynamicMap placesData={placesData.features} currentMapCenter={selectedPlace} />
                        </div>
                        <div className="list-container w-full pt-2 cursor-pointer overflow-scroll md:h-full h-1/3">
                            {placesData.features.map((place, p) => (
                                <div key={p} onClick={(e) => changeMapCenter(place)} className="p-1 w-full border-b border-black border-dotted">
                                    <div className="table w-full">
                                        <p className="text-xs">{place.properties.name}</p>
                                        <span className="text-xs table-cell align-middle text-right pr-1">{place.geometry.coordinates[0]}, {place.geometry.coordinates[1]}</span>
                                    </div>
                                    <div>
                                        {selectedPlace === place.properties.name && <p className="text-xs pt-2">{place.properties.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>}
                </div>
            </main>
        </Layout >
    );
}

export function getStaticProps() {
    const globalData = getGlobalData();
    return { props: { globalData } };
}