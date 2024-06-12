import { useState } from 'react';
import { CustomButton, InputField, Label ,Checkbox, Switch} from '../form';
import { attachment ,sms,email,users,interviewbilling,JobActive} from '../../helper/Icons/Icon';
import { Row,Col,Table, ProgressBar,Nav,Tab } from 'react-bootstrap';
import UpdateCardInformation from './UpdateCardInformation';


const PlanOverview=()=>{
  const [activeTab, setActiveTab] = useState('tab1');
    const [ShowCardInformation, SetCardInformation] = useState(false);

    const handleTabSelect = (tab) => {
      setActiveTab(tab);
    };
    const HandelModel=()=>{
        SetCardInformation(!ShowCardInformation)

    }
    return(
    <>
   <Tab.Container activeKey={activeTab} onSelect={handleTabSelect} className="">
        <Col md={2} className=" IntegrationsSetting-tab pad-0">
          <div className="template-wrap-nav">

        
          <Nav variant="pills" className="flex-column pad-20 bg-white">
            <Nav.Item className='mb-10'>
              <Nav.Link eventKey="tab1"> Plan Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mt-15">
              <Nav.Link eventKey="tab2"> Billing History</Nav.Link>
            </Nav.Item>
          
          </Nav>
          </div>
        </Col>
        <Col sm={10} className='bg-ligte-gray'>
          <Tab.Content className=''>
            <Tab.Pane eventKey="tab1">
            <Row className="row-pad-0  wrap-billing-plan">
                <Col md={12} className='bg-white radius-7 '>
    <Col md={12} className="d-flex justify-content-between  mt-10 pad-0 mb-10 " >
  
    <h4>[Company Name] - [Package Name]</h4>
<CustomButton text="Upgrade Plan "   className="custom-btn-primary"/>
    </Col>       
   <Col md={12} className='billing-plan-card mb-10'>
    <div className="billing-wrap-p">
        <p >
        Your Free trial of Growth plan ends in 2 days. You currently have 1 <a href="http://localhost:3000/integration" target='-blank'>user</a> on your account who have received a total of 2 responses.

        </p>

        <p  >
            <label>Period:</label> 25 Oct - 25 Nov
        </p>
  
      <div className='d-flex billing-Content'>
        <div className='title'>
            <h5>{interviewbilling}Interviews: <span>5</span></h5>
        </div>
        <div className='billing-box'>
            <span>Allowed Interviews: 20 </span>
        </div>
      </div>
      <div className='d-flex billing-Content'>
        <div className='title'>
            <h5>{JobActive}Jobs: <span>2</span></h5>
        </div>
        <div className='billing-box'>
            <span>Allowed Jobs: 20 </span>
        </div>
      </div>
     
      <div className='d-flex billing-Content'>
        <div className='title'>
            <h5>{users}Users:<span> 2</span></h5>
        </div>
        <div className='billing-box'>
            <span>Allowed Users: 3 </span>
        </div>
      </div>
      <div className='d-flex billing-Content'>
        <div className='title'>
            <h5>{email}Email Credits:<span>100</span></h5>
        </div>
        <div className='billing-box'>
            <span>Allowed Credits: 1000</span>
        </div>
      </div>
      <div className='d-flex billing-Content'>
        <div className='title'>
            <h5>{sms}SMS Credits:<span>200</span></h5>
        </div>
        <div className='billing-box'>
            <span>Allowed Credits: 1000 </span>
        </div>
      </div>
    </div>
  </Col>
  </Col>
  <Col md={12} className="bg-white radius-7 mt-20">
  <h4 className='mt-10'>Amount Breakdown</h4>
    <Table className='mb-10'>
        <thead>
            <tr>
            <td>Item</td>
            <td>Amount</td>
            <td>Price</td>
     
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Users</td>
            <td>2</td>
            <td>$22</td>
            </tr>
            <tr>
            <td>Credits (Plan)</td>
            <td>50</td>
            <td></td>
            </tr>
            <tr>
            <td>Credits (Add-on)</td>
            <td>50<a href="#">+ Add More</a></td>
            <td>$2</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
               <td>Monthly Total:
                </td> 
                <td className="text-end">ggggg</td>
                </tr>


            </tfoot>
              
            
      
    </Table>
  </Col>
  <Col md={12} className="bg-white radius-7 mt-20">
    <Row className='row-pad-0 mt-10 mb-10'>
    
        <Col md={6}><h4>Credit Usage Analytics</h4></Col>
        <Col md={6} className='text-end'>
        <p  >
            <label>Credits Expiry Date:</label> 25 Oct - 25 Nov
        </p>
        </Col>
        <Col md={12} className='mt-10 mb-10'>
            <div className='box-emil-analytics pad-10'>
                <div className="d-flex justify-content-between">
                    <div><h5>Email Usage Analytics</h5></div>
                    <div>200/2000 Used</div>
                </div>
                <div>
                <ProgressBar animated now={20} />
                </div>
            </div>
            <div className='box-emil-analytics pad-10 mt-20'>
                <div className="d-flex justify-content-between">
                    <div><h5>Mobile Number Usage Analytics</h5></div>
                    <div>200/2000 Used</div>
                </div>
                <div>
                <ProgressBar animated now={60} />
                </div>
            </div>
        </Col>

    </Row>
  </Col>
  <Col md={12} className="bg-white radius-7 mt-20">

    <Row className='row-pad-0 mt-10'>
    <Col md={12} className="d-flex justify-content-between  mb-10 bg-white radius-7" >

<h4>Credit Card Information</h4>
<CustomButton text="Update Card Information "  onClick={HandelModel}  className="custom-btn-outline"/>
</Col> 
<Col md={12}>
    <h5>Card Information</h5>
    <div className='mt-10 mb-10'><label>Card Number:</label><span>**** **** **** 2343</span></div>
    <div className='mt-10 mb-10'><label>Expiration Date:</label><span>7/2/2023</span></div>
</Col>
<Col md={12} className='mt-10 mb-10'>
    <h5>Card's Billing Information</h5>
   <address>
    6216 Baker Road,SUITE 100 EDEN PRAIRIF MN 55356 US
   </address>
</Col>
    </Row>
  </Col>

</Row>
            </Tab.Pane>
            <Tab.Pane eventKey="tab2">
              <h2> Coming Soon</h2>
            
            </Tab.Pane>
            
          </Tab.Content>
        </Col>
        </Tab.Container >
  {ShowCardInformation && <UpdateCardInformation handleClose={HandelModel}/> }
    </>)
}
export default PlanOverview;