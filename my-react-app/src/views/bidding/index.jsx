import GavelIcon from '@mui/icons-material/Gavel';
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import React, { useState } from 'react';
import Aside from "../../components/aside/index.jsx";
import CreateBidding from '../../components/create/CreateBidding.jsx';
import Contribution from '../../components/layout/Contributon.jsx';
import GetPoint from '../../components/layout/Getpoint.jsx';
import Projectsp from '../../components/layout/Project.jsx';
import Board from '../../components/layout/Statisticboard.jsx';
import Search from '../../components/search/index.jsx';
import '../../assets/css/page/Bidding.css';
import BiddingStatus from "./component/Biddingstatus.jsx";



function Bidding(){
    const [Dialog,setdialog]=useState(false);
    const handleopen=()=>{
        setdialog(true);
    }
    const handleclose=()=>{
        setdialog(false);
    }
    return(
        <div className="Bid-App">
            <CssBaseline/>
                <Search name='Bidding'/>
                <Container className="Bid-container" maxWidth='100%'>
                    <Box display="flex">
                        <Box className="container-Aside">
                          <Aside/>
                        </Box>
                       <Box className='content' flexGrow={1}>
                        
                            <Box p={2}>
                                <Grid container spacing={3}>
                                    <BiddingStatus/>
                                    <Board title='Top4 Bidding status'/>
                                    <Contribution detail='Lorems loird abc fiusdk kkskdaksdkka aksjdalksd jasdlkjaksj ajsdkjaskl asidklsadj ' title='Create a Bidding status' icon={GavelIcon} flag={handleopen} create={<CreateBidding open={Dialog} onClose={handleclose} titles='Create a Bidding status' name='Bidding name'/>}/>
                                    <Projectsp title='All Bidding Projects'/>
                                    <GetPoint/>
                                </Grid>
                            </Box>  
                        </Box>
                    </Box>
                </Container>
        </div>
    );
};

export default Bidding;