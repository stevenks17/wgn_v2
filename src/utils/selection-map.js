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
    }
}