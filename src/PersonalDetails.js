import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

export const PersonalDetailsContext = React.createContext();

export default function PersonalDetails() {
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    dob: '',
    marriageStatus: '',
    propertyType: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(values)
  };

  return (
    <PersonalDetailsContext.Provider value={values}>
      <Typography variant="h7" gutterBottom>
         Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">Salutation</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="marriageStatus"
              onChange={handleChange('salutation')}
              label="Marriage Status"
            >
              <MenuItem value="mr">Mr.</MenuItem>
              <MenuItem value="ms">Ms.</MenuItem>
              <MenuItem value="miss">Miss</MenuItem>
              <MenuItem value="mdm">Mdm</MenuItem>
              <MenuItem value="mrs">Mrs.</MenuItem>
              <MenuItem value="dr">Dr.</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full Name (as per NRIC)"
            fullWidth
            variant="standard"
            onChange={handleChange('fullName')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              defaultValue="yyyy-mm-dd"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              required
              onChange={handleChange('dob')}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
              <Input
                id="mobileNumber"
                onChange={handleChange('mobileNumber')}
                startAdornment={<InputAdornment position="start">+65</InputAdornment>}
              />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="emailAddress"
            name="emailAddress"
            label="Email Address"
            fullWidth
            variant="standard"
            onChange={handleChange('emailAddress')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">Marrital Status</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="marritalStatus"
              onChange={handleChange('marritalStatus')}
              label="Marrital Status"
            >
              <MenuItem value="single">Single</MenuItem>
              <MenuItem value="married">Married</MenuItem>
              <MenuItem value="divorced">Divorced</MenuItem>
              <MenuItem value="widowed">Widowed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel htmlFor="numDependants">Number of Dependants</InputLabel>
              <Input
                type="number"
                id="numDependants"
                onChange={handleChange('numDependants')}
              />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">Education Level</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="educationLevel"
              onChange={handleChange('educationLevel')}
              label="Education Level"
            >
              <MenuItem value="primarySchool">Primary School equivalent</MenuItem>
              <MenuItem value="secondarySchool">Secondary School equivalent</MenuItem>
              <MenuItem value="poly-jc">Polytechnic/Pre-tertiary equivalent</MenuItem>
              <MenuItem value="bachelors">Bachelors equivalent</MenuItem>
              <MenuItem value="masters">Masters equivalent</MenuItem>
              <MenuItem value="doctorate">Doctorate/PhD equivalent</MenuItem>
              <MenuItem value="postdoc">Post-doctorate equivalent</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel id="demo-simple-select-standard-label">Residential Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="propertyType"
              onChange={handleChange('propertyType')}
              label="Residential Property Type"
            >
              <MenuItem value="hdb">HDB (public)</MenuItem>
              <MenuItem value="ec">Executive condominium (EC)</MenuItem>
              <MenuItem value="divorced">Condominium (private)</MenuItem>
              <MenuItem value="widowed">Private landed property</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel htmlFor="monthlyIncome">Floor Area (in sqm)</InputLabel>
              <Input
                type="number"
                id="address2"
                onChange={handleChange('address2')}
                endAdornment={<InputAdornment position="end">sqm</InputAdornment>}
              />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address Street Name"
            fullWidth
            variant="standard"
            onChange={handleChange('address1')}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth required>
            <InputLabel htmlFor="address2">Unit Number</InputLabel>
              <Input
                id="address2"
                onChange={handleChange('address2')}
                startAdornment={<InputAdornment position="start">#</InputAdornment>}
              />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleChange('zip')}
          />
        </Grid> */}
      </Grid>
    </PersonalDetailsContext.Provider>
  );
}