import './App.css'
import { TaskColumn } from './components/TaskColumn'
import { TaskForm } from './components/TaskForm'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

function App() {
  

  return (
    <>
      <div className="app">
        <TaskForm />
        <main className="app_main">
          <TaskColumn name="To do" icon={todoIcon}/>
          <TaskColumn name="Doing" icon={doingIcon}/>
          <TaskColumn name="Done" icon={doneIcon}/>
        </main>
      </div>
    </>
  )
}

export default App
