// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state

const showCompletedCheckbox = document.querySelector('.show-completed-checkbox')
const addTodoForm = document.querySelector('.add-item')
const todoList = document.querySelector('.todo-list')
const completedList = document.querySelector('.completed-list')


const state = {
  todos: [
    {
      title: 'Eat breakfast',
      completed: false
    },
    {
      title: 'Go shopping',
      completed: false
    },
    {
      title: 'Cook lunch',
      completed: false
    },
    {
      title: 'Go to sleep',
      completed: true
    }
  ],
  showCompleted: true
}

// Functions to get derived state

function getCompletedTodos() {
  return state.todos.filter(function (todo) {
    return todo.completed
  })
}

function getIncompleteTodos() {
  return state.todos.filter(function (todo) {
    return !todo.completed
  })
}

function toggleTodo(todo) {
  todo.completed = !todo.completed
}

function addTodo(todo) {
  state.todos.push(todo)
}

function deleteTodo(text) {
  state.todos = state.todos.filter(function (todo) {
    return todo.text !== text
  })
}


function editTodo(todo, newTitle) {
  todo.text = newText
}




// RENDER FUNCTIONS
function renderCompletedTodos() {
  const completedTodos = getCompletedTodos()
  completedList.innerHTML = ''

  for (const todo of completedTodos) {
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'todo completed')

    const divTodo = document.createElement('div')
    divTodo.setAttribute('class', 'completed-section')

    const inputEl = document.createElement('input')
    inputEl.setAttribute('type', 'checkbox')
    inputEl.setAttribute('class', 'completed-checkbox')
    divTodo.append(inputEl)

    
    const divText = document.createElement('div')
    divText.setAttribute('class', 'text-section' )

    const pEl = document.createElement('p')
    pEl.setAttribute('class', 'todo-text')
    pEl.textContent = todo.text
    divText.append(pEl)


    const divBtn = document.createElement('div')
    divBtn.setAttribute('class', 'button-section')

    const editBtb = document.createElement('button')
    editBtb.setAttribute('class', 'edit')
    editBtb.textContent = "Edit"

    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete')
    deleteBtn.textContent = "Delete"

    divBtn.append(editBtb, deleteBtn)


    liEl.append(divTodo, divText, divBtn)


    const completedCheckbox = liEl.querySelector('.completed-checkbox')
    completedCheckbox.checked = todo.completed
    completedCheckbox.addEventListener('click', function () {
      // toggle the todo
      toggleTodo(todo)
      // rerender the app
      render()
    })

    completedList.append(liEl)
  }
}

function renderIncompleteTodos() {
  const incompleteTodos = getIncompleteTodos()
  todoList.innerHTML = ''

  for (const todo of incompleteTodos) {
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'todo')
    

    const completedCheckbox = liEl.querySelector('.completed-checkbox')
    completedCheckbox.checked = todo.completed
    completedCheckbox.addEventListener('click', function () {
      // toggle the todo
      toggleTodo(todo)
      // rerender the app
      render()
    })

    todoList.append(liEl)
  }
}

function render() {
  console.log(state)
  renderCompletedTodos()
  renderIncompleteTodos()
}

render()
