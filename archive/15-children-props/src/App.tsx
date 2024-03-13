import ParentComponent from './components/ParentComponent.tsx'
import ChildComponent from './components/ChildComponent.tsx'

const App = () => {
  return (
    <div>
      <ParentComponent color="green">
        <h2>Header passed into Parent1</h2>

        <ChildComponent color="blue">
          <h3>Header passed into Child1</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </ChildComponent>

        <ChildComponent>
          <h3>Header passed into Child2</h3>
          <ul>
            <li>Lorem ipsum dolor.</li>
            <li>Adipisci delectus, magnam.</li>
            <li>Maxime, quisquam tempora?</li>
            <li>Accusantium, placeat, quibusdam?</li>
          </ul>
        </ChildComponent>
      </ParentComponent>

      <ParentComponent>
        <h2>Header passed into Parent2</h2>
      </ParentComponent>
    </div>
  )
}

export default App
