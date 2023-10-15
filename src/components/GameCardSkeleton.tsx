import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
      <Card>
          <Skeleton width='280px' height="200px" />
          <CardBody>
              <SkeletonText justifyContent={'space-between'}/>
          </CardBody>
    </Card>
  )
}

export default GameCardSkeleton;