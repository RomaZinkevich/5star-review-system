import ReviewComponent from "./ReviewComponent.jsx";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {useState, useEffect} from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl";

function convertDate(dateStr) {
    const [datePart, timePart] = dateStr.split(', ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds); // month - 1 because months are 0-indexed
}

const ReviewsList = ({reviews, services}) => {
    const [service, setService] = useState(services[0])
    const [sortedReviews, setSortedReviews] = useState([])
    const [avgRating, setAvgRating] = useState(0.0)

    function processReviews(reviews, service) {
        //filter
        let filteredReviews = reviews.filter(r => r.serviceId===service.id)
        //sort
        setSortedReviews(filteredReviews.sort((a,b) => convertDate(b.date) - convertDate(a.date)));
        //count average rating
        let avg = filteredReviews.reduce((sum, review) => sum + review.rating, 0) / filteredReviews.length;
        setAvgRating(avg);
    }

    const handleSelectService = (e) => {
        //change service state
        let service = services.filter((s) => s.name === e.target.value)[0];
        setService(service);
        processReviews(reviews, service)
    }

    useEffect(() => {
        processReviews(reviews, service)
    }, [reviews]);

    return (
        <Box className="reviews-list" display="flex" flexDirection="column">
            <FormControl fullWidth>
                <InputLabel id="select-label">Service</InputLabel>
                <Select
                    sx={{width:300}}
                    labelId="select-label"
                    id="select"
                    value={service.name}
                    label="Service"
                    onChange={handleSelectService}
                >
                    {services.map((s) => <MenuItem key={s.id} value={s.name}>{s.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Box display="flex" >
                <Typography variant="h6">Average Rating: </Typography>
                <Rating name="half-rating" size="large" value={avgRating} precision={0.5} readOnly />
            </Box>
            {sortedReviews.map((review) => <ReviewComponent review={review} key={review.id}/>)}
        </Box>
    )
}

export default ReviewsList;