import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import Aside from '../../components/aside/index.jsx';
import Search from '../../components/search/index.jsx';
import '../../assets/css/page/DashBoard.css';
import Dashboard from './component/dashboard.jsx';


function DashboardUI() {
  return (
    <div className='DB-App'>
        <CssBaseline />
        <Search elevation={10} name='DashBoard' right={'65%'}/>
        <Container className='container' maxWidth='100%' >
          <Box display="flex">
            <Box className="container-Aside">
              <Aside/>
            </Box>
            <Box className='content'>
              <Dashboard/>
            </Box>
          </Box>
      </Container>
    </div>
  );
}

export default DashboardUI;
