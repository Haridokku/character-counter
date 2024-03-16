import './index.css'

const Character = props => {
  const {details} = props
  const {msg} = details
  return (
    <li className="list-item">
      <p className="heading">{msg}</p>
    </li>
  )
}

export default Character
