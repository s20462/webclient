import { useState } from "react";
import { Container, Form } from "react-bootstrap";
import UserDataForm from "./UserDataForm";

const UserData = () => {
  const [firstName, setFirstName] = useState("Jan");
  const [lastName, setLastName] = useState("Nowak");
  const [email, setEmail] = useState("jannowak@email.com");
  const [username, setUsername] = useState("jannowak");
  const [password, setPassword] = useState("aaaaaaaa");
  const [birthDate, setBirthDate] = useState("2000-02-02");
  const [phoneNumber, setPhoneNumber] = useState("808707606");

  return (
    <Container className="mt-5">
      <h1 className="mb-5">Twoje dane</h1>
      <UserDataForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        username={username}
        password={password}
        birthDate={birthDate}
        phoneNumber={phoneNumber}
        buttonLabel="Edytuj"
        link="/userdata/edit"
        disabled={true}
      />
    </Container>
  );
};

export default UserData;
