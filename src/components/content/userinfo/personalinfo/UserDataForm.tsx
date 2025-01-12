import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormControl from "../../../fragments/FormControl";
import Button from "../../../fragments/Button";

export interface UserDataFormParams {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  birthDate: string;
  phoneNumber: string;
  disabled?: boolean;
  buttonLabel: string;
  link: string;
}

const UserDataForm = (props: Readonly<UserDataFormParams>) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [email, setEmail] = useState(props.email);
  const [username, setUsername] = useState(props.username);
  const [password, setPassword] = useState(props.password);
  const [birthDate, setBirthDate] = useState(props.birthDate);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);

  const navigate = useNavigate();

  return (
      <Form>
        <Row>
          <Col>
            <FormControl
              id="firstName"
              required
              onChange={(e) => setFirstName(e.target.value)}
              className="mb-3"
              value={firstName}
              label="Imię"
              type="text"
              disabled={props.disabled}
            />
          </Col>
          <Col>
            <FormControl
              id="lastName"
              required
              onChange={(e) => setLastName(e.target.value)}
              className="mb-3"
              value={lastName}
              label="Nazwisko"
              type="text"
              disabled={props.disabled}
            />
          </Col>
        </Row>
        <Row md={2}>
          <FormControl
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="mb-3"
            value={email}
            label="Email"
            type="email"
            disabled={props.disabled}
          />
          <FormControl
            id="phoneNumber"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mb-3"
            value={phoneNumber}
            label="Numer telefonu"
            type="text"
            disabled={props.disabled}
          />
        </Row>
        <Row md={2}>
          <FormControl
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
            className="mb-3"
            value={username}
            label="Nazwa użytkownika"
            type="text"
            disabled={props.disabled}
          />

          <FormControl
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="mb-3"
            value={password}
            label="Hasło"
            type="password"
            disabled={props.disabled}
          />
        </Row>
        <FormControl
            id="birthDate"
            required
            onChange={(e) => setBirthDate(e.target.value)}
            className="mb-3"
            value={birthDate}
            label="Data urodzenia"
            type="date"
            disabled={props.disabled}
          />
        <Button text={props.buttonLabel} onClick={() => navigate(props.link)} />
      </Form>
  );
};

export default UserDataForm;
