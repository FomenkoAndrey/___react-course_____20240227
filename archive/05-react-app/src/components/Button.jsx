const Button = ({ text, disabled }) => {
  console.log(disabled)
  return (
    <div>
      <h2>{disabled ? 'Disabled' : 'Enabled'}</h2>
      {disabled ? <h3>Disabled</h3> : <h4>Enabled</h4>}
      <button type="button" disabled={disabled}>
        {text}
      </button>
      <hr />
    </div>
  )
}

export default Button
