const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', e => {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText) {
    addTask(taskText);
    saveTask(taskText);
    input.value = '';
  }
});

function addTask(text) {
  const li = document.createElement('li');
  li.textContent = text;
  list.appendChild(li);
}

function saveTask(text) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(text);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(addTask);
}

loadTasks();

// Rejestracja service workera
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker zarejestrowany'))
    .catch(err => console.error('Błąd rejestracji:', err));
}
