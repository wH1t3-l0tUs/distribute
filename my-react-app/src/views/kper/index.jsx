import PeopleIcon from '@mui/icons-material/People';
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import React, { useState } from 'react';
import Aside from "../../components/aside/index.jsx";
import Contribution from '../../components/layout/Contributon.jsx';
import GetPoint from '../../components/layout/Getpoint.jsx';
import Projectsp from '../../components/layout/Project.jsx';
import Board from '../../components/layout/Statisticboard.jsx';
import Status from '../../components/layout/Status.jsx';
import Search from '../../components/search/index.jsx';
import '../../assets/css/page/Bidding.css';
import CreateKper from '../../components/create/CreateKper.jsx';

const Kper = ()=>{
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
                <Search name='KPER'/>
                <Container className="container" maxWidth='100%'>
                    <Box display="flex">
                        <Box className="container-Aside">
                          <Aside/>
                        </Box>
                       <Box className='content' flexGrow={1}>
                       <Box p={2}>
                            <Grid container spacing={3}>
                                <Status title='Top Kpers' />
                                <Board title='Top 04 Goals'/>
                                <Contribution icon={PeopleIcon} title='Add a information' detail='Lorems asdsd asdasd asdasd asdsad asdasdasd adsdasdasd asddasd fwefwe afefwfwgwef qfqwf' flag={handleopen} create={<CreateKper open={Dialog} onClose={handleclose}/>}/>
                                <Projectsp title='All information about Kper'/>
                                <GetPoint/>
                            </Grid>
                        </Box>  
                        </Box>
                    </Box>
                </Container>
        </div>
    );
};

export default Kper;