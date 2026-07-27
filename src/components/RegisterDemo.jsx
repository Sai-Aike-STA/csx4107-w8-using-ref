import { useRef, useState } from 'react'

const hobbies = [
  { value: 'music', label: 'Music' },
  { value: 'movie', label: 'Movies' },
  { value: 'plastic-model', label: 'Plastic Model' },
]

function RegisterDemo() {
  const [firstname, setFirstname] = useState('')
  const [selectedHobbies, setSelectedHobbies] = useState([])

  // The ref stores all checkbox DOM elements in one array.
  const hobbiesRef = useRef([])

  function onFirstnameChange(event) {
    setFirstname(event.target.value)
  }

  function submitForm(event) {
    event.preventDefault()

    // The checked property is read directly from every checkbox DOM element.
    const checkedHobbies = hobbiesRef.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)

    // State stores the result because the selected values must appear on screen.
    setSelectedHobbies(checkedHobbies)
  }

  return (
    <section className="demo-section">
      <h2>Demo 02: An Array of Checkbox Refs</h2>
      <p>
        Callback refs collect several checkbox elements into one ref array.
      </p>

      <div className="demo-box">
        <h3>Working demo</h3>
        <form onSubmit={submitForm}>
          <label className="stacked-field" htmlFor="firstname">
            First name
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={onFirstnameChange}
              placeholder="Enter a first name"
            />
          </label>

          <fieldset>
            <legend>Hobbies</legend>
            {hobbies.map((hobby, index) => (
              <label className="checkbox-field" key={hobby.value}>
                <input
                  type="checkbox"
                  value={hobby.value}
                  ref={(element) => {
                    hobbiesRef.current[index] = element
                  }}
                />
                {hobby.label}
              </label>
            ))}
          </fieldset>

          <button type="submit">Show selected hobbies</button>
        </form>

        <div className="output">
          <p>
            First name: <strong>{firstname || '(empty)'}</strong>
          </p>
          <p>
            Selected hobbies:{' '}
            <strong>
              {selectedHobbies.length > 0
                ? selectedHobbies.join(', ')
                : '(none)'}
            </strong>
          </p>
        </div>
      </div>

      <div className="notes-box">
        <h3>Main idea</h3>
        <p>
          One ref can store an array of DOM elements. The submit function reads
          each checkbox without storing every checked value in state.
        </p>

        <h3>Create an array ref</h3>
        <pre>
          <code>{`const hobbiesRef = useRef([])`}</code>
        </pre>
        <p>
          <code>hobbiesRef.current</code> starts as an empty array. The same
          array is available after later renders.
        </p>

        <h3>Store each checkbox</h3>
        <pre>
          <code>{`ref={(element) => {
  hobbiesRef.current[index] = element
}}`}</code>
        </pre>
        <p>
          React calls this callback with the checkbox DOM element. The element
          is stored at the same index as its hobby data.
        </p>

        <h3>Read checked values</h3>
        <pre>
          <code>{`const checkedHobbies = hobbiesRef.current
  .filter((checkbox) => checkbox.checked)
  .map((checkbox) => checkbox.value)`}</code>
        </pre>
        <p>
          <code>filter</code> keeps checked elements. <code>map</code> changes
          those elements into their string values.
        </p>

        <h3>Why this example also uses state</h3>
        <p>
          Refs give access to the checkboxes but do not cause a render. The
          selected result goes into state so React renders it on the page.
        </p>
      </div>
    </section>
  )
}

export default RegisterDemo
