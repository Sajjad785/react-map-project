import React from 'react';
import { Card } from 'react-bootstrap';
import './LocDetail.css'

const LocationDetail = (props) => {
    const { title,locData } = props;
    return (
      <>
        <div className='loc-detail-container'>
            <h1>Location {title}</h1>
            <div>
            {locData.map((item, i) => (
                <Card className='loc-detail-card' key={i}>
                    <Card.Body>
                        <p>{item.name}</p>
                        <p>{item.email}</p>
                        <p>{item.body}</p>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
      </>
    );
  };

  export default LocationDetail;