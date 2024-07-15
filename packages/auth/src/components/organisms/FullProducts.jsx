
import {Grid} from '@mui/material';
import Filter from './Filter';
import ItemList from './ItemList';

const FullProducts = () => {
    const handleApplyFilters = (filters) => {
      console.log('Applied Filters:', filters);
      // Implement filter logic here
    };
  
    return (
      <Grid container>
        <Grid item>
          <Filter onApplyFilters={handleApplyFilters} />
        </Grid>
        <Grid item xs>
          {/* Main content goes here */}
          <ItemList/>
        </Grid>
      </Grid>
    );
  };
  
  export default FullProducts;