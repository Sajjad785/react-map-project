
import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './MapValue';
import { Container } from 'react-bootstrap';
import LocationDetail from '../Details/LocDetail';
const locations = [
  {
    name: "1",
    location: {
      lat: 41.3954,
      lng: 2.162
    },
  },
  {
    name: "2",
    location: {
      lat: 41.3617,
      lng: 2.1649
    },
  },
  {
    name: "3",
    location: {
      lat: 41.3773,
      lng: 2.1585
    },
  },
  {
    name: "4",
    location: {
      lat: 41.3797,
      lng: 2.1682
    },
  },
  {
    name: "5",
    location: {
      lat: 41.4055,
      lng: 2.1915
    },
  }
];

const MapContainer = (props) => {
  const [center, setCenter] = useState(locations[0].location);
  const [zoom, setZoom] = useState(11);
  const [location, setLocation] = useState(1);
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    fetchData(location);
  }, [location]);
  const fetchData = async (location) => {
    console.log(location)
    let response = await (
      await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${location}`)
    ).json();
    setLocationData(response);
    console.log(response)
  };
  const ClickedMarker = (val) => {
    setLocation(val)
  }
  return (
    <Container>
      <div style={{ height: '40vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {
            locations.map((item, i) => {
              return (
                <Marker key={i} lat={item.location.lat} lng={item.location.lng} text={item.name} ClickedMarker={ClickedMarker} />
              )
            })
          }


        </GoogleMapReact>
      </div>
      {/* <p>
        {location}
      </p>
      <div>
      {todo.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div> */}
      <LocationDetail title={location} locData={locationData} />
    </Container>
  );
}

export default MapContainer;