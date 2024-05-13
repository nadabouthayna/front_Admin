document.getElementById('categoryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var categoryName = document.getElementById('categoryName').value;
    if (categoryName.trim() !== '') {
        // Ajoutez ici la logique pour envoyer la catégorie au serveur ou pour la traiter localement
        console.log('New category added: ' + categoryName);
        // Afficher le message de succès
        showMessage('Category added successfully.');
        // Rediriger vers la page des catégories
        setTimeout(function() {
            window.location.href = 'forms-editors.html';
        }, 2000); // Rediriger après 2 secondes (2000 millisecondes)
    } else {
        alert('Please enter a category name.');
    }
});

function showMessage(message) {
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.backgroundColor = '#28a745';
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '5px';
    messageDiv.style.marginTop = '10px';
    messageDiv.style.borderRadius = '2px';
    messageDiv.style.textAlign = 'center';

    document.body.appendChild(messageDiv);
    // Supprimer le message après 2 secondes
    setTimeout(function() {
        document.body.removeChild(messageDiv);
    }, 2000);
}
