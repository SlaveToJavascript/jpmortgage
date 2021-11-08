import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

export default function PrivatePropertyDetails() {
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
                id="postalCode"
                name="postalCode"
                label="Property Address Postal Code"
                fullWidth
                variant="standard"
                onChange={handleChange('postalCode')}
            />
        </Grid>
        <Grid item xs={12} md={6}>
            <FormControl component="fieldset" required>
                <FormLabel component="legend">Property Type</FormLabel>
                <RadioGroup
                    row
                    aria-label="propertyType"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="apartment" control={<Radio />} label="Apartment" />
                    <FormControlLabel value="condo" control={<Radio />} label="Condo" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
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
            <FormControl component="fieldset" required>
                <FormLabel component="legend">Type of Sale</FormLabel>
                <RadioGroup
                    row
                    aria-label="saleType"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="resale" control={<Radio />} label="Resale" />
                    <FormControlLabel value="newSale" control={<Radio />} label="New Sale" />
                    <FormControlLabel value="subSale" control={<Radio />} label="Sub Sale" />
                </RadioGroup>
            </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}