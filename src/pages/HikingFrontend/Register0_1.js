import React from 'react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Page from 'material-ui-shell/lib/containers/Page';
import TextField from '@material-ui/core/TextField';
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    FormControl:{
        margin: theme.spacing(1),
        width: '-webkit-fill-available',
    },
    container: {
        width: '-webkit-fill-available',
        height: 768,
        padding: '40px 16px 213px',
        backgroundColor: '#ffffff'
      
      //backgroundColor:'#66CBBA'
    },
    Title: {
        width: '-webkit-fill-available',
        height: '36',
        margin: '0 232px 31px 0',
        fontFamily: "NotoSansCJKtc",
        fontSize: '24px',
        fontweight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineheight: '1.5',
        letterspacing: '0.5px',
        color: '#232323'
    },
    Text:{
        width: '33',
        height:'24',
        margin: '0 0 1px 0',
        fontSize: '16px',
        fontWeight: '500',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: '0.5px',
        color: '#232323',
    },
    InputBackground:{
        width: '-webkit-fill-available',
        height: '40',
        margin: '8px 0 31px 0',
        borderColor:'#232323',
    },
    PhoneRegionBackground:{
        width: '123px',
        height: '40',
        margin: '8px 0 31px 0',//not correct position
        padding: '8px 0 0',
    },
    PhoneNumberBackground:{
        width: '240px',
        height: '40',
        margin: '12px 16px 0',//first value need to fix
        padding: '8px 0 0',
    },
    submit: {
        width: '-webkit-fill-available',
        height: '48px',
        margin: '40px 0px 0px 0px',
        backgroundColor: '#00d04c',
        color: '#ffffff',
    },
    ModifyTextFieldColor: {
        // Theme Color, or use css color in quote
        color: '#979797',  
        borderColor:'#979797'
      },
  }));
  const usePlaceholderStyles = makeStyles(theme => ({
    placeholder: {
      color: "#aaa"
    }
  }));
  export default function SignIn() {
    const classes = useStyles();
    const [gender, setGender] = React.useState('');
    const [phoneRegion, setPhoneRegion] = React.useState('');
    const [live, setLive] = React.useState('');
    const handleChange = (event) => {
     setGender(event.target.value);
    };
    const handlePhoneRegion = (event) => {
     setPhoneRegion(event.target.value);
    };
    const handleLiveChange = (event) => {
        setLive(event.target.value);
       };
    const Placeholder = ({ children }) => {
      const classes = usePlaceholderStyles();
      return <div className={classes.placeholder}>{children}</div>;
    };
  
    return (
        
      <Page>
          
        <div className={classes.container}>
          <Typography className={classes.Title } >
            建立個人資料
          </Typography>
          <form className={classes.form} noValidate>
          <Typography className={classes.Text}>
            姓名 
          </Typography>
          <Input className={classes.InputBackground} placeholder="請輸入您的名稱" fullWidth />
          <Typography className={classes.Text} >
            性別
          </Typography>  
          <Select
          className={classes.InputBackground}
          value={gender}
          displayEmpty
          renderValue={
            gender !== "" ? undefined : () => <Placeholder>請輸入您的性別</Placeholder>
          }
          onChange={handleChange}
          >   
            <MenuItem value={1}>男</MenuItem>
            <MenuItem value={2}>女</MenuItem>
          </Select>
          <Typography className={classes.Text} >
            手機
          </Typography>
          <div>
          <Select
          className={classes.PhoneRegionBackground}
          value={phoneRegion}
          displayEmpty
          renderValue={
            phoneRegion !== "" ? undefined : () => <Placeholder>台灣+886</Placeholder>
          }
          onChange={handlePhoneRegion}
          >   
            <MenuItem value={886}>台灣+886</MenuItem>
            <MenuItem value={852}>香港+852</MenuItem>
          </Select>
          <Input className={classes.PhoneNumberBackground} placeholder="請輸您的手機號碼"  fullWidth/>
          </div>
          <Typography className={classes.Text} >
            生日
          </Typography>
          <Input className={classes.InputBackground} defaultValue="5as4fa" type="date" placeholder="請選擇"  fullWidth/>
          <Typography className={classes.Text} >
            居住地
          </Typography>
          <Select
          className={classes.InputBackground}
          value={live}
          displayEmpty
          renderValue={
            live !== "" ? undefined : () => <Placeholder>請選擇</Placeholder>
          }
          onChange={handleLiveChange}
          >   
            <MenuItem value={"Taipei"}>台北市</MenuItem>
            <MenuItem value={"Taichung"}>台中市</MenuItem>
          </Select>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
            同意並註冊
          </Button>
        </form>
      </div>
    </Page>
    );
  }