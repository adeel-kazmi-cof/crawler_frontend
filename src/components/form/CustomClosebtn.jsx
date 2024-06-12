import {  crossicon} from "../../helper/Icons/Icon";
const CustomClosebtn=({Close})=>{
    return (
        <>
        <a href="#" className="close-btn ml-10" onClick={Close}>{crossicon}</a>
        
        </>
    )

}

export default CustomClosebtn;