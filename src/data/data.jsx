const initReviews = [
    {
        id: 1,
        userName: "Alice Johnson",
        rating: 5,
        comment: "Absolutely fantastic service! Highly recommend!",
        date: "01/10/2024, 15:55:38",
        serviceId: 1
    },
    {
        id: 2,
        userName: "Bob Smith",
        rating: 4,
        comment: "Very good experience, but there were some delays.",
        date: "05/10/2024, 15:55:38",
        serviceId: 3
    },
    {
        id: 3,
        userName: "Charlie Brown",
        rating: 3,
        comment: "It was okay. I expected more based on the reviews.",
        date: "10/10/2024, 15:55:38",
        serviceId: 1
    },
    {
        id: 4,
        userName: "Diana Prince",
        rating: 5,
        comment: "Outstanding! Will definitely use again.",
        date: "15/10/2024, 15:55:38",
        serviceId: 3
    },
    {
        id: 5,
        userName: "Ethan Hunt",
        rating: 2,
        comment: "Not satisfied with the service. It did not meet my expectations.",
        date: "20/10/2024, 15:55:38",
        serviceId: 2
    },
];

const services = [
    {
        id: 1,
        name: "Sales Training for B2B clients",
        price: 95
    },
    {
        id: 2,
        name: "Product Development",
        price: 65
    },
    {
        id: 3,
        name: "Public Speaking Coaching",
        price: 35
    },
]

export {
    initReviews,
    services
}