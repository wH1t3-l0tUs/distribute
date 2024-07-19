import BarChartIcon from '@mui/icons-material/BarChart';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import HomeIcon from '@mui/icons-material/Home';
import WindowIcon from '@mui/icons-material/Window';
import { Box, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import '../css/dashboard.css';


const data = [
  { name: 'SEP', Revenue: 30, Profit: 12 },
  { name: 'OCT', Revenue: 45, Profit: 20 },
  { name: 'NOV', Revenue: 48, Profit: 24 },
  { name: 'DEC', Revenue: 40, Profit: 18 },
  { name: 'JAN', Revenue: 55, Profit: 28 },
  { name: 'FEB', Revenue: 50, Profit: 26 },
];

const initialweeklyData = [
  { name: '17', Revenue: 40, Profit: 20 },
  { name: '18', Revenue: 50, Profit: 25 },
  { name: '19', Revenue: 60, Profit: 30 },
  { name: '20', Revenue: 70, Profit: 35 },
  { name: '21', Revenue: 80, Profit: 40 },
  { name: '22', Revenue: 90, Profit: 45 },
  { name: '23', Revenue: 100, Profit: 50 },
  { name: '24', Revenue: 110, Profit: 55 },
  { name: '25', Revenue: 120, Profit: 60 },
];


const initialBoxItems=[
  {text: 'Earning', price:'$340.5', icon: <BarChartIcon className='icon'/> },
  {text: 'Spend this month',price: '$642.39',icon: <FolderCopyIcon className='icon'/>},
  {text: 'Sales', price:'$574.34',icon:<BarChartIcon className='icon'/>},
  {text: 'Your Balance',price:'$1,000',icon: <WindowIcon className='icon'/>},
  {text: 'New Tasks',price:'145',icon: <BarChartIcon className='icon'/>},
  {text: 'Total Projects',price:'2433',icon: <HomeIcon className='icon'/>},
];


const Dashboard = () => {
  const [weeklyData,setWeeklyData] = useState(initialweeklyData);
  const [boxItems,setBoxItems] = useState(initialBoxItems);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/value')
      .then(response => {
        const { boxPrices, weeklyData } = response.data;
        const updatedBoxItems = initialBoxItems.map((item, index) => ({
          ...item,
          price: boxPrices[index].price,
        }));
        setBoxItems(updatedBoxItems);
        setWeeklyData(weeklyData);
      })
      .catch(error => {
        console.error('Failed' + error);
      });
  }, []);


  return (
    <Box p={2} >
      <Grid container spacing={3}>
        {boxItems.map((item,index)=>(
          <Grid item xs={12} sm={6} md={4} className='container'>
            <Paper className='frame' style={{borderRadius:25}} elevation={10}>
              <Box className='DB-frame-data'>
                <Box className='circle'>
                    <Box key={index}>{item.icon}</Box>
                </Box>
                <Box ml={1}>
                  <Typography variant='h6'>{item.text}</Typography>
                  <Typography variant='h4'>{item.price}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={12} md={6}>
          <Paper className='box' >
            <Box p={2}>
              <Typography variant="h6">This month</Typography>
              <Typography variant="h4">$37.5K</Typography>
              <Typography variant="subtitle1">Total Spent <span style={{ color: 'green' }}>+2.45%</span></Typography>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="Profit" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6">Weekly Revenue</Typography>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Revenue" fill="#8884d8" />
                  <Bar dataKey="Profit" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
