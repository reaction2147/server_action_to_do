'use client'

import { insertToDo } from "./actions"

const ToDoInsert = () => {
    return(
        <button onClick={() => {console.log('clicked'), insertToDo()}}>Click Me</button>
    )
}

export default ToDoInsert