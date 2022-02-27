import axios from 'axios'

const basic_url = "http://localhost:8080/openspace"


let initialState = {
    Root: {
        App: {
            Moon: true
        },
        Language:{
            Status:"eng"
        }

    },
    profilePage: {
        MainInfo: {
            Id: 1,
            Name: "Kanat",
            Surname: "Orynbaev",
            Login: "@kaakeee",
            Societies: {
                instagram: "@something_1",
                telegram: "@lobster",
                whatsapp: "87770829282"
            }
        },
        Publishes: {
            Orders: [
                {
                    Id: 1,
                    Title: 'My Own Title',
                    Description: 'I write for my order something is else than other orders haha maha maha',
                    Subject: 'Own Study',
                    Knowledge: ['Java', 'Mava', 'Sava'],
                    University: 'Astana IT',
                    Price: 'Besplatno',
                    Deadline: '12/12/21',
                    Payment: 'Halyk',
                    liked: true,
                    Publisher: '@Kanapulya'
                },
                {
                    Id: 2,
                    Title: 'Hz what is this',
                    Description: 'This a some description about order.I write for my order something is else than other orders haha maha maha',
                    Subject: 'Hz degen sabak',
                    Knowledge: ['Huy', 'Suy'],
                    University: 'NU',
                    Price: '10000',
                    Deadline: '19/10/21',
                    Payment: 'Jusan',
                    liked: false,
                    Publisher: '@Kanapulya'
                },
                {
                    Id: 3,
                    Title: 'Do for me website',
                    Description: 'I want my little own website help me. I write for my order something is else than other orders haha maha maha',
                    Subject: 'web application',
                    Knowledge: ['Html', 'Css', 'Something else'],
                    University: 'ENU',
                    Price: '9000',
                    Deadline: '30/11/21',
                    Payment: 'Kaspi',
                    liked: false,
                    Publisher: '@Kanapulya'
                }
            ],
            Products: [
                {
                    Id: 1,
                    Name: 'Airpods Original S4',
                    Price: 30000,
                    Description: 'Something is here will write some little students which wants become young rich men',
                    University: 'Astana IT',
                    City: 'Astana',
                    Delivery: 'has',
                    Images: [
                        "product6.jpg",
                        "product3.jpg",
                        "product1.jpg"
                    ],
                    Liked: false
                },
                {
                    Id: 2,
                    Name: 'Airpods ARs',
                    Price: 12000,
                    Description: 'My airpods no used hahaha.Something is here will write some little students which wants become young rich men',
                    University: 'KBTU',
                    City: 'Almaty',
                    Delivery: 'has not',
                    Images: [
                        "product7.jpg",
                        "product3.jpg",
                        "product4.jpg"
                    ],
                    Liked: true
                },
                {
                    Id: 3,
                    Name: 'Other Airpods nahu',
                    Price: 42000,
                    Description: 'Another airpods the images is same but else is another.Something is here will write some little students which wants become young rich men',
                    University: 'SDU',
                    City: 'Almaty',
                    Delivery: 'In same place',
                    Images: [
                        "product8.jpg",
                        "product7.jpg",
                        "product4.jpg"
                    ],
                    Liked: true
                },
                {
                    Id: 4,
                    Name: 'Fourth Airpods for Every',
                    Price: 77000,
                    Description: 'No thing to write i just tired. Something is here will write some little students which wants become young rich men',
                    University: 'AIU',
                    City: 'Astana',
                    Delivery: 'has',
                    Images: [
                        "product7.jpg",
                        "product5.jpg",
                        "product6.jpg"
                    ],
                    Liked: false
                }
            ],
            Projects: [
                {
                    Id: 1,
                    Name: 'Game in Java',
                    Price: 33000,
                    Description: 'My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                    Subject: 'Java Mava',
                    University: 'Astana IT',
                    Images: [
                        "product6.jpg",
                        "product9.jpg",
                        "product5.jpg"
                    ],
                    Liked: false
                },
                {
                    Id: 2,
                    Name: 'Game in Python',
                    Price: 15000,
                    Description: 'Some other game in python.My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                    Subject: 'Shakarim',
                    University: 'Semey',
                    Images: [
                        "product4.jpg",
                        "product8.jpg",
                        "product9.jpg"
                    ],
                    Liked: true
                },
                {
                    Id: 3,
                    Name: 'Hahahaha this is a project',
                    Price: 19000,
                    Description: 'This a project che suka.My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                    Subject: 'Satbaev',
                    University: 'Almaty',
                    Images: [
                        "product1.jpg",
                        "product3.jpg",
                        "product4.jpg"
                    ],
                    Liked: true
                }
            ]
        }
    },
    freelancePage: {
        freelance: [
            {
                Id: 4,
                Title: 'Create Chat Bot in python',
                Description: "Create chat bot in python lalal as in my new website,do it how you want,just be honest,i do it but i tired, why , i dont know",
                Subject: 'Python 2',
                Knowledge: ['Python', 'Telegram API'],
                University: "SDU",
                Price: 12000,
                Deadline: '19/09/2021',
                Payment: 'Kaspi',
                liked: true
            },
            {
                Id: 5,
                Title: 'Create Website in React',
                Description: "Create React website by using redux and node js, i wish worker will be honest and intelegent",
                Subject: 'Web application',
                Knowledge: ['React js', 'Redux', 'Node js', 'HTML', 'Css', 'AJax', 'Js', 'TS'],
                University: "KBTU",
                Price: 20000,
                Deadline: '01/10/2021',
                Payment: 'Kaspi',
                liked: false
            },
            {
                Id: 6,
                Title: 'Create Design',
                Description: "Create Design of website in figma and show me in team work lalalalal",
                Subject: 'Web Developer',
                Knowledge: ['Figma', 'Design'],
                University: "NU",
                Price: 15000,
                Deadline: '16/09/2021',
                Payment: 'Kaspi',
                liked: true
            }
        ]

    },
    StorePage: {
        Product: [
            {
                Id: 5,
                Name: 'Airpods Original S4',
                Price: 30000,
                Description: 'Something is here will write some little students which wants become young rich men',
                University: 'Astana IT',
                City: 'Astana',
                Delivery: 'has',
                Images: [
                    "product1.jpg",
                    "product2.jpg",
                    "product3.jpg"
                ],
                Liked: false
            },
            {
                Id: 6,
                Name: 'Iphone',
                Price: 120000,
                Description: 'Something is here will write student about his or her product and always will love her iphone and always will remember it may be will cry',
                University: 'ENU',
                City: 'Astana',
                Delivery: 'has not',
                Images: [
                    "product3.jpg",
                    "product4.jpg",
                    "product5.jpg"
                ],
                Liked: true
            },
            {
                Id: 7,
                Name: 'Samsung S10',
                Price: 70000,
                Description: 'Its my product,Samsung is best than Iphone i love samsung that we can play various games haha its so cool, Something is here will write student about his or her product and always will love her samsung and always will remember it may be will cry',
                University: 'Almaty IT',
                City: 'Almaty',
                Delivery: 'Meeting in some place',
                Images: [
                    "product7.jpg",
                    "product8.jpg",
                    "product9.jpg",
                    "product5.jpg"
                ],
                Liked: true
            },
            {
                Id: 8,
                Name: 'Macbook Pro',
                Price: 400000,
                Description: 'This is a MacBook,Best powerful type of laptops . Its my product,Samsung is best than Iphone i love samsung that we can play various games haha its so cool, Something is here will write student about his or her product and always will love her samsung and always will remember it may be will cry',
                University: 'KBTU',
                City: 'Almaty',
                Delivery: 'has',
                Images: [
                    "product3.jpg",
                    "product2.jpg",
                    "product5.jpg"
                ],
                Liked: false
            },
            {
                Id: 111,
                Name: 'Airpods Original S4',
                Price: 30000,
                Description: 'Something is here will write some little students which wants become young rich men',
                University: 'Astana IT',
                City: 'Astana',
                Delivery: 'has',
                Images: [
                    "product1.jpg",
                    "product2.jpg",
                    "product3.jpg"
                ],
                Liked: false
            },
            {
                Id: 112,
                Name: 'Iphone',
                Price: 120000,
                Description: 'Something is here will write student about his or her product and always will love her iphone and always will remember it may be will cry',
                University: 'ENU',
                City: 'Astana',
                Delivery: 'has not',
                Images: [
                    "product3.jpg",
                    "product4.jpg",
                    "product5.jpg"
                ],
                Liked: true
            },
            {
                Id: 113,
                Name: 'Samsung S10',
                Price: 70000,
                Description: 'Its my product,Samsung is best than Iphone i love samsung that we can play various games haha its so cool, Something is here will write student about his or her product and always will love her samsung and always will remember it may be will cry',
                University: 'Almaty IT',
                City: 'Almaty',
                Delivery: 'Meeting in some place',
                Images: [
                    "product7.jpg",
                    "product8.jpg",
                    "product9.jpg",
                    "product5.jpg"
                ],
                Liked: true
            },
            {
                Id: 115,
                Name: 'Macbook Pro',
                Price: 400000,
                Description: 'This is a MacBook,Best powerful type of laptops . Its my product,Samsung is best than Iphone i love samsung that we can play various games haha its so cool, Something is here will write student about his or her product and always will love her samsung and always will remember it may be will cry',
                University: 'KBTU',
                City: 'Almaty',
                Delivery: 'has',
                Images: [
                    "product3.jpg",
                    "product2.jpg",
                    "product5.jpg"
                ],
                Liked: false
            }
        ]
    },
    ProjectPage: {
        Project: [
            {
                Id: 4,
                Name: 'Game in C++',
                Price: 14000,
                Description: 'GAme in c++ My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                Subject: 'C++',
                University: 'SDU',
                Images: [
                    "product2.jpg",
                    "product3.jpg",
                    "product4.jpg"
                ],
                Liked: true
            },
            {
                Id: 5,
                Name: 'Telegram bot',
                Price: 17300,
                Description: 'Can you make telegram bot form me,GAme in c++ My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                Subject: 'Telegram API',
                University: 'Kazgu',
                Images: [
                    "product5.jpg",
                    "product6.jpg",
                    "product7.jpg"
                ],
                Liked: false
            },
            {
                Id: 6,
                Name: 'Essay in english',
                Price: 11000,
                Description: 'Essay is hard.GAme in c++ My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                Subject: 'English',
                University: 'NU',
                Images: [
                    "product7.jpg",
                    "product5.jpg",
                    "product9.jpg"
                ],
                Liked: false
            }
        ]
    },
    CartPage: {
        Orders: [
            {
                Id: 7,
                Title: 'My Own Title',
                Description: 'I write for my order something is else than other orders haha maha maha',
                Subject: 'Own Study',
                Knowledge: ['Java', 'Mava', 'Sava'],
                University: 'Astana IT',
                Price: 'Besplatno',
                Deadline: '12/12/21',
                Payment: 'Halyk',
                liked: true,
                Publisher: '@Kanapulya'
            },
            {
                Id: 8,
                Title: 'Hz what is this',
                Description: 'This a some description about order.I write for my order something is else than other orders haha maha maha',
                Subject: 'Hz degen sabak',
                Knowledge: ['Huy', 'Suy'],
                University: 'NU',
                Price: '10000',
                Deadline: '19/10/21',
                Payment: 'Jusan',
                liked: false,
                Publisher: '@Kanapulya'
            },
            {
                Id: 9,
                Title: 'Do for me website',
                Description: 'I want my little own website help me. I write for my order something is else than other orders haha maha maha',
                Subject: 'web application',
                Knowledge: ['Html', 'Css', 'Something else'],
                University: 'ENU',
                Price: '9000',
                Deadline: '30/11/21',
                Payment: 'Kaspi',
                liked: false,
                Publisher: '@Kanapulya'
            }
        ],
        Products: [
            {
                Id: 9,
                Name: 'Airpods Original S4',
                Price: 30000,
                Description: 'Something is here will write some little students which wants become young rich men',
                University: 'Astana IT',
                City: 'Astana',
                Delivery: 'has',
                Images: [
                    "product6.jpg",
                    "product3.jpg",
                    "product1.jpg"
                ],
                Liked: false
            },
            {
                Id: 10,
                Name: 'Airpods ARs',
                Price: 12000,
                Description: 'My airpods no used hahaha.Something is here will write some little students which wants become young rich men',
                University: 'KBTU',
                City: 'Almaty',
                Delivery: 'has not',
                Images: [
                    "product7.jpg",
                    "product3.jpg",
                    "product4.jpg"
                ],
                Liked: true
            },
            {
                Id: 11,
                Name: 'Other Airpods nahu',
                Price: 42000,
                Description: 'Another airpods the images is same but else is another.Something is here will write some little students which wants become young rich men',
                University: 'SDU',
                City: 'Almaty',
                Delivery: 'In same place',
                Images: [
                    "product8.jpg",
                    "product7.jpg",
                    "product4.jpg"
                ],
                Liked: true
            },
            {
                Id: 12,
                Name: 'Fourth Airpods for Every',
                Price: 77000,
                Description: 'No thing to write i just tired. Something is here will write some little students which wants become young rich men',
                University: 'AIU',
                City: 'Astana',
                Delivery: 'has',
                Images: [
                    "product7.jpg",
                    "product5.jpg",
                    "product6.jpg"
                ],
                Liked: false
            }
        ],
        Projects: [
            {
                Id: 7,
                Name: 'Game in Java',
                Price: 33000,
                Description: 'My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                Subject: 'Java Mava',
                University: 'Astana IT',
                Images: [
                    "product6.jpg",
                    "product9.jpg",
                    "product5.jpg"
                ],
                Liked: false
            },
            {
                Id: 8,
                Name: 'Game in Python',
                Price: 15000,
                Description: 'Some other game in python.My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                Subject: 'Shakarim',
                University: 'Semey',
                Images: [
                    "product4.jpg",
                    "product8.jpg",
                    "product9.jpg"
                ],
                Liked: true
            },
            {
                Id: 9,
                Name: 'Hahahaha this is a project',
                Price: 19000,
                Description: 'This a project che suka.My Game my rules ahahaha. Something is here will write some little students which wants become young rich men',
                Subject: 'Satbaev',
                University: 'Almaty',
                Images: [
                    "product1.jpg",
                    "product3.jpg",
                    "product4.jpg"
                ],
                Liked: true
            }
        ]
    }
}

export default initialState;