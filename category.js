// category.js
//add cat

/*document.addEventListener('DOMContentLoaded', function() {
    const ajoutC = document.querySelector('#ajoutC');
    
    const addCat = async () => {
        let nameCat = document.getElementById('nomCat').value;
       
        let response = await fetch('http://localhost:8088/category/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name:  nameCat 
            })
        });
        
        if (response.ok) {
            window.location.href = '/AllCategory.html'; // Redirect to page showing all categories
        } else {
            throw new Error('Failed to add category');
        }
        
        console.log(response);
    };
    
    ajoutC.addEventListener('click', addCat);
  });
  */
  
 
  document.getElementById('categoryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    const categoryInput = document.getElementById('nomCat').value;

    // Envoi des données au back-end
    fetch('http://localhost:8081/category/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom: categoryInput })
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/AllCategory.html'; // Redirect to page showing all categories
            console.log("Category added successfully");
            // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
        } else {
            console.error("Failed to add category");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});


















//all cat
/*window.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('http://localhost:8088/category/all');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        console.error('ErrorJAVA:', response);
    

        const categories = await response.json();
        const tableBody = document.querySelector('#categoryTable tbody');

        categories.forEach(category => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${category.nom}</td>
                <td>
                    <button onclick="editCategory(${category.idc})">Modifier</button>
                    <button onclick="deleteCategory(${category.idc})">Supprimer</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('ErrorJAVA:', error);
    }
});*/

//modfer cat
// Fonction pour éditer une catégorie
/*async function editCategory(idc) {
    try {
        // Récupérer les détails de la catégorie à modifier depuis le serveur
        const response = await fetch(`/category/update/${idc}`);
        if (!response.ok) {
            throw new Error('Failed to fetch category details for editing');
        }

        const category = await response.json();

        // Pré-remplir le formulaire de modification avec les détails de la catégorie
        //document.querySelector('#editCategoryForm input[name="categoryId"]').value = category.idc;
        document.querySelector('#editCategoryForm input[name="nom"]').value = category.nom;

        // Afficher le formulaire de modification
        document.querySelector('#editCategoryModal').classList.add('show');
    } catch (error) {
        console.error('Error:', error);
        // Afficher un message d'erreur en cas d'échec de récupération des détails de la catégorie
        showMessage('Une erreur est survenue lors de la récupération des détails de la catégorie pour la modification.', 'error');
    }
}

// Écouter les événements de clic sur les boutons "Modifier" pour chaque ligne du tableau
document.querySelectorAll('.editCategoryBtn').forEach(button => {
    button.addEventListener('click', () => {
        const categoryId = button.dataset.categoryId;
        editCategory(categoryId);
    });
});







// supp cat

// Fonction pour supprimer une catégorie
 /*function deleteCategory(idc) {
    try {
         fetch(`/category/effacer/${idc}`, {
            method: 'DELETE'
        });
    

        // Supprimer la ligne du tableau correspondant à la catégorie supprimée
        const rowToDelete = document.querySelector(`#category-${idc}`);
        rowToDelete.parentNode.removeChild(rowToDelete);
        showMessage('La catégorie a été supprimée avec succès.');
    } catch (error) {
        console.error('Error:', error);
    }
}
*/







