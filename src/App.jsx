import './App.css'
import FocusInputDemo from './components/FocusInputDemo.jsx'
import RegisterDemo from './components/RegisterDemo.jsx'

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

      <FocusInputDemo />
      <RegisterDemo />
    </main>
  )
}

export default App
