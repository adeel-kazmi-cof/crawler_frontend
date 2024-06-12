import { useState } from 'react';
import { CustomButton, InputField, Label ,Checkbox, Switch} from '../form';
import { attachment ,sms,email,users,interviewbilling,JobActive} from '../../helper/Icons/Icon';
import { Row,Col } from 'react-bootstrap';
import UpgradePlan from './UpgradePlan';
import   PlanOverview from "./PlanOverview";
const Planbilling=()=>{
    const Litedata={
        price:"79",
        applicabletax:"+ applicable tax",
        sign:"$",
        month:"/mo",
        contract:"Billed Monthly (no contract)",
       
        Unlimitedinterviews:"Unlimited interviews",
        job:"5 jobs",
        users:"3 users",
        emailcredits:"2000 email credits",
        SMScredits:"1000 SMS credits",

    }
    const Liteupdatedata={
        price: "65",
        applicabletax: "+ applicable tax",
        sign: "$",
        month: "/mo",
        contract: "Billed Annually",
        Unlimitedinterviews: "Unlimited interviews",
        job:"",
       
        users: "3 users",
        emailcredits: "2000 email credits",
        SMScredits: "1000 SMS credits",

    }

    const prodata={
        price:"249",
        sign:"$",
        month:"/mo",
        applicabletax:"+ applicable tax",
        contract:"Billed Monthly (no contract)",
    
        Unlimitedinterviews:"Unlimited interviews",
        job:"10 jobs",
        users:"10 users",
        emailcredits:"3000 email credits",
        SMScredits:"4000 SMS credits",
    }
    const proupdate={
        price:"199",
        sign:"$",
        month:"/mo",
        applicabletax:"+ applicable tax",
        contract:"Billed Annually",
        Unlimitedinterviews:"Unlimited interviews",
        job:"",
        users:"5 users",
        emailcredits:"3000 email credits",
        SMScredits:"4000 SMS credits",

    }
    const enterprisedata={
        price:"Contact Us",
        contract:"for pricing",
        BilledAnnually:"Billed Annually",
        Unlimitedinterviews:"Unlimited interviews",
        job:"Unlimited jobs",
        users:"Unlimited users",
        emailcredits:"Unlimited email credits",
        SMScredits:"Unlimited SMS credits",
    }
    const enterprisedataupdate={
        price:"Contact Us",
        contract:"for pricing",
        BilledAnnually:"Billed Annually",
        Unlimitedinterviews:"",
        job:"",
        users:"",
        emailcredits:"",
        SMScredits:"",
       
    }
    const [showupgrade,setupgrade]=useState(true);
    const [showPlanOverview, setPlanOverview] = useState(false);
    const [isSwitchedOn, setIsSwitchedOn] = useState(false);
    const [Showgraycard,setgraycard]=useState(Litedata)
    const [Showbluecard,Setbluecard]=useState(prodata)
   
    const [showlightbluecard,setlightbluecard]=useState(enterprisedata)
    const Upgrade=()=>{
        setupgrade(!showupgrade)
    
    }

  
    const handleSwitchChange = () => {
        setIsSwitchedOn(!isSwitchedOn); 

       
        setgraycard(isSwitchedOn ? Litedata : Liteupdatedata);
        Setbluecard(isSwitchedOn ? prodata : proupdate);
        setlightbluecard(isSwitchedOn ? enterprisedata :enterprisedataupdate)
    };

    const PlanOverviewbtn=()=>{
        setPlanOverview(true);
        alert("Paymethod intergrate first")
    }
    return(<>

   
 {!showPlanOverview && 
<Row className="row-pad-0  wrap-billing-plan">

  {showupgrade && 
  <>
 
 <Col md={12} className="d-flex justify-content-between pad-0 mb-10" >

    <h4>[Company Name] - Free Trial</h4>
  <CustomButton text="Upgrade Plan "  onClick={Upgrade} className="btn-full"/>
  </Col>
  <Col md={12} className='billing-plan-card'>
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
  </>
}
{!showupgrade &&
<>
<Col md={12} className="d-flex justify-content-between pad-0 mb-10 " >

<h4>[Company Name] - Free Trial</h4>
<div className='save-annulayy-price'><span>Monthly</span><Switch checked={isSwitchedOn} onChange={(e)=>handleSwitchChange(e)}  /><span>Annually</span></div>
</Col>
<div className="d-flex justify-content-center card-plan-rate pad-0 mb-10">
<Col md={3} className='mt-20 mr-15'><UpgradePlan clr="gray-card" btntext="Get started now" cardtitle="Lite" handleplanoverview={PlanOverviewbtn} data={Showgraycard} /></Col>
<Col md={3} className='mr-20'><UpgradePlan clr="blue-card"  btntext="Get started now" cardtitle="Pro" handleplanoverview={PlanOverviewbtn}  data={Showbluecard} /></Col>
<Col md={3} className='mt-20 mr-15'><UpgradePlan clr="light-blue-card" cardtitle="Enterprise"  handleplanoverview={PlanOverviewbtn}  btntext="Talk to us" data={showlightbluecard} /></Col>
</div>

</>

}



</Row>
}

{showPlanOverview &&
 <Row className="row-pad-0 pad-0 mt-10  wrap-billing-plan">
 <PlanOverview/>
 </Row>
    }




    </>)
}

export default Planbilling;