import { Card as MuiCard, Box } from '@mui/material'
import PropTypes from 'prop-types'

export default function Card() {
  return (
    <MuiCard sx={{ width: '140px', height: '200px' }}>
      <Box
        sx={{ width: '100%', height: '100%' }}
        display="flex"
        flexDirection="column"
      >
        {/* Box1 */}
        <Box sx={{ height: '30px', marginLeft: '10px' }} alignSelf="flex-start"></Box>
        {/* Box2 */}
        <Box sx={{ fontSize: '30px', height: '140px', lineHeight: '140px' }}></Box>
        {/* Box3 */}
        <Box sx={{ height: '30px', marginRight: '10px' }} alignSelf="flex-end"></Box>
      </Box>
    </MuiCard>
  )
}

Card.propTypes = {
  suit: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired
}
