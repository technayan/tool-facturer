import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './BusinessSummary.css'

const BusinessSummery = () => {
    return (
        <div className='business-summary' id='business-summary'>
            <Container>
                <Row>
                    <div className="col-md-3">
                        <div className="summery-box px-md-3 text-center">
                            <i class="bi bi-calendar-date icon text-dark"></i>
                            <h3 className='summary-number fw-bold'>10</h3>
                            <p className='summary-name fw-bold'>Years of Production</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="summery-box px-md-3 text-center">
                            <i class="bi bi-globe icon text-dark"></i>
                            <h3 className='summary-number fw-bold'>70</h3>
                            <p className='summary-name fw-bold'>Exported Countries</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="summery-box px-md-3 text-center">
                            <i class="bi bi-people icon text-dark"></i>
                            <h3 className='summary-number fw-bold'>60</h3>
                            <p className='summary-name fw-bold'>Long-Term Partners</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="summery-box px-md-3 text-center">
                            <i class="bi bi-chat-left-heart icon text-dark"></i>
                            <h3 className='summary-number fw-bold'>300</h3>
                            <p className='summary-name fw-bold'>Positive Reviews</p>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default BusinessSummery;