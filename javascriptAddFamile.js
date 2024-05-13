document.getElementById('addFamily').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Récupérer la valeur du champ du nom de famille
    var familyName = document.getElementById('nom').value;

    // Vous pouvez ajouter ici la logique pour envoyer le nom de la famille à votre backend pour traitement
    
     // Créer un nouvel objet famille avec le nom
  
   
    // Afficher le message de succès
    showMessage('Family added successfully.');

   
});

function showMessage(message) {
    var messageDiv = document.getElementById('messageSuccess');
    messageDiv.textContent = message;
    messageDiv.style.backgroundColor = '#28a745';
    messageDiv.style.color = '#fff';
    messageDiv.style.padding = '10px';
    messageDiv.style.marginTop = '20px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.textAlign = 'center';
}
