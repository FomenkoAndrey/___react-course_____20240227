import testStyle from './TestComponent.module.css'

const TestComponent = () => {
  console.log(testStyle)
  return (
    <div className={testStyle.wrapper}>
      <h1>TestComponent</h1>
    </div>
  )
}

export default TestComponent
