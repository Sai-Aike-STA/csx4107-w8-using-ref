import { useRef, useState } from 'react'

function Demo02InputRef() {
  // The ref stores the input DOM element after React creates the element.
  const nameInput = useRef(null)

  // State stores the value that must appear in the rendered output.
  const [submittedName, setSubmittedName] = useState('')

  function focusInput() {
    // current points to the real input element in the browser.
    nameInput.current.focus()
  }

  function readInput() {
    // The ref reads the DOM value. State makes that value appear in the UI.
    setSubmittedName(nameInput.current.value)
  }

  return (
    <section className="demo-section">
      <h2>Demo 02: A Ref to One Input</h2>
      <p>A ref gives a component direct access to a DOM element.</p>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Working demo starts here</h3>
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
          <button type="button" onClick={readInput}>
            Read the input
          </button>
        </div>

        <p className="output">
          Last value read: <strong>{submittedName || '(none)'}</strong>
        </p>
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
          This example uses a ref to reach a real input element in the browser.
          It can then call the input&apos;s <code>focus()</code> method or read
          its <code>value</code> property.
        </p>

        <h3>What a ref is</h3>
        <p>
          A ref is a plain JavaScript object made by React. The object has one
          main property named <code>current</code>. React keeps the same ref
          object between renders.
        </p>
        <p>
          A <strong>render</strong> happens when React runs the component
          function to create or update the UI. A normal local variable is made
          again during each render. A ref keeps its value, so it can remember a
          DOM element or another mutable value.
        </p>

        <h3>Create the ref</h3>
        <pre>
          <code>{`const nameInput = useRef(null)`}</code>
        </pre>
        <p>
          <code>useRef</code> is a React <strong>Hook</strong>. A Hook is a
          React function that adds a feature to a component.
        </p>
        <p>
          The ref starts with <code>null</code>. Null means there is no value
          yet. The input DOM element does not exist until React finishes
          creating it, so there is no element to store at first.
        </p>
        <pre>
          <code>{`const nameInputRef = useRef()`}</code>
        </pre>
        <p>
          The notes also show <code>useRef()</code> with no value inside the
          parentheses. That form starts <code>current</code> as{' '}
          <code>undefined</code>. Using <code>null</code> makes the empty
          starting value more explicit. Both forms can later hold a DOM
          element.
        </p>

        <h3>What DOM means</h3>
        <p>
          DOM means Document Object Model. It is the browser&apos;s JavaScript
          object form of the HTML page. An input DOM element has browser
          properties and methods such as <code>value</code> and{' '}
          <code>focus()</code>.
        </p>

        <h3>Connect the ref to the input</h3>
        <pre>
          <code>{`<input ref={nameInput} />`}</code>
        </pre>
        <p>
          The <code>ref</code> prop connects the ref object to the input. After
          React creates the input, React puts the DOM element in{' '}
          <code>nameInput.current</code>.
        </p>

        <h3>Call a DOM method</h3>
        <pre>
          <code>{`function focusInput() {
  nameInput.current.focus()
}`}</code>
        </pre>
        <p>
          A method is a function that belongs to an object. Here,{' '}
          <code>focus()</code> belongs to the input DOM element. It moves the
          typing cursor into the input.
        </p>

        <h3>Read a DOM property</h3>
        <pre>
          <code>{`nameInput.current.value`}</code>
        </pre>
        <p>
          A property is a value stored on an object. The input&apos;s{' '}
          <code>value</code> property contains the text currently inside the
          input.
        </p>

        <h3>Why the example also uses state</h3>
        <pre>
          <code>{`setSubmittedName(nameInput.current.value)`}</code>
        </pre>
        <p>
          Changing <code>nameInput.current</code> does not make React render.
          This is an important difference between a ref and state.
        </p>
        <p>
          The value must appear in the React output after the Read button is
          clicked. The code therefore reads the value through the ref and saves
          it in state. The state setter causes React to render the output.
        </p>

        <h3>How the Focus button moves through the code</h3>
        <ol>
          <li>The user clicks Focus the input.</li>
          <li>React calls the `focusInput` event handler.</li>
          <li>The handler reads the input from `nameInput.current`.</li>
          <li>The handler calls the input&apos;s `focus()` DOM method.</li>
          <li>The browser places the typing cursor in the input.</li>
        </ol>

        <h3>When a ref is useful</h3>
        <p>
          A ref is useful for direct DOM work, timer IDs, previous values, or
          other mutable values that must survive renders but do not need to
          update the UI.
        </p>
      </div>
      {/* ========== CODE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo02InputRef
