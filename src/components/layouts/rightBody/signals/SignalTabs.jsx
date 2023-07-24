import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { RoundedCorner } from '@mui/icons-material';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function SignalTabs() {
    return (
      
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center", paddingX: 6, paddingY: 2 }}>
            <Button variant="outlined" sx={{ fontSize:13, color: 'black', borderColor:'#ccc'}}>
                نقشه بازار
            </Button>
            <Button variant="outlined" sx={{ fontSize:13, color: 'black', borderColor:'#ccc'}}>
                روند بازار
            </Button>
            <Button variant="outlined" sx={{ fontSize:13, color: 'black', borderColor:'#ccc'}}>
                اخرین تحلیل‌ها
            </Button>

        </Stack>
    );
}