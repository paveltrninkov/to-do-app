import { useState } from 'react'
import './App.css'

function App() {
  const [toDo, toDoSet] = useState([]);
  const [activity, activitySet] = useState();

  const SubmitForm = (e) => {
    e.preventDefault()
    toDoSet(
      [
        ...toDo, {activity: activity}
      ]
    )
    console.log(toDo);
  }

  const UpdateActivity = (e) => {
    activitySet(e.target.value)
    console.log(activity)
  }

  const ClearActivity = (i) => {
    let toDoArray = toDo.filter((activity, index) => {
      return index != i;
    })
    toDoSet(toDoArray);
    console.log(i);
  }

  const Clear = (e) => {
    e.preventDefault();
    toDoSet([])
  }

  return (
    <main>
      <h1>To Do App</h1>
      <form action="post">
          <label htmlFor="Activity">Activity: </label>
          <input type="text" htmlFor="Activity" onChange={UpdateActivity}/>
          <button onClick={SubmitForm}>Submit</button>
          <button onClick={Clear}>Clear</button>
      </form>

      <ul>
        {
          toDo.map((activity, index) => (
            <>
              <li key={index}>{activity.activity}
                 <button onClick={() => {ClearActivity(index)}}>Clear</button>
              </li>
              
            </>
          ))
        }
      </ul>
    </main>
  )
}

export default App
