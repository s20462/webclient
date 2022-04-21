import { useState, FormEvent } from "react";
import { Container, Form, Row } from "react-bootstrap";
import FormSelect from "../../fragments/FormSelect";
import FormCheck from "../../fragments/FormCheck";
import FormControl from "../../fragments/FormControl";
import FormTextArea from "../../fragments/FormTextArea";
import Button from "../../fragments/Button";

const accidentTypes = [
  "Atak terrorystyczny",
  "Protest",
  "Powódź",
  "Pożar",
  "Wypadek samochodowy"
];

interface Props {
  disabled?: boolean
}

const CreateReport = (props: Readonly<Props>) => {
  const [type, setType] = useState(4);
  const [breath, setBreath] = useState(true);
  const [cons, setCons] = useState(false);
  const [rating, setRating] = useState(1);
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <FormSelect id="type" onChange={e => setType(parseInt(e.target.value))} value={type} className="mb-3 w-50" label="Rodzaj zdarzenia:" options={accidentTypes} disabled={props.disabled} />
        </Row>
        <Row className="justify-content-center">
          <FormCheck id="isBreathing" onChange={e => setBreath(!breath)} value={breath} className="mb-3" label="Czy ofiara oddycha?" disabled={props.disabled} />
        </Row>
        <Row className="justify-content-center">
          <FormCheck id="isConscious" onChange={e => setCons(!cons)} value={cons} className="mb-3" label="Czy ofiara jest przytomna?" disabled={props.disabled} />
        </Row>
        <Row className="justify-content-center">
          <FormControl id="dangerRating" onChange={e => setRating(parseInt(e.target.value))} value={rating} className="mb-3 w-50" label="Oceń skalę zagrożenia" type="number" disabled={props.disabled} />
        </Row>
        <Row className="justify-content-center">
          <FormTextArea id="description" onChange={e => setDesc(e.target.value)} value={desc} className="mb-3 w-50" label="Opis sytuacji:" disabled={props.disabled} />
        </Row>
        <Row className="justify-content-center">
          <Button className="mt-3 w-25" type="submit" text="Zgłoś zdarzenie" />
        </Row>
      </Form>
    </Container>
  );
};

export default CreateReport;