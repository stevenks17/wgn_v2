export default function selectionMap({series, games}) {
    return {
        series: [
            {
                title: 'RPG', 
                data: series.filter((item) => item.genre === 'RPG'),
            },

            {
                title: 'FPS', 
                data: series.filter((item) => item.genre === 'FPS'),
            },

            {
                title: 'Horror', 
                data: series.filter((item) => item.genre === 'Horror'),
            },

            {
                title: 'Strategy', 
                data: series.filter((item) => item.genre === 'Strategy'),
            },

        ],
        games: [
            {
                title: 'RPG', 
                data: games.filter((item) => item.genre === 'RPG'),
            },
            {
                title: 'FPS', 
                data: games.filter((item) => item.genre === 'FPS'),
            },
            {
                title: 'Horror', 
                data: games.filter((item) => item.genre === 'Horror'),
            },
            {
                title: 'Strategy', 
                data: games.filter((item) => item.genre === 'Strategy'),
            },
            {
                title: 'Action-Adventure', 
                data: games.filter((item) => item.genre === 'Action-Adventure'),
            },

        ]
    }
}