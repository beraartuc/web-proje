import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeCart } from './../store/site'


const CheckOutSuccess = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(removeCart([]));

    }, [])



    return (
        <>
            <Header headerTitle="BERA B2B" />
            <Container>
                <Row>
                    <Col>
                    <Title title="Siparişiniz Alındı" />
                        Teşekkürler, siparişiniz alındı ve siparişine ait özet mail adresinize gönderildi.
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default CheckOutSuccess