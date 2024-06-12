import DetailPageTable from "./DetailPageTable";
import { Col, Container, Row ,Offcanvas,Tab,Nav, Button } from "react-bootstrap";
import { useState } from "react";
import { CustomButton } from "../form/index";
const Detail=({navlink,detaildata,onclick})=>{

  const [activeKey, setActiveKey] = useState('All'); 
  const handleTabSelect = (key) => {
      setActiveKey(key);
    };
    return(<>
    {detaildata.map((item, index) => (
        <>
      <Row className="row-pad-0 custom-row-pad-0">
            <Col md={1} className="custom-md-1 mt-15">
              <div className="profile">
                <img src={item.profileImg} alt="user profile" />
              </div>
            </Col>
            <Col md={11} className="content pad-0 custom-md-11 mt-10">
              <div className="flex-space-between">
                <div className="d-flex ">
                  <h5 className="name">
                    <span>{item.title}{item.company ? <small> / {item.company}</small>:null} </span>
                  </h5>
                  {item.btnstatus ? (<CustomButton className="btn-status status-active" text={item.btnstatus}/>):null}
                </div>
                <div>
                  <CustomButton className="actionlist-btn" icon={<i class="fa fa-pencil"></i>}/>
                </div>
              </div>
              <div className="flex-Xcenter">
              {item.jobDetails.map((detail, idx) => (
                <div key={idx} className="list-title">
                  <span>{detail.title}:</span><label>{detail.value}</label>
                </div>
              ))}
              </div>
              {item.location ? ( <div className="list-location">
                <span>{item.location}:</span>
                <label><a href="#" target="_blank">{item.locationvalue  }</a></label>
              </div>):null} 
              {item.description ? (
                  <div className="list-description">
                  <span>{item.description}:</span>
                  <div className="mt-1">
                    <p>{item.descriptionvalue}</p>
                  </div>
                </div>
              ):null}

              
             
            
            </Col> 
          </Row>
          <Row className="row-pad-0 mt-10">
            <Col md={1} className="custom-md-1 mt-1 mt-10">
              <div className="profile">
                <img src={item.profileImg} alt="user profile" />
              </div>
            </Col>
            <Col md={11} className="pad-0 mt-1 custom-md-11 mt-10">
              <h5 className="mt-10">{item.name}</h5>
            </Col>
          </Row>
          </>

))}
            <Row className="row-pad-0 mt-1 detail-tab-wrap">
               
        <Tab.Container id="detailTabWrap" className="" activeKey={activeKey} onSelect={handleTabSelect}>
         
            <div  className="box-wrap">
              <Nav variant="pills" className=" d-flex  custom-nav ">
              {navlink.map(link => (
        <Nav.Item key={link.key}>
          <Nav.Link eventKey={link.key}>
            {link.text}
          </Nav.Link>
        </Nav.Item>
      ))}
               
              </Nav>
            </div>
          
              <Tab.Content className="detail-Tab-Pane ">
                <Tab.Pane eventKey="All" >
                      <div className=' mt-20 x-scroll'>
                        
                      <DetailPageTable modelopen={onclick}/>
                      </div>

                </Tab.Pane>
                <Tab.Pane eventKey="Invited">
                <div className=' mt-20 x-scroll'>
                        
                        <DetailPageTable/>
                        </div>
                </Tab.Pane>
                <Tab.Pane eventKey="InterviewSent">
                <div className=' mt-20 x-scroll'>
                        
                        <DetailPageTable/>
                        </div>
                </Tab.Pane>
                <Tab.Pane eventKey="LinkExpireds">   <div className=' mt-20 x-scroll'>
                        
                        <DetailPageTable/>
                        </div></Tab.Pane>
              </Tab.Content>
          
         
        </Tab.Container>
          </Row>
    </>)
}

export default Detail;