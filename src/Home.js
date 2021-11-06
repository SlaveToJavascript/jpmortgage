import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonalDetails from './PersonalDetails';
import MortgageLoanDetails from './MortgageLoanDetails';
import EmploymentDetails from './EmploymentDetails';
import Review from './Review';
import Logo from '../src/static/img/logo.png'
import CashFlowNetWorthDetails from './CashFlowNetWorthDetails';
import PropertyDetails from './PropertyDetails';
import CircularProgress from '@mui/material/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center" style={{paddingBottom: "280px"}}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        J.P. Mortgage
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Personal Details', 'Mortgage Loan Details', 'Employment Details', 'Cash Flow & Net Worth Details', "Property Details"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetails />;
    case 1:
      return <MortgageLoanDetails />;
    case 2:
      return <EmploymentDetails />;
    case 3:
      return <CashFlowNetWorthDetails />
    case 4:
      return <PropertyDetails />
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b4677',
    },
  }
});

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 921);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={theme} sx={{bgcolor: "primary.main"}}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          bgcolor: "#1b4677"
        }}
      >
        <Toolbar>
          {/* <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography> */}
          <img src={Logo} width="150" />
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="md">
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h5" align="center">
            Mortgage Calculator
          </Typography>
          <Stepper activeStep={activeStep} orientation="vertical" connector={null}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom style={{marginTop: "15px"}}>
                  Application is loading...
                </Typography>
                <Typography variant="subtitle1">
                  Please check your email for further details.
                </Typography>
                <CircularProgress size={50} style={{marginLeft: "40%", marginTop: "20px", marginBottom: "15px"}} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}