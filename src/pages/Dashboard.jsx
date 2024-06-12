import { Row, Col } from "react-bootstrap";
// import  DoughnutChart from '../../components/graph/DoughnutChart'
import HeaderListing from "../components/common/HeaderListing";
import Card from "../components/dashboard/Card";
import JobAnalytics from "../components/dashboard/JobAnalytics";
import { useState } from "react";
function Dashboard() {
   const headetext = "Dashboard";

   const textbtn = "Customize Company Branding";
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (<>
      <Row className="row-pad-0">
         <Col md={12} className="y-scroll ">
            <HeaderListing headertext={headetext} onclick={handleShow} variant="outline-primary"  />
            <Row className="row-pad-0 mt-20  border-radius-5 dashoard-analytics">
            <JobAnalytics />
            </Row>
            <Row className="mt-10 d-flex ">
               <Card name="Jira 1" />
               <Card name="Jira 2" />
               <Card name="Jira 3" />
            </Row>
         </Col>
      </Row>
      
   </>)
}
export default Dashboard;

