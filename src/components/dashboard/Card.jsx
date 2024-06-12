import { exchange, filter } from "../../helper/Icons/Icon";
import { Row, Col } from "react-bootstrap";
import DoughnutChart from "../graph/DoughnutChart";
import React, { useState } from 'react';

function Card({ name }) {
  const [expanded, setExpanded] = useState(false);

  const expandCard = () => {
    setExpanded(!expanded);
  };
  return (<>
    <div className={`${4} ${expanded ? 'col-md-6' : 'col-md-4'}`} >
      <div className="card-wrap bg-white">
        <Row className="card-heading row-pad-0">
          <h4 className="widget-h"><span>{name}</span>
            <div className="d-flex" ><span className="filter ">{filter}</span><span className="expand-card" onClick={() => expandCard()}>{exchange}</span></div></h4>

        </Row>
        <div className="card-body">
          <DoughnutChart />
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center align-items-center clr-filter-date  mt-10 mb-10">
            <b>Yesterday</b> <i class="fa fa-calendar"> </i><small>03/06/2024-</small><i class="fa fa-calendar"></i><small>03/06/2024</small>
          </div>
        </div>
      </div>
    </div>

  </>)
}

export default Card;