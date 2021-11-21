import React, {useState} from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function NavBar() {
    // const navigate = useNavigate();
    // const location = useLocation();
    // const [log, setLog] = useState('Login');
    const [theme, setTheme] = useState(true);
    // const { id } = useParams();
  
    // useEffect(() => {
    //   if(localStorage.getItem('authorized') === '1'){
    //     setLog('Logout');
    //   }
    // }, [])
  
    // const handleLogin = (event) => {
    //     if (localStorage.getItem('authorized') === '1'){
    //       localStorage.setItem('authorized', '0');
    //       navigate('/login');
    //     }
    //     navigate('/login')
    // }
    return (
        <div>

            <Menu inverted color={theme ? "black": "blue"}>
            <Switch onChange={(e)=>setTheme(e.target.checked)} {...label} />
                <Container>
                <Link to='/'>
                <Menu.Item name='Home'/>
                </Link>
            
                <Link to='/login'>
                <Menu.Item name='login'/>
                </Link>

                <Link to='/'>
                <Menu.Item name='pagination'/>
                </Link>

                <Link to='*'></Link>
                </Container>
            </Menu>
            

        </div>
    )

}