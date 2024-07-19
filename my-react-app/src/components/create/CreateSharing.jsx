import { Box, Button, Dialog, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React, { useState } from 'react';

function CreateSharing({open,onClose}){
    const [projectName,setProjectName]=useState('');
    const [description,setDescription]= useState('');
    const [employee,setemployee]=useState('');
    const [startdate,setstartdate]=useState(dayjs());
    
    const handleSave=()=>{
        onclose();
    };
    return(
        <Dialog open={open} onClose={onClose} sx={{width:'100%',height:'80%'}}>
            <DialogTitle fontWeight={'bold'}>Create a Topic</DialogTitle>
            <DialogContent style={{width:"500px",height:'550px'}}>
                <Stack direction={'column'} spacing={2}>
                    <Typography fontWeight={'bold'}>Sharing Topic</Typography>
                    <TextField label="Project name" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
                    <Typography fontWeight={'bold'}>Decriptions</Typography>
                    <TextField label="Decriptions" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    
                    <Box width={'100%'}>
                            <Typography fontWeight={'bold'}>Start Date</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DemoContainer components={['DatePicker']} sx={{width:'100%'}}>
                                    <DatePicker label="09/01/2004" value={startdate} onChange={(e)=>setstartdate(e.target.value)} sx={{width:'100%'}}/>
                                </DemoContainer>
                            </LocalizationProvider>
                    </Box>
                    <Typography fontWeight={'bold'}>Employees</Typography>
                    <TextField id="outlined-basic" label="Employees" placeholder='Enter an account' value={employee} onChange={(e)=>setemployee(e.target.value)}/>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant='contained' color="success" onClick={handleSave}>Save</Button>
                        <Button variant='contained' color="warning" onClick={onClose}>Cancel</Button>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default CreateSharing;