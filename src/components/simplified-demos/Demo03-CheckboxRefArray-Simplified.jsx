import { useRef, useState } from 'react'

const hobbies = [
  { value: 'music', name: 'Music' },
  { value: 'movie', name: 'Movies' },
  { value: 'plastic-model', name: 'Plastic Model' },
]

function Demo03CheckboxRefArraySimplified() {
  const [firstname, setFirstname] = useState('')
  const [selectedHobbies, setSelectedHobbies] = useState([])

  // This ref points to the first name input.
  const firstnameRef = useRef(null)

  // This ref stores all checkbox elements in one array.
  const checkboxRefs = useRef([])

  function makeCheckboxes() {
    return hobbies.map((hobby, index) => (
      <label className="checkbox-field" key={index}>
        <input
          type="checkbox"
          value={hobby.value}
          ref={(checkboxElement) => {
            checkboxRefs.current[index] = checkboxElement
          }}
        />
        {hobby.name}
      </label>
    ))
  }

  function showSelectedHobbies(event) {
    event.preventDefault()

    // filter keeps checked elements. map takes their values.
    const checkedValues = checkboxRefs.current
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)

    setSelectedHobbies(checkedValues)
  }

  return (
    <section className="demo-section">
      <h2>Simplified Demo 03: Checkbox Ref Array</h2>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Try the demo</h3>
        <form onSubmit={showSelectedHobbies}>
          <label className="stacked-field" htmlFor="simple-ref-firstname">
            First name
            <input
              id="simple-ref-firstname"
              type="text"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              ref={firstnameRef}
            />
          </label>

          <fieldset>
            <legend>Hobbies</legend>
            {makeCheckboxes()}
          </fieldset>

          <button type="submit">Show selected hobbies</button>
        </form>

        <p>First name: {firstname || '(empty)'}</p>
        <p>
          Hobbies:{' '}
          {selectedHobbies.length > 0
            ? selectedHobbies.toString()
            : '(none)'}
        </p>
      </div>
      {/* ========== WORKING DEMO ENDS HERE ========== */}

      <div className="demo-explanation-divider">
        <p>
          <strong>Demo ends here</strong>
        </p>
        <hr />
        <p>
          <strong>Simple explanation starts below</strong>
        </p>
      </div>

      {/* ========== SIMPLE EXPLANATION STARTS HERE ========== */}
      <div className="notes-box">
        <h3>One ref can store many elements</h3>
        <pre>
          <code>{`const checkboxRefs = useRef([])`}</code>
        </pre>
        <p>
          <code>checkboxRefs.current</code> is an array. Each checkbox DOM
          element goes into one position in that array.
        </p>

        <h3>A callback ref stores each checkbox</h3>
        <pre>
          <code>{`ref={(checkboxElement) => {
  checkboxRefs.current[index] = checkboxElement
}}`}</code>
        </pre>
        <p>
          A callback ref is a function used in the <code>ref</code> prop. React
          gives the real element to the function. The function saves it at the
          matching index.
        </p>

        <h3>Read the selected values</h3>
        <pre>
          <code>{`checkboxRefs.current
  .filter((checkbox) => checkbox.checked)
  .map((checkbox) => checkbox.value)`}</code>
        </pre>
        <ul>
          <li>
            <code>filter</code> keeps checked checkbox elements.
          </li>
          <li>
            <code>map</code> changes those elements into value strings.
          </li>
          <li>State saves the final strings so React can show them.</li>
        </ul>

        <h3>State and a ref can share one input</h3>
        <p>
          The first name input uses state for its text and a ref for its DOM
          element. State and refs can have different jobs on the same input.
        </p>
      </div>
      {/* ========== SIMPLE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo03CheckboxRefArraySimplified
