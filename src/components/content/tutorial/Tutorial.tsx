import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTutorialById } from "../../../apiCalls/tutorialCalls";
import { Container, Card } from "react-bootstrap";
import CustomCard from "../../fragments/Card";
import Rating from "react-rating";

const Tutorial = () => {
  const [data, setData] = useState<any>({});
  const { tutorialId } = useParams();

  useEffect(() => {
    if (tutorialId) {
      getTutorialById(parseInt(tutorialId)).then(res => res.json()).then(dat => setData(dat)).catch(err => console.log(err));
    }
  }, [tutorialId]);

  const calcRating = (x: number) => {
    const normalized = x * 5;
    const floored = Math.floor(normalized);
    return normalized % floored >= 0.5 ? floored + 0.5 : floored;
  };

  return (
    <Container className="mt-3 mb-5">
      <h1>Tutorial - {data.name} - {data.tutorialKind}</h1>
      <CustomCard className="mt-3 mx-3">
        <Card.Img variant="top" src="/img/thumbnail.jpg" height="360" />
        <Card.Body>
          <Card.Title>
            <h3>Step 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </Card.Title>
        </Card.Body>
      </CustomCard>
      <CustomCard className="mt-3 mx-3">
        <Card.Img variant="top" src="/img/thumbnail.jpg" height="360" />
        <Card.Body>
          <Card.Title>
            <h3>Step 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
              Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
              Cicero in 45 BC "Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
              sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur?
            </p>
          </Card.Title>
        </Card.Body>
      </CustomCard>
      <h2>Jak oceniasz ten poradnik?</h2>
      <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" initialRating={calcRating(data.average)} />
    </Container>
  );
};

export default Tutorial;
