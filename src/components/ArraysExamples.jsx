import React, {useState} from 'react'

const ArraysExamples = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addNumber = () => {
    setNumbers(prevNumbers => [...prevNumbers, prevNumbers.length + 1])
  }

  return (
    <div className="container">
      <h2 className="heading">Номера: {numbers.join(', ')}</h2>
      <button className="button" onClick={addNumber}>
        Добавить номер
      </button>
    </div>
  )
}

export default ArraysExamples