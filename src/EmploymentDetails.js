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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function EmploymentDetails() {
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
          <FormControl variant="standard" fullWidth required>
              <InputLabel id="demo-simple-select-standard-label">Employment Status</InputLabel>
              <Select
              labelId="demo-simple-select-standard-label"
              id="employmentStatus"
              onChange={handleChange('employmentStatus')}
              label="Employment Status"
              >
              <MenuItem value="employed">Employed</MenuItem>
              <MenuItem value="selfEmployed">Self-employed</MenuItem>
              <MenuItem value="unemployed">Unemployed</MenuItem>
              <MenuItem value="retired">Retired</MenuItem>
              </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                required
                id="companyName"
                name="companyName"
                label="Name of Company"
                fullWidth
                variant="standard"
                onChange={handleChange('companyName')}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                required
                id="jobTitle"
                name="jobTitle"
                label="Job Title"
                fullWidth
                variant="standard"
                onChange={handleChange('jobTitle')}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                required
                id="jobIndustry"
                name="jobIndustry"
                label="Job Industry"
                fullWidth
                variant="standard"
                onChange={handleChange('jobIndustry')}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel htmlFor="employmentDuration">Duration of Current Employment</InputLabel>
              <Input
                type="number"
                id="employmentDuration"
                onChange={handleChange('employmentDuration')}
                endAdornment={<InputAdornment position="end">years</InputAdornment>}
              />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <TextField
                required
                id="companyAddress"
                name="companyAddress"
                label="Company Address"
                fullWidth
                variant="standard"
                onChange={handleChange('companyAddress')}
            />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}