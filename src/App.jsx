import './App.css'
import ReviewForm from "./components/ReviewForm.jsx";
import {useState} from "react";
import initReviews from "./data/data.jsx";
import ReviewsList from "./components/ReviewsList.jsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    const [reviews, setReviews] = useState(initReviews);

    const addReview = async (newReview) => {
        newReview.id = Math.floor(Math.random() * 1000);
        setReviews([...reviews, newReview]);
        console.log([...reviews, newReview])
    }

  return (
    <>
        <ReviewForm onSubmit={addReview} />
        <ReviewsList reviews={reviews} />
    </>
  )
}

export default App
