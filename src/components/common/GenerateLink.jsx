import { useState } from "react"
import { CustomButton, InputField, Switch } from "../form/index"
import { adduser, attachment, crossicon, website, faplusicon, faminusicon, btnplus, expirtime } from "../../helper/Icons/Icon"
 import { Container, Row, Col, Offcanvas } from "react-bootstrap"


const GenerateLink = ({  handleClose}) => {
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [expireDays, setExpireDays] = useState(0);
    const [isCopyLink, setCopyLink] = useState(false);
    const [isLinkGenerate, setLinkGenerate] = useState(false);
   

    const handleIncrement = () => {
        setExpireDays(expireDays + 1);
    };

    const handleDecrement = () => {
        if (expireDays > 1) {
            setExpireDays(expireDays - 1);
        }
    };

    const handleChange1 = () => {
        setIsChecked1(!isChecked1);
    };

    const handleChange2 = () => {
        setIsChecked2(!isChecked2);
    };
   
    const CopyLink = () => {
        setCopyLink(true);
    };
    const  LinkGenerate = () => {
        setLinkGenerate(!isLinkGenerate);
    };

    return (
        <>
            <Offcanvas
                show={true}
                onHide={handleClose}
                placement="end"
                className="bg-ligte-gray custom-offcanvas"
                style={{ width: "50%" }}
            >

                <Container fluid className="row-pad-0 pad-0 bg-ligte-gray pad-20">
                    <Offcanvas.Header className="model-header bg-white ">
                        <Offcanvas.Title><span className="svg mr-10">{attachment}</span>Generate Link</Offcanvas.Title>
                        <div className="text-end"><CustomButton onClick={handleClose} className="text-end close-btn " text={crossicon} /></div>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="mt-10 wrap InviteCandidate-wrap">
                        <Row className="row-pad-0 bg-white mt-20 share-setting-wrap">

                            <Col md={12} className="pad-0">
                                <h4 className="mb-10">Share Settings</h4>
                                <h5>Main Settings</h5>
                                <Row className="row-pad-0">
                                    <Col md={12} className="main-setting-card ">
                                        <div className="link mt-10">
                                            <div className="puls-minus">
                                                <span className="mr-10">{expirtime}</span>
                                                <span>Expire Link After</span>
                                                <CustomButton icon={faminusicon} className="btn-default btn-mius" onClick={handleDecrement} />
                                                <InputField type="text" value={expireDays} readOnly />
                                                <CustomButton className="btn-default btn-puls" icon={faplusicon} onClick={handleIncrement} />
                                                <span className="mr-10">Days</span>
                                            </div>
                                            <Switch checked={isChecked1} onChange={handleChange1} />
                                        </div>
                                        <div className="link mt-20 mb-10">
                                            <div>
                                                <span className="mr-10">{btnplus}</span>
                                                <span>Include company landing page</span>
                                            </div>
                                            <Switch checked={isChecked2} onChange={handleChange2} />
                                        </div>
                                        {isLinkGenerate && (
    <Col md={12} className="pad-0 mb-20 mt-20">
        <div className="Copy-Link">
            <Col md={8} className="d-flex pt-10">
                <span className="ml-10 mr-10">{website}</span>
                <p className="link">https://interview.[YourCompanyName].com/video-interview</p>
            </Col>
            <Col md={4} className="text-end">
                <CustomButton variant="outline-primary" className={isCopyLink ? "green btn" : null} onClick={CopyLink} text="Copy Link" />
            </Col>
        </div>
    </Col>
)}
                                      
                                    </Col>
                                </Row>


                            </Col>


                        </Row>
                        {!isLinkGenerate &&(
                        <Col md={12} className="text-end mt-20 mb-20 pad-0">
                            <CustomButton variant="outline-primary" onClick={handleClose} className="mr-10" text="Cancel" />
                            <CustomButton text="Generate Link " onClick={LinkGenerate} />
                        </Col>
)}
                    </Offcanvas.Body>
                </Container>
            </Offcanvas>
        </>
    )
}

export default GenerateLink;
