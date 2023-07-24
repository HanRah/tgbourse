

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';



import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

import LoginIcon from '@mui/icons-material/Login';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HelpIcon from '@mui/icons-material/Help';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import AndroidRoundedIcon from '@mui/icons-material/AndroidRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';


export default function AppBarMenu({ children, onSelectBox }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (newClick) => {
    onSelectBox(newClick)
    handleClose()
  }

  return (
    <div>
      <Box
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {children}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <MenuList >
          <MenuItem>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(0) }>ثبت‌نام / ورود</ListItemText>
          </MenuItem>
          <Divider />

          <MenuItem>
            <ListItemIcon>
              <MoveToInboxIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(1)}>صندوق پیام</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <HelpIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(2)}>سوالات متداول</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LightbulbIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(3)}>آموزش</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <InsertCommentOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(4)}>نظرات دنبال‌کرده‌ها</ListItemText>
          </MenuItem><MenuItem>
            <ListItemIcon>
              <ShowChartOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(5)}>ارزش سهام عدالت</ListItemText>
          </MenuItem><MenuItem>
            <ListItemIcon>
              <MailRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(6)}>ارتباط با ما</ListItemText>
          </MenuItem><MenuItem>
            <ListItemIcon>
              <AndroidRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(7)}>اپلیکیشن اندروید</ListItemText>
          </MenuItem><MenuItem>
            <ListItemIcon>
              <ShareRoundedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText onClick={()=>handleSelect(8)}>معرفی به دوستان</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}