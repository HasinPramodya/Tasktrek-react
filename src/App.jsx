import './App.css'
import { TaskForm } from './components/TaskForm'

function App() {
  

  return (
    <>
      <div className="app">
        <TaskForm />
        <main className="app_main">
          <selection className="task_column">Section 1 </selection>
          <selection className="task_column">Section 2 </selection>
          <selection className="task_column">Section 3 </selection>
        </main>
      </div>
    </>
  )
}

export default App
