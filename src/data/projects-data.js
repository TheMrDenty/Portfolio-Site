
import placeholder from '../images/projects-imgs/placeholder.png'
import portfolio from '../images/projects-imgs/portfolio.png'
import saveTheUniverse from '../images/projects-imgs/saveTheUniverse.png'


const projects = [
    {
        id: 1,
        name: 'Portfolio',
        img: `..${portfolio}`,
        why: "I made my portfolio website to showcase my skills and previous work to potential clients or employers. As a web developer, I understand that having a portfolio site can be an effective way to demonstrate my expertise and make a positive impression on those who may be interested in hiring me. At the time I decided to make my portfolio website, I hadn't developed a significant project in a few months so I was eager to demonstrate everything I had learned in React and to show that my skills were up-to-date with the latest trends and technologies. I knew that building a portfolio website would be a great opportunity to push my abilities to the limits and I wanted to create something that I could be proud of and that would really showcase my strengths as a developer. So, I decided to dedicate most of my free time for a couple of weeks to create my portfolio website. I poured my heart and soul into it, working tirelessly to create something that would impress potential clients or employers. I made sure to include some of my best work, including previous projects I had worked on, along with detailed explanations of the technologies I used and the challenges I faced. I also added a few extra features to the website that would really demonstrate my abilities, such as interactive elements and animations. When I finally finished the website, I was extremely pleased with the results. I was confident that I had achieved my goal of demonstrating my React skills and previous work, while also pushing my abilities to their limits. Most importantly, I knew that I had created something that I could be proud of for years to come.",
        learned: [
            { item: '- Work with react routers, context, and state'},
            { item: '- Work with data being pulled from an API'},
            { item: '- Structuring and mapping data that I make'},
            { item: '- Work with libraries such as leaflet, loaders, emailjs, github calender, and animate'},
            { item: '- Using grid, psuedo elements,  in a effective way'},
            { item: '- Making, using, and styling svgs'},

        ],
        nextTime: "If I were to make a similar project I would improve the scalability of the projects navigator and allow handling of more than 6 items, the submenu links to handle the css if there are more than 4 items, and with the 'At Home' cards to allow for more than 8 cards per group of cards. I would also change the 'Animated Letters' component to to take in any string and split each character into its own string rather than having to type out each individual letter manually. I would add some hover effects on buttons and links, as well as adding an active class for the selected page in the Navbar.",
    },
    {
        id: 2,
        name: 'Save The Universe',
        img: `..${saveTheUniverse}`,
        why: 'This project was made as a final assignment for the JavaScript portion of a course I took through Per Scholas powered by TEKsystems. The project required me to code a game where the player and an enemy ship battle and if you destroy it you move on to the next ship until a set fleet size was defeated. The project was used to check if I was properly putting together what I learned in the class as well as properly using my available resources to solve any problems.',
        learned: [
            {item: '- How to use classes to make easily make multiple objects.'},
            {item: '- How to manipulate the dom to easily update displayed information'},
            {item: '- How to use an array of objects to store data that needs to be reused and changed out'},
            {item: '- How to embed youtube videos into a webpage and have them autoplay starting at specific times'},
        ],
        nextTime: 'If I were to go back and add anything to this project I would add a boss fight, a area where the player can upgrade and repair their ship, a score tracker and a way to play wave after wave until your ship is destroyed in order to earn a high score, a story mode, a few animations to match whats going on, and I would figure out how to properly loop the youtube video.',
    },
    {
        id: 3,
        name: 'Help me make this your project', 
        img: `..${placeholder}`, 
        why: 'Why wouldnt you?',
        learned: [
            {item: 'That you want my help as a web developer to make your project idea a reality!'},
        ],
        nextTime: 'The default values on the CONTACT ME form in Contact.',
    },
    {
        id: 4,
        name: 'Help me make this your project', 
        img: `..${placeholder}`, 
        why: 'Why wouldnt you?',
        learned: [
            {item: 'That you want my help as a web developer to make your project idea a reality!'},
        ],
        nextTime: 'The default values on the CONTACT ME form in Contact.',
    },
    {
        id: 5,
        name: 'Help me make this your project', 
        img: `..${placeholder}`, 
        why: 'Why wouldnt you?',
        learned: [
            {item: 'That you want my help as a web developer to make your project idea a reality!'},
        ],
        nextTime: 'The default values on the CONTACT ME form in Contact.',
    },
    {
        id: 6,
        name: 'Help me make this your project', 
        img: `..${placeholder}`, 
        why: 'Why wouldnt you?',
        learned: [
            {item: 'That you want my help as a web developer to make your project idea a reality!'},
        ],
        nextTime: 'The default values on the CONTACT ME form in Contact.',
    },
    
];

export default projects