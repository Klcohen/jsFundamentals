//objets

//objects store multiple objects that are similar in structure
//multiple data types
//denoted with {}
//key value pairs

//example
let netflix = {
    id: 1,
    name: "SuperStore",
    seasons: {
        season1: {
            seasonInfo: {
                episodeInfo: [
                   { episode: 1, episodeName: "pilot"},
                   { episode: 2, episodeName: "Magazine Profile"},
                   { episode: 3, episodeName: "Fuck"},
                   { episode: 4, episodeName: "all"}
                ]
            }
        },
        season2: {
            seasonInfo: {
                episodeInfo: [
                   { episode: 1, episodeName: "This"},
                   { episode: 2, episodeName: "Mother"},
                   { episode: 3, episodeName: "Fucking"},
                   { episode: 4, episodeName: "Typing"}
                ]
            }
        },
        season3: {
            seasonInfo: {
                episodeInfo: [
                   { episode: 1, episodeName: "Man"},
                   { episode: 2, episodeName: "This"},
                   { episode: 3, episodeName: "Is"},
                   { episode: 4, episodeName: "Goofy"}
                ]
            }
        }
    }
}

//dot notation

// console.log('all data:', netflix)
// console.log('just season info', netflix.seasons.season1.seasonInfo)
// console.log('episodeName:',netflix.seasons.season1.seasonInfo.episodeInfo[0].episodeName)

//Challenge
console.log('episodeName:',netflix.seasons.season2.seasonInfo.episodeInfo[2])


var json = {}