import React from 'react'
import '../../assets/css/page/Bidding.css'
import Aside from "../../components/aside/index.jsx";
import Search from '../../components/search/index.jsx';
import { Container, CssBaseline, Box, Grid } from "@mui/material";
import GetPoint from '../../components/layout/Getpoint.jsx';
import Trainningstatus from './component/Trainningstatus.jsx';
import Projectsp from '../../components/layout/Project.jsx';
import Contribution from '../../components/layout/Contributon.jsx';
import CategoryIcon from '@mui/icons-material/Category';
import { useState } from 'react';
import Board from '../../components/layout/Statisticboard.jsx';
import CreateTrainning from '../../components/create/CreateTrainning.jsx';



const Trainning = ()=>{
    const [Dialog,setDialog]=useState('false');
    const handleopen=()=>{
        setDialog(true);
    }
    const handleclose=()=>{
        setDialog(false);
    }
    return (
        <div className="App">
            <CssBaseline/>
                <Search name='Trainning' right={'68%'}/>
                <Container className="container" maxWidth='100%'>
                    <Box display="flex">
                        <Box className="container-Aside">
                          <Aside/>
                        </Box>
                       <Box className='content' flexGrow={1}>
                       <Box p={2}>
                            <Grid container spacing={3}>
                                <Trainningstatus />
                                <Board title='Top 04 Mentor'/>
                                <Contribution icon={CategoryIcon} title='Create a program' detail='Lorems' flag={handleopen} create={<CreateTrainning open={Dialog} onClose={handleclose}/>}/>
                                <Projectsp title='All project'/>
                                <GetPoint/>
                            </Grid>
                        </Box>  
                        </Box>
                    </Box>
                </Container>
        </div>
    );
};

export default Trainning;