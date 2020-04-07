import React from 'react';
import './Contact.css';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';


const Contact = ({firstName, phone, gender}) => {
  let nameClass = "fa fa";
  let gen ="";

  if (gender === "male") {
              nameClass += "-male";
              gen = "М";
            }
            else if (gender === "female") {
              nameClass += "-female";
              gen = "Ж";
            }
            else {
              nameClass += "-horse-head";
            }

  const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500], 
  },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {gender === "male" || gender ==="female" ? 
      <Avatar  className={classes.orange } >
      {gen}
      </Avatar>
      :  <Avatar src="/broken-image.jpg" /> }
      
      <div className="contactInfo">
        {firstName }<br/>
        {phone}<br/>
        <Icon style={{ width: '23px', height : '22px', color : "black" }}className={nameClass}/>{gender}
      </div>         
    </div>
  );
  }

  export default Contact;
