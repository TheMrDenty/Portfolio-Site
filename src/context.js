import React, { useContext, useEffect, useState } from "react";
import sublinks from "./data/sublinks-data";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:[''], links:[]});
   
    /* SIDEBAR */

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    /* SUBMENU */

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
    /* --CAT FACTS-- */
    //state to hold movie data
    const [catFact, setCatFact] = useState([]);
  
    //function to get movies
    const getCatFact = async () => {
        // make fetch request and store response
        try {
            const response = await fetch(
                `https://cat-fact.herokuapp.com/facts`
            );
            // parse JSON response into js object
            const data = await response.json();
            // sets Movie state to the selected movie
            /* console.log('hey', data[0]); */
            setCatFact(data);
            
        } catch(e){
            console.error(e);
        }
    }
    
    useEffect(() => {
        getCatFact();
    }, []);

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



    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max)
    }


    
    return <AppContext.Provider value={{
        isSubmenuOpen, isModalOpen, openSubmenu, openModal, closeSubmenu, closeModal, location, page,
        catFact, joke, getRandomInt
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}