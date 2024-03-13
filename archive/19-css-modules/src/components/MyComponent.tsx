import style from './MyComponent.module.css'

const MyComponent = () => {
  console.log(style)

  return (
    <div className={style.wrapper}>
      <h1>Header 1 Module MyComponent</h1>
      <h2>Header 2 Module MyComponent</h2>
      <h3 className={style.header3}>Header 3 Module MyComponent</h3>
    </div>
  )
}

export default MyComponent
