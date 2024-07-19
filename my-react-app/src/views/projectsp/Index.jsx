import Projectsp from "../../components/layout/Project";
import Board from "../../components/layout/Statisticboard";
import GetPoint from "../../components/layout/Getpoint";
import Aside from "../../components/aside/index";
import Search from "../../components/search";
import Contribution from "../../components/layout/Contributon"; 
import '../../assets/css/page/Formlayout.css';
import FlagIcon from '@mui/icons-material/Flag';
import { Box,Grid,Container,CssBaseline } from "@mui/material";
import Status from "../../components/layout/Status";
import CreateTrainning from "../../components/create/CreateTrainning";
import { useState } from "react";


function Project(){
    const [Dialog,setDialog]=useState(false);
    const handleopen=()=>{
        setDialog(true);
    }
    const handleclose=()=>{
        setDialog(false);
    }
    return(
        <div className="Bid-App">
           <CssBaseline/>
            <Search name='Project'/>
            <Container className="Bid-container" maxWidth='100%'>
                <Box display="flex">
                    <Box className="container-Aside">
                      <Aside/>
                    </Box>
                   <Box className='content' flexGrow={1}>
                   <Box p={2}>
                        <Grid container spacing={3}>
                            <Status title='Project status' username='Thanh-218'/>
                            <Board title='Top Project'/> 
                            <Contribution flag={handleopen} icon={FlagIcon} title='Create a Topic' detail='Lorems mashuy ajds kdsao ,masjdi idoa jkjiosi  asijd jasid jiajsdi  asidjiajsd ijis  i' create={<CreateTrainning open={Dialog} onClose={handleclose}/>}/>
                            <Projectsp title='All Project Support'/>
                            <GetPoint/>
                        </Grid>
                    </Box>  
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Project;
