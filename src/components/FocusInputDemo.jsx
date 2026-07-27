import { useRef, useState } from 'react'

function FocusInputDemo() {
  // The ref stores the input DOM element after React creates it.
  const nameInput = useRef(null)
  const [submittedName, setSubmittedName] = useState('')

  function focusInput() {
    // The current property gives access to the real input element.
    nameInput.current.focus()
  }

  function readInput() {
    // The ref reads the DOM value. State stores the value that the UI displays.
    setSubmittedName(nameInput.current.value)
  }

  return (
    <section className="demo-section">
      <h2>Demo 01: A Ref to One Input</h2>
      <p>A ref gives a component direct access to a DOM element.</p>

      <div className="demo-box">
        <h3>Working demo</h3>
        <label className="stacked-field" htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            ref={nameInput}
            placeholder="Enter a name"
          />
        </label>

        <div className="button-row">
          <button type="button" onClick={focusInput}>
            Focus the input
          </button>
          <button type="button" className="secondary" onClick={readInput}>
            Read the input
          </button>
        </div>

        <p className="output">
          Last value read: <strong>{submittedName || '(none)'}</strong>
        </p>
      </div>

      <div className="notes-box">
        <h3>Main idea</h3>
        <p>
          A ref is an object that keeps the same identity between renders. Its
          value is stored in <code>.current</code>. Changing a ref does not
          cause React to render again.
        </p>

        <h3>Create the ref</h3>
        <pre>
          <code>{`const nameInput = useRef(null)`}</code>
        </pre>
        <p>
          The ref starts with <code>null</code> because the input DOM element
          does not exist during the first part of rendering.
        </p>

        <h3>Connect the ref to an element</h3>
        <pre>
          <code>{`<input ref={nameInput} />`}</code>
        </pre>
        <p>
          After React creates the input, it places that DOM element in{' '}
          <code>nameInput.current</code>.
        </p>

        <h3>Use the DOM element</h3>
        <pre>
          <code>{`nameInput.current.focus()
nameInput.current.value`}</code>
        </pre>
        <p>
          The first line calls a DOM method. The second line reads a DOM
          property. State is still used when a value must appear in the React
          UI.
        </p>
      </div>
    </section>
  )
}

export default FocusInputDemo
