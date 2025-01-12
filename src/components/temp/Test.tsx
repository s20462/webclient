import { Container, Row } from "react-bootstrap";
import Link from "../fragments/Link";

const Test = () => {
  return (
    <Container className="text-center">
      <Row>
        <Link to="/tutorial">Tutoriale</Link>
      </Row>
      <Row>
        <Link to="/map">Mapa testowa</Link>
      </Row>
      <Row>
        <Link to="/medicaldata">Dane medyczne</Link>
      </Row>
      <Row>
        <Link to="/reports">Zgłoszenia</Link>
      </Row>
      <Row>
        <Link to="/newreport">Nowe zgłoszenie</Link>
      </Row>
      <Row>
        <Link to="/report/assign">Przypisanie karetki</Link>
      </Row>
      <Row>
        <Link to="/userdata">Dane użytkownika</Link>
        <Link to="/ambulances">Lista karetek</Link>
      </Row>
      <Row>
        <Link to="/mapAmbulance">Mapa karetek</Link>
      </Row>
      <Row>
        <Link to="/acceptReport/1">Przyjmowanie zgłoszeń</Link>
      </Row>
      <Row>
        <Link to="/additionalHelp">Wezwanie dodatkowych służb</Link>
      </Row>
    </Container>
  );
};

export default Test;
