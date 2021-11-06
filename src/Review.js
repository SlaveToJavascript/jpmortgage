import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { PersonalDetailsContext } from "./PersonalDetails.js";

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review() {
  const firstName = PersonalDetailsContext
  console.log(firstName)

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Details of Loan
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Loan Amount" />
          <Typography variant="body1" sx={{ fontWeight: 700 }}>S$252,000.00</Typography>
        </ListItem>
        <ListItem key="installment" sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Installment" secondary="Monthly interest payment for" />
          {/* <Typography variant="body1" sx={{ fontWeight: 700 }}>S$xxxxx</Typography> */}
        </ListItem>
        <ListItem>
          <ListItemText
            primary="30-year tenure"
          />
          <Typography variant="body1" sx={{ fontWeight: 700 }}>S$1,000</Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="20-year tenure"
          />
          <Typography variant="body1" sx={{ fontWeight: 700 }}>S$800</Typography>
        </ListItem>
        <ListItem>
          <ListItemText
            primary="10-year tenure"
          />
          <Typography variant="body1" sx={{ fontWeight: 700 }}>S$600</Typography>
        </ListItem>
        {/* <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem> */}
      </List>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}