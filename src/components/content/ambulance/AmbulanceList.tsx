import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAmbulances } from "../../../apiCalls/ambulanceCalls";
import { Container } from "react-bootstrap";
import Spinner from "../../fragments/Spinner";
import Table from "../../fragments/Table";
import Button from '../../fragments/Button';

const AmbulanceList = () => {
  const [ambulances, setAmbulances] = useState<any[]>([
    { id: 1, kind: "Covid", registrationNumber: "WW 40404", available: true, paramedics: "Jan Nowak  Adam Kowalski" },
    { id: 2, kind: "Covid", registrationNumber: "WW 50505", available: false, paramedics: "Jan Nowak  Adam Kowalski" }
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getAmbulances().then(res => res.json()).then(data => {
      console.log(data);
      setIsLoading(false);
    }).catch(err => console.log(err));
  }, []);

  if (isLoading) {
    return (
      <Container className="text-center mt-5">
        <Spinner />
      </Container>
    );
  }

  const cols = [
    { name: "#", property: "id" },
    { name: "Rodzaj karetki", property: "kind" },
    { name: "Lista ratowników", property: "paramedics" },
    { name: "Numer rejestracyjny", property: "registrationNumber" },
    { name: "Czy jest dostępna?", property: (x: any) => x.available ? "Tak" : "Nie" }
  ];

  return (
    <Container className="mb-3 justify-content-center text-center">
      <h3>Karetki</h3>
      <Table columns={cols} data={ambulances} />
      <Button text="Wróć" onClick={e => navigate("/")} />
    </Container>
  )
}

export default AmbulanceList;