import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LeakAddTwoToneIcon from '@mui/icons-material/LeakAddTwoTone';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import FormatListNumberedRtlRoundedIcon from '@mui/icons-material/FormatListNumberedRtlRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const RightNavbar = ({ activeTab, onSelectTab, isRightPanelVisible, showRightPanel, hideRightPanel }) => {
    const [value, setValue] = React.useState({ activeTab })

    const handleClick = (newValue) => {
        showRightPanel()
        setValue(newValue)
        onSelectTab(newValue)
        if (newValue === value && isRightPanelVisible) {
            hideRightPanel()
        }
    }
    return (
        <Box sx={{ flexGrow: 1, paddingLeft: 2, marginTop: 1, paddingRight: 2 }}>
            <Grid container spacing={1} sx={{ justifyContent: "space-between" }}>
                <Button
                    onClick={() => handleClick(0)}
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        color: value === 0 ? 'primary.main' : 'secondary.main'
                    }} >
                    <LeakAddTwoToneIcon fontSize="small" sx={{ paddingBottom: 0.5 }} />
                    <Typography variant="body2" component="subtitle1" sx={{ fontFamily: '' }} >سیگنال‌ها</Typography>
                </Button>
                <Button
                    onClick={() => handleClick(1)}
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        color: value === 1 ? 'primary.main' : 'secondary.main'
                    }}>
                    <TimelineOutlinedIcon fontSize="small" sx={{ paddingBottom: 0.5 }} />
                    <Typography variant="body2" component="subtitle1" >شاخص‌ها</Typography>
                </Button>
                <Button
                    onClick={() => handleClick(2)}
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        color: value === 2 ? 'primary.main' : 'secondary.main'
                    }}>
                    <FilterAltRoundedIcon fontSize="small" sx={{ paddingBottom: 0.5 }} />
                    <Typography variant="body2" component="subtitle1" >فیلترها</Typography>
                </Button>
                <Button
                    onClick={() => handleClick(3)}
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        color: value === 3 ? 'primary.main' : 'secondary.main'
                    }}>
                    <FormatListNumberedRtlRoundedIcon fontSize="small" sx={{ paddingBottom: 0.5 }} />
                    <Typography variant="body2" component="subtitle1" >نمادها</Typography>
                </Button>
                <Button
                    onClick={() => handleClick(4)}
                    sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        color: value === 4 ? 'primary.main' : 'secondary.main'
                    }}>
                    <NotificationsOutlinedIcon fontSize="small" sx={{ paddingBottom: 0.5 }} />
                    <Typography variant="body2" component="subtitle1" >هشدارها</Typography>
                </Button>
            </Grid>
        </Box>
    )
}

export default RightNavbar;