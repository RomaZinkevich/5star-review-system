# Project Title: 5 Star Review System

### Link: [5starreviewsystem.netlify.app](https://5starreviewsystem.netlify.app).

### Description:

The 5 Star Review System is a web application tailored for TalentHive, aimed at helping businesses manage their online reviews effectively.

### Flaws of Standalone Version

- ####  Multiple comments from the same user:
  The 5 Star Review System allows users to leave multiple comments
    when used as a standalone application. However, when integrated with
    the TalentHive system, it will restrict users to one review per 
    account. This will be achieved by implementing user authentication
    and tracking, ensuring that even anonymous submissions are limited
    to one review per logged-in user, thus maintaining the integrity 
    and quality of feedback received.
- #### Selection of Service:
  Currently, users must choose which service to review, which can be limiting.
    In a real application, users typically select a service and leave a review 
    without needing to pick it manually. Improving this process by automatically
    linking reviews to the relevant services would create a more user-friendly experience.


### Built With:

- [Vite](https://vitejs.dev/) - Frontend build tool
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Material-UI](https://mui.com/) - React components for faster and easier web development