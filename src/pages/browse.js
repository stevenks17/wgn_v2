import React from 'react'
import { useContent } from '../hooks'


export default function Browse() {

  // need series and genres
  const { series } = useContent('series')
  const { games } = useContent('games')

  console.log(series)
  console.log(games)
  // need to make slideable cards
  // animate cards to play gameplay videos??? maybe use browse container to house animation
    
  return  (<h1> Hello from the browse</h1>)

}