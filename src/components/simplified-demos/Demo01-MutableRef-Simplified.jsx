import { useRef, useState } from 'react'

function Demo01MutableRefSimplified() {
  // A normal variable starts again during every render.
  let normalValue = 0

  // A ref remembers its value between renders.
  const savedValue = useRef(0)

  // This state is used only to make React render again.
  const [renderNumber, setRenderNumber] = useState(0)

  function increaseBoth() {
    normalValue = normalValue + 1
    savedValue.current = savedValue.current + 1
  }

  function showValues() {
    setRenderNumber((oldNumber) => oldNumber + 1)
  }

  return (
    <section className="demo-section">
      <h2>Simplified Demo 01: Mutable Ref</h2>

      {/* ========== WORKING DEMO STARTS HERE ========== */}
      <div className="demo-box">
        <h3>Try the demo</h3>
        <p>Normal variable: {normalValue}</p>
        <p>Ref value: {savedValue.current}</p>
        <p>Render number: {renderNumber}</p>

        <div className="button-row">
          <button type="button" onClick={increaseBoth}>
            Increase both
          </button>
          <button type="button" onClick={showValues}>
            Render and show values
          </button>
        </div>

        <p>
          Click Increase both, then click Render and show values. The normal
          variable returns to 0. The ref keeps its value.
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
        <h3>Think of a ref as a saved box</h3>
        <pre>
          <code>{`const savedValue = useRef(0)`}</code>
        </pre>
        <p>
          A ref is an object with a property named <code>current</code>:
        </p>
        <pre>
          <code>{`{ current: 0 }`}</code>
        </pre>

        <h3>Change the value inside the box</h3>
        <pre>
          <code>{`savedValue.current = savedValue.current + 1`}</code>
        </pre>
        <p>
          A ref is mutable. Mutable means its value can change. The ref keeps
          that value after React renders again.
        </p>

        <h3>The important difference from state</h3>
        <p>
          Changing state causes a render. Changing a ref does not cause a
          render. A ref is useful when code must remember a value but the UI
          does not need to update immediately.
        </p>

        <h3>Common ref values</h3>
        <p>
          Refs can store DOM elements, timer IDs, old values, or objects from
          another library.
        </p>
      </div>
      {/* ========== SIMPLE EXPLANATION ENDS HERE ========== */}
    </section>
  )
}

export default Demo01MutableRefSimplified
