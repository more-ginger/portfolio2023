"use client";
import React, { useRef, useEffect } from "react";
import L from '../node_modules/leaflet';
import tileLayer from '../node_modules/leaflet-providers'
import { closestLayer } from '../node_modules/leaflet-geometryutil'
import "leaflet/dist/leaflet.css";


export default function Map({ placesData, currentMapCenter }) {
    const mapContainer = useRef();

    // I need this to have the map as a global variable
    const globalMap = useRef();
    const allMarkers = useRef([])

    useEffect(() => {
        const markerIcon = L.icon({
            iconUrl: '/uploads/marker.svg',
            iconSize: [15, 15], // size of the icon
            iconAnchor: [7.5, 7.5], // point of the icon which will correspond to marker's location
            popupAnchor: [0, -5] // point from which the popup should open relative to the iconAnchor
        });

        var container = L.DomUtil.get("world-map");

        if (container != null) {
            container._leaflet_id = null;
        }

        let map = L.map('world-map', {
            // worldCopyJump: true,
            zoomControl: true,
            minZoom: 12,
            maxZoom: 20
        });

        // Update the ref current to add the map
        globalMap.current = map

        L.tileLayer.provider('CartoDB.PositronNoLabels').addTo(map);

        // group for markers
        let markers = L.layerGroup()

        placesData.forEach((d, i) => {
            let popUp = L.popup()
                .setLatLng(d.geometry.coordinates)
                .setContent(`${d.properties.name}`)

            let marker = L.marker(d.geometry.coordinates, { icon: markerIcon }).addTo(map)
                .bindPopup(popUp)

            markers.addLayer(marker)
        })

        // pass back to ref
        allMarkers.current = markers.getLayers()

        map.setView(placesData[0].geometry.coordinates, 15);
    }, [])

    // only runs if "currentMapCenter" changes
    useEffect(() => {
        // checks if the map already exists
        if (globalMap.current !== undefined) {
            let map = globalMap.current

            // filter the array for the first element in the data
            let currentCenterFeature = placesData.filter((place) => place.properties.name === currentMapCenter)
            // const selectedLayer = index.nearestLayer(currentCenterFeature[0].geometry.coordinates, 1, 500)
            const closestMarker = closestLayer(map, allMarkers.current, currentCenterFeature[0].geometry.coordinates)
            // pan only works on locations close to each other
            map.flyTo(currentCenterFeature[0].geometry.coordinates, 12);
            closestMarker.layer.togglePopup()
        }

    }, [currentMapCenter])

    return (
        <div className="w-full h-full bg-red-300">
            <div ref={mapContainer} id="world-map" className="h-[500px] bg-yellow-300"></div>
        </div>
    )
}