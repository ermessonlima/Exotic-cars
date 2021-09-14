import { Header } from '../Components/Header'
import {
    Container, Card, TextModel, TextPrice,
    TextDescription, PriceCard, TextSimbol, TextDay,
    ModelCard, SpheraCard, Sphera
} from './styled';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export function Home() {
    const [isData, setData] = useState<any[]>([])
    const [isCars, setCars] = useState<any[]>([])
    const dispatch = useDispatch();

    useEffect(() => {

        getData()
    }, [])

    async function getData() {
        axios.get('./cars.json')
            .then((res) => {
                setData(res.data.cars)
            }).catch((err) => {
            })
    }


    const filter = (arg:string) =>{
  
        var filtrado = isData.filter(function(obj) { return obj.model == arg; });
        let cars = filtrado.slice(0, 3);
        
        dispatch({
            type: 'ADD_NOTE',
            payload: {
                data:   cars
            }
        })
    }

    return (
        <>
            <Header />
            <Container className="cards">
                {isData.map((field, index) => {
                    return (         
                        <Card
                            onClick={() => filter(field.model)}
                            styleHouver = {field.color}
                        key={field.type}>
                               <Link style={{ textDecoration: 'none' }} to="/details" >
                            <ModelCard>
                                <TextModel>{field.brand}</TextModel>
                                <SpheraCard>
                                    <Sphera />
                                    <Sphera />
                                    <Sphera />
                                </SpheraCard>
                            </ModelCard>
                            <TextDescription>
                                {field.model.toUpperCase()}
                            </TextDescription>
                            <img
                                width='250'
                                src={`./images/cars/side/${field.slug}.png`} />
                            <PriceCard>
                                <TextSimbol>$</TextSimbol> <TextPrice>{field.price_per_day}</TextPrice>
                                <TextDay>/day </TextDay>
                            </PriceCard>
                            </Link>
                        </Card>
                    )
                })
                }

            </Container>
        </>
    )
}
