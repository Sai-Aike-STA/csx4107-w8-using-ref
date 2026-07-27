import { useRef, useState } from 'react'

// Each object contains the value used by code and the label shown to the user.
const hobbies = [
  { value: 'music', name: 'Music' },
  { value: 'movie', name: 'Movies' },
  { value: 'plastic-model', name: 'Plastic Model' },
]

function Demo03CheckboxRefArray() {
  const [firstname, setFirstname] = useState('')
  const [selectedHobbies, setSelectedHobbies] = useState([])

  // This input uses both state and a ref, as shown in the Ref notes.
  const firstnameRef = useRef(null)

  // One ref stores all checkbox DOM elements inside an array.
  const hobbiesRef = useRef([])

  function onFirstnameChange(event) {
    setFirstname((previousFirstname) => event.target.value)
  }

  function displayHobbies() {
    // map returns one checkbox for every hobby object.
    return hobbies.map((hobby, index) => (
      <label className="checkbox-field" key={index}>
        <input
          type="checkbox"
          id={`hobby-${index}`}
          name="hobby"
          value={hobby.value}
          ref={(element) => {
            hobbiesRef.current[index] = element
          }}
        />
        {hobby.name}
      </label>
    ))
  }

  function submitForm(event) {
    // This stops the browser from reloading the page after form submission.
    event.preventDefault()

    // checked is read from each checkbox. value gives its hobby string.
    const checkedHobbyElements = hobbiesRef.current.filter(
      (checkbox) => checkbox.checked,
    )

    // State is used because the final list must appear in the UI.
    setSelectedHobbies(
      checkedHobbyElements.map((checkbox) => checkbox.value),
    )
  }

  return (
    <section className="demo-section">
      <h2>Demo 03: An Array of Checkbox Refs</h2>
      <p>
        Callback refs collect several checkbox elements into one ref array.
      </p>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Working demo starts here</h3>
        <form onSubmit={submitForm}>
          <label className="stacked-field" htmlFor="firstname">
            First name
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={onFirstnameChange}
              ref={firstnameRef}
              placeholder="Enter a first name"
            />
          </label>

          <fieldset>
            <legend>Hobbies</legend>
            {displayHobbies()}
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
                ? selectedHobbies.toString()
                : '(none)'}
            </strong>
          </p>
        </div>
      </div>
      {/* ========== WORKING DEMO ENDS HERE ========== */}

      <div className="demo-explanation-divider">
        <p>
          <strong>Working demo ends here</strong>
        </p>
        <hr />
        <p>
          <strong>Code explanation starts below</strong>
        </p>
      </div>

      {/* ========== CODE EXPLANATION STARTS HERE ========== */}
      <div className="notes-box">
        <h3>Code explanation starts here</h3>
        <p>
          This example stores several checkbox DOM elements in one ref array.
          When the form is submitted, the code reads which elements are
          checked.
        </p>

        <h3>Keep the hobby data in an array</h3>
        <pre>
          <code>{`const hobbies = [
  { value: 'music', name: 'Music' },
  { value: 'movie', name: 'Movies' },
  { value: 'plastic-model', name: 'Plastic Model' },
]`}</code>
        </pre>
        <p>
          Each object describes one checkbox. <code>value</code> is the value
          used by the program. <code>name</code> is the readable text shown on
          the page.
        </p>

        <h3>Create an array ref</h3>
        <pre>
          <code>{`const hobbiesRef = useRef([])`}</code>
        </pre>
        <p>
          The initial value is an empty array. React stores that array in{' '}
          <code>hobbiesRef.current</code>. The same ref object stays available
          after later renders.
        </p>

        <h3>Create one checkbox for each hobby</h3>
        <pre>
          <code>{`function displayHobbies() {
  return hobbies.map((hobby, index) => (
    <input
      key={index}
      type="checkbox"
      id={\`hobby-\${index}\`}
      name="hobby"
      value={hobby.value}
    />
  ))
}`}</code>
        </pre>
        <p>
          <code>map</code> goes through the data array and returns one JSX
          element for each item. JSX is the HTML-like syntax written inside
          React components.
        </p>
        <p>
          <code>hobby</code> is the current data object. <code>index</code> is
          its number in the array, starting at zero.
        </p>
        <p>
          <code>key</code> helps React identify each returned item. The template
          string in <code>id</code> creates IDs such as <code>hobby-0</code> and{' '}
          <code>hobby-1</code>. All checkboxes share the same{' '}
          <code>name</code> because they belong to the same input group.
        </p>

        <h3>Store each checkbox with a callback ref</h3>
        <pre>
          <code>{`ref={(element) => {
  hobbiesRef.current[index] = element
}}`}</code>
        </pre>
        <p>
          A <strong>callback ref</strong> is a function passed to the{' '}
          <code>ref</code> prop. React calls it with the real DOM element after
          creating that element.
        </p>
        <p>
          The callback stores each checkbox at its matching index. For example,
          the first hobby uses index <code>0</code>, so its checkbox goes into{' '}
          <code>hobbiesRef.current[0]</code>.
        </p>

        <h3>The static index form from the main notes</h3>
        <pre>
          <code>{`ref={(element) => {
  hobbiesRef.current[0] = element
}}

ref={(element) => {
  hobbiesRef.current[1] = element
}}`}</code>
        </pre>
        <p>
          A fixed index works when the choices are written by hand. The practice
          example uses <code>map</code> and its changing <code>index</code>
          value instead. Mapping is better when choices come from an array.
        </p>
        <p>
          The same ref array pattern can be used for checkbox inputs or radio
          inputs.
        </p>

        <h3>Read fixed choices one at a time</h3>
        <pre>
          <code>{`const choices = []

if (hobbiesRef.current[0].checked) {
  choices.push(hobbiesRef.current[0].value)
}

if (hobbiesRef.current[1].checked) {
  choices.push(hobbiesRef.current[1].value)
}`}</code>
        </pre>
        <p>
          This is the direct form shown in the main Ref notes. The code checks
          each DOM element&apos;s <code>checked</code> property. When it is{' '}
          <code>true</code>, <code>push</code> adds that element&apos;s value to
          the result array.
        </p>
        <p>
          This form is clear for a very small fixed list. The dynamic practice
          example uses array methods because the number of hobbies can come
          from data.
        </p>

        <h3>Handle the form submission</h3>
        <pre>
          <code>{`function submitForm(event) {
  event.preventDefault()
  // The checkbox reading code runs next.
}`}</code>
        </pre>
        <p>
          A browser normally reloads the page when a form is submitted.{' '}
          <code>preventDefault()</code> stops that default action. React can
          then process the form without losing the current page.
        </p>

        <h3>Keep only checked elements</h3>
        <pre>
          <code>{`.filter((checkbox) => checkbox.checked)`}</code>
        </pre>
        <p>
          <code>filter</code> checks every element and keeps the ones that pass
          a test. A checkbox DOM element has a boolean{' '}
          <code>checked</code> property. A boolean is either <code>true</code>{' '}
          or <code>false</code>.
        </p>
        <p>
          Checking a box changes the browser DOM element. It does not change
          React state, so React does not re-render for that checkbox change in
          this example. The values are read when the form is submitted.
        </p>

        <h3>Change DOM elements into string values</h3>
        <pre>
          <code>{`.map((checkbox) => checkbox.value)`}</code>
        </pre>
        <p>
          After filtering, the array still contains DOM elements. This{' '}
          <code>map</code> call changes each element into its value string, such
          as <code>'music'</code>.
        </p>

        <h3>Other ways to traverse the ref array</h3>
        <pre>
          <code>{`hobbiesRef.current.forEach((checkbox) => {
  console.log(checkbox.value)
})

for (const checkbox of hobbiesRef.current) {
  console.log(checkbox.value)
}`}</code>
        </pre>
        <p>
          To <strong>traverse</strong> an array means to visit its items one by
          one. <code>forEach</code> calls a function for each item. A{' '}
          <code>for...of</code> loop also visits each item. The practice code
          uses <code>filter</code> and <code>map</code> because it must create a
          new array of selected values.
        </p>

        <h3>Save the result in state</h3>
        <pre>
          <code>{`const checkedHobbyElements = hobbiesRef.current.filter(
  (checkbox) => checkbox.checked
)

setSelectedHobbies(
  checkedHobbyElements.map((checkbox) => checkbox.value)
)`}</code>
        </pre>
        <p>
          Changing a ref does not cause a render. The final hobby list must
          appear on the page, so the list is saved in state. The state setter
          causes React to render the result.
        </p>

        <h3>One element can use state and a ref together</h3>
        <pre>
          <code>{`const firstnameRef = useRef(null)

function onFirstnameChange(event) {
  setFirstname((previousFirstname) => event.target.value)
}

<input
  value={firstname}
  onChange={onFirstnameChange}
  ref={firstnameRef}
/>`}</code>
        </pre>
        <p>
          The first name input is controlled by state, so its text updates the
          React UI while the user types. The same input is also stored in a ref,
          so code can access its DOM element through{' '}
          <code>firstnameRef.current</code>. State and a ref can have different
          jobs on the same element.
        </p>
        <p>
          The functional setter form comes from the previous State practice.
          The old value is named <code>previousFirstname</code>. It is not used
          because the new text comes from <code>event.target.value</code>.
        </p>
        <p>
          The hobby checkboxes are only read after submission, so this practice
          example reads them through the ref array.
        </p>

        <h3>Convert the selected array to display text</h3>
        <pre>
          <code>{`selectedHobbies.toString()`}</code>
        </pre>
        <p>
          <code>toString()</code> changes the array into comma-separated text.
          For example, <code>['music', 'movie']</code> becomes{' '}
          <code>'music,movie'</code>.
        </p>

        <h3>How form submission moves through the code</h3>
        <ol>
          <li>The user selects some hobbies.</li>
          <li>The user submits the form.</li>
          <li>The event handler stops the normal page reload.</li>
          <li>The code reads the checkbox elements from the ref array.</li>
          <li>
            <code>filter</code> keeps the checked elements.
          </li>
          <li>
            <code>map</code> takes the value from each checked element.
          </li>
          <li>The setter saves the value array in state.</li>
          <li>React renders the selected hobby list.</li>
        </ol>
      </div>
      {/* ========== CODE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo03CheckboxRefArray
