import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article } from "../types/Article";
import {
  Container,
  Row,
  Col,
  Spinner,
  Image,
  Card,
  
} from "react-bootstrap";

function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((res) => res.json())
      .then(setArticle);
  }, [id]);

  if (!article) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Card>
            <Image src={article.image_url} alt={article.title} fluid />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Pubblicato il: {new Date(article.published_at).toLocaleString()}
              </Card.Subtitle>
              <Card.Text>
                 {article.news_site}
              </Card.Text>
              <Card.Text>{article.summary}</Card.Text>
              <Card.Text className="text-muted">
                Ultimo aggiornamento:{" "}
                {new Date(article.updated_at).toLocaleString()}
              </Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ArticleDetails;
