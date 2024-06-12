import { Form } from "react-bootstrap";

const Label = (props) => {
    return (
        <Form.Label
            {...props}
        >
            {props.text}
        </Form.Label>
    )
}
export default Label;