import React from 'react';
import { Card,Row,Col } from 'react-bootstrap';
import { ViserArea } from '../Chart/Viser';
import brandIcon from '../assets/images/iconsBrandBra05.png'
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
                        <Row className='card-row'>
                          <Col md={3} xs={12} className="icon-info-col">
                              <img className='brand-img' src={brandIcon} alt="" />
                              <div>
                              <p className='mb-1'>{item.name.substring(0,30)}</p>
                              <p>{item.email}</p>
                              </div>
                          </Col>
                          <Col xs={12} md={2} className="time-col">
                              <p>A month ago</p>
                          </Col>
                          <Col xs={12} md={7}>
                          <ViserArea />
                          </Col>
                        </Row>
                        
                        
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
      </>
    );
  };

  export default LocationDetail;