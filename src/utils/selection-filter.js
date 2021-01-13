export default function selectionFilter({series, games}) {
    return {
        series: [
            {
                title: 'RPG', 
                data: series.filter((item) => item.genre === 'rpg'),
            },

            {
                title: 'FPS', 
                data: series.filter((item) => item.genre === 'fps'),
            },

            {
                title: 'Horror', 
                data: series.filter((item) => item.genre === 'horror'),
            },

            {
                title: 'Strategy', 
                data: series.filter((item) => item.genre === 'strategy'),
            },

        ],
        games: [
            {
                title: 'RPG', 
                data: games.filter((item) => item.genre === 'rpg'),
            },
            {
                title: 'FPS', 
                data: games.filter((item) => item.genre === 'fps'),
            },
            {
                title: 'Horror', 
                data: games.filter((item) => item.genre === 'horror'),
            },
            {
                title: 'Strategy', 
                data: games.filter((item) => item.genre === 'strategy'),
            },
            {
                title: 'Action-Adventure', 
                data: games.filter((item) => item.genre === 'action-adventure'),
            },

        ]
    }
}