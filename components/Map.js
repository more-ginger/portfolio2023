"use client";
import React, { useRef, useEffect } from "react";
import L from '../node_modules/leaflet';
import tileLayer from '../node_modules/leaflet-providers'
import "leaflet/dist/leaflet.css";


export default function Map() {
    // let map = leaflet.map('map').setView([51.505, -0.09], 13);
    const mapContainer = useRef();

    useEffect(() => {
        // console.log(mapContainer.current)
        // setTimeout(function () { 

        //  }, 400);
        if (mapContainer.current) {
            // console.log(mapContainer.current.firstChild)
            let map = L.map('world-map', {
                continuousWorld: true,
                worldCopyJump: false,
                zoomControl: false
            });

            // L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            //     attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            // });

            L.tileLayer.provider('Esri.WorldTopoMap').addTo(map);

            map.setView([61.207174, 16.6801911], 15);
        }
    })

    return (
        <div className="w-full h-[500px] bg-red-300">
            <div ref={mapContainer} id="world-map" className="h-[500px] bg-yellow-300"></div>
        </div>
    )
}