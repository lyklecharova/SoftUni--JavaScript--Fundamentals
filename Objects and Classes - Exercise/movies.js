function movies(input) {

    for (let movie of input) {
        let movieName;
        let movieObj = {};
        if (movie.includes("addMovie")) {
            movieName = movie.replace("addMovie ", "");
            movieObj.name = movieName;
        }
        for (let secondMovie of input) {
            if (secondMovie.includes(`${movieName} directedBy`)) {
                let director = secondMovie.replace(`${movieName} directedBy `, "");
                movieObj.director = director;
            }
            if (secondMovie.includes(`${movieName} onDate`)) {
                let date = secondMovie.replace(`${movieName} onDate `, "");
                movieObj.date = date;
            }
        }
        if (Object.keys(movieObj).length === 3) {
            console.log(JSON.stringify(movieObj));
        }
    }

}


