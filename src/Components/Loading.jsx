import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: '#121212',
        p: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Skeleton
      animation="wave" 
        sx={{ bgcolor: 'grey.900' }}
        variant="rectangular"
        width={310}
        height={138}
      />
    </Box>
  );
}