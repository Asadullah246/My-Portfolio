import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";
import myPic from "../images/myPicture.png"
import resume from "../PDF/resume.pdf"
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    marginTop: "40vh",
    // height: "max-content",
    textAlign: "center",
    zIndex: 1,
  },
}));
const useStyle = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100vh",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));
const projects = [
  {
    name: "Bike Parts Manufacturer",
    description: `A website that keeps bike parts in stock. A user can see the parts and buy them. An admin can add and remove parts. An admin also make a user to a admin.`,
    image: project4,
    demoLink: "https://bikeparts-b2bb7.web.app/",
  },
  {
    name: "Car Warehouse",
    description: `It is a car warehouse website. Users can see the cars and it's details. They can add and remove cars`,
    image: project4,
    demoLink: "https://car-inventory-7c113.web.app/",
  },
  {
    name: "Gym Trainer",
    description: `It is a gym trainer services website. Users can see the trainers and it's services. They can take some kind of service as their needs. `,
    image: project1,
    demoLink: "https://personal-gym-trainer-c42fc.web.app/",
  },

];

const Header = () => {
  const classes = useStyles();
  const allClass = useStyle();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={myPic} alt="Asadullah" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["MD Asadullah"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "React Developer",

          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <div style={{ margin: "80px auto" }}>

        <a href={resume} style={{ color: "#FF6347", backgroundColor: "#223333", display: "inline-block", width: "270px", padding: "10px", textAlign: "center", fontSize: "1.2em", border: "1px solid #A69476", borderRadius: "5px", fontWeight: "bold", cursor: "pointer", textDecoration: "none" }} download>Download Resume</a>
      </div>

      {/* projects  */}

      <h2 style={{marginTop:"90px",color: "#FF6347" , fontWeight: "bold", fontSize:"2em", textDecoration:"underline"}}>MY PROJECTS</h2>
      
        <Grid container justify="center">
        
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={allClass.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                  <Button size="small" color="primary"> <a href={project.demoLink} target="_blank">Live Demo</a>

                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      
    </Box>

  );
};

export default Header;
