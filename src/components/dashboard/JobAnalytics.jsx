import { Col, Row } from "react-bootstrap";
import Analytics from "../common/Analytics";
import { JobActive, filter, faappointment, facontact } from "../../helper/Icons/Icon";

const JobAnalytics = () => {




    const activeNumber = "5";

    return (<>

        <Col md={12} className="d-flex justify-content-between align-items-baseline border-b " style={{ padding: "5px 10px" }}><h4 className="analytics-heading widget-h">Job Analytics</h4><span className="filter-svg">{filter}</span>

        </Col>



        <div className="d-flex justify-content-around mt-10" style={{ padding: "5px 10px 5px 10px" }}>

            <Analytics className="bg-orange dashboard-analytics" icon={JobActive} link="" activeNumber={activeNumber} text="Active Jobs" />


            <Analytics className="bg-light-blue dashboard-analytics" icon={facontact} link="" activeNumber={activeNumber} text="Candidates" />

            <Analytics className="bg-purple dashboard-analytics" icon={faappointment} link="" activeNumber={activeNumber} text="Recorded Interviews" />
            <Analytics className="bg-purple dashboard-analytics" icon={faappointment} link="" activeNumber={activeNumber} text="Recorded Interviews" />

            <Analytics className="bg-bright-green dashboard-analytics" icon={JobActive} link="" activeNumber={activeNumber} text="Hired" />

        </div>
        <div className="d-flex justify-content-center align-items-center clr-filter-date  mt-10 mb-10">
            <b>Yesterday</b> <i class="fa fa-calendar"> </i><small>03/06/2024-</small><i class="fa fa-calendar"></i><small>03/06/2024</small>
        </div>

    </>)
}

export default JobAnalytics;