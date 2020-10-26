import React, { useRef } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './Main.css';
import ScrollTop from './Back-to-top/Back-to-top';
import NavBar from '../Nav-bar/Nav-bar';
import { Parallax } from 'react-parallax';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChess, faTrophy, faTerminal, faGlasses } from '@fortawesome/free-solid-svg-icons'
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  Container:{
    backgroundColor: '#282c34',
    height: '540vh',
    '@media screen and (max-width: 450px)' : {
      minHeight: '800vh',  
    },
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  CvContent:{
    width: '100vw',
    // height: '90vh',
    // maxHeight: '1700px',
    backgroundColor: 'white',
    flex: '4',
  },
  FooterContent:{
    width: '100vw',
    height: '90vh',
    backgroundColor: '#5A809E',
    flex: '2',
  },
  Toolbar: {
    height: '0px'
  },
  h1: {
    fontFamily: `Poppins, sans-serif`,
    textAlign: 'center',
    fontSize: '60px',
  },
  TopSection:{
    width: '100vw',
    height: '90vh',
    maxHeight: '900px',
    marginTop: '12vh',
    flex: '3',
  },
  ProfilePicture: {
    width:'80%', 
    height:'auto', 
    borderRadius:'50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '400px',
    display: 'block',
  },
  CvDescription:{
    fontSize: '25px',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Divider: {
    width:'100vw', 
    height:'40px',
  },
  ParallaxDivider:{
    width: '100vw',
    height: '40vh',
    maxHeight: '400px',
    flex: '2',
  },
  Strength: {
    width: '30%',
    minWidth: '300px',
    height: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '50px',
    cursor: 'pointer',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,

  },
  StrengthsList:{
    fontFamily: `Staatliches, cursive`,
    marginTop: '40px',
  },
  Expertices:{
    height: '90vh',
    '@media screen and (max-width: 400px)' : {
      minHeight: '1000px',  
    },
  },
  ExperticesList:{
    width:'100vw',
    height: '90vh',
    resizeMode: 'stretch',
    backgroundColor: '#fff',
    '@media screen and (max-width: 400px)' : {
      minHeight: '1200px',  
    },
  },
  ExperticeItem:{
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    maxHeight: '150px',
    maxWidth: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'65%',
    '@media screen and (max-width: 400px)' : {
      maxHeight: '70px',
      maxWidth: '70px',
      marginTop:'60%',
    },
  },
  h1Expertices: {
    fontFamily: `Poppins, sans-serif`,
    textAlign: 'center',
    fontSize: '60px',
    marginTop:'-27%',
  },
  SkillsContainer: {
    width: '100vw',
    flex: 4,
    backgroundColor: 'white',
  }
}));

const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%,-50%)',
  
}

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   
export default withWidth()(Main);

