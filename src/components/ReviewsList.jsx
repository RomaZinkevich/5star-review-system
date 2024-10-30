import ReviewComponent from "./ReviewComponent.jsx";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import StarRateIcon from '@mui/icons-material/StarRate';
import Select from "@mui/material/Select";
import {useState, useEffect} from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl";
import RatingSelectionComponent from "./RatingSelectionComponent.jsx";

const convertDate = (dateStr)=> {
    const [datePart, timePart] = dateStr.split(', ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes, seconds); // month - 1 because months are 0-indexed
}

const ReviewsList = ({reviews, services}) => {
    const [service, setService] = useState(services[0])
    const [sortedReviews, setSortedReviews] = useState([])
    const [avgRating, setAvgRating] = useState(0.0)
    const [stars, setStars] = useState(null)

    const processReviews = (reviews, service, stars) => {
        //filter
        let filteredReviews = reviews.filter(r => r.serviceId===service.id)
        //sort
        let sortedReviews = filteredReviews.sort((a,b) => convertDate(b.date) - convertDate(a.date))
        setSortedReviews(sortedReviews);
        //count average rating
        let avg = filteredReviews.reduce((sum, review) => sum + review.rating, 0) / filteredReviews.length;
        setAvgRating(avg);
        //filter by rating
        if (stars)
            setSortedReviews(sortedReviews.filter(r => `${Math.ceil(r.rating)}`===stars));
    }

    const handleSelectService = (e) => {
        //change service state
        let service = services.filter((s) => s.name === e.target.value)[0];
        setService(service);
        processReviews(reviews, service, stars)
    }

    const handleStarSelection = (starsValue) => {
        setStars(starsValue);
        processReviews(reviews, service, starsValue)
    }

    useEffect(() => {
        processReviews(reviews, service, stars)
    }, [reviews]);

    return (
        <Box className="reviews-list" display="flex" flexDirection="column">
            <FormControl fullWidth sx={{display:"flex", flexDirection:{ xs: 'column', sm: 'row' }}}>
                <InputLabel id="select-label">Service</InputLabel>
                <Select
                    sx={{width:300, marginRight:3, marginBottom:2}}
                    labelId="select-label"
                    id="select"
                    value={service.name}
                    label="Service"
                    onChange={handleSelectService}
                >
                    {services.map((s) => <MenuItem key={s.id} value={s.name}>{s.name}</MenuItem>)}
                </Select>

                <RatingSelectionComponent handleStarSelection={handleStarSelection}/>
            </FormControl>
            <Box display="flex" sx={{marginTop:3, marginBottom:2}}>
                <Typography variant="h6">Average Rating: </Typography>
                <Rating name="half-rating" size="large" value={avgRating} precision={0.5} readOnly />
            </Box>
            {sortedReviews.length > 0 ?
                sortedReviews.map((review) => <ReviewComponent review={review} key={review.id}/>)
                : <Box sx={{display:"flex"}}>
                <Typography variant="h6">No {stars} </Typography>
                <StarRateIcon sx={{marginTop:0.3}}/>
                <Typography variant="h6" sx={{marginLeft:0.5}}> reviews yet</Typography>
                </Box>
            }
        </Box>
    )
}

export default ReviewsList;