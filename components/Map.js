"use client";
import React, { useRef, useEffect } from "react";
import L from '../node_modules/leaflet';
import tileLayer from '../node_modules/leaflet-providers'
import "leaflet/dist/leaflet.css";


export default function Map({ placesData }) {
    const mapContainer = useRef();

    // flipping coords and bringing only necessary props
    const dataWithSanitizedCoords = placesData.map((d, i) => {
        const markerCoords = d.geometry.coordinates.reverse()
        const name = d.properties.name
        return {
            markerCoords,
            name
        }
    })

    useEffect(() => {
        const markerIcon = L.icon({
            iconUrl: '/uploads/marker.svg',
            iconSize: [15, 15], // size of the icon
            iconAnchor: [7.5, 7.5], // point of the icon which will correspond to marker's location
            popupAnchor: [0, -5] // point from which the popup should open relative to the iconAnchor
        });

        console.log('data', placesData)
        var container = L.DomUtil.get("world-map");

        if (container != null) {
            container._leaflet_id = null;
        }

        let map = L.map('world-map', {
            worldCopyJump: false,
            zoomControl: false
        });

        console.log(dataWithSanitizedCoords[0])
        L.tileLayer.provider('Esri.WorldTopoMap').addTo(map);

        dataWithSanitizedCoords.forEach((d, i) => {
            let popUp = L.popup()
                .setLatLng(d.markerCoords)
                .setContent(`${d.name}`)

            L.marker(d.markerCoords, { icon: markerIcon }).addTo(map)
                .bindPopup(popUp)
        })

        map.setView(dataWithSanitizedCoords[0].markerCoords, 15);
    })

    return (
        <div className="w-full h-[500px] bg-red-300">
            <div ref={mapContainer} id="world-map" className="h-[500px] bg-yellow-300"></div>
        </div>
    )
}