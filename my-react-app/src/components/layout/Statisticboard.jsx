import React from 'react';
import { Paper,Box, Typography,Grid,Divider } from '@mui/material';

const Board = (props) =>{
    return (
            <Grid item xs={12} sm={6} md={4} className="Grid-container">
                <Paper className="Grid-frame" elevation={10}>
                    <Box className="frame-data">
                        <Typography variant="h5" style={{fontWeight:'bold'  }}>{props.title}</Typography>
                    </Box>
                    <Grid container justifyContent="center" spacing={14} style={{paddingTop:'10%'}}>
                        <Grid item>
                        <Typography variant="body1" sx={{ color: 'grey.600' }}>
                            Account
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="body1" sx={{ color: 'grey.600'}}>
                            Extra Point
                        </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" sx={{ color: 'grey.600' }}>
                                S Point
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ marginTop: 1 }} />
                </Paper>
            </Grid>
    );
};

export default Board;