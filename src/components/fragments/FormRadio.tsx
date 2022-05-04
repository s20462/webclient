import { ChangeEventHandler } from "react";
import { FormGroup, Form } from "react-bootstrap";

export interface FormRadioParams {
  className?: string,
  labelClass?: string,
  label?: string,
  innerClass?: string,
  required?: boolean,
  onChange?: ChangeEventHandler<HTMLInputElement>,
  disabled?: boolean,
  values: string[],
  value?: string
}

const FormRadio = (props: Readonly<FormRadioParams>) => {
  let count = 0;

  return (
    <FormGroup className={props.className}>
      {props.label ? <Form.Label className={props.labelClass}>{props.label}{props.required ? <span className="req">*</span> : ""}</Form.Label> : ""}
      {props.values.map(val => <Form.Check key={count++} id={val} inline type="radio" label={val} className={props.innerClass} required={props.required} disabled={props.disabled} onChange={props.onChange} checked={val === props.value ? true : false} />)}
    </FormGroup>
  );
};

export default FormRadio;
