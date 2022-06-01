const form = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');
//    adding new todo
const addTodo = (userInputDetails) => {
const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${userInputDetails}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
`;
  ul.innerHTML += html;
}
form.addEventListener('submit', event => {
    event.preventDefault();
    const userInputDetails = form.add.value.trim();
    // checking if there is string in the form
    if(userInputDetails.length){
        addTodo(userInputDetails);
    }
    form.reset();
});

// searching todos
const findMatch = (todo) => {
  let result = Array.from(ul.children)
  .filter((newTodo) => {
      return !newTodo.textContent.toLowerCase().includes(todo)
  })
  .forEach((newTodo) => {
    newTodo.classList.add('removeTodo')
  });

  Array.from(ul.children)
  .filter((newTodo) => {
      return newTodo.textContent.toLowerCase().includes(todo)
  })
  .forEach((newTodo) => {
    newTodo.classList.remove('removeTodo')
  });
   
};
search.addEventListener('keyup', event => {
    const todo = search.value.trim().toLowerCase();
    findMatch(todo);
});


// Deleting todo  
ul.addEventListener('click', event => {
    if(event.target.classList.contains('delete')){
      event.target.parentElement.remove();
    }
});