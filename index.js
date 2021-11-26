// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state

const showCompletedCheckbox = document.querySelector('.show-completed-checkbox')
const addTodoForm = document.querySelector('.add-item')
const todoList = document.querySelector('.todo-list')
const completedList = document.querySelector('.completed-list')

console.log(todoList)

const state = {
  todos: [
    {
      title: 'Buy milk',
      completed: false
    },
    {
      title: 'Cook dinner',
      completed: false
    },
    {
      title: 'Learn JS',
      completed: false
    },
    {
      title: 'YAYYYY',
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
    return todo.title !== text
  })
}

function editTodo(todo, newTitle) {
  todo.title = newTitle
}

// RENDER FUNCTIONS
function renderCompletedTodos() {
  const completedTodos = getCompletedTodos()
  completedList.innerHTML = ''

  for (const todo of completedTodos) {
    const liEl = document.createElement('li')
    liEl.setAttribute('class', 'todo completed')

    liEl.innerHTML = `
       <div class="completed-section">
         <input class="completed-checkbox" type="checkbox" />
       </div>
       <div class="text-section">
         <p class="text">${todo.title}</p>
       </div>
       <div class="button-section">
         <button class="edit">Edit</button>
         <button class="delete">Delete</button>
       </div>
    `

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

    liEl.innerHTML = `
       <div class="completed-section">
         <input class="completed-checkbox" type="checkbox" />
       </div>
       <div class="text-section">
         <p class="text">${todo.title}</p>
       </div>
       <div class="button-section">
         <button class="edit">Edit</button>
         <button class="delete">Delete</button>
       </div>
    `

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
