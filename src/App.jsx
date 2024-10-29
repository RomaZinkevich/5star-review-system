import './App.css'
import ReviewForm from "./components/ReviewForm.jsx";
import {useState} from "react";
import initReviews from "./data/data.jsx";
import ReviewsList from "./components/ReviewsList.jsx";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    const [reviews, setReviews] = useState(initReviews);
    const [writingMode, setWritingMode] = useState(false);

    const addReview = async (newReview) => {
        newReview.id = Math.floor(Math.random() * 1000);
        setReviews([...reviews, newReview]);
        console.log([...reviews, newReview])
    }

    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", m:2}}>
                {writingMode ? <>
                        <Button sx={{width:200, alignSelf:"start"}} variant="outlined" onClick={()=>setWritingMode(false)}>Close form</Button>
                        <ReviewForm onSubmit={addReview} />
                    </>
                : <Button sx={{width:200, alignSelf:"start"}} variant="contained" onClick={()=>setWritingMode(true)}> Leave a review</Button>}
            </Box>
            <ReviewsList reviews={reviews} />
        </ThemeProvider>
  )
}

export default App
