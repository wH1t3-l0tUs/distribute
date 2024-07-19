import Aside from "../../components/aside/index";
import Search from "../../components/search";
import Status from "../../components/layout/Status";
import GetPoint from "../../components/layout/Getpoint";
import Board from "../../components/layout/Statisticboard";
import Contribution from "../../components/layout/Contributon";
import Projectsp from "../../components/layout/Project";
import { Grid,Box,CssBaseline,Container } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useState } from "react";
import AddCert from '../../components/create/CreateCert.jsx'

function Cert(){
    const [Dialog,setDialog]=useState(false);
    const handleopen=()=>{
        setDialog(true);
    }
    const handleclose=()=>{
        setDialog(false);
    }
    return(
    <div className="App">
        <CssBaseline/>
            <Search name ='Certificate' right={'67%'}/>
            <Container className="container" maxWidth='100%'>
                <Box display="flex">
                    <Box className="container-Aside">
                      <Aside/>
                    </Box>
                   <Box className='content' flexGrow={1}>
                   <Box p={2}>
                        <Grid container spacing={3}>
                            <Status title='Certificates'/>
                            <Board title='Top 04 Cert'/>
                            <Contribution icon={WorkspacePremiumIcon} title='Add a certificate' detail='Loremsda asdad asddasd asddasdad a' flag={handleopen} create={<AddCert open={Dialog} onClose={handleclose}/>}/>
                            <Projectsp title='All certificates'/>
                            <GetPoint/>
                        </Grid>
                    </Box>  
                    </Box>
                </Box>
            </Container>
    </div>
    );
};
export default Cert;