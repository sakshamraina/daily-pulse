import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const NewsComponent = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=54991fb961714483ab2619fe892315e2');
            const data = await response.json();
            setArticles(data.articles.slice(0, 13));
        };

        fetchArticles();
    }, []);

    const handleReadMoreClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="news-component" style={{ marginTop: '2vh' }}>
            <Container>
                <h1 className="text-center mb-5">Top Headlines</h1>
                <Row>
                    <Col lg={7}>
                        <Card className="mb-2">
                            <Card.Img variant="top" src={articles.length > 0 ? articles[0].urlToImage : ''} />
                            <Card.Body>
                                <Card.Title>{articles.length > 0 ? articles[0].title : ''}</Card.Title>
                                <Card.Text>{articles.length > 0 ? articles[0].description : ''}</Card.Text>
                                <Button variant="primary" onClick={() => handleReadMoreClick(articles.length > 0 ? articles[0].url : '')}>Read More</Button>
                            </Card.Body>
                        </Card>
                        <Row>
                            {articles.length > 1 && (
                                <>
                                    <Col sm={6} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={articles[1].urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{articles[1].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[1].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={6} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={articles[2].urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{articles[2].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[2].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )}
                            {articles.length > 3 && (
                                <>
                                    <Col sm={6} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={articles[3].urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{articles[3].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[3].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={6} className="mb-3">
                                        <Card>
                                            <Card.Img variant="top" src={articles[4].urlToImage} />
                                            <Card.Body>
                                            <Card.Title>{articles[4].title}</Card.Title>
                        <Button variant="primary" onClick={() => handleReadMoreClick(articles[4].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </>
                            )}
                        </Row>
                    </Col>
                    <Col lg={5}>
                        {articles.length > 5 && (
                            <>
                                <Card className="mb-1">
                                    <Card.Body>
                                        <Card.Title>{articles[5].title}</Card.Title>
                                        <Button variant="primary" onClick={() => handleReadMoreClick(articles[5].url)}>Read More</Button>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-1">
                                    <Card.Body>
                                        <Card.Title>{articles[6].title}</Card.Title>
                                        <Button variant="primary" onClick={() => handleReadMoreClick(articles[6].url)}>Read More</Button>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-1">
                                    <Card.Body>
                                        <Card.Title>{articles[7].title}</Card.Title>
                                        <Button variant="primary" onClick={() => handleReadMoreClick(articles[7].url)}>Read More</Button>
                                    </Card.Body>
                                </Card>
                                {articles.length > 8 && (
                                    <>
                                        <Card className="mb-1">
                                            <Card.Body>
                                                <Card.Title>{articles[8].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[8].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                        <Card className="mb-1">
                                            <Card.Body>
                                                <Card.Title>{articles[9].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[9].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                        <Card className="mb-1">
                                            <Card.Body>
                                                <Card.Title>{articles[10].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[10].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                        <Card className="mb-1">
                                            <Card.Body>
                                                <Card.Title>{articles[11].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[11].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                        <Card className="mb-1">
                                            <Card.Body>
                                                <Card.Title>{articles[12].title}</Card.Title>
                                                <Button variant="primary" onClick={() => handleReadMoreClick(articles[12].url)}>Read More</Button>
                                            </Card.Body>
                                        </Card>
                                    </>
                                )}
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsComponent;
