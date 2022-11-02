const taskInput = document.getElementById('task__input');
const tasksAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
let notes = JSON.parse(localStorage.getItem('notes'));
let taskRemove = tasksList.getElementsByClassName('task__remove');


if (notes != null) {
   for (let i = 0; i < notes.length; i++) {
      htmlNoteAdd(notes[i]);
      taskRemoteFunc(taskRemove[i]);
   }
}

function taskRemoteFunc(node) {
   node.addEventListener('click', function (event) {
      event.preventDefault();
      let task = node.closest('.task');
      let taskTitle = task.querySelector('.task__title').innerText;
      updateLocalStorage(null, taskTitle);
      task.remove();
      if (notes.length === 0) {
         localStorage.clear();
      }
   });
}

tasksAdd.addEventListener('click', function (event) {
   event.preventDefault();
   if (taskInput.value) {
      htmlNoteAdd(taskInput.value);
      updateLocalStorage(taskInput.value, null);
      taskRemoteFunc(taskRemove[taskRemove.length - 1]);
      taskInput.value = '';
   }
});

function updateLocalStorage(noteAdd, noteDel) {
   if (notes != null && noteAdd != null) {
      notes.unshift(noteAdd);
   }
   if (notes === null && noteAdd != null) {
      notes = [noteAdd];
   }
   if (notes != null && noteDel != null) {
      notes.splice(notes.indexOf(noteDel), 1);
   }
   localStorage.setItem('notes', JSON.stringify(notes));
}

function htmlNoteAdd(note) {
   let div = document.createElement('div');
   div.className = 'task';
   div.innerHTML = `<div class="task__title">
        ${note}
    </div>
    <a href="#" class="task__remove">&times;</a>`;
   tasksList.appendChild(div);
}