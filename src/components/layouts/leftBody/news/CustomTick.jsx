import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  flex: '1 1 auto',
  padding: '20px 24px',
};


export default function CustomTick() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginY: '20px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox {...label} sx={{
          // marginLeft: '15px'
        }} />
        <Typography >نمایش خلاصه خبر</Typography>
      </Box>
      <Button onClick={handleOpen} variant='outlined' sx={{ color: 'secondary.main', borderColor: 'tertiary.main' }}>منابع</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, borderRadius: '4px' }}>

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >تجارت نیوز</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >پایگاه خبری بازار سرمایه ایران</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >بورس نیوز</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >اقتصاد آنلاین</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >اقتصاد نیوز</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >دنیای اقتصاد</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >با اقتصاد</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >بورس اوراق بهادار تهران</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Checkbox {...label} defaultChecked />
            <Typography >فرابورس ایران</Typography>
          </Box>
        </Box>
      </Modal>
    </Box>


  );
}