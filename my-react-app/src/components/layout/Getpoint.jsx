import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';
import '../../assets/css/components/Layout.css'

const GetPoint = () => {
  return (
    <Grid item xs={12} s md={4} className="Grid-container">
      <Paper className="Grid-Point" elevation={10} >
        <Box className="frame-data" textAlign={'left'} display={'block'}>
          <Typography variant="h5" fontWeight={'bold'}>How to get the point</Typography>
          <Typography paddingTop={'25px'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt odio laboriosam, aut sapiente optio! Eius, ut soluta voluptas, exercitationem excepturi aliquam aut provident autem repudiandae alias sapiente! Quisquam, eius.</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default GetPoint;
