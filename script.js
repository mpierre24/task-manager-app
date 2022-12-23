window.addEventListener('load'), () => {
    const form = document.querySelector("#new-todo-form");
    const input = document.querySelector("#new-todo-sumbit");
    const list_el = document.querySelector("#todos");

    form.addEventListener('submit'), (e) => {
        e.preventDefault();

        const todo = input.value;
        if (!todo) {
            alert("Type in a Todo")
            return;
        }


        const todo_el = document.createElement("div");
        todo_el.classList.add("todo");

        const todo_content_el = document.createElement("div");
        todo_content_el.classList.add("content");



        todo_el.appendChild("todo_content_el");

        const todo_input = document.createElement("input");
        todo_input_el_input.classList.add("text");
        todo_input_el.type = "text";
        todo_input_el.type = "todo";
        todo_input_el.setAtrribute('readonly', 'readonly');

        todo_content_el.appendChild(todo_input_el);

        const todo_actions_el = document.createElement('div');
        todo_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        todo_edit_el.classList.add('edit');
        todo_edit_el.innerText = 'Edit';

        const todo_delete_el = document.createElement('button');
        todo_delete_el.classList.add('delete');
        todo_delete_el.innerText = 'Delete';

        todo_actions_el.appendChild(todo_edit_el);
        todo_actions_el.appendChild(todo_delete_el);

        todo_el.appendChild(todo_actions_el);

        list_el.appendChild(todo_el);

        input.value = '';

        task_edit_el.addEventListener('click', (e) => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);
        });
    };


}



