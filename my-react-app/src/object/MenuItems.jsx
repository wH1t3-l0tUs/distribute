import HomeIcon from '@mui/icons-material/Home';
import GavelIcon from '@mui/icons-material/Gavel';
import CategoryIcon from '@mui/icons-material/Category';
import ShareIcon from '@mui/icons-material/Share';
import FlagIcon from '@mui/icons-material/Flag';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';


const menuItems = [
    { text: 'Dashboard', icon: <HomeIcon />, path:'/' },
    { text: 'Bidding', icon: <GavelIcon /> ,path:'/Bidding'},
    { text: 'Training', icon: <CategoryIcon />,path:'/Trainning' },
    { text: 'Sharing', icon: <ShareIcon />,path:'/Sharing' },
    { text: 'Project Support', icon: <FlagIcon/>,path:'/Project'},
    { text: 'Interview', icon:<PermContactCalendarOutlinedIcon/>,path:'/Interview'},
    { text: 'Certificates', icon: <InsertDriveFileIcon/>,path:'/Cert' },
    { text: 'KPers', icon: <TrackChangesIcon/>,path:'/KPers'},
    { text: 'Others KPI', icon: <BarChartIcon />,path:'/KPI' },
    { text: 'Employees', icon: <PersonIcon />,path:'/Employees'},
  ];


  export default menuItems;