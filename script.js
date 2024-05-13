document.getElementById('addProduct').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer les valeurs des champs
    var productName = document.getElementById('productName').value;
    var category = document.getElementById('category').value;
    var family = document.getElementById('family').value;
    var description = document.getElementById('description').value;

    // Vérifier si les champs sont vides
    if (productName.trim() === '' || category === '' || family === '' || description.trim() === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Créer un objet produit avec les données
    var product = {
        name: productName,
        category: category,
        family: family,
        description: description
    };

    // Ajouter le produit à un tableau de produits (vous pouvez stocker cela où vous voulez)
    // Par exemple, dans le stockage local ou envoyer au serveur
    // Ici, nous allons simplement le logguer dans la console
    console.log('New Product Added:', product);

    // Afficher le message de succès
    showMessage('Product added successfully.');

    // Réinitialiser le formulaire après l'ajout du produit
    this.reset();

    // Rediriger l'utilisateur vers une autre page après 2 secondes
    setTimeout(function() {
        window.location.href = 'tables-general.html';
    }, 2000);
});
function showMessage(message) {
    var messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.backgroundColor = '#28a745';
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '10px';
    messageDiv.style.marginTop = '20px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.textAlign = 'center';
    document.getElementById('messageContainer').appendChild(messageDiv);
    // Supprimer le message après 2 secondes
    setTimeout(function() {
        document.getElementById('messageContainer').removeChild(messageDiv);
    }, 2000);
}
