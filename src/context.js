import React, { useContext, useEffect, useState } from "react";
import sublinks from "./data/sublinks-data";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    
    
    
    /* NavModal */

    const [isNavModalOpen, setIsNavModalOpen] = useState(false);

    const openNavModal = () => {
        setIsNavModalOpen(true);
    }

    const closeNavModal = () => {
        setIsNavModalOpen(false);
    }

    /* AboutCardsModal */
    const [isAboutCardsModalOpen, setIsAboutCardsModalOpen] = useState(false);
    

    const openAboutCardsModal = () => {
        setIsAboutCardsModalOpen(true);
    }

    const closeAboutCardsModal = () => {
        setIsAboutCardsModalOpen(false);
    }

    /* SUBMENU */
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:[''], links:[]});
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page[0] === text);
        /* console.log(page) */
        setPage(page);
        setLocation(coordinates)
        setIsSubmenuOpen(true);
        
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
        /* console.log('here') */
    }

    // should I move my API's to their own component and import them that way?

    /* API */

    /* --JOKES-- */
    //state to hold movie data
    const [joke, setJoke] = useState([]);
    
    //function to get movies
    const getJoke = async () => {
        // make fetch request and store response
        try {
            const response = await fetch(
                `https://official-joke-api.appspot.com/jokes/programming/ten`
            );
            // parse JSON response into js object
            const data = await response.json();
            // sets Movie state to the selected movie
            /* console.log('hey', data); */
            setJoke(data);
            
        } catch(e){
            console.error(e);
        }
    }
    
    useEffect(() => {
        getJoke();
    }, []);

    /* --project-- */
    



    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }


    
    return <AppContext.Provider value={{
        isSubmenuOpen, isNavModalOpen, openSubmenu, openNavModal, closeSubmenu, closeNavModal, location, page,
         joke, getRandomInt, isAboutCardsModalOpen, openAboutCardsModal, closeAboutCardsModal
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}