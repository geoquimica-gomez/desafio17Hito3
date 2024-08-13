import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { Container, Row, Col } from 'react-bootstrap';
import { pizzas } from '../../utils/pizzas';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    {pizzas.map((pizza) => (
                        <Col md={4} className="mb-4 d-flex" key={pizza.id}>
                            <CardPizza
                                name={pizza.name}
                                price={pizza.price}
                                ingredients={pizza.ingredients}
                                img={pizza.img}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Home;

