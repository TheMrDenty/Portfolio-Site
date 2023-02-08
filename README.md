# Portfolio-Site

cat facts api
https://cat-fact.herokuapp.com

random jokes api
https://github.com/15Dkatz/official_joke_api

github calender library
https://grubersjoe.github.io/react-github-calendar/

--App.js--
-Holds the apps Routing

--context.js--
-Holds the apps context and API calls

--data.js--
-Holds the apps subLinks data

--index.js--
-wraps the apps router and context provider around the app

==components==

--AnimatedLetters--
-takes in desired class, array of strings and index.
maps out array of string and applies desired class and combines both indexes to give each class a unique timing.
-displays character.

--Footer--

--Layout--
-imports and displays Navbar, Sidebar, and Submenu components.
-imports outlet and displays routed component from the router (displays Home page by default).

--Modal--
-uses useGlobalContext to bring in isModalOpen state and the closeModal function.
-returns an aside with a class that uses jsx to check if isModalOpen and if true sets class to show.
-returns a button that uses the Close modal function onClick.
-returns a div that maps the sublinks data and returns an article that maps the links array that was destructured from sublinks onto anchors that surround the icon and label data that was destructured from links.

--Navbar--
-uses useGlobalContext to bring in openSidebar, openSubmenu, closeSubmenu functions.
-declares displaySubmenu which gets the name and positional data of the clicked on submenu link and calls openSubmeu with the data passed in.
-declares handleSubmenu function which checks if the nav element the users mouse is hovering over doesn't contain the 'link-btn' class. if it doesn't it calls the closeSubmenu function.
-returns a nav element that Links logo to home page.
returns a button with a onClick for the openSubmenu function which displays if the window is small enough and maps out the sublinks data with a Link to the according page

==pages==
