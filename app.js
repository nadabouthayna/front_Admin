document.getElementById('addFamily').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    const FamliyInput = document.getElementById('nomFamliy').value;

    // Envoi des données au back-end
    fetch('http://localhost:8081/familles/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom: FamliyInput })
    })
    .then(response => {
        if (response.ok) {
           
            window.location.href = '/Allfamily.html'; // Redirect to page showing all categories
            console.log("family added successfully");
            // Réinitialiser le formulaire ou effectuer d'autres actions nécessaires
        } else {
            console.error("Failed to add category");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});




//add faml
/*const ajoutF = document.querySelector('#addF')
const create =async()=>{
    let nameFam = document.getElementById('familyName').value;
    let response= await fetch('http://localhost:8080/familles/create',
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ 
            name:  nameFam 
        })


    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/Allfamily.html'; // Redirect to page showing all categories
        } else {
            throw new Error('Failed to add category');
        }
    })

}
ajoutF.addEventListener('click',create);
//all famil
/*window.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('/famille/afficher');
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }

        const familys = await response.json();
        const tableBody = document.querySelector('#familyTable tbody');

        familys.forEach(category => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${famille.nom}</td>
                <td>
                    <button onclick="editFamily(${famille.idf})">Modifier</button>
                    <button onclick="deleteFamily(${famille.idf})">Supprimer</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

//modfer fam
// Fonction pour éditer une catégorie
async function editFamily(idf) {
    try {
        // Récupérer les détails de la catégorie à modifier depuis le serveur
        const response = await fetch(`/familles/update/${idf}`);
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

// supp fam

// Fonction pour supprimer une catégorie
async function deleteFamily(idf) {
    try {
        const response = await fetch(`/familles/effacer/${idf}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete category');
        }

        // Supprimer la ligne du tableau correspondant à la catégorie supprimée
        const rowToDelete = document.querySelector(`#category-${idf}`);
        rowToDelete.parentNode.removeChild(rowToDelete);
        showMessage('La catégorie a été supprimée avec succès.');
    } catch (error) {
        console.error('Error:', error);
    }
}
*/















