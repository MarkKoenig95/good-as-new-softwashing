import { Form, Row } from "react-bootstrap";

export default function MaterialsInput(props) {
  const { currentChecked, setCurrentChecked, materials } = props;

  const _handleCheck = (index) => {
    setCurrentChecked(index);
  };

  return (
    <Row className="align-items-center mx-0">
      <h4 className="p-0 w-auto" style={{ marginRight: "1rem" }}>
        Material:
      </h4>
      {materials.map((material, index) => (
        <Form.Check
          key={material.name + material.message + index}
          className="w-auto"
          type="radio"
          label={material.name}
          checked={index === currentChecked}
          onChange={() => {
            _handleCheck(index);
          }}
        />
      ))}
    </Row>
  );
}
