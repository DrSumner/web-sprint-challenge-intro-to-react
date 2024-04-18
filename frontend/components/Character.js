import React, {useState} from 'react'

function Character(props) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const [isHomeRender, setHomeRender] = useState(false)
  const {name, planet} = props
  return (
    <div onClick={ () => setHomeRender(!isHomeRender) } className='character-card'>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>
      {name}
      </h3>
      {isHomeRender && 
      <p>Planet:{' '}
        <span className='character-planet'>{planet}</span>
      </p>}
      
    </div>
  )
}

export default Character
