import React from 'react'

export default function MoviesList(props) {

    console.log("User searched for" +props.search)

    

    return (
        <div style={{display:"flex", marginLeft:"-650px"}}>
            
           
            {
                
             props.movData &&   props.movData.map(movie => {
                   return( 
                   <div style={{marginTop: "50px", marginLeft: "50px"}}>
                            {/* <h1>Title : {movie.Title}</h1>
                            <p>Year : {movie.Year}</p> */}
                            <img src={movie.Poster}/>
                    </div>
                   )
                })

                
            }
           

        </div>
    )
}
