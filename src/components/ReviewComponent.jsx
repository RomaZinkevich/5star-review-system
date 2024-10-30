import PersonIcon from '@mui/icons-material/Person';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ReviewComponent = ({review}) => {
    return(
        <Box sx={{ border: '1px solid #E0E0E0', borderRadius: 2, padding: 2, marginBottom: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" className="reviewHeader">
                <Box display="flex" alignItems="center" className="userInfo">
                    <PersonIcon
                        color="primary"
                        sx={{
                            backgroundColor: '#C6C7EC',
                            borderRadius: '50%',
                            fontSize: '48px',
                            marginRight: 2,
                            padding: '8px' // Optional padding for better visibility
                        }}
                    />
                    <Typography variant="h6">{review.userName}</Typography>
                </Box>
                <Box className="reviewInfo" textAlign="right">
                    <Typography variant="subtitle2">{review.date.split(", ")[0]}</Typography>
                    <Rating name="half-rating" size="large" value={review.rating} precision={0.5} readOnly />
                </Box>
            </Box>
            {review.comment ?
                <Box className="reviewText" marginTop={2}>
                    <Typography style={{
                        overflow: 'visible',
                        overflowWrap: 'break-word'
                    }} variant="body1">{review.comment}</Typography>
                </Box>
                : null
            }

        </Box>
    )
}

export default ReviewComponent;