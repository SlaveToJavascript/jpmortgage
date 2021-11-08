import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function CashFlowNetWorthDetails() {
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="standard" required>
                <InputLabel htmlFor="monthlyIncome">Monthly Income</InputLabel>
                <Input
                type="number"
                id="monthlyIncome"
                onChange={handleChange('monthlyIncome')}
                startAdornment={<InputAdornment position="start">S$</InputAdornment>}
                />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="standard" required>
                <InputLabel htmlFor="incomeOther">Monthly Income from Other Sources</InputLabel>
                <Input
                type="number"
                id="incomeOther"
                onChange={handleChange('incomeOther')}
                startAdornment={<InputAdornment position="start">S$</InputAdornment>}
                />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl fullWidth variant="standard" required>
                <InputLabel htmlFor="outstandingPersonalLoans">Outstanding Personal Loans & Credit</InputLabel>
                <Input
                type="number"
                id="outstandingPersonalLoans"
                onChange={handleChange('outstandingPersonalLoans')}
                startAdornment={<InputAdornment position="start">S$</InputAdornment>}
                />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl component="fieldset" required>
                <FormLabel component="legend">Do you wish to pledge assets as security?</FormLabel>
                <RadioGroup
                    row
                    aria-label="pledgePersonalAssets"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="standard">
                <InputLabel htmlFor="netAssets">Net Assets</InputLabel>
                <Input
                    type="number"
                    id="netAssets"
                    onChange={handleChange('netAssets')}
                    startAdornment={<InputAdornment position="start">S$</InputAdornment>}
                />
                <FormHelperText id="component-helper-text">
                    Leave blank if your answer to the previous question is "No".
                </FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="carAge">Age of Car (if any)</InputLabel>
                <Input
                    type="number"
                    id="carAge"
                    onChange={handleChange('carAge')}
                    endAdornment={<InputAdornment position="end">years</InputAdornment>}
                />
                <FormHelperText id="component-helper-text">
                    Leave blank if not applicable.
                </FormHelperText>
            </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}