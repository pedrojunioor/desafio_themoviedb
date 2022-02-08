export function showGenres(movie) {
    return movie.genres.map((item,i) =>{
        if(movie.genres.length > 1){
            if(i < movie.genres.length -1){
                return ' ' + item.name 
            }
            return ' ' + item.name
        }
        
    })
}