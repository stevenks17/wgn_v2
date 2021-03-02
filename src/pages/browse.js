import React from 'react'
import { BrowseContainer } from '../containers/browse'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'

export default function Browse() {

  // need series and genres
  const { series } = useContent('series')
  const { games } = useContent('games')
  // need to make slideable cards
  const slides = selectionFilter({ series, games})
  // animate cards to play gameplay videos??? maybe use browse container to house animation
    
  return  <BrowseContainer slides={slides} />

}