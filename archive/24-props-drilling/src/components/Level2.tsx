import { LevelPropsInterface } from './LevelProps.interface.ts'
import Level3 from './Level3.tsx'

const Level2 = ({ value }: LevelPropsInterface) => {
  return (
    <div>
      <h3>Level2: {value}</h3>
      <Level3 value={value} />
    </div>
  )
}

export default Level2
