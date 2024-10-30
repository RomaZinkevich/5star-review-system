import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'
import {useState} from "react";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ReviewForm from "./components/ReviewForm.jsx";
import { initReviews, services } from "./data/data.jsx";
import ReviewsList from "./components/ReviewsList.jsx";


function App() {
    const [reviews, setReviews] = useState(initReviews);
    const [writingMode, setWritingMode] = useState(false);

    const addReview = async (newReview) => {
        newReview.id = Math.floor(Math.random() * 1000);
        setReviews([...reviews, newReview]);
    }

    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", m:[0,0,0,5]}}>
                {writingMode ? <>
                        <Button sx={{width:200, alignSelf:"start", m: {
                                xs: 2,
                                md:1,
                                lg: 0,
                            },}} variant="outlined" onClick={()=>setWritingMode(false)}>Close form</Button>
                        <ReviewForm onSubmit={addReview} services={services}/>
                    </>
                : <Button sx={{
                        width:200,
                        alignSelf:"start",
                        m: {
                            xs: 2,
                            md:1,
                            lg: 0,
                        },
                        backgroundColor: '#2228C3',
                        '&:hover': {
                            backgroundColor: '#161B9C',
                        },
                    }}
                          variant="contained" onClick={()=>setWritingMode(true)}> Leave a review</Button>}
            </Box>
            <Box sx={{width:"95%", margin:"auto"}}>
                <ReviewsList reviews={reviews} services={services}/>
            </Box>
        </ThemeProvider>
  )
}

export default App
