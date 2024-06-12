import { Form } from "react-bootstrap";

const SelectField = ({ options, ...props }) => {

  return (
    <Form.Select {...props}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
};

export default SelectField;
