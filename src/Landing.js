import * as React from 'react';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
// import Logo from '../src/static/img/logo.png'
import Slide from "react-reveal/Slide";
import Fade from 'react-reveal/Fade';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Home() {
    useEffect(() => { document.body.style.backgroundColor = '#223d6c' }, [])
    
    useEffect(() => {
        const timer = setTimeout(() => scroll.scrollTo(865), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Container>
            <Slide bottom duration={1000}>
                <p style={{fontFamily: "ITC Century", color: "white", textAlign: "center", fontSize: "50px", marginTop: "90%"}}>J.P. Mortgage</p>
            </Slide>
            <Fade left duration={1000} delay={500}>
                <p style={{fontFamily: "Amplitude", color: "white", textAlign: "center", fontSize: "20px", marginBottom: "0px"}}>Revolutionizing Retail Mortgage,</p>
            </Fade>
            <Fade left duration={1000} delay={1000}>
                <p style={{fontFamily: "Amplitude", color: "white", textAlign: "center", fontSize: "20px", marginTop: "0px"}}>One House at a Time.</p>
            </Fade>
            <Fade bottom cascade duration={600} delay={1800}>
                <p style={{fontFamily: "ITC Century", color: "white", textAlign: "center", fontSize: "25px", marginTop: "80%", marginBottom: "20%"}}>Tap to get started</p>
            </Fade>
        </Container>
    )
}