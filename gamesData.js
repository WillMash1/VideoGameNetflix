
//Get a list of 5 games that relate to a specific string
function getData(searchTerm, pageSize="5"){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=key&search=${searchTerm}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'key'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }



//Get a list of games according to genre
function gameListGenre(genres, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=key&genres=${genres}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'key'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }


//Get a list of games according to publisher
function gameListPublisher(publishers, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=key&publishers=${publishers}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'key'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }

//Get a list of games according to platform i.e. PS4, PC, Xbox One
function gameListPlatform(platform, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=key&platforms=${platform}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'key'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }


//Get a list of games according to tags i.e. multiplayer, singleplayer
function gameListTags(tags, pageSize="5"  ){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games?key=key&tags=${tags}&page_size=${pageSize}`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'key'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }



//Get details about a single game  
function getSingleGame(searchTerm){
    
    const promise = axios.request({
      method: 'GET',
      url: `https://rawg-video-games-database.p.rapidapi.com/games/${searchTerm}?key=key`,
      headers: {
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        'x-rapidapi-key': 'key'
      }
    })
        .then((response) => response.data)
        .catch(err => console.log(err))
    
    return promise
  }
  
