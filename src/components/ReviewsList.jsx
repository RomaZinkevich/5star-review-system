import ReviewComponent from "./ReviewComponent.jsx";
import Box from "@mui/material/Box";

function convertDate(dateStr) {
    const [datePart, timePart] = dateStr.split(', ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds); // month - 1 because months are 0-indexed
}

const ReviewsList = ({reviews}) => {
    reviews = reviews.sort((a, b) => convertDate(b.date) - convertDate(a.date));
    return (
        <Box className="reviews-list">
            {reviews.map((review) => <ReviewComponent review={review} key={review.id}/>)}
        </Box>
    )
}

export default ReviewsList;