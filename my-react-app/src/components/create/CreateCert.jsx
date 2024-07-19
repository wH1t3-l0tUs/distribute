import { Box, Button, Dialog, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React, { useState } from 'react';

function AddCert({open,onClose}){
    const [projectName,setProjectName]=useState('');
    const [startdate,setstartdate]=useState(dayjs());
    const [enddate,setenddate]=useState(dayjs());
    
    const handleSave=()=>{
        onclose();
    };
    return(
        <Dialog open={open} onClose={onClose} sx={{width:'100%',height:'60%'}}>
            <DialogTitle fontWeight={'bold'}>Update a Achievement</DialogTitle>
            <DialogContent style={{width:"500px",height:'500px'}}>
                <Stack spacing={2}>
                    <Typography fontWeight={'bold'}>Certificates</Typography>
                    <TextField label="Enter a Certificate names" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
                    <Typography fontWeight={'bold'}>Employees</Typography>
                    <TextField label="Enter an account" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
                    
                    <Box sm={{width:'100%'}} >
                        <Stack direction={'column'} sx={{width:'100%'}} spacing={{xs:1,sm:1}}>
                            <Typography fontWeight={'bold'}>Issued Date</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']} sx={{width:'100%'}}>
                                    <DatePicker label="09/01/2004" value={startdate} onChange={(e)=>setstartdate(e.targer.value)} sx={{ width: '100%' }}/>
                                </DemoContainer>
                            </LocalizationProvider>
                         </Stack>
                    </Box>
                    
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant='contained' color="success" onClick={handleSave}>Save</Button>
                        <Button variant='contained' color="warning" onClick={onClose}>Cancel</Button>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default AddCert;