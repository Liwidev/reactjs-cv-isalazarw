import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './Main.css';
import ScrollTop from './Back-to-top/Back-to-top';
import NavBar from '../Nav-bar/Nav-bar';

export default function Main(props) {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <NavBar {...props}></NavBar>
        <Toolbar id="back-to-top-anchor" />
        <Container>
          <Box my={2}>
            {[...new Array(24)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
                      Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Box>
        </Container>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    </div>
  );
}