import React, { Component } from 'react';
import { Route, MemoryRouter } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import Link from '@material-ui/core/Link';
import axios from 'axios';
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
import { FormatColorResetSharp, Settings } from '@material-ui/icons';
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
import ListItems from '../src/item';
import onclickst from '../src/ost';
import MuiAlert from '@material-ui/lab/Alert';
import cookie from 'react-cookies';
import { green, purple } from '@material-ui/core/colors';
var crypto = require('crypto');

const drawerWidth = 240;

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  root: {
    display: 'flex',
    width: '100%',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const AccuseStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function md5(password) {
  var md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
}

//md5
function md5ten(password)
{
  var res = password;
  for (var i = 1; i <= 10; i ++ )
  {
    res = md5(res);
  }
  return res;
}



export function ShowMessages(prop) {  
  let message = prop.message;
  let vals = prop.val;
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    open: true,
    vertical: 'bottom',
    horizontal: 'right',
  });
  const handleClick = () => {
    setOpen(true);
  };
  let abc = {
    showElem:'none'
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <div style={{display:abc.showElem}}><button onClick={handleClick} id="showmessage" /></div>
      <Snackbar id='messaget' open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={vals}>
          {message}
        </Alert>
      </Snackbar> 
    </div>
  );
}

function ReadyDoing(data, token, usernamet)
{
  console.log(data);
  if (data == "ntf 1")
  {
    ReactDOM.render(
      <ShowMessages message="请输入用户名" val="error" />,
      document.getElementById('notice')
    );
  }
  else if (data == "ntf 2")
  {
    ReactDOM.render(
      <ShowMessages message="请输入密码" val="error" />,
      document.getElementById('notice')
    );
  }
  else if (data == "wrong" || data == "not_exist")
  {
    ReactDOM.render(
      <ShowMessages message="密码或者用户名错误" val="error" />,
      document.getElementById('notice')
    );
  }
  else if (data == "correct")
  {
    ReactDOM.render(
      <ShowMessages message="注册成功" val="success" />,
      document.getElementById('notice')
    );
    console.log("test");
  }
  else
  {
    ReactDOM.render(
      <ShowMessages message="未知错误..." val="error" />,
      document.getElementById('notice')
    );
  }
  document.getElementById('showmessage').click();
}

let idf;

function postss()
{
  let usernamet = document.getElementById('usernames').value;
  let passwordt = document.getElementById('passwords').value;
  let vcodet = document.getElementById('v_code').value;

  passwordt = md5ten(passwordt);
  console.log(passwordt);
  const abc = new URLSearchParams();
  abc.append('username', usernamet);
  abc.append('password', passwordt);
  abc.append('v_code_va', vcodet);
  abc.append('v_code_id', idf);
  axios({
    method:'post',
    url:'https://talk.lzx.smallfang.fun/backstage/user/make_new.php',
    data: abc
  })
  .then(function (response) {
    ReadyDoing(response.data, passwordt, usernamet);
  })
  .catch(function (error) {
    console.log(error);
    ReadyDoing("error-t");
  });
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

let ts;

export function ShowErrorMessage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          服务器正忙，请稍后再试！
        </Alert>
      </Snackbar>
    </div>
  );
}

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

function resetChecker()
{
    axios({
        url:'https://talk.lzx.smallfang.fun/backstage/v_code/get_new.php',
      })
      .then(function (response) {
          let dt = response.data;
          document.getElementById('fst').src = "https://" + dt.image;
          idf = dt.id;
       })
      .catch(function (error) {
        console.log(error);
        ReadyDoing("error-t");
      });
}

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
        backgroundColor: purple[700],
        },
    },
}))(Button);

export function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
          <center>
            <Button variant="contained" onClick={submits} color="primary">
                注册
            </Button>
            &nbsp;
            <Button variant="contained" onClick={handleClickOpen}>
                帮助
            </Button>
            &nbsp;  
            <ColorButton variant="contained" onClick={resetChecker} color="primary">
            重新加载验证码
            </ColorButton>
          </center>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    注册 | 帮助
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        欢乐好心情❤~
                        <br />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export function submits()
{
  postss();
}

export function TitleShow(prop) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h1">
          注册
        </Typography>
      </CardContent>
    </Card>
  );
}

let imgsrc;

export function ShowVCode()
{
  let ts;
  if (imgsrc != "error")
  {
     ts = <img id="fst" src={imgsrc} />;
  }
  else
  {
     ts = <ShowErrorMessage />;
  }
  return (
    <div>
      <TextField id="v_code" label="验证码" />
      {ts}
    </ div>
  );
}

export function LoginShow(prop) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.root}>
      <CardContent>
          <Typography variant="body2" component="p">
            <TextField id="usernames" label="用户名" />
            <br />
            <TextField id="passwords" type="password" label="密码" />
            <br />
            <ShowVCode />
            <br />
          </Typography>
          <br />
          <CustomizedDialogs />
      </CardContent>
    </Card>
  );
}



export async function getServerSideProps() {
  const res = await fetch('https://talk.lzx.smallfang.fun/backstage/v_code/get_new.php');
  try
  {
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    }
  }
  catch(err)
  {
    const posts = {"image":"error"};
    return {
      props: {
        posts,
      },
    }
  }
}



export function onclicksf(prop)
{
  let t = onclickst(prop);
  if (t != "no")
  {
    window.location.href=t;
  }
}


export default function Header({posts, ten}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };  
    idf = posts.id;
    if (posts.image != "error")
    {
      imgsrc = "https://" + posts.image;
    }
    else
    {
      imgsrc = "error";
    }
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              GU | Register
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}  
          onClick={onclicksf}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
            <ListItems pageTitle="login" />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
            <TitleShow />
            <br />
            <LoginShow />
          <div id="notice" />
        </main>
      </div>
    );
}