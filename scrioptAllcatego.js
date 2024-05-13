document.addEventListener('DOMContentLoaded', function() {
    // Exemple de catégories (vous pouvez les remplacer par vos propres données)
    var categories = ['Category 1', 'Category 2', 'Category 3'];

    // Sélectionnez la liste des catégories
    var categoryList = document.getElementById('categoryList');

    // Ajouter chaque catégorie à la liste
    categories.forEach(function(category) {
        var listItem = document.createElement('li');
        listItem.textContent = category;
        categoryList.appendChild(listItem);
    });
});
