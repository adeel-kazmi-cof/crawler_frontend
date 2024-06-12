import React, { useState } from "react";
import { fileupploed } from "../../helper/Icons/Icon";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

const FileUploadView = (props) => {
    const { icon, name, sizefile ,fileobject} = props;
    const [showPreview, setShowPreview] = useState(false);
    const [fileContent, setFileContent] = useState(null);


    const handleDownload = () => {
        // Create a Blob object from the file content (you might already have the blob)
        const blob = new Blob(["file content"], { type: "text/plain" });

        // Create a temporary URL for the blob
        const url = window.URL.createObjectURL(blob);

        // Create a temporary anchor element
        const a = document.createElement("a");
        a.href = url;
       
        a.download = name; // Set the download attribute to the file name
        console.log(" // Set the downlddddddddddoad attribute to the file name")
        console.log(  a.download)
        a.click(); // Simulate a click event on the anchor element

        // Release the temporary URL
        window.URL.revokeObjectURL(url);
    };

    const handlePreview = () => {
        console.log(fileobject)
        if (fileobject instanceof File) {
            const reader = new FileReader();
            reader.onload = () => {
                setFileContent(reader.result);
                setShowPreview(true);
            };
            reader.onerror = (error) => {
                console.error("Error reading file:", error);
            };
            reader.readAsText(fileobject);
        } else {
            console.error("Invalid file object:", fileobject);
        }
    };
    const handleClosePreview = () => {
        setShowPreview(false);
    };

    return (
        <>
        <Row className="row-pad-0">
            <Col md={12} className="bg-white border-radius-5 FileUploadView-wrap mt-10">
                <div className="file-icon">{icon}</div>
                <div className="file-wrap mt-10">
                    <span className="file-name">{name} </span>
                    <span className="file-size">{sizefile}</span>
                    <span className="action-file">
                        <small className="file-download" onClick={handleDownload}>Download</small>|
                        <small className="file-preview" onClick={handlePreview}>Preview</small>
                    </span>
                </div>
            </Col>
        </Row>
          <Modal show={showPreview} onHide={handleClosePreview}>
          <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body><p>{fileContent}</p></Modal.Body>
          <Modal.Footer>
              <button className="btn btn-secondary" onClick={handleClosePreview}>Close</button>
          </Modal.Footer>
      </Modal>

   </>
    );
};

export default FileUploadView;

