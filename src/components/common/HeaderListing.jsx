import { Button, Col,Row } from "react-bootstrap";

const HeaderListing=({headertext,btnicon,textbtn,onclick,variant})=>{
    return(<>
    <Row className="header-listing row-pad-0">
    <Col md={6} className="pad-0"><h4>{headertext}</h4></Col>

    {textbtn && btnicon !== undefined && (
  <Col md={6} className="text-end pad-0">
    <Button onClick={onclick} variant={variant}>
      {btnicon && <span>{btnicon}</span>}
      {textbtn}
    </Button>
  </Col>
)}

    </Row>
    
    </>)
    
}

export default HeaderListing;