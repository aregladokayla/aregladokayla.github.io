function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close dropdown menu
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let movieContainer = document.querySelector('#movie-container');
let infoContainer = document.querySelector('#information');

let movieData = [
    {
        title: 'A Star is Born',
        class: 'astarisborn',
        date: '2018',
        original: '1937',
        movies: [
            {
                title: 'A Star is Born',
                date: '1937',
                src: 'Trailers/A_Star_Is_Born/A_Star_Is_Born_1937_Trailer.mp4',
            },
            {
                title: 'A Star is Born',
                date: '1954',
                src: 'Trailers/A_Star_Is_Born/A_Star_Is_Born_1954_Trailer.mp4',
            },
            {
                title: 'A Star is Born',
                date: '1976',
                src: 'Trailers/A_Star_Is_Born/A_Star_Is_Born_1976_Trailer.mp4',
            },
            {
                title: 'A Star is Born',
                date: '2018 ',
                src: 'Trailers/A_Star_Is_Born/A_Star_Is_Born_2018_Trailer.mp4',
            },
        ]
    },
    {
        title: 'Batman',
        class: 'batman',
        date: '2016 ',
        original: '1937',
        movies: [
            {
                title: 'Batman',
                date: '1937 ',
                src: 'Trailers/Batman/Batman_1943_Trailer.mp4',
            },
            {
                title: 'Batman',
                date: '1966 ',
                src: 'Trailers/Batman/Batman_1966_Trailer.mp4',
            },
            {
                title: 'Batman',
                date: '1989 ',
                src: 'Trailers/Batman/Batman_1989_Trailer.mp4',
            },
            {
                title: 'Batman Begins',
                date: '2005 ',
                src: 'Trailers/Batman/Batman_Begins_2005_Trailer.mp4',
            },
            {
                title: 'Batman vs Superman',
                date: '2016 ',
                src: 'Trailers/Batman/Batman_vs_Superman_2016_Trailer.mp4',
            },
        ]
    },
    {
        title: 'King Kong',
        class: 'kingkong',
        date: '2017 ',
        original: '1933',
        movies: [
            {
                title: 'King Kong',
                date: '1933 ',
                src: 'Trailers/King_Kong/King_Kong_1933_Trailer.mp4',
            },
            {
                title: 'King Kong',
                date: '1976 ',
                src: 'Trailers/King_Kong/King_Kong_1976_Trailer.mp4',
            },
            {
                title: 'King Kong',
                date: '2005 ',
                src: 'Trailers/King_Kong/King_Kong_2005_Trailer.mp4',
            },
            {
                title: 'Kong Skull Island',
                date: '2017 ',
                src: 'Trailers/King_Kong/Kong_Skull_Island_2017_Trailer.mp4',
            },
        ]
    },
    {
        title: 'Little Women',
        class: 'littlewomen',
        date: '2019 ',
        original: '1933',
        movies: [
            {
                title: 'Little Women',
                date: '1933 ',
                src: 'Trailers/Little_Women/Little_Women_1933_Trailer.mp4',
            },
            {
                title: 'Little Women',
                date: '1949 ',
                src: 'Trailers/Little_Women/Little_Women_1949_Trailer.mp4',
            },
            {
                title: 'Little Women',
                date: '1994 ',
                src: 'Trailers/Little_Women/Little_Women_1994_Trailer.mp4',
            },
            {
                title: 'Little Women',
                date: '2019 ',
                src: 'Trailers/Little_Women/Little_Women_2019_Trailer.mp4',
            },
        ]
    },
    {
        title: 'Spiderman',
        class: 'spiderman',
        date: '2018 ',
        original: '1977',
        movies: [
            {
                title: 'Spider Man',
                date: '1977 ',
                src: 'Trailers/Spider_Man/Spider_Man_1977_Trailer.mp4',
            },
            {
                title: 'Spider Man',
                date: '2002 ',
                src: 'Trailers/Spider_Man/Spider_Man_2002_Trailer.mp4',
            },
            {
                title: 'The Amazing Spider-Man',
                date: '2012 ',
                src: 'Trailers/Spider_Man/The_Amazing_Spider_Man_2012_Trailer.mp4',
            },
            {
                title: 'Spider Man: Homecoming',
                date: '2017 ',
                src: 'Trailers/Spider_Man/Spider_Man_Homecoming_2017_Trailer.mp4',
            },
            {
                title: 'Spiderman: Into the Spiderverse',
                date: '2018 ',
                src: 'Trailers/Spider_Man/Spider_Man_Into_the_Spiderverse_2018_Trailer.mp4',
            }
        ]
    },
    {
        title: 'Superman',
        class: 'superman',
        date: '2013 ',
        original: '1948',
        movies: [
            {
                title: 'Superman',
                date: '1948 ',
                src: 'Trailers/Superman/Superman_1948_Trailer.mp4',
            },
            {
                title: 'Atom Man vs Superman',
                date: '1950 ',
                src: 'Trailers/Superman/Atom_Man_vs_Superman_1950_Trailer.mp4',
            },
            {
                title: 'Superman and the Mole Men',
                date: '1951 ',
                src: 'Trailers/Superman/Superman_and_the_Mole_Men_1951_Trailer.mp4',
            },
            {
                title: 'Superman',
                date: '1978 ',
                src: 'Trailers/Superman/Superman_1978_Trailer.mp4',
            },
            {
                title: 'Man of Steel',
                date: '2013 ',
                src: 'Trailers/Superman/Man_of_Steel_2013_Trailer.mp4',
            }
        ]
    },
    {
        title: 'The Ring',
        class: 'thering',
        date: '2017 ',
        original: '1998',
        movies: [
            {
                title: 'The Ring',
                date: '1998 ',
                src: 'Trailers/The_Ring/Ring_1998_Trailer.mp4',
            },
            {
                title: 'The Ring',
                date: '1998 ',
                src: 'Trailers/The_Ring/Ring_Rasen_1998_Trailer.mp4',
            },
            {
                title: 'The Ring',
                date: '2002 ',
                src: 'Trailers/The_Ring/The_Ring_2002_Trailer.mp4',
            },
            {
                title: 'The Ring',
                date: '2005 ',
                src: 'Trailers/The_Ring/The_Ring_Two_2005_Trailer.mp4',
            },
            {
                title: 'The Ring',  
                date: '2017 ',
                src: 'Trailers/The_Ring/Rings_2017_Trailer.mp4',
            },
        ]
    },
];

