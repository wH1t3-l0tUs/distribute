import React from 'react';
import { Paper, Avatar, Typography, Box, Grid } from '@mui/material';

const Trainningstatus = () => {
  return (
        <Grid item xs={12} sm={6} md={4} className="Grid-container">
            <Paper className="Grid-frame" elevation={10}>
                <Box className="Bidding-frame-data">
                    <Box className="quarter-top" >
                    </Box>
                    <Box className='avatar'>
                    <Avatar alt="React" src="public\logo192.png"  sx={{ width: 90, height: 90 }}>A</Avatar>
                    </Box>
                    <Box className="quarter-bot">
                        <Typography variant='h6'>PIC:ToanPT6</Typography>
                        <Typography variant='h5' style={{fontWeight:'bold'}}>Trainning status</Typography>
                    </Box>
                    <Box className='value'>
                        <Grid container spacing={5} justifyContent={'center'}>
                            <Grid item>
                                <Typography variant='h4' color={{color:'black',fontWeight:'bold'}}>0</Typography>
                                <Typography>Total Program</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </Grid>
  );
};

export default Trainningstatus;