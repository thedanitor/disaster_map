import { Icon } from '@iconify/react';
import closeCircle from '@iconify-icons/mdi/close-circle';



const LocationInfoBox = ({ info, closeInfoBox, setCloseInfoBox }) => {
    let latitude = info.lat;
    let longitude = info.lng;
    // change latitude to S or N
    if (latitude < 0) {
        latitude = latitude * -1 + " °S";
    } else {
        latitude = latitude + " °N";
    }
    // change longitude to W or E
    if (longitude < 0) {
        longitude = longitude * -1 + " °W";
    } else {
        longitude = longitude + " °E";
    }

    const toggleBox = () => {
        closeInfoBox ? setCloseInfoBox(false) : setCloseInfoBox(true);
    }

    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>ID: <strong>{ info.id }</strong></li>
                <li>TITLE: <strong>{ info.title }</strong></li>
                <li>LATITUDE: <strong>{ latitude }</strong></li>
                <li>LONGITUDE: <strong>{ longitude }</strong></li>
                <li><a href={info.learn} target="_blank" rel="noreferrer">Learn More</a></li>
            </ul>
            <Icon icon={closeCircle} onClick={toggleBox} className="close-icon" />
        </div>
    )
}

export default LocationInfoBox
