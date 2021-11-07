import * as React from 'react';
import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function MortgageLoanDetails() {
  const [values, setValues] = React.useState({
    monthlyIncome: 0,
    fixedAllowance: 0,
    fixedAndVariableBonus: 0,
    netAsset: 0,
    askPrice: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <React.Fragment>
      {/* <Typography variant="h6" gutterBottom>
        Payment method
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Loan Type</FormLabel>
            <RadioGroup
              row
              aria-label="loanType"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="mortgageLoan" control={<Radio />} label="Mortgage Loan" />
              <FormControlLabel value="homeEquityLoan" control={<Radio />} label="Home Equity Loan" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Loan Tenure</FormLabel>
            <RadioGroup
              row
              aria-label="loanTenure"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="10" control={<Radio />} label="10 years" />
              <FormControlLabel value="20" control={<Radio />} label="20 years" />
              <FormControlLabel value="30" control={<Radio />} label="30 years" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="standard" required>
            <InputLabel htmlFor="fixedAllowance">Loan Amount Request</InputLabel>
            <Input
              type="number"
              id="loanReq"
              // value={values.fixedAllowance}
              onChange={handleChange('loanReq')}
              startAdornment={<InputAdornment position="start">S$</InputAdornment>}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="fixedAndVariableBonus">Outstanding Mortgage Amount (for HEL)</InputLabel>
            <Input
              type="number"
              id="outstandingMortgage"
              // value={values.fixedAndVariableBonus}
              onChange={handleChange('outstandingMortgage')}
              startAdornment={<InputAdornment position="start">S$</InputAdornment>}
            />
            <FormHelperText id="component-helper-text">
              Leave blank if not applicable.
            </FormHelperText>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
