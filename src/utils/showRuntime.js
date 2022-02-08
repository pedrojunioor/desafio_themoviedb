export function showRuntime(movie){
    return `${Math.floor(movie.runtime/60)}h ${movie.runtime % 60}m`
}