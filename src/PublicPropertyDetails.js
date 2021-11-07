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
import FormHelperText from '@mui/material/FormHelperText';

export default function PublicPropertyDetails() {
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
            <TextField
                required
                id="propertyAddress"
                name="propertyAddress"
                label="Property Address"
                fullWidth
                variant="standard"
                onChange={handleChange('propertyAddress')}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl variant="standard" fullWidth required>
                <InputLabel htmlFor="carAge">Property Size</InputLabel>
                <Input
                    type="number"
                    id="propertySize"
                    onChange={handleChange('propertySize')}
                    endAdornment={<InputAdornment position="end">square feet</InputAdornment>}
                />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl variant="standard" fullWidth required>
                <InputLabel htmlFor="carAge">Storey Number</InputLabel>
                <Input
                    type="number"
                    id="storey"
                    onChange={handleChange('storey')}
                />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl variant="standard" fullWidth required>
                <InputLabel htmlFor="carAge">Remaining Lease</InputLabel>
                <Input
                    type="number"
                    id="remainingLease"
                    onChange={handleChange('remainingLease')}
                    endAdornment={<InputAdornment position="end">years</InputAdornment>}
                />
            </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl variant="standard" fullWidth required>
                <InputLabel id="demo-simple-select-standard-label">Flat Model</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="flatModel"
                    onChange={handleChange('flatModel')}
                    label="Flat Model"
                >
                    <MenuItem value="newGen">New Generation</MenuItem>
                    <MenuItem value="modelA">Model A</MenuItem>
                    <MenuItem value="dbss">DBSS</MenuItem>
                    <MenuItem value="improved">Improved</MenuItem>
                    <MenuItem value="standard">Standard</MenuItem>
                    <MenuItem value="adjoinedFlat">Adjoined Flat</MenuItem>
                    <MenuItem value="simplified">Simplified</MenuItem>
                    <MenuItem value="premiumApartment">Premium Apartment</MenuItem>
                    <MenuItem value="apartment">Apartment</MenuItem>
                    <MenuItem value="maisonette">Maisonette</MenuItem>
                    <MenuItem value="modelA2">Model A2</MenuItem>
                    <MenuItem value="typeS1">Type S1</MenuItem>
                    <MenuItem value="terrace">Terrace</MenuItem>
                    <MenuItem value="2room">2-room</MenuItem>
                    <MenuItem value="typeS2">Type S2</MenuItem>
                    <MenuItem value="modeAMaisonette">Model A-Maisonette</MenuItem>
                    <MenuItem value="premiumApartmentLoft">Premium Apartment Loft</MenuItem>
                    <MenuItem value="premiumMaisonette">Premium Maisonette</MenuItem>
                    <MenuItem value="multiGeneration">Multi-Generation</MenuItem>
                    <MenuItem value="improvedMaisonette">Improved Maisonette</MenuItem>
                </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}