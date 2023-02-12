# Portfolio-Site

cat facts api
https://cat-fact.herokuapp.com

random jokes api
https://github.com/15Dkatz/official_joke_api

github calender library
https://grubersjoe.github.io/react-github-calendar/

--App.js--

- Holds the apps Routing

--context.js--

- Holds the apps context and API calls

--data.js--

- Holds the apps subLinks data

--index.js--

- wraps the apps router and context provider around the app

==components==

--AnimatedLetters--

- takes in desired class, array of strings and index.
  maps out array of string and applies desired class and combines both indexes to give each class a unique timing.
  -displays character.

--EmailForm--

- imports AnimatedLetters and emailjs library.
- declares letterClass state and sets default class.
- useEffect sets a 4s timeout when 'text-animate-hover' class is called.
- uses useRef to set the returned form to the variable.
- sendEmail calls emailjs library and passes in the service and template keys, the referenced(ref) form, and user token. then either gives the user a success message or a failed message.
- returns a form for the user to fill out their email address, name, and message.

--Footer--

- imports sublinks data, Link, and fort awesome icons.
- returns a div that maps out sublinks and returns a div that sets page specific classNames and holds a Link to that iterations page and maps out links array that returns each iterations link
- returns a ul with two anchor links, one to Linkedin one to GitHub.

--Layout--

- imports and displays Navbar, Sidebar, and Submenu components.
- imports outlet and displays routed component from the router (displays Home page by default).

--Modal--

- is what pops up when screen size is too small for Navbar. must click three bars button to open-
- uses useGlobalContext to bring in isModalOpen state and the closeModal function.
- returns an aside with a class that uses jsx to check if isModalOpen and if true sets class to show.
- returns a button that uses the Close modal function onClick.
- returns a div that maps the sublinks data and returns an article that maps the links array that was destructured from sublinks onto anchors that surround the icon and label data that was destructured from links.

--Navbar--

- uses useGlobalContext to bring in openSidebar, openSubmenu, closeSubmenu functions.
- declares displaySubmenu which gets the name and positional data of the clicked on submenu link and calls openSubmeu with the data passed in.
- declares handleSubmenu function which checks if the nav element the users mouse is hovering over doesn't contain the 'link-btn' class. if it doesn't it calls the closeSubmenu function.
- returns a nav element that Links logo to home page.
  returns a button with a onClick for the openSubmenu function which displays if the window is small enough and maps out the sublinks data with a Link to the according page

--ProjectsNav--

- imports Link and projects data.
- declares getMousePosition function.
- useEffect tracks mouse position onload.
- returns a div that maps out projects data and returns a card that uses Link to route to each cards relevant page.

--Submenu--

- imports useGlobalContext and destructures isSubmenuOpen function and location and page state variables.
- sets container to null useRef.
- sets columns state as 'col-2' by default.
- uses useEffect to setColumns based off of links length and gets positional data of the sublink and its container whenever location or links state is updated.
- returns a aside which its className uses jsx to check if submenu state is set to true and applies a show class to it if it is. then displays a div with the className of the columns state which lets the component know how many sublinks to prepare for. then maps out links array as anchor tags.

==data==

--projects-data--

--sublinks-data--

- imports icons from fort awesome and font-awesome.
- sublinks array stores a page array, which stores a array of strings for its name and its route, and a links array which stores the same data as well as an icon.

==pages==

--About--

- imports AnimatedLetters, useGlobalContext, Footer, and Fort Awesome Icons.
- destructures catFact from global context.
- sets letterClass state for AnimatedLetters component.
- sets 4s timeout for onhover effect for AnimatedLetters component.
- returns AnimatedLetters component and about me section.
- returns skills section with cubespinner animation.
- returns at home section with catFact api info on display.
- returns Footer component

--Contact--

- imports Loader, Footer, EmailForm, and Map components.
- returns EmailForm
- returns a div with map information and a MapContainer with position data, maps url, and a marker.
- returns Footer component.
- returns Loader component.

--Home--

- imports useGlobalContext, headshot image, AnimatedLetter, Footer, and NavLink.
- sets letterClass state, arrays, and animation delay for AnimatedLetters component.
- destructures closeSubmenu from global context.
- sets current date information and uses it to set learningYears to current year minus year when I started coding for how many years I've been coding.
- returns article that displays headshot image, two AnimatedLetters Components for a welcome message and my name, and a p element for a quick intro to myself that ends with a NavLink to the contact page that is also a AnimatedLetter component.
- returns Footer component.

--Project--

--Projects--

- imports GithubCalendar, useGlobalContext, Footer, ProjectsNav, AnimatedLetters, and Loader.
- destructures joke and getRandomInt from global context
- declares currentJoke and show states.
- declares letterClass state, 2 arrays, and delay for AnimatedLetters (also runs handleSetJoke on same useEffect on load).
- declares handleShow function which sets show state to true.
- declares handleSetJoke function which sets show state to false and sets currentJoke state to a random int with a max of 10.
- returns a h1 with AnimatedLetters component.
- returns ProjectsNav.
- returns github div which displays a AnimatedLetters component and my github commit calender
- returns joke div which checks if there is a joke in state and displays the current jokes setup and two buttons, one checks if show state is true and if it is it checks if there are jokes in state and if so displays current jokes punchline, if show is false displays show punchline button that calls handleShow function onclick, the other displays a get random joke button which calls handleSetJoke onclick.
  -returns Footer component.
  -returns Loader component.

--== Things I Would Change/Add ==--

- Submenu's way of setting columns length to be scalable rather than hard codes.
- allow AnimatedLetters to take in a string and split each char into its own string so all you would have to do is call the component and pass in its desired class, the word you want animated, and when you want to start the animation
- set a hover affect on buttons as well as a active class on navlinks
