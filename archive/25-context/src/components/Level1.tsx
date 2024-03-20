import { PropContext } from '../App.tsx'
import { LevelPropsInterface } from './LevelProps.interface.ts'
import Level2 from './Level2.tsx'

const Level1 = () => {
  return (
    <PropContext.Consumer>
      {(contextValue: LevelPropsInterface) => {
        if (!contextValue) {
          return <div>Помилка, значення контексту не визначене</div>
        }

        const { value } = contextValue

        return (
          <div>
            <h2>Level 1: {value}</h2>
            <Level2 />
          </div>
        )
      }}
    </PropContext.Consumer>
  )
}

export default Level1
