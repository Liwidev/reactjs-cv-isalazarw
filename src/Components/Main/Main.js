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
import { faGraduationCap, faChess, faTrophy, faTerminal, faGlasses } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitch } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'typewriter-effect';
import withWidth from '@material-ui/core/withWidth';

const useStyles = makeStyles((theme) => ({
  Container:{
    backgroundColor: '#282c34',
    height: '500vh',
    '@media screen and (max-width: 450px)' : {
      minHeight: '900vh',  
    },
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
  TopSection:{
    width: '100vw',
    height: '90vh',
    marginTop: '12vh',
    flex: '3',
  },
  CvContent:{
    width: '100vw',
    backgroundColor: 'white',
    flex: 3,
  },
  ParallaxDivider:{
    width: '100vw',
    height: '40vh',
    flex: '2',
  },
  ExperticesList:{
    width:'100vw',
    height: '90vh',
    flex: '2',
    resizeMode: 'stretch',
    backgroundColor: '#fff',
    '@media screen and (max-width: 400px)' : {
      // minHeight: '1200px',  
    },
  },
  SkillsContainer: {
    width: '100vw',
    maxHeight: '2000px',
    flex: 2,
    backgroundColor: 'white',
  },
  FooterContent:{
    width: '100vw',
    height: '90vh',
    maxHeight: '600px',
    backgroundColor: '#5A809E',
    flex: '2',
    '@media screen and (max-width: 1400px)' : {
      maxHeight: '750px',
    },
    '@media screen and (max-width: 1000px)' : {
      maxHeight: '750px',
    },
    '@media screen and (max-width: 750px)' : {
      minHeight: '750px',
    },
    '@media screen and (max-width: 450px)' : {
      maxHeight: '750px',
    },
    '@media screen and (max-width: 400px)' : {
      minHeight: '800px',
    },
    '@media screen and (max-width: 320px)' : {
      minHeight: '830px',
    },
  },
  Toolbar: {
    height: '0px'
  },
  h1: {
    fontFamily: `Poppins, sans-serif`,
    textAlign: 'center',
    fontSize: '60px',
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
  footerItem:{
    width: '30%',
    minWidth: '220px',
    height: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: '40px',
    cursor: 'pointer',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    "&:hover, &:focus": {
      color: 'white',
    },
    "& a": {
      textDecoration: 'none',
      color: 'inherit'
    }
  },
  StrengthsList:{
    fontFamily: `Staatliches, cursive`,
    marginTop: '40px',
  },
  ExperticeText:{
    textAlign: 'center',
    fontFamily: `Staatliches, cursive`,
    fontSize: '23px',
    paddingTop: '20%',
    color: 'white',
    '@media screen and (max-width: 450px)' : {
      fontSize: '13px',
    },
  },
  ExperticeItem:{
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    maxHeight: '150px',
    maxWidth: '150px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'65%',
    '@media screen and (max-width: 450px)' : {
      width: '80px',
      height: '80px',
      marginTop:'80%',
      marginBottom: '-100px'
    },
  },
  h1Expertices: {
    fontFamily: `Poppins, sans-serif`,
    textAlign: 'center',
    fontSize: '60px',
    marginTop:'-27%',
    '@media screen and (max-width: 450px)' : {
      marginTop:'-237%',
    },
  },
  SkillItem: {
    width:'auto', 
    height:'100px',
    fontSize: '24px',
    fontFamily: `Staatliches, cursive`,
    textAlign:'center',
  },
  footerMadeBy: {
    padding:'13px 26px', 
    width:'330px', 
    height:'auto', 
    border:'2px solid #fff', 
    marginLeft:'auto', 
    marginRight:'auto', 
    color: 'white', 
    fontSize: '15px', 
    textAlign: 'center',
    fontFamily: `Staatliches, cursive`,
    marginTop: '100px',
    marginBottom: '150px',
    "&:hover, &:focus": {
      backgroundColor:'white',
      color: 'black',
      cursor: 'default',
    }
  },
  TypeWriterText:{
    fontFamily: `Staatliches, cursive`,
    fontSize: '60px',
    float:"right",
    marginRight: '15%',
    marginTop: '10%',
    textAlign: 'center',
    width: '500px',
    height: 'auto',
  }
}));

const scrollToRef = (ref) => {
  window.scrollTo(0, ref.current.offsetTop);
}   
export default withWidth()(Main);

function Main(props)  {
  const { width } = props;
  console.log(width);

  const contactRef = useRef(null),
  homeRef = useRef(null),
  aboutRef = useRef(null),
  coreExperticesRef = useRef(null),
  skillsRef = useRef(null);
  const contactScroll = () => scrollToRef(contactRef),
  homeScroll = () => scrollToRef(homeRef),
  coreExperticesScroll = () => scrollToRef(coreExperticesRef),
  skillsScroll = () => scrollToRef(skillsRef),
  aboutScroll = () => scrollToRef(aboutRef);

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
              <Typewriter onInit={(typewriter) => { typewriter.typeString('<span style="color:#FFC1A6"}>Hi</span>!, My name is <span style="color:#6CC2BD"}>Ignacio</span> and here is something about <span style="color:#F57D7C"}>ME</span>.') .start(); }}
                options={{
                  wrapperClassName: classes.TypeWriterText,
                  delay: 50,
                }}
              />
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
          <div ref={coreExperticesRef}>
          </div>
          <Parallax 
            bgImage="/test.jpg" 
            bgImageStyle={{minHeight: '2000px'}}
            className={classes.ExperticesList}
            strength={-600}
            renderLayer={percentage => (
              <Grid container spacing={3} >
                <Grid item xs={xsColumnExpertices}>
                  <div className={classes.ExperticeItem}
                  style= {{
                    background: `rgba(108, 194, 189, ${percentage < 0.4 ? percentage*1.2: 0.5*1.2}`,
                    transform:`scale(${percentage < 0.5 ? percentage*8 : 0.5*8})`,
                  }}>
                    <h1 className={classes.ExperticeText}>Full Stack Developer</h1>
                  </div>
                </Grid>
                <Grid item xs={xsColumnExpertices}>
                  <div className={classes.ExperticeItem}
                  style= {{
                    background: `rgba(90, 128, 158, ${percentage < 0.5 ? percentage*1.2: 0.5*1.2}`,
                    transform:`scale(${percentage < 0.5 ? percentage*8 : 0.5*8})`,
                  }}>
                  <h1 className={classes.ExperticeText}>Digital Decoupling</h1>
                </div>
                </Grid>
                <Grid item xs={xsColumnExpertices}>
                  <div className={classes.ExperticeItem}
                  style= {{
                    background: `rgba(124, 121, 162, ${percentage < 0.5 ? percentage*1.2: 0.5*1.2}`,
                    transform:`scale(${percentage < 0.5 ? percentage*8 : 0.5*8})`,
                  }}>
                  <h1 className={classes.ExperticeText}>Microservice Architecture</h1>
                </div>
                </Grid>
              </Grid>
            )}
            >
            <h1 className={classes.h1Expertices}>Core Expertises</h1>
          </Parallax>
          <div className={classes.SkillsContainer} ref={skillsRef}> 
            <h1 className={classes.h1}>
              Developer Skills
            </h1>
            <Grid container spacing={3} className={classes.SkillsList} >
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Javascript - Expert</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>NodeJS - Expert</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Angular - Proficient</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>ReactJS - Proficient</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Java - Proficient</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Spring Boot - Proficient</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>C# - Proficient</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>.Net Core - Proficient</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Python - Proficient</Grid>
            </Grid>
            <h1 className={classes.h1}>
              Technical Skills
            </h1>
            <Grid container spacing={3} className={classes.SkillsList}>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Microservices Architecture</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Event Driver Architecture</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Agile - Scrum</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Cloud First</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Domain Driven Design</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>DevOps</Grid>
            </Grid>
            <h1 className={classes.h1}>
              Language Skills
            </h1>
            <Grid container spacing={3} className={classes.SkillsList}>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>Spanish - Native</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>English - Professional</Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>French - Basic</Grid>
            </Grid>
          </div>
          <div className={classes.FooterContent} ref={contactRef}>
            <h1 className={classes.h1} style={{color:'white'}}>
              Follow Me
            </h1>
            <Grid container spacing={3} className={classes.SkillsList}>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>
                <div className={classes.footerItem}>
                  <FontAwesomeIcon icon={faGithub} />
                  <a href="https://github.com/isalazarw/" style={{float:"right"}}>Github</a>
                </div>
              </Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>
                <div className={classes.footerItem}>
                  <FontAwesomeIcon icon={faLinkedin} />
                  <a href="https://www.linkedin.com/in/ignacio-salazar-williams" style={{float:"right"}}>Linkedin</a>
                </div>
              </Grid>
              <Grid item xs={xsColumnSkills} className={classes.SkillItem}>
                <div className={classes.footerItem}>
                  <FontAwesomeIcon icon={faTwitch} />
                  <a href="https://www.twitch.tv/isalazarw" style={{float:"right"}}>Twitch</a>
                </div>
              </Grid>
            </Grid>
            <div className={classes.footerMadeBy}>
              Design & Developed By Ignacio Salazar Williams
            </div>
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