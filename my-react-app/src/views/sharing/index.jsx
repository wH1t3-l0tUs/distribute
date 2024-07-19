import HomeIcon from '@mui/icons-material/Home';
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import React, { useState } from 'react';
import Aside from "../../components/aside/index.jsx";
import Contribution from '../../components/layout/Contributon.jsx';
import GetPoint from '../../components/layout/Getpoint.jsx';
import Projectsp from '../../components/layout/Project.jsx';
import Board from '../../components/layout/Statisticboard.jsx';
import Search from '../../components/search/index.jsx';
import '../../assets/css/page/Sharing.css';
import Sharingstatus from './component/Sharingstatus.jsx';
import CreateSharing from '../../components/create/CreateSharing.jsx';




const Sharing = ()=>{
    const [Dialog,setDialog]=useState(false);
    const handleopen=()=>{
        setDialog(true);
    }
    const handleclose=()=>{
        setDialog(false);
    }
    return (
        <div className="App">
            <CssBaseline/>
                <Search name='Sharing' right={'69%'}/>
                <Container className="container" maxWidth='100%'>
                    <Box display="flex">
                        <Box className="container-Aside">
                          <Aside/>
                        </Box>
                       <Box className='content' flexGrow={1}>
                            <Box p={2}>
                                <Grid container spacing={3}>
                                    <Sharingstatus/>
                                    <Board title='Top 04 Sharing'/>
                                    <Contribution title='Creat a Topic' icon={HomeIcon} detail='Lorem sandisajdoias asidjisadjioas jasodjaisdji' flag={handleopen} create={<CreateSharing open={Dialog} onClose={handleclose}/>}/>
                                    <Projectsp title='All Experience'/>
                                    <GetPoint/>
                                </Grid>
                            </Box>  
                        </Box>
                    </Box>
                </Container>
        </div>
    );
};

export default Sharing;