import GoogleMapReact from "google-map-react";

const Map = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            >

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    // defaults to Seattle
    center: {
        lat: 47.6062,
        long: -122.3321,
    },
    // zoom level 6
    zoom: 6,
}

export default Map
