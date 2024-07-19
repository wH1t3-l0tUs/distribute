import { Button, Dialog, DialogContent, DialogTitle, FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import React, { useState } from 'react';

function Creatkper({open,onClose}){
    const [projectName,setProjectName]=useState('');
    const [status,setStatus]=useState('In-progess');
    const [startdate,setstartdate]=useState(dayjs());
    const FormDate =(props)=>{
        return (
        <Stack direction={'column'} style={{width:'50%'}}>
            <Typography fontWeight={'bold'}>{props.title}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label="09/01/2004" value={startdate} onChange={(e)=>setstartdate(e.targer.value)}/>
                </DemoContainer>
            </LocalizationProvider>
         </Stack>
        )
    }
    const handleSave=()=>{
        onclose();
    };
    return(
        <Dialog open={open} onClose={onClose} sx={{width:'100%',height:'70%'}}>
            <DialogTitle fontWeight={'bold'}>Create a Kper</DialogTitle>
            <DialogContent style={{width:"500px",height:'500px'}}>
                <Stack spacing={2}>
                    <Typography fontWeight={'bold'}>Name</Typography>
                    <TextField label="Account name" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
                    <Stack direction="column" style={{ width: '100%' }}>
                            <Typography fontWeight={'bold'}>Other Type</Typography>
                            <FormControl style={{ paddingTop: '7px' }}>
                                <Select label="Join Contest" labelId="Status-Label" id='Status' value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <MenuItem value="In-progress">In-Progress</MenuItem>
                                    <MenuItem value="Completed">Completed</MenuItem>
                                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                                </Select>
                            </FormControl>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                       <FormDate title='Start Date'/>
                       <FormDate title='End Date'/>
                    </Stack>
                    <Typography fontWeight={'bold'}>Note</Typography>
                    <TextField id="outlined-basic" label="notes" placeholder='Enter an account'/>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant='contained' color="success" onClick={handleSave}>Save</Button>
                        <Button variant='contained' color="warning" onClick={onClose}>Cancel</Button>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default Creatkper;