import { ComponentPropsInterface } from '../types/ComponentPropsInterface.ts'

const ChildComponent = ({ children, color = 'black' }: ComponentPropsInterface) => {
  const style = {
    backgroundColor: color,
    color: 'yellow'
  }

  return <div style={style}>{children}</div>
}

export default ChildComponent
