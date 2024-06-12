
import { Button } from "react-bootstrap";

const CustomButton = (props) => {
    return (
        <Button {...props}>
            {props.text ?? props.icon}
        </Button>
    )
}


export default CustomButton;