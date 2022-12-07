const form = document.getElementById("form");
const complished = document.getElementById("complished")

function Onmount(){
    if(localStorage.getItem("complished") === "true"){
        form.style.display = "none"
        complished.style.display = "block"
    }
}

Onmount()

function handleForm(event) { 
    event.preventDefault(); 
    const name = document.getElementById("input_name").value
    const prenom = document.getElementById("input_prenom").value
    const mail = document.getElementById("input_mail").value
    const sexe = document.getElementById("input_sexe").value

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer key1knTuZ7MwzCLsY");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "brw=brwwHT6INJ9ksGpYp; AWSALB=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ; AWSALBCORS=AOBoyZv++4HGaV30P1PmRIaUBxobwGIFA6tEPTgCCnRGObuyfNP8UnZHF1OAxpknVPUidmw7bc+4yRKqtiyhbqdC+stjO7sBhXDgQBYVp+7Mr6XWKcNp8MvJlccJ");

    var raw = JSON.stringify({
    "records": [{
        "fields": {
            "Nom": name,
            "Prenom": prenom,
            "Adresse_mail": mail,
            "Sexe": sexe,
        }
        }]
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.airtable.com/v0/appJzYfevQHNz6cRZ/Inscription_LP", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result.records)
        localStorage.setItem("complished", true)
        Onmount()
    })
    .catch(error => console.log('error', error));
} 

form.addEventListener('submit', handleForm);
