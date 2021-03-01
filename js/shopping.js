shoppingForm = document.querySelector('.shopping');
list = document.querySelector('.list');

//Array to hold state
let items = [];

const handleItemSubmit = e => {
    e.preventDefault();
    if(!e.currentTarget.item.value) return; //Does nothing if nothing in box to be added
    item = {
        name: e.currentTarget.item.value,
        id: Date.now(),
        isCompleted: false,
    }
    //Push item to state
    item && items.push(item) 
    e.currentTarget.item.value = '';
    //fire off event that broadcasts item has been updated
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

const displayItems = () => {
    const html = items.map(item => `<li class="shopping-item">
        <input value="${item.id}" ${item.isCompleted && 'checked'} type="checkbox">
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}" value="${item.id}">&times</button>
    </li>`).join('');
    list.innerHTML = html;
}

const removeItem = id => {
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

const markAsComplete = id => {
    const itemRef = items.find(item => item.id === id);
    itemRef.isCompleted = !itemRef.isCompleted
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
    console.log(itemRef);
}

const sendToLocalStorage = () => {
    localStorage.setItem('items', JSON.stringify(items));
}

const loadFromLocalStorage = () => {
    const lsItems = JSON.parse(localStorage.getItem('items'));
    if (lsItems) {
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    } else {
        console.log('No items in local storage');
    }
}

shoppingForm.addEventListener('submit', handleItemSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener('itemsUpdated', sendToLocalStorage);
//Event deligation listen on list and delegate to button
list.addEventListener('click', e => {
    if (e.target.matches('button')) {
        removeItem(parseInt(e.target.value));
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(parseInt(e.target.value));
    }
});
loadFromLocalStorage();