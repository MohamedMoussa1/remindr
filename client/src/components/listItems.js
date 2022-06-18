import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="/dashboard">
      <ListItemIcon>
        <NotificationsActiveIcon />
      </ListItemIcon>
      <ListItemText primary="Reminders" />
    </ListItemButton>
    <ListItemButton href="/patients">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Patients" />
    </ListItemButton>
    <ListItemButton href='/logout'>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);