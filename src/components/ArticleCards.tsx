import { Card, Button, Container ,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Article } from "../types/Article";

interface ArticleCardProps {
  article: Article;
}

function ArticleCards({ article }: ArticleCardProps) {
  return (
    <Container>
        <Row>
            <Col>
    <Card className="mb-4 shadow-sm h-100">
      <Card.Img variant="top" src={article.image_url} alt={article.title} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {new Date(article.published_at).toLocaleDateString()}
        </Card.Subtitle>
        <Card.Text>{article.summary.slice(0, 100)}...</Card.Text>
        <Link to={`/article/${article.id}`}>
          <Button variant="primary">Leggi di più</Button>
        </Link>
      </Card.Body>
    </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default ArticleCards;
