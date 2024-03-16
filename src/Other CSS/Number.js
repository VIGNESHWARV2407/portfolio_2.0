import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import NumberStyling from './Number.module.css'


export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
        <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center'})} className={NumberStyling.btn} sx={{borderRadius:'50%'}}></Button>
  );

  return (
    <Box sx={{ width: 20 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="+919444127645"
        key={vertical + horizontal}
      />
    </Box>
  );
}