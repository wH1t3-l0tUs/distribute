import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import '../../assets/css/components/Aside.css';
import menuItems from "../../object/MenuItems";


const Aside = () =>{

    return (
        <Box className='aside'>
            <Box className='aside-text'>
                <Typography variant='h4'>GST.Q7</Typography>
                <Typography variant='h6'>CONTRIBUTION POINT</Typography>
            </Box>
            <Divider variant="fullWidth"></Divider>
            <Box className='aside-list'>
                <List>
                {menuItems.map((item, index) => (
                    <ListItem button component={Link} to={item.path} key={index} className='list'>
                        <ListItemIcon className='list-icon'>{item.icon}</ListItemIcon>
                        <ListItemText className='list-text' primary={item.text} />
                    </ListItem>
                ))}
                </List>
            </Box>
        </Box>
    )

}

export default Aside;