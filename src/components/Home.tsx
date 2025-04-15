import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Article } from "../types/Article";
import ArticleCards from "../components/ArticleCards";

function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((res) => res.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <Container className="py-4">
      <h1 className="mb-4">Ultime notizie dallo spazio 🚀</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {articles.map((article) => (
          <Col key={article.id}>
            <ArticleCards article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;
