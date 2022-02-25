import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";

import Theme from '../../../utils/pallete/index.jsx'


import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((Theme) => ({
  root: {
    display: "flex",
    height:"580px",
    padding:"10px",
     marginTop:'20px'
 
  },
  leftAside:{
      display:"flex",
     "flex-direction":"column",
      "align-items":"start",
      "justify-content":"space-around",
       width:"40%",
       padding:"10px 50px",
       height:'65%'
  },
  rightAside:{

      alignItems:"start",
     
       width:"60%",
       padding:"10px 50px"
  },
  title: {
    fontSize:"2rem",
    color:"#000000", 
     "mix-blend-mode": "normal",
     },subtitle:{

fontFamily: "Roboto",
fontStyle:" normal",
fontWeight: "300",
fontSize: "17px",
lineHeight: "32px",
color: "#7D7987;"
     
  } ,
  button:{
borderRadius: "55px",
background:"primary"
  }

}));






const Image = styled.img`
    
 display:flex;
 align-self:end;
 width:90%;

`;



export default function MiddleBannerA() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
    <ThemeProvider  theme={Theme}>
    <Box className={classes.rightAside}> 
          <Image src={`${process.env.PUBLIC_URL}m1.svg`} />
          </Box>
          
          <Box className={classes.leftAside}> 
            <Typography  className={classes.title} variant="h3">
            Leading healthcare providers
            </Typography>
         
            <Typography  className={classes.subtitle} variant="subtitle1">
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
          in the solutions we deliver
             for everyone
            </Typography>
            <Button className={classes.button} variant="contained" color="primary" > 
             Learn More
            </Button> 
          </Box>
          
          </ThemeProvider>
    </Container>
    
  )
}
