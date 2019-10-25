
// get form to get value
const form = document.querySelector('.add');

// get value to dom
const list = document.querySelector('.todos');



// generate template in the todo list 
// ! do not write all the logic code inside the function to have a more reusable code
const generateTemplate = todo => {
    // inject template
    let html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;

    //  add new li to dom 
    list.innerHTML += html;
};

// add event for form
form.addEventListener('submit', e => {
    // stop refreshing the page
    e.preventDefault();

    // get value from the form
    const todo = form.add.value.trim();

    // evaluate length in the submit 
    if(todo.length){
        generateTemplate(todo);
        form.reset()
    }
     
});

// delete the li from list in dom

list.addEventListener('click', e => {

    // create boolean condition
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
});


// filter the todo list

const search = document.querySelector('.search input');

const filterTodo = (text) => {


    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(text))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(text))
    .forEach(todo => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', e => {
    let text = e.target.value.trim().toLowerCase()

    // ! call the function for: Filter todo
    filterTodo(text);
});

