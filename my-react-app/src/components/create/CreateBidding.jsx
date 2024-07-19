import React from 'react';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Select, MenuItem, FormControl, Button, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

function CreateBidding(props) {
    const initial = dayjs('2024-07-08');
    const [trainningname, setTrainningName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('In-progress');
    const [employee, setEmployee] = useState('');
    const [date, setDate] = useState(initial);
    const {open,onClose}=props;

    const handleSave = () => {
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} sx={{ width: '100%', height: '70%' }}>
            <DialogTitle fontWeight={'bold'}>{props.titles}</DialogTitle>
            <DialogContent style={{ width: '500px', height: '500px' }}>
                <Stack spacing={2}>
                    <Typography fontWeight={'bold'}>{props.name}</Typography>
                    <TextField label="Trainning program" value={trainningname} onChange={(e) => setTrainningName(e.target.value)} />
                    <Typography fontWeight={'bold'}>Descriptions</Typography>
                    <TextField label="Descriptions" value={description} onChange={(e) => setDescription(e.target.value)} />

                    <Stack direction="row" spacing={2}>
                        <Stack direction={'column'} style={{ width: '50%' }}>
                            <Typography fontWeight={'bold'}>Date</Typography>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Select Date" value={date} onChange={(newDate) => setDate(newDate)} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Stack>
                        <Stack direction="column" style={{ width: '50%' }}>
                            <Typography fontWeight={'bold'}>Status</Typography>
                            <FormControl style={{ paddingTop: '7px' }}>
                                <Select labelId="Status-Label" id='Status' value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <MenuItem value="In-progress">In-Progress</MenuItem>
                                    <MenuItem value="Completed">Completed</MenuItem>
                                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Typography fontWeight={'bold'}>Employees</Typography>
                    <TextField id="outlined-basic" label="Employees" placeholder='Enter an account' value={employee} onChange={(e) => setEmployee(e.target.value)} />
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                        <Button variant='contained' onClick={handleSave}>Save</Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}

export default CreateBidding;
