import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
    
    //Games
    //action Games
    //xbox Games
    //.......
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genres?.name || ''} Games`;
  return (
      <Heading as='h1' margin={5} fontSize='5xl'>{ heading }</Heading>
  )
}

export default GameHeading