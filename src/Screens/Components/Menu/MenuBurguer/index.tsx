import { Container, Logo, Button, Content, Box, IconSearch, IconMap, BoxMap, IconCalendar, BoxCalendar, Input } from './styled';
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export function MenuBurguer({cars, setCars}:any) {
    const [startDate, setStartDate] = useState(new Date());




    return (
        <Container>
       
                

                <Content>


                    <BoxMap>
                        <IconMap onClick={() => { console.log('Search') }}>
                            <img
                                width='15'
                                src={`./icons/map-pin.svg`} />
                        </IconMap>
                        <Input
                            value={'North Carolinas, NC 90025'} />
                    </BoxMap>
                    <BoxCalendar>
                        <IconCalendar onClick={() => { console.log('Search') }}>
                            <img
                                width='15'
                                src={`./icons/calendar.svg`} />
                        </IconCalendar>
                        <DatePicker
                            className="red-border"
                            selected={startDate} onChange={(date) => { console.log(date) }} />

                    </BoxCalendar>

                    <BoxCalendar>
                        <IconCalendar onClick={() => { console.log('Search') }}>
                            <img
                                width='15'
                                src={`./icons/calendar.svg`} />
                        </IconCalendar>
                        <DatePicker
                            className="red-border"
                            selected={startDate} onChange={(date) => { console.log(date) }} />

                    </BoxCalendar>




                    <IconSearch onClick={() => { console.log('Search') }}>
                        <img
                            width='15'
                            src={`./icons/search.svg`} />
                    </IconSearch>


                </ Content>
                <div>
                    <Button>
                        Sign up
                    </Button>
                    <Button className="outline-btn">
                        Sign in
                    </Button>
                </ div>


            
        </Container>
    )
}