function Main(props)  {
  const { width } = props;
  console.log(width);

  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const coreExperticesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactScroll = () => scrollToRef(contactRef);
  const homeScroll = () => scrollToRef(homeRef);
  const coreExperticesScroll = () => scrollToRef(coreExperticesRef);
  const skillsScroll = () => scrollToRef(skillsRef);
  const aboutScroll = () => scrollToRef(aboutRef);

  const xsColumn = width === 'xs' || width === 'sm'  ? 12 : 6;
  const xsColumnExpertices = width === 'xs' || width === 'sm'  ? 12 : 4;
  const xsColumnSkills = width === 'xs' || width === 'sm'  ? 12 : 4;
  const classes = useStyles();
  // const xsColumn = 6;
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <NavBar {...props} 
          contactScroll={contactScroll} 
          homeScroll={homeScroll} 
          coreExperticesScroll={coreExperticesScroll}
          skillsScroll={skillsScroll}
          aboutScroll={aboutScroll}
        ></NavBar>
        <div className= {classes.Toolbar} id="back-to-top-anchor" ref={homeRef}/>
        <div className={classes.Container}>
          <Parallax bgImage="/top.jpg" strength={1000}>
            <div className={classes.TopSection}>
            </div>
          </Parallax>
          <div className={classes.CvContent} ref={aboutRef}>
            <div className={classes.Divider} />
            
            <h1 className={classes.h1}>
              <span style={{color:'#6CC2BD'}}>I</span>gnacio <span style={{color:'#5A809E'}}>S</span>alazar <span style={{color:'#7C79A2'}}>W</span>illiams <span style={{color:'#F57D7C'}}>;</span>
            </h1>
            <img src="/i.salazar.williams.jpg" alt="Ignacio Salazar Williams" className={classes.ProfilePicture}></img>

            <div className={classes.Divider} />
            <div className={classes.CvDescription}>
              Experienced Developer Architect, Full-Stack Developer & Technology Enthusiast,
              with over 4 year of compacted experience, from Developing to Architecting Solutions,
              On-premise, Cloud & Hybrid Solutions, all of them leading with the highest quality
              that the Industries can offer, whilst being passionate about deep-tech innovation that leads to impact.
            </div>

            <div className={classes.Divider} />
            <Grid container spacing={3} className={classes.StrengthsList}>
                <Grid item xs={xsColumn}>
                  <div className={classes.Strength}>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <div style={{float:"right"}}>Learner</div>
                  </div>
                  </Grid>
                <Grid item xs={xsColumn}>
                  <div className={classes.Strength}>
                    <FontAwesomeIcon icon={faTrophy} />
                    <div style={{float:"right"}}>Achiever</div>
                  </div>
                </Grid>
                <Grid item xs={xsColumn}>
                  <div className={classes.Strength}>
                    <FontAwesomeIcon icon={faTerminal} />
                    <div style={{float:"right"}}>Input</div>
                  </div>
                </Grid>
                <Grid item xs={xsColumn}>
                  <div className={classes.Strength}>
                    <FontAwesomeIcon icon={faGlasses} />
                    <div style={{float:"right"}}>Futuristic</div>
                  </div>
                </Grid>
                <Grid item xs={xsColumn}>
                  <div className={classes.Strength}>
                    <FontAwesomeIcon icon={faChess} />
                    <div style={{float:"right"}}>Strategic</div>
                  </div>
                </Grid>
            </Grid>
            
          </div>
          <Parallax bgImage="/code1.jpg" strength={1000}>
            <div className={classes.ParallaxDivider}>
            </div>
          </Parallax>
          <Parallax 
            ref={coreExperticesRef}
            bgImage="/test.jpg" 
            className={classes.ExperticesList}
            strength={-600}
            renderLayer={percentage => (
              <Grid container spacing={3} >
                <Grid item xs={xsColumnExpertices}>
                  <div className={classes.ExperticeItem}
                  style= {{
                    background: `rgba(108, 194, 189, ${percentage < 0.4 ? percentage*1.2: 0.5*1.2}`,
                    transform:`scale(${percentage < 0.5 ? percentage*8 : 0.5*8})`,
                  }}/>
                </Grid>
                <Grid item xs={xsColumnExpertices}>
                  <div className={classes.ExperticeItem}
                  style= {{
                    background: `rgba(90, 128, 158, ${percentage < 0.5 ? percentage*1.2: 0.5*1.2}`,
                    transform:`scale(${percentage < 0.5 ? percentage*8 : 0.5*8})`,
                  }}/>
                </Grid>
                <Grid item xs={xsColumnExpertices}>
                  <div className={classes.ExperticeItem}
                  style= {{
                    background: `rgba(124, 121, 162, ${percentage < 0.5 ? percentage*1.2: 0.5*1.2}`,
                    transform:`scale(${percentage < 0.5 ? percentage*8 : 0.5*8})`,
                  }}/>
                </Grid>
              </Grid>
            )}
            >
            <h1 className={classes.h1Expertices}>Core Expertises</h1>
            {/* <div style = {inlineStyle}> REVERSE DIRECTION</div>   */}
          </Parallax>
          <div className={classes.SkillsContainer} ref={skillsRef}> 
            <h1 className={classes.h1}>
              Developer Skills
            </h1>
            <Grid container spacing={3} className={classes.SkillsList}>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'red'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'green'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'blue'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'red'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'green'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'blue'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'red'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'green'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'blue'}}></Grid>
            </Grid>
            <h1 className={classes.h1}>
              Technical Skills
            </h1>
            <Grid container spacing={3} className={classes.SkillsList}>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'red'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'green'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'blue'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'red'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'green'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'blue'}}></Grid>
            </Grid>
            <h1 className={classes.h1}>
              Language Skills
            </h1>
            <Grid container spacing={3} className={classes.SkillsList}>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'red'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'green'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'blue'}}></Grid>
            </Grid>
          </div>
          <div className={classes.FooterContent} ref={contactRef}>
            <h1 className={classes.h1}>
              Contact Me
            </h1>
            <Grid container spacing={3} className={classes.SkillsList}>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'red'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'green'}}></Grid>
              <Grid item xs={xsColumnSkills} style={{width:'auto', height:'100px', backgroundColor:'blue'}}></Grid>
            </Grid>
          </div>
        </div>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </div>
  );
}