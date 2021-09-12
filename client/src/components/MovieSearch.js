import React, {useState} from 'react'
import MoviesList from './MoviesList'
import SearchBox from './SearchBox'

export default function MovieSearch() {

    const [search, setSearch] = useState("");
    const [movData, setMovData] = useState(null);

    const onChange = (value) => {
        console.log("Change happened")
        setSearch(value)

        // Call API call method here
        searchMovies(value);
    }

    const searchMovies = async (value) => {
        console.log("Search string is" + value);

        const url = `https://www.omdbapi.com/?s=${value}&apikey=c0dbdb9`;
        
        if(value != null || value!= ""){
            try{
                const response = await fetch(url);
                const data = await response.json();
                setMovData(null);
                setMovData(data.Search);
                console.log("Data received : " +JSON.stringify(data))
                console.log("Movie Data" +JSON.stringify(movData))  
             }
             catch(err){
                console.log('Error occured while searching')
             }
        }

       
    }



    return (
        <div>
            <h3>Just type any letter in the input below :</h3>

            {/* Component to search for movies */}
            <SearchBox
            search={search}
            onChange = {onChange}/>

            {/* Component to show movies */}
           
            <MoviesList
            movData = {movData}/>
            



        </div>
    )
}
