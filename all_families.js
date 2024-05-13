document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les familles stockées (par exemple, depuis le stockage local ou un serveur)
    var storedFamilies = JSON.parse(localStorage.getItem('families')) || [];

    // Sélectionner le corps du tableau
    var tableBody = document.getElementById('familyTableBody');

    // Ajouter chaque famille au tableau
    storedFamilies.forEach(function(family) {
        var row = tableBody.insertRow();
        var idCell = row.insertCell(0);
        var nameCell = row.insertCell(1);

        idCell.textContent = family.id;
        nameCell.textContent = family.name;
    });
});
