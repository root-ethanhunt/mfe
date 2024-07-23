import {Box, Typography, IconButton, Divider, List, ListItem, ListItemAvatar, Avatar, Button } from '@mui/material';
// import {CloseIcon, RemoveIcon , AddIcon} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const DrawerList = ({cartItems, toggleDrawer}) => {
    
    return (
    <Box sx={{ width: 350 }} role="presentation">
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">Cart</Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItemAvatar>
              <Avatar src={item.image} variant="square" sx={{ width: 60, height: 60 }} />
            </ListItemAvatar>
            <Box sx={{ flex: 1, ml: 2 }}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">{`1 x $${item.price}`}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <IconButton size="small">
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                <IconButton size="small">
                  <AddIcon />
                </IconButton>
                <IconButton size="small" sx={{ ml: 1 }}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 1, backgroundColor: '#FF6600', '&:hover': { backgroundColor: '#FF6600' } }}
        >
          View Cart
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ backgroundColor: '#FF6600', '&:hover': { backgroundColor: '#FF6600' } }}
        >
          $1650.00
        </Button>
      </Box>
    </Box>
  )};

  export default DrawerList;