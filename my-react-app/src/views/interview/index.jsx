import Aside from "../../components/aside/index";
import Search from "../../components/search";
import GetPoint from "../../components/layout/Getpoint";
import Status from "../../components/layout/Status";
import Contribution from "../../components/layout/Contributon";
import Projectsp from "../../components/layout/Project";
import { useState } from "react";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { CssBaseline,Container,Box,Grid } from "@mui/material";
import Board from "../../components/layout/Statisticboard";
import CreateBidding from "../../components/create/CreateBidding";



const Interview=()=>{
    const [Dialog,setDialog]=useState(false);
    const handleopen=()=>{
        setDialog(true)
   }
    const handleclose=()=>{
        setDialog(false);
    }
    return(
       <div className="App">
            <CssBaseline/>
                <Search name='Interview' right={'68%'}/>
                <Container className="container" maxWidth='100%'>
                    <Box display="flex">
                        <Box className="container-Aside">
                          <Aside/>
                        </Box>
                       <Box className='content' flexGrow={1}>
                       <Box p={2}>
                            <Grid container spacing={3}>
                                <Status title='Interview'/>
                                <Board title='Top 04 Candidates'/>
                                <Contribution icon={Inventory2Icon} title='Create a Interview' detail='Lorems' flag={handleopen} create={<CreateBidding open={Dialog} onClose={handleclose} titles='Create a interview' name='Interview name'/>}/>
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
export default Interview;