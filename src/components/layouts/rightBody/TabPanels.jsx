import CustomAlerts from "./customAlerts"
import CustomCharts from "./customCharts"
import Filters from "./filters"
import Signals from "./signals"
import Symbols from "./symbols"

import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const TabPanels = ({ activeTab }) => {
    const [open, setOpen] = React.useState(true);
    return (

        <div>
            <Collapse in={open}>
                <Alert severity="info"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                    برای بستن نوار کناری گزینه انتخاب شده در بالا را دوباره انتخاب کنید، مثلا سیگنال ها را انتخاب کرده و سپس دوباره سیگنال ها را کلیک کنید.
                </Alert>
            </Collapse>

            {
                activeTab === 0 && <Signals />
            }
            {
                activeTab === 1 && <CustomCharts />
            }
            {
                activeTab === 2 && <Filters />
            }
            {
                activeTab === 3 && <Symbols />
            }
            {
                activeTab === 4 && <CustomAlerts />
            }
        </div>
    )
}

export default TabPanels;