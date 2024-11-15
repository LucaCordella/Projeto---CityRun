document.querySelector('.search-btn').addEventListener('click', function() {
    let searchValue = document.getElementById('searchInput').value.toLowerCase();
    let messageItems = document.querySelectorAll('.message-item');
    
    messageItems.forEach(item => {
        let messageText = item.querySelector('h3').textContent.toLowerCase();
        if (messageText.includes(searchValue)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

let messageItems = document.querySelectorAll('.message-item');
messageItems.forEach(item => {
    item.addEventListener('click', function() {
        let personName = item.querySelector('h3').textContent.toLowerCase();
        if (personName.includes('pessoa 1')) {
            window.location.href = 'pessoa1.html';
        } else if (personName.includes('pessoa 2')) {
            window.location.href = 'pessoa2.html';
        } else if (personName.includes('pessoa 3')) {
            window.location.href = 'pessoa3.html';
        } else if (personName.includes('grupo 1')) {
            window.location.href = 'grupo1.html';
        }
    });
});