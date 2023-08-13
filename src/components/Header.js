import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from "react-router-dom"

const Header = ({ title, onAdd, formToggle }) => {
    // const onClick = () => {
    //     console.log('Click')
    // }
    const location = useLocation()
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button color={formToggle ? "red" : "green"} text={formToggle ? 'Close' : 'New Task'} onClick={onAdd} />)}
    </header>
  )
}

Header.defaultProps = {
    title: 'Tsk Trckr'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
