import { Row, Col } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const SettingLayout = () => {

    return (
        <>
            <Row className="row-pad-0">
                <Col md={12} className="">
                    
                    <Row className="listing-section wrap-accounting-setting  row-pad-0  radius-5 bg-white ">
                        <Outlet />
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default SettingLayout;