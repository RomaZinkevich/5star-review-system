import {useState} from "react";
import Rating from "@mui/material/Rating"
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl";

const ReviewForm = ({onSubmit, services}) => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(4.5);
    const [service, setService] = useState(services[0]);

    const handleSelectService = (e) => {
        let service = services.filter((s) => s.name === e.target.value)[0];
        setService(service);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newReview = {}
        newReview.userName = name ? name : "Anonymous Review";
        newReview.comment = comment ? comment : null;
        newReview.serviceId = service.id;
        const date = new Date();
        const formattedDate = date.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        newReview.date = formattedDate;
        newReview.rating = rating;
        onSubmit(newReview);
        setName('');
        setComment('');
        setRating(4.5)
    }

    return (
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", width:500, paddingLeft:10, paddingRight:10, backgroundColor:"#FBFCFE", borderRadius:4}}>
            <form className="review-form" onSubmit={handleSubmit}>
                <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <Typography variant="h4" sx={{m:2, alignSelf:"center"}}>Leave a Review! </Typography>
                    <Rating sx={{alignSelf:"center", m:2}} name="half-rating" size="large" value={rating} defaultValue={4.5} precision={0.5}  onChange={(e, newValue) => setRating(newValue)} />
                    <FormControl fullWidth>
                        <InputLabel id="select-label">Service</InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={service.name}
                            label="Service"
                            onChange={handleSelectService}
                        >
                            {services.map((s) => <MenuItem key={s.id} value={s.name}>{s.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField id="filled-basic" label="Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField multiline id="filled-basic" label="Comment (optional)" variant="filled" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <Button sx={{
                        m: 4,
                        backgroundColor: '#2228C3',
                        '&:hover': {
                            backgroundColor: '#161B9C',
                        },
                    }} variant="contained" type="submit">Submit Review</Button>
                </Box>
            </form>
        </Box>
    )
}

export default ReviewForm;