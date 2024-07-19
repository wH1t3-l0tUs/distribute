import React from 'react';
import { useState } from 'react';
import { Dialog,DialogTitle,DialogContent,TextField,Select,MenuItem,FormControl,InputLabel,Button,Stack,Typography } from '@mui/material';
import { Form } from 'react-router-dom';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';


function CreateProject({open,onClose}){
    const [projectName,setProjectName]=useState('');
    const [description,setDescription]= useState('');
    const [status,setStatus]=useState('In-progess');
    const [employee,setemployee]=useState('');
    const [startdate,setstartdate]=useState(dayjs());
    const [enddate,setenddate]=useState(dayjs());
    const FormDate = (props) => {
        return (
        <Stack direction={'column'} style={{width:50%}}>
            <Typography fontWeight={'bold'}>{props.title}</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker label='09/01/2004' value={startdate} onChange={(e)=>setstartdate(e.target.value)}/>
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
            <DialogTitle fontWeight={'bold'}>Create a Task</DialogTitle>
            <DialogContent style={{width:"500px",height:'500px'}}>
                <Stack spacing={2}>
                    <Typography fontWeight={'bold'}>Project</Typography>
                    <TextField label="Project name" value={projectName} onChange={(e)=>setProjectName(e.target.value)}/>
                    <Typography fontWeight={'bold'}>Decriptions</Typography>
                    <TextField label="Decriptions" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    <Stack direction="row" spacing={2}>
                       <FormDate title='Start Date'/>
                       <FormDate title='End Date'/>
                    </Stack>
                    <Typography fontWeight={'bold'}>Employees</Typography>
                    <TextField id="outlined-basic" label="Employees" placeholder='Enter an account'/>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant='contained' color="success" onClick={handleSave}>Save</Button>
                        <Button variant='contained' color="warning" onClick={onClose}>Cancel</Button>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default CreateProject;