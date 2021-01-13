export default function selectionMap({series, games}) {
    return {
        series: [
            {title: 'RPG', data: series.filter((item) => item.genre === 'rpg')}
        ]
    }
}