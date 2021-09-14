import { Container, Logo, Button,  Box, IconSearch, IconMap, BoxMap, IconCalendar, BoxCalendar, Input } from './styled';
import DatePicker from "react-datepicker";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {MenuTeste} from '../Menu/MenuTeste'
import { MenuBurguer } from '../Menu/MenuBurguer';

export function Header({cars, setCars}:any) {
    const [startDate, setStartDate] = useState(new Date());




    return (
        <Container>
            <Box>
                <Logo>
                    <h1>EXOTIC</h1>
                    <span>CARS</span>
                </Logo>

                

                <MenuTeste />

                <MenuBurguer />


            </Box>



            
        </Container>
    )
}
