import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import {useState} from "react";

const RatingSelectionComponent = ({handleStarSelection}) => {
    const [stars, setStars] = useState("");

    const handleStars = (e, newValue) => {
        setStars(newValue);
        handleStarSelection(newValue);
    }

    return (
        <ToggleButtonGroup
            value={stars}
            exclusive
            onChange={handleStars}
            aria-label="text stars"
            sx={{textAlign:"center"}}
        >
            <ToggleButton value="1" aria-label="1star">
                <Typography sx={{ marginRight: 0.5 }}>1</Typography>
                <StarRateIcon />
            </ToggleButton>
            <ToggleButton value="2" aria-label="2stars">
                <Typography sx={{ marginRight: 0.5 }}>2</Typography>
                <StarRateIcon />
            </ToggleButton>
            <ToggleButton value="3" aria-label="3stars">
                <Typography sx={{ marginRight: 0.5 }}>3</Typography>
                <StarRateIcon />
            </ToggleButton>
            <ToggleButton value="4" aria-label="4stars">
                <Typography sx={{ marginRight: 0.5 }}>4</Typography>
                <StarRateIcon />
            </ToggleButton>
            <ToggleButton value="5" aria-label="5stars">
                <Typography sx={{ marginRight: 0.5 }}>5</Typography>
                <StarRateIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default RatingSelectionComponent;