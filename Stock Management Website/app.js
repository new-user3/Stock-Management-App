let stockList = [];

function addItem() {
    const itemName = document.getElementById('item-name').value;
    const itemQuantity = document.getElementById('item-quantity').value;

    if (itemName && itemQuantity) {
        const newItem = {
            name: itemName,
            quantity: parseInt(itemQuantity)
        };
        
        stockList.push(newItem);
        displayStock();
    } else {
        alert('Please enter both item name and quantity');
    }

    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}

function updateQuantity(index, value) {
    stockList[index].quantity += value;
    displayStock();
}

function deleteItem(index) {
    stockList.splice(index, 1);
    displayStock();
}

function displayStock() {
    const stockTableBody = document.querySelector('#stock-table tbody');
    stockTableBody.innerHTML = '';

    stockList.forEach((item, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        const actionCell = document.createElement('td');
        const addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.onclick = () => updateQuantity(index, 1);
        actionCell.appendChild(addButton);

        const subtractButton = document.createElement('button');
        subtractButton.textContent = '-';
        subtractButton.onclick = () => updateQuantity(index, -1);
        actionCell.appendChild(subtractButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = () => deleteItem(index);
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);
        stockTableBody.appendChild(row);
    });
}
