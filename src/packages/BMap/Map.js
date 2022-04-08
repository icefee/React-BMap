import React, { useMemo, useEffect, createContext, useState } from "react";
import './Map.css';
import * as map from './lib/baidu';

export const MapContext = createContext(null)

export default function Map({ ak, center, zoom, onClick, children }) {

    const [mapIns, setMapIns] = useState(null)
    const mapId = useMemo(() => 'map-' + Date.now(), [])


    const initMap = async () => {
        setMapIns(await map.init(mapId, {
            ak,
            ...center,
            zoom
        }))
    }

    useEffect(() => {
        initMap()
    }, [])

    const mapClick = ({ point }) => {
        onClick && onClick(point)
    }

    useEffect(() => {
        if (mapIns) {
            map[mapClick ? 'bindEvent' : 'removeEvent']('click', null, mapClick)
        }
        return () => {
            if (mapIns) {
                map.removeEvent('click', null, mapClick)
            }
        }
    }, [mapIns, mapClick])

    return (
        <MapContext.Provider value={mapIns}>
            <div className="map" id={mapId} />
            { mapIns && children }
        </MapContext.Provider>
    )
}
