import ReviewComponent from "./ReviewComponent.jsx";
import Box from "@mui/material/Box";

const ReviewsList = ({reviews}) => {
    console.log(reviews);
    return (
        <Box className="reviews-list">
            {reviews.map((review) => <ReviewComponent review={review} key={review.id}/>)}
        </Box>
    )
}

export default ReviewsList;