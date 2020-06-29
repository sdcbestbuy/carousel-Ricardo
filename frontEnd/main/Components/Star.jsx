import React, {useState} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Star = (props) => {

    return (
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={props.rating} readOnly />
      </Box>
    )
}

export default Star;
