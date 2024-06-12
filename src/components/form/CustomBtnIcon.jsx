import { icon } from "@fortawesome/fontawesome-svg-core";
import { Button } from "react-bootstrap";

function CustomBtnIcon({handleShow,icon,btnclass}){
    return(<>
    
    <Button  className={btnclass} onClick={handleShow}>{icon}</Button>
    </>)
}


export default CustomBtnIcon;