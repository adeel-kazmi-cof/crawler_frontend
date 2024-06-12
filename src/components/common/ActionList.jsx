import { Offcanvas, Row,Container, Col } from "react-bootstrap";
import { CustomButton } from "../form";
import { crossicon } from "../../helper/Icons/Icon";
import '../../css/actionlist.css';

const ActionList = (props) => {
    const { list, handleClose, headertext,onclick } = props;
    console.log(list.icon)
 
    return (
        <Offcanvas show={true} onHide={handleClose} placement="end" className="bg-white custom-offcanvas" style={{ width: "30%" }}>
            
            
            <Container fluid className="row-pad-0 pad-0 bg-white pad-20">
      <Offcanvas.Header className="model-header actionlist-header ">
            <Offcanvas.Title><span className="svg "></span>{headertext}</Offcanvas.Title> 
           <div className="text-end"><CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} /></div> 
          </Offcanvas.Header>
            <Col md={12} className=" mt-20">
    
         
                

          
              
                    <ul className="nav-stacked">
                        {list.map((fields, index) => (
                            <li key={index} onClick={()=>onclick(fields.props)}><a href="#"><span>{fields.icon}</span><span>{fields.text}</span></a></li>
                        ))}
                    </ul>
                    </Col>
                </Container>
      
        </Offcanvas>
    );
}

export default ActionList;
