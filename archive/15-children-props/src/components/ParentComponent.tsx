import { ComponentPropsInterface } from '../types/ComponentPropsInterface.ts'

const ParentComponent = ({ children, color }: ComponentPropsInterface) => {
  const style = {
    backgroundColor: color || 'red',
    color: 'white'
  }

  return (
    <div style={style}>
      <h1>Header 1</h1>
      <p>Lorem ipsum dolor sit.</p>
      <div>{children}</div>
    </div>
  )
}

export default ParentComponent
