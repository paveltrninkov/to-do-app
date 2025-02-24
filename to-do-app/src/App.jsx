import { act, useState } from 'react'

function App() {
  const [toDo, toDoSet] = useState([]);
  const [activity, activitySet] = useState();

  const SubmitForm = (e) => {
    e.preventDefault()
    toDoSet(
      [
        ...toDo, {activity: activity, active: false}
      ]
    )
    console.log(toDo);
  }

  const UpdateActivity = (e) => {
    activitySet(e.target.value)
    console.log(activity)
  }

  const UpdateStatus = (index) => {
    let toDoArray = [...toDo]
    toDoArray[index].active = !toDoArray[index].active;
    toDoSet(toDoArray);
    console.log(toDo);
  }

  const Clear = (e) => {
    e.preventDefault();
    toDoSet([])
  }

  const ClearFinished = (e) => {
    e.preventDefault();
    console.log(toDo)
    let toDoArray = toDo.filter(activity => activity.active != true)
    console.log(toDoArray);
    toDoSet(toDoArray)
  }

  return (
    <>
      <h1>To Do App</h1>
      <form action="post">
          <label htmlFor="Activity">Activity: </label>
          <input type="text" htmlFor="Activity" onChange={UpdateActivity}/>
          <button onClick={SubmitForm}>Submit</button>
          <button onClick={Clear}>Clear</button>
          <button onClick={ClearFinished}>Clear finished</button>
      </form>

      <ul>
        {
          toDo.map((activity, index) => (
            <>
              <li key={index}>{activity.activity}</li>
              <label htmlFor="Status">Completed: </label>
              <input type='checkbox' htmlFor="Status" onClick={() => UpdateStatus(index)} checked={activity.status}></input>
            </>
          ))
        }
      </ul>
    </>
  )
}

export default App
