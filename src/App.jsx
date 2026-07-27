import './App.css'
import Demo01MutableRef from './components/Demo01-MutableRef.jsx'
import Demo02InputRef from './components/Demo02-InputRef.jsx'
import Demo03CheckboxRefArray from './components/Demo03-CheckboxRefArray.jsx'

function App() {
  return (
    <main>
      <header className="page-header">
        <p className="eyebrow">CSX4107 Web Dev, Week 8 Practice</p>
        <h1>React Ref Demos</h1>
        <p>
          Each section has a working example first and an explanation of the
          important code below it.
        </p>
      </header>

      <Demo01MutableRef />
      <Demo02InputRef />
      <Demo03CheckboxRefArray />
    </main>
  )
}

export default App
