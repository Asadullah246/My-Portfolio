import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import emailjs from '@emailjs/browser';
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[description, setDescription] = useState("");
  const[error, setError] = useState("");
  const[success, setSuccess] = useState("");
  
  const userName=(e)=>{
 setName(e.target.value)
  }
  const userEmail=(e)=>{
    setEmail(e.target.value)
  }
  const userDescription=(e)=>{
    setDescription(e.target.value)
  }

  const formSubmit=(e)=>{
    e.preventDefault();
    console.log(name, email, description)
    const templateParams = {
      name: name,
      email: email,
      description: description,
  };
    emailjs.send('service_sgi3hat','template_dht28wl', templateParams, 'RfpSlyoQDXNOWTQGE')
	.then((response) => {
	   setSuccess("Message sent successfully")
     setError("")
	}, (err) => {
setError(err)
setSuccess("")
	});
    
  }
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form} onSubmit={formSubmit}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ className: classes.input }}
            onChange={userName}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
            onChange={userEmail}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
            onChange={userDescription}
          />
          <p style={{color:"white"}}>{success} </p>
          <p style={{color:"white"}}>{error} </p>
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button} type="submit"
            
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
