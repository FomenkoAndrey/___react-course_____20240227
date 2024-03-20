import { LevelPropsInterface } from './LevelProps.interface.ts'
import Level2 from './Level2.tsx'

const Level1 = ({ value }: LevelPropsInterface) => {
  return (
    <div>
      <h2>Level1: {value}</h2>

      <Level2 value={value} />
    </div>
  )
}

export default Level1
