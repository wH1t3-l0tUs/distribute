import { Toolbar,Box,InputBase,Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';  
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../../assets/css/components/Search.css'
import {Link} from "react-router-dom";


const Search = (props) =>{
    return (
        <Box >
            <Box className='title' right={props.right}>
                <Typography variant="h5">Pages/{props.name}</Typography>
                <Typography variant="h3">{props.name}</Typography>
            </Box>
            <Box className='toolbar-container' elevation={10}>
                <Toolbar className='toolbar'>
                    
                    <Box display="flex" alignItems="center">
                        <Box className='search' p={1} mr={2}>
                            <SearchIcon className="icon"/>
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                style={{ marginLeft: 8, color: 'inherit' }}
                            />
                        </Box>
                    <NotificationsNoneOutlinedIcon className='icon'/>
                    <InfoOutlinedIcon className='icon'/>
                    <DarkModeIcon className='icon'/>
                    <Link to='/Login'>
                      <AccountCircleIcon  style={{ fontSize: 40 }} />
                    </Link>
                    </Box>
                </Toolbar>
            </Box>
        </Box>  
    )
}
export default Search;