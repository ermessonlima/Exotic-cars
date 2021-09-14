import { Header } from '../Components/Header'
import {
    Container, Description, Button, Content,
    Title, SubTitle, Image, ImageCar, CarBox, DescriptionType, DescriptionModel, ImageBrand,
    BoxModel, ButtonOutline, Carousel, ImageContainer, ButtonRight, ButtonLeft

} from './styled';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector  } from 'react-redux';

export function Details() {

    const {data} = useSelector((state:any) => state.Cars)

    const [isIndex, setIndex] = useState(0)
    const [isData, setData] = useState<any[]>([data[isIndex]])

    useEffect(()=>{
        console.log(data)
        console.log(data.length)
        setData(data)
        if(data.length >= 1) {
            setIndex(1)
        }
        if((data.length == 1)) {
            setIndex(0)
        }
    },[])

    const carousel = useRef<any>(null);
    const handleLeftClick = () => {
        var array = isData;
        const firstElement = array.pop();
        setData([firstElement, ...array])
    }

    const handleRightClick = () => {
        var array = isData;
        const firstElement = array.shift();
        setData([...isData, firstElement])
    }

    return (
        <>
            <Header cars setCars/>
            <Container className="cards">
                <Content>
                    <CarBox>
                        <ButtonOutline >
                        <Link style={{ textDecoration: 'none' }} to="/"> 
                        <Image src={`./icons/arrow-black.svg`} />
                            <span>Back to catalog</span>

                            </Link>
                        </ButtonOutline>
                        <ImageCar src={`./images/cars/side/${isData[isIndex].slug}.png`} />
                        <Description>
                            <DescriptionType>
                                <ImageBrand src={`./images/brands/${  isData[isIndex].brand.toLowerCase()}${isData[isIndex].brand == 'Ferrari' ? '.png': '.svg' }`} />
                                <BoxModel>
                                    <Title>
                                    {isData[isIndex].brand}  {isData[isIndex].model}
                                    </Title>
                                    <SubTitle>
                                        ${isData[isIndex].price_per_day}/day
                                    </SubTitle>
                                </BoxModel>
                            </DescriptionType>
                            <DescriptionModel>
                                <Title>
                                0{isIndex}
                                </Title>
                                <SubTitle>
                                {isData[isIndex].color}
                                </SubTitle>
                            </DescriptionModel>
                        </Description>
                    </ CarBox>
                    <Button>
                       <span> Book now</span>
                        <Image src={`./icons/arrow-right.svg`} />
                    </Button>
                    <Carousel className="carousel"  >
                        <ButtonLeft onClick={handleLeftClick}>
                            <Image src={`./icons/arrow-left.svg`} />
                        </ButtonLeft>
                        {isData.map((item, index) => {
                            console.log(item)
                            return (<div className="item" key={item.id}>
                                <ImageContainer className="image"
                             
                                    styled={index == isIndex ? '#7733ff' : '#D8D7D7'}
                                    style={{
                                        width: index == isIndex ? 250 : 150,
                                        marginBottom: index == isIndex ? 80 : 10,
                                        height: index == isIndex ? 170 : 120,
                                        alignItems: 'center',
                                        display: 'flex',
                                    }} >
                                    <ImageCar
                                        style={{ width: index == isIndex ? 350 : 200,
                                            marginLeft: index == isIndex ? -50 : 0,
                                         }}
                                         src={`./images/cars/side/${item.slug}.png`}/>
                                </ImageContainer>
                            
                            </div>
                            )
                        })}
                        <ButtonRight onClick={handleRightClick}>
                            <Image src={`./icons/arrow-right.svg`} />
                        </ButtonRight>
                    </Carousel>
                </Content>
            </Container>
        </>
    )
}
