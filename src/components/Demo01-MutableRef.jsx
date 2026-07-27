import { useRef, useState } from 'react'

function Demo01MutableRef() {
  // This normal variable is created again during every render.
  let normalValue = 0

  // This ref object stays the same between renders.
  const savedValue = useRef(0)

  // This state exists only to make the component render on demand.
  const [renderNumber, setRenderNumber] = useState(0)

  function changeBothValues() {
    normalValue = normalValue + 1
    savedValue.current = savedValue.current + 1
  }

  function renderAgain() {
    setRenderNumber((previousNumber) => previousNumber + 1)
  }

  return (
    <section className="demo-section">
      <h2>Demo 01: Persistent Mutable Ref</h2>
      <p>
        This demo compares a normal variable with a ref value across renders.
      </p>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Working demo starts here</h3>
        <p>Normal variable: {normalValue}</p>
        <p>Ref value: {savedValue.current}</p>
        <p>Render number: {renderNumber}</p>

        <div className="button-row">
          <button type="button" onClick={changeBothValues}>
            Increase both without rendering
          </button>
          <button type="button" onClick={renderAgain}>
            Render again and show values
          </button>
        </div>

        <p>
          Click the first button one or more times. The page does not change
          because a normal variable and a ref do not trigger a render. Then
          click the second button. The normal variable returns to 0, but the ref
          keeps its increased value.
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
          A ref is a persistent mutable object. <strong>Persistent</strong>{' '}
          means it stays available between renders. <strong>Mutable</strong>{' '}
          means its stored value can be changed.
        </p>

        <h3>A ref is an object with a current property</h3>
        <pre>
          <code>{`const savedValue = useRef(0)

// React creates an object with this shape:
{ current: 0 }`}</code>
        </pre>
        <p>
          The value passed to <code>useRef</code> becomes the first value of{' '}
          <code>current</code>. In this example, the initial value is{' '}
          <code>0</code>.
        </p>

        <h3>Change a ref directly</h3>
        <pre>
          <code>{`savedValue.current = savedValue.current + 1

// General pattern:
ref.current = newValue`}</code>
        </pre>
        <p>
          A ref does not use a setter function. Code can assign a new value
          directly to <code>current</code>. React does not watch this property
          for rendering, so the assignment does not update the page.
        </p>

        <h3>Compare it with a normal variable</h3>
        <pre>
          <code>{`let normalValue = 0
const savedValue = useRef(0)`}</code>
        </pre>
        <p>
          Both values can change while the current component function is still
          active. During the next render, React calls the component again. The
          normal variable is created again with <code>0</code>. The ref object
          is reused, so its <code>current</code> value remains.
        </p>

        <h3>Why changing the ref does not update the text</h3>
        <p>
          React re-renders for changes such as state updates. It does not
          re-render after a ref assignment. This makes refs useful for values
          that code must remember but the UI does not need to show immediately.
        </p>

        <h3>Common values stored in refs</h3>
        <ul>
          <li>DOM elements,</li>
          <li>mutable variables,</li>
          <li>timer IDs,</li>
          <li>values from a previous render, and</li>
          <li>
            instances from external libraries, such as chart, video player, or
            3D library objects.
          </li>
        </ul>
        <p>
          An external library is code from outside the current app. An instance
          is one object created and managed by that library.
        </p>
      </div>
      {/* ========== CODE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo01MutableRef
