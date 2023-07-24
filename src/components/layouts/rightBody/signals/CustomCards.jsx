import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const commonStyles = {
  bgcolor: 'background.paper',
  borderColor: '',
  m: 1,
  border: 1,
  width: '400px',
  height: '5rem',
};

export default function CustomCards() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ ...commonStyles, borderRadius: 1, borderLeft: 5, borderLeftColor: 'green' }} >
        <Box sx={{
          backgroundColor: 'rgba(55, 159, 36, 0.1)', width: '100 %',
          padding: '0.375rem 0.5625rem 0.375rem 0.375rem', color: 'rgb(55, 159, 36);', display: 'flex', alignItems: 'center'
        }}>
          <Typography>اختلاف قیمت مثبت</Typography>
          <Box sx={{ width:'20px', height: '20px', borderRadius: '50%', borderColor:'black' }} />
        </Box>
        <Box sx={{
          margin: ' 0.375rem',
          fontSize: '0.75rem',
          fontWeight: 'normal',
          color: 'rgb(119, 119, 119)',
          direction: 'ltr',
          unicodeBidi: 'plaintext'
        }}>این گزینه نمادهایی که در حال حاضرگرانتر از روز قبل معامله میشوند را نشان میدهد</Box>
      </Box>
    </Box >
  );
}