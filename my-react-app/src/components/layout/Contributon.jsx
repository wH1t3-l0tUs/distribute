import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import "../../views/trainning/css/trainning.css";

const Contribution = (props) => {
    const [Dialog,setDialog]=useState('false');
    const handleopen=()=>{
        setDialog(true);
    }
    const handleclose=()=>{
        setDialog(false);
    }
       
  return (
    <Grid item xs={12} sm={6} md={4} className="Grid-container">
        <Paper className='Grid-frame' elevation={10}>
        <Box className='frame-data' textAlign={'left'}>
            <Typography variant="h5" fontWeight={'bold'}>Create Contribution</Typography>
            <Paper className='box-icon'>
            <props.icon style={{fontSize:'80', color:'#6633FF'}}/>
            <Typography variant='h5' fontWeight={'bold'} color={'#6633FF'}>{props.title}</Typography>
            </Paper>
            <Box paddingTop={'20px'} fontWeight={'100'}>
            <Typography style={{opacity:'0.7'}}>{props.detail}</Typography>
            </Box>
            <Box textAlign={'center'} marginTop={'25px'}>
            <Button variant='contained' onClick={props.flag} style={{display:'inline-block',fontSize:'15px'}}>Create now</Button>
            {props.create}
            </Box>
        </Box>
        </Paper>
    </Grid>
  );
};

export default Contribution;
