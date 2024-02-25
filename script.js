// Function to add a new item to the to-do list
function addItem() {
    const newItemInput = document.getElementById('new-item');
    const newItemText = newItemInput.value.trim();
    const todoList = document.getElementById('todo-list');

    // Check if the input field is not empty
    if (newItemText !== '') {
        // Create a new list item element
        const li = document.createElement('li');
        li.className = 'todo-item';
        // Populate the list item with the new item text and buttons
        li.innerHTML = `
            <span>${newItemText}</span>
            <span class="edit-btn" onclick="editItem(this)">✎</span>
            <span class="delete-btn" onclick="deleteItem(this)">❌</span>
        `;
        // Append the new item to the todo list
        todoList.appendChild(li);
        // Clear the input field after adding the item
        newItemInput.value = '';
    }
}

// Function to delete an item from the to-do list
function deleteItem(item) {
    // Get the parent list item of the delete button
    const listItem = item.parentElement;
    // Remove the list item from the DOM
    listItem.remove();
}

// Function to edit an item in the to-do list
function editItem(item) {
    // Get the parent list item of the edit button
    const listItem = item.parentElement;
    // Get the span element containing the item text
    const textSpan = listItem.querySelector('span:first-child');
    // Prompt the user to edit the item text
    const newText = prompt('Edit item:', textSpan.textContent);
    // Check if the user entered a new text
    if (newText !== null) {
        // Update the item text with the new text
        textSpan.textContent = newText.trim();
    }
}

// Event listener for the Add button
document.getElementById('add-btn').addEventListener('click', addItem);
