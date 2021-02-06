import React from 'react';
import './Login1.css';
import FormInputLabel from '../components/FormInputLabel';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  MaterialIconsBlackArrowback: {
    width: 24,
    height: 24,
    color: '#00d04c',
    margin: '0 355px 61px 0',
  },
  Tcontainer: {
    width: 411,
    height: 768,
    padding: '40px 16px 48px',
    Color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
});

function Login1() {
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
      <div className={classes.Tcontainer}>
        <ArrowBackIcon className="MaterialIcons-blackArrow-back" onClick={backhandleClick} ></ArrowBackIcon>
        <div className="title">登入</div>
        <FormInputLabel label={'電子信箱'} placeholder={'請輸入電子信箱'} id={'useremail'} />
        <hr className="divider"></hr>
        <div className="error-info">錯誤資訊</div>
        <FormInputLabel label={'密碼'} placeholder={'請輸入密碼'} id={'userpassword'} />
        <hr className="divider"></hr>
        <div>
          <p  className="error-info">錯誤資訊</p>
          <p  className="forgot-password" ><Link to="/forgotPassword">忘記密碼</Link></p>
        </div>
        <Button className="Rectangle" variant="contained" color="primary" fullWidth="true"  onClick={handleClick}>繼續</Button>
      </div>
    );
}

export default Login1;