window.addEventListener('load', () => {
    // Load todos from local storage or initialize an empty array
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    // Load username from local storage
    const username = localStorage.getItem('username') || '';
    nameInput.value = username;

    // Save username to local storage on change
    nameInput.addEventListener('change', (e) => {
        localStorage.setItem('username', e.target.value);
    });

    // Handle form submission to add a new todo
    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();
        const contentValue = e.target.elements.content.value.trim();
        
        if (!contentValue) {
            alert('Please enter a todo item!');
            return; // Prevent empty todos
        }

        const todo = {
            content: contentValue,
            done: false,
            createdAt: new Date().getTime()
        };

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        e.target.reset();
        displayTodos();
    });

    // Display todos in the list
    function displayTodos() {
        const todoList = document.querySelector('#todo-list');
        todoList.innerHTML = "";
        
        todos.forEach((todo, index) => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');

            const label = document.createElement('label');
            const input = document.createElement('input');
            const content = document.createElement('div');
            const actions = document.createElement('div');
            const edit = document.createElement('button');
            const deleteButton = document.createElement('button');

            input.type = 'checkbox';
            input.checked = todo.done;

            content.classList.add('todo-content');
            content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
            
            actions.classList.add('actions');
            edit.classList.add('edit');
            deleteButton.classList.add('delete');

            edit.innerHTML = 'Edit';
            deleteButton.innerHTML = 'Delete';
            
            label.appendChild(input);
            actions.appendChild(edit);
            actions.appendChild(deleteButton);
            todoItem.appendChild(label);
            todoItem.appendChild(content);
            todoItem.appendChild(actions);
            todoList.appendChild(todoItem);

            if (todo.done) {
                todoItem.classList.add('done');
            }
            
            // Checkbox change event
            input.addEventListener('change', (e) => {
                todo.done = e.target.checked;
                localStorage.setItem('todos', JSON.stringify(todos));
                displayTodos();
            });

            // Edit button event
            edit.addEventListener('click', () => {
                const inputField = content.querySelector('input');
                inputField.removeAttribute('readonly');
                inputField.focus();

                inputField.addEventListener('blur', (e) => {
                    inputField.setAttribute('readonly', true);
                    todo.content = e.target.value;
                    localStorage.setItem('todos', JSON.stringify(todos));
                    displayTodos();
                }, { once: true }); // Ensures this listener runs only once
            });

            // Delete button event
            deleteButton.addEventListener('click', () => {
                todos.splice(index, 1); // Remove todo by index
                localStorage.setItem('todos', JSON.stringify(todos));
                displayTodos();
            });
        });
    }

    displayTodos(); // Initial display of todos
});
