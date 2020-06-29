import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';



const Star = (props) => {
    console.log(props.rating)
    return (
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="customized-empty"
          defaultValue={props.rating}
          precision={0.1}
          emptyIcon={<StarBorderIcon fontSize="12" readOnly />}
        />
      </Box>
    )
}

export default Star;
