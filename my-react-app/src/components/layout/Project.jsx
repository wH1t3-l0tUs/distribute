import React from 'react';
import { Paper, Typography, Box,Grid } from '@mui/material';

const Projectsp = (props) => {
  return (
    <Grid item xs={12} md={8} className="Grid-container">
      <Paper className="Grid-project" elevation={10}>
          <Box className="frame-data" display={'block'} textAlign={'left'}>
              <Typography variant="h5" fontWeight={'bold'}>{props.title}</Typography>
              <Typography paddingTop={'25px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam itaque magnam consectetur? Repellendus rem hic repellat aliquam sequi quia veniam esse quis.</Typography>
          </Box>
      </Paper>
    </Grid>
  );
};

export default Projectsp;
