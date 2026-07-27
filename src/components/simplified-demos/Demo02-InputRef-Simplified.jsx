import { useRef, useState } from 'react'

function Demo02InputRefSimplified() {
  // The ref will point to the real input element in the browser.
  const inputRef = useRef(null)

  // State stores the text that must appear in the React output.
  const [savedText, setSavedText] = useState('')

  function focusTheInput() {
    inputRef.current.focus()
  }

  function readTheInput() {
    setSavedText(inputRef.current.value)
  }

  return (
    <section className="demo-section">
      <h2>Simplified Demo 02: Input Ref</h2>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Try the demo</h3>
        <label className="stacked-field" htmlFor="simple-ref-input">
          Name
          <input id="simple-ref-input" type="text" ref={inputRef} />
        </label>

        <div className="button-row">
          <button type="button" onClick={focusTheInput}>
            Focus input
          </button>
          <button type="button" onClick={readTheInput}>
            Read input
          </button>
        </div>

        <p>Last text read: {savedText || '(none)'}</p>
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
        <h3>Connect the ref to the input</h3>
        <pre>
          <code>{`const inputRef = useRef(null)

<input ref={inputRef} />`}</code>
        </pre>
        <p>
          React puts the input DOM element in <code>inputRef.current</code>. DOM
          means the browser&apos;s JavaScript version of the HTML page.
        </p>

        <h3>Use the input through current</h3>
        <pre>
          <code>{`inputRef.current.focus()
inputRef.current.value`}</code>
        </pre>
        <ul>
          <li>
            <code>focus()</code> puts the typing cursor in the input.
          </li>
          <li>
            <code>value</code> gives the current input text.
          </li>
        </ul>

        <h3>Why state is also used</h3>
        <p>
          The ref reads the input, but changing a ref does not render the page.
          State stores the final text because that text must appear in the UI.
        </p>
      </div>
      {/* ========== SIMPLE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo02InputRefSimplified
