

fetch("../Data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.image);

       const content =` <div class="card" id="h1">


        <img id="img1" src="${data.image} " alt="Not Working" style="width:100%">
        <div id="name" class="container" >
            <h4><b>${data.name}</b></h4>
           
        </div>
    </div> `;



        document.getElementById('Emb').innerHTML = content


    })



















//For APIs





 