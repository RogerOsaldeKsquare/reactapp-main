import React, {useState} from 'react';
import {Menu, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import { Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function NavBar() {
    const [theme, setTheme] = useState(true);
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