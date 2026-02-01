import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Height } from '@mui/icons-material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style = {{border: '0.5px solid black'}}onClick={handleOpen}>Click here to Email me</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <Typography id="modal-modal-title" variant="h6" component="h2">
      Feel free to reach out to me
    </Typography>
         <form action="https://formsubmit.co/netsabre_129@hotmail.com" style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }} method="POST">
  <input type="text" name="name" placeholder='Please Enter Your Name' required />
  <input type="email" name="email" placeholder='Please Enter Your Email' required />

  <textarea name="message" rows="6" cols="40" required></textarea>

  <button type="submit">Send</button>
</form>
        </Box>
      </Modal>
    </div>
  );
}
