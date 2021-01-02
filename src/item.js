import React from 'react';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { render } from '@testing-library/react';
import { SdStorageOutlined, Settings } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import Snackbar from '@material-ui/core/Snackbar';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import CloseIcon from '@material-ui/icons/Close';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CheckIcon from '@material-ui/icons/Check';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import cookie from 'react-cookies';
import axios from 'axios';

let checker = false;
let logins;

export function SSTDD(data)
{
    if (data == "correct")
    {
        ReactDOM.render(
            <ListItem button key="main"><ListItemIcon><AccountCircleIcon /></ListItemIcon><ListItemText primary="个人中心" id="showsl"></ListItemText></ListItem>,
            document.getElementById('showsl')
        );
    }
    else
    {
        ReactDOM.render(
            <ListItem button key="login"><ListItemIcon><AccountCircleIcon /></ListItemIcon><ListItemText primary="登录" id="showsl"></ListItemText></ListItem>,
            document.getElementById('showsl')
        );

    }
}

export function CheckLogin()
{   
    // console.log(cookie.load('password'));
    const abc = new URLSearchParams();
    abc.append('username', cookie.load('username'));
    abc.append('password', cookie.load('token'));
    axios({
        method:'post',
        url:'https://talk.lzx.smallfang.fun/backstage/user/login_checker.php',
        data: abc
    })
    .then(function (response) {
        SSTDD(response.data);
    })
    .catch(function (error) {
        SSTDD("error-t2");
    });
    return true;
}

export default function ListItems(prop) 
{
    logins = <ListItem button key="loading"><ListItemIcon><AccountCircleIcon /></ListItemIcon><ListItemText primary="Loading...." id="showsl"></ListItemText></ListItem>;
    CheckLogin(prop.pageTitle);
    if (checker == true)
    {
        //logins = answer;
    }
    checker = true;
    return (
        <List id="">
            <ListItem button key="main" >
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="主页"></ListItemText>
            </ListItem>
            <ListItem button key="set">
                <ListItemIcon><SettingsIcon /></ListItemIcon>
                <ListItemText primary="管理"></ListItemText>
            </ListItem>
            <Divider />
            <div id="showsl">
                {logins}
            </div>
        </List>
    )
}

