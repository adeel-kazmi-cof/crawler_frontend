import { CustomButton } from "../form";
import { Col } from "react-bootstrap";

const UpgradePlan = ({ clr, btntext, data,cardtitle,handleplanoverview }) => {
   
    return (
        <>
            <div className={`plan-rate-wrap ${clr}`}>
                <div className="plan-rate">
                    <div className="plan-title">
                        <span className="lite">{cardtitle}</span>
                        <div className="rate d-flex">
                           {data.sign && <span className="curreny">{data.sign}</span> } 
                            <div className="price-wrap">
                            {data.price && <h4 className="price">{data.price}</h4> }
                           {data.month && <span className="month">{data.month}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="content-rate-plan">
                      {data.applicabletax && <p className="p-common">{data.applicabletax}</p>}
                        {data.contract && <p className="contract">{data.contract}</p>} {/* Display contract from data */}
                        {data.BilledAnnually && <p className="p-common">{data.BilledAnnually}</p>}
                       <div className="w-content">
                       {data.Unlimitedinterviews && <p className="p-common">{data.Unlimitedinterviews}</p>} {/* Display Unlimited interviews from data */}
                        {data.job && <p className="p-common">{data.job}</p>} {/* Display jobs from data */}
                       {data.users && <p className="p-common">{data.users}</p>} {/* Display users from data */}
                        {data.emailcredits && <p className="p-common">{data.emailcredits}</p>} {/* Display email credits from data */}
                        {data.SMScredits && <p className="p-common">{data.SMScredits}</p>} {/* Display SMS credits from data */}
                        </div>
                    </div>
                    <div className="wrap-btn">
                            <CustomButton text={btntext} onClick={handleplanoverview} className="rate-btn" />
                        </div>
                </div>
            </div>
        </>
    );
};

export default UpgradePlan;
