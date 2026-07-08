document.querySelectorAll('li form button').forEach(button => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        const marketType = e.target.parentElement.parentElement.children[1].id;
        const terminalId = e.target.parentElement.parentElement.children[3].id;

        const payload = {
            marketType: marketType,
            terminalId: terminalId
        }

        const response = await fetch(`/merchants/${document.querySelector('li').classList[0]}/processing-profiles/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if(response.ok){
            window.location.reload();
        };

    });
});

document.querySelectorAll('p').forEach(text => {
    switch(text.textContent){
        case 'retail':
            text.textContent = 'Retail';
            break;
        case 'restaurant':
            text.textContent = 'Restaurant';
            break;
        case 'ecomm':
            text.textContent = 'Ecommerce';
            break;
        case 'moto':
            text.textContent = 'Direct Marketing (MOTO)';
            break;
    }
});

document.querySelector('#terminal_id').addEventListener('input', (e) => {
    const inputField = e.target;
    
    inputField.value = inputField.value.replace(/[^0-9]/g, '');

    if (inputField.value.length < 4) {
        inputField.setCustomValidity("Terminal ID must be exactly 4 digits.");
    } else {
        inputField.setCustomValidity("");
    }
});