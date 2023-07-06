function saveTheDetails(event){
    event.preventDefault();
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        amount,
        description,
        category
    }
    localStorage.setItem(obj, JSON.stringify(obj))
    showUsersOnScreen(obj)
}
function showUsersOnScreen(obj){
    const parentElem = document.getElementById('listOfItems')
    const childElem = document.createElement('li');
    childElem.textContent = obj.amount + '-' + obj.description + '-' + obj.category

    const dltBtn = document.createElement('input')
    dltBtn.type = 'button'
    dltBtn.value = 'Delete expense'
    dltBtn.onclick = () => {
        localStorage.removeItem(obj)
        parentElem.removeChild(childElem)
    }

    childElem.appendChild(dltBtn)
    parentElem.appendChild(childElem)

    const editBtn = document.createElement('input')
    editBtn.type = 'button'
    editBtn.value = 'Edit expense'
    editBtn.onclick = () => {
     localStorage.removeItem(obj)
     parentElem.removeChild(childElem)
     document.getElementById('expense').value = obj.amount;
     document.getElementById('description').value = obj.description;
     document.getElementById('category').value = obj.category;   
    }
    childElem.appendChild(dltBtn)
    childElem.appendChild(editBtn)
    parentElem.appendChild(childElem)
    
}