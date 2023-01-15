import {SiOpenaigym} from 'react-icons/si'



export const Links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Program One",
        info: "Weight Training",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Program Two",
        info: "Cardio exercises",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Program Three",
        info: "Flexibility training",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Program Four",
        info: "Aerobic exercises!",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "Achieving ultimate human performance"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "Being compassionate to clients needs or wants"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Helping everyone (Staff and clients) Achieve their goals"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "Creating a family / community / being their 'third place' "
    }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: " Generally, aim to do either : 30 minutes of moderate-intensity cardio activity at least five days per week (150 minutes per week) at least 25 minutes of vigorous aerobic activity three days per week (75 minutes per week)!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Morning workouts are ideal for burning fat and losing weight, but afternoon workouts may give your performance a boost, since you'll have eaten a meal or two by the time you get going."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "The ideal workout duration can vary significantly depending on the person, their goals, their preferences, and the exercise type. For weightlifting and bodyweight strength training, 45–60 minutes per session may suffice. Meanwhile, cardiovascular and calisthenic training may be better if performed for 30–60 minutes."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Warm up properly before exercising to prevent injury and make your workouts more effective. This warm-up routine should take at least 6 minutes. Warm up for longer if you feel the need."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "If your main goal is weight loss, you want to burn calories and build muscle mass. So, for optimal benefits, you should incorporate both cardio and strength training into your exercise routine.."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Weight training is an excellent way to build muscle mass and make your muscles stronger. It can also keep your metabolism chugging, strengthen your bones and joints, improve your muscle tone, help you burn more calories, and keep you healthier as you age."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Fitness within is the cleanest and most organized gym I’ve ever seen! I have no words to say how wonderful they are! Domenic makes you feel super comfortable, Kaitlyn helps you eat better and healthy! Fitness Within has a team of excellence! They have a place for anyone, a plan for any goal, everything is very flexible! I am extremely satisfied with Fitness Within and the entire team",
        job: "Student",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "It has been almost one year and I have lost weight and increased my strength.  I find the coaches – so motivating and supportive.  During the shred I worked with Dave and he was very motivating and held me accountable.  The nutritional guidance and meal plans are easy to follow that is realistic and plenty of food. Everyone is extremely – REAL – supportive, FUN, KNOWLEDGABLE and challenging.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "I have been training at Fitness Within for 2 years.  I look forward to coming into the studio because I know that I will get a GREAT WORKOUT!  I love training here and I am getting so much stronger and tighter.  The coaches pushed me beyond what I thought I could handle!  I love the atmosphere and the people.   They make it so comfortable to be in a fitness environment. ",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "I joined Fitness Within about 8 months ago and I lost 52lbs.  My favorite thing about their workouts is how much the coaches care and push you.  The best thing working with an accountability coach is their never ending availability to ask questions and get support.   I found their nutritional guidance and meal plans were easy to follow and modify.  I really appreciate how much everyone there truly cares about your success.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "I have been with Fitness Within for one week.  Since joining I am eating healthier and the coaching helps motivate me and the coaches keep encouraging me to do my best!!!  I love the cookbook they gave me because the recipes are simple and sooo good.   The studio is welcoming, motivating but not intimidating … they take the time to explain things in a very positive way …. Love it!",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Unlimited Member',
        desc: 'Unlimited Plan with all perks.',
        price: 159.99,
        features: [
            {feature: 'Unlimited classes', available: true},
            {feature: 'Fitness assessment', available: true},
            {feature: 'Personalized Macros Diet Plan', available: true},
            {feature: 'Access to a Dietician', available: true},
            {feature: 'Locker and shower', available: true}
        ]
    },
    {
        id: 2,
        name: 'Gold Membership',
        desc: '8 classes a month + perks',
        price: 89.99,
        features: [
            {feature: '8 Classes a Month', available: true},
            {feature: 'Fitness assessment', available: true},
            {feature: 'Locker room with showers', available: true},
            {feature: 'Personalized Macros Diet Plan', available: false},
            {feature: 'Access to a Dietician', available: false}   
        ]
    },
    {
        id: 3,
        name: 'Single Class Pass',
        desc: 'Drop in for a classs and try out something new',
        price: 89.99,
        features: [
            {feature: '1 single session class', available: true},
            {feature: 'Showers and locker', available: true},
            {feature: 'Personalized Macros Diet Plan', available: false},
            {feature: 'Access to a Dietician', available: false}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]