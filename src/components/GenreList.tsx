
import { Button, HStack, Image, Link, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre ,onSelectGenre}: Props) => {
  const { data, isLoading , error } = useGenres();
  if (error) return null;
  if(isLoading) return <Spinner/>
  return (
      <List>
            {data.map((genres) => (
              <ListItem key={genres.id} paddingY='5px'>
                <HStack>
                  <Image
                    boxSize='32px'
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(genres.image_background)} />
                  <Button
                    fontWeight={genres.id === selectedGenre?.id ? 'bold' : 'normal'}
                    whiteSpace="normal"
                    textAlign="left"
                    onClick={() => onSelectGenre(genres)}
                    fontSize='md'
                    variant='link'>
                    {genres.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
    </List>
  )
}

export default GenreList;