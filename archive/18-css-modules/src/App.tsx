import MyComponent from './components/MyComponent.tsx'
import TestComponent from './components/TestComponent.tsx'

const App = () => {
  const inlineStyle = {
    color: 'blue'
  }

  return (
    <div>
      <h1>Hello_from_App_TSX_component</h1>
      <h2 style={{ color: 'green' }}>inline_style in JSX</h2>
      <h2 style={inlineStyle}>inline_style via Object</h2>
      <hr />
      <MyComponent />
      <TestComponent />
    </div>
  )
}

export default App
