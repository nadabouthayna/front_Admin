document.getElementById('addProduct').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    const nomInput = document.getElementById('nomPro').value;
    const categInput = document.getElementById('nomcategory').value;
    const FamliyInput = document.getElementById('namefamily').value;
    const descrpInput = document.getElementById('description').value;


    // Envoi des données au back-end
    fetch('http://localhost:8081/produit/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nom: nomInput ,
            idc:categInput,
            idf: FamliyInput,
            description:descrpInput
        })
    })
    .then(response => {
        if (response.ok) {
            console.log(document.getElementById('nomPro').value);
            console.log(document.getElementById('nomcategory').value);
            console.log( document.getElementById('namefamily').value)
            window.location.href = '/AllProduct.html'; // Redirect to page showing all categories
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
