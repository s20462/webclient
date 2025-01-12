import { Container } from "react-bootstrap";
import BloodTypeForm from "./BloodTypeForm";
import AllergyTable from "../allergy/AllergyTable";
import MedicalConditionTable from "../medicalCondition/MedicalConditionTable";

const EditBloodTypeView = () => {
  return (
    <Container>
      <h1 className="my-4">Twoje dane</h1>
      <BloodTypeForm buttonLabel="Zapisz" link="/medicaldata" disabled={false} />
      <AllergyTable />
      <MedicalConditionTable />
    </Container>
  );
};

export default EditBloodTypeView;