function displayMovie() {
    movieData.forEach(function (movie) {
        let trailerContainer = document.createElement('div');
        trailerContainer.classList = `trailer-container ${movie.class}`;
        movie.movies.forEach(function (seriesMovie) {
            trailerContainer.innerHTML += `<video autoplay muted loop preload="metadata"><source src="${seriesMovie.src}" type="video/mp4"></video>`
        });
        movieContainer.appendChild(trailerContainer);
    });  
}

function displayInfo() {
    movieData.forEach(function (movie) {
        let indivInfoContainer = document.createElement('div');
        indivInfoContainer.classList = `info-container ${movie.class}`;
        
        indivInfoContainer.innerHTML += `<h1> ${movie.title} </h1> <p> ${movie.date} </p>`
        infoContainer.appendChild(indivInfoContainer);
    });
}

function displayOriginalYear() {
    movieData.forEach(function (movie) {
        let indivInfoContainer = document.createElement('div');
        indivInfoContainer.classList = `info-container ${movie.class}`;

        indivInfoContainer.innerHTML += `<h1> ${movie.title} </h1> <p> ${movie.original} </p>`
        infoContainer.appendChild(indivInfoContainer);
    });
}

function newestSort(a, b) {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    if (aDate > bDate) {
        return -1;
    } else if (aDate < bDate) {
        return 1;
    } else {
        return 0;
    }
}

function alphabetical(a, b) {
    if (a.title[0] < b.title[0]) {
        return -1;
    } else if (a.title[0] > b.title[0]) {
        return 1;
    } else {
        return 0;
    }
}

function oldestOriginal(a, b) {
    let aOriginal = new Date(a.original);
    let bOriginal = new Date(b.original);
    if (aOriginal > bOriginal) {
        return 1;
    } else if (aOriginal < bOriginal) {
        return -1;
    } else {
        return 0;
    }
}

function indivNewest(a, b) {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    if (aDate > bDate) {
        return -1;
    } else if (aDate < bDate) {
        return 1;
    } else {
        return 0;
    }
}

function indivEarliest(a, b) {
    let aDate = new Date(a.date);
    let bDate = new Date(b.date);
    if (aDate > bDate) {
        return 1;
    } else if (aDate < bDate) {
        return -1;
    } else {
        return 0;
    }
}

document.querySelector('#sortDropdown-1').addEventListener('change', function (evt) {
    let filter = evt.target.value;

    if (filter == "newest") {
        movieData.sort(newestSort);
        console.log('Sorting titles from newest to oldest movie franchise');
        infoContainer.innerHTML = '';
        displayInfo();
    } 
    
    else if (filter == "alpha") {
        movieData.sort(alphabetical);
        console.log('Sorting titles alphabetically');
        infoContainer.innerHTML = '';
        displayInfo();
    } 
    
    else if (filter =="oldestOriginal") {
        movieData.sort(oldestOriginal);
        console.log('Sorting titles from oldest to newest original release');
        infoContainer.innerHTML = '';
        displayOriginalYear();
    }

    movieContainer.innerHTML = '',
    displayMovie();
});

document.querySelector('#sortDropdown-2').addEventListener('change', function (evt) {
    let filter = evt.target.value;  
    
    if (filter == "indivNewest") {
        movieData.movies.sort(indivNewest);
        console.log('Sorting trailers by latest release');
        trailerContainer.innerHTML = '';
        displayIndivNewest();
    } 
    
    else if (filter == "indivEarliest") {
        movie.movies.sort(indivEarliest);
        console.log('sorting movies by earliest release');
        displayMovie();
    }
});

// display movies on load
displayMovie();
displayInfo();