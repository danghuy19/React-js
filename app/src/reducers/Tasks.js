import * as Types from './../constants/ActionTypes.js'

var data = JSON.parse(localStorage.getItem('TasksRedux'))
const initialState = data ? data : []

var findIndex = (tasks, id) => {
    var result = -1
    if (tasks.length > 0) {
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index
            }
        })
    }
    return result
}
var s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
}

var generateID = () => {
    return s4() + s4() + s4() + ' - ' + s4() + ' - ' + s4() + ' - ' + s4() + s4() + s4()
}

export default (state = initialState, action) => {
    var { id } = action
    var index = findIndex(state, id)
    switch (action.type) {

        case Types.SUBMIT_TASK:
            var { task } = action
            var newTask = {
                name: task.txtName,
                status: (task.txtStatus === "true" || task.txtStatus === true) ? true : false
            }
            if (task.id) {
                index = findIndex(state, task.id)
                newTask.id = task.id
                state[index] = newTask
            } else {
                newTask.id = generateID()
                state.push(newTask)
            }
            localStorage.setItem('TasksRedux', JSON.stringify(state))
            return [...state]

        case Types.DELETE_TASK:
            state.splice(index, 1)
            localStorage.setItem('TasksRedux', JSON.stringify(state))
            return [...state]

        case Types.CHANGE_STATUS:
            // state[index].status = !state[index].status
            state[index] = {...state[index],status:!state[index].status}
            localStorage.setItem('TasksRedux', JSON.stringify(state))
            return [...state]

        default:
            return state
    }
}
