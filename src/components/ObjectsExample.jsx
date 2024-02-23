import React, {useState} from 'react'

const ObjectsExample = () => {
  const [person, setPerson] = useState({
    name: 'Асан',
    age: 25,
    job: 'Developer'
  })

  const updatePerson = () => {
    setPerson(prevPerson => ({
      ...prevPerson,
      name: 'Усон'
    }))
  }

  return (
    <div className="container">
      <h2 className="heading">{person.name}</h2>
      <p className="info">Возраст: {person.age}</p>
      <p className="info">Профессия: {person.job}</p>
      <button className="button" onClick={updatePerson}>
        Обновить имя
      </button>
    </div>
  );
}

export default ObjectsExample