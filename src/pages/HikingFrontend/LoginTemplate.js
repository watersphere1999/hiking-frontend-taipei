import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    width: 411,
    height: 768,
    padding: '40px 16px 48px',
    backgroundColor: '#ffffff'
  },

  MaterialIconsBlackArrowback :{
    width: 24,
    height: 24,
    color: '#00d04c',
    margin: '0 355px 61px 0',
  },
  InputBackground:{
    width: 379,
    height: 40,
    margin: '1px 0 0',
    padding: '9px 0 0',
  },
  Title:{
    width: 98,
    height: 36,
    margin: '0 281px 31px 0',
    font: "NotoSansCJKtc",
    fontSize: 24,
    fontweight: 500,
    lineheight: 1.5,
    letterspacing: '0.5px',
    color: '#232323'
  },
  Text:{
    width: 66,
    height: 24,
    margin: '0 313px 1px 0',
    font:"NotoSansCJKtc",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    color: '#232323'
  },
  ErrorInfo:{
    width: 65,
    height: 21,
    margin: '16px 263px 55px 0',
    font: "NotoSansCJKtc",
    fontSize: 14,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    color: '#ff3b30'
  }
}));

export default function SignIn() {
  const classes = useStyles();
  let history = useHistory();
  let back = useHistory();
  function handleClick() {
    history.push("/PersonalPage");
  }
  function backhandleClick() {
    back.push("/");
  }

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <ArrowBackIcon className={classes.MaterialIconsBlackArrowback} onClick={backhandleClick} ></ArrowBackIcon>
        <Typography className={classes.Title} component="h1" variant="h5" textAlign="left">
          登入
        </Typography>
        <form className={classes.form} noValidate>
        <Typography className={classes.Text}  textAlign="left">
          電子信箱
        </Typography>   
          <TextField
            className={classes.InputBackground}
            margin="normal"
            fullWidth
            id="email"
            label="請輸入你的電子信箱"
            name="email"
            noValidate autoComplete="off"
          />
        <Typography className={classes.ErrorInfo}  textAlign="left">
          錯誤資訊
        </Typography>  
        <Typography className={classes.Text}  textAlign="left">
          密碼
        </Typography>  
          <TextField
            className={classes.InputBackground}
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Typography className={classes.ErrorInfo}  textAlign="left">
          錯誤資訊
          </Typography>  
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            登入
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}