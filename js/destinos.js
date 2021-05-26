currentDestinosArray = [];

function showCategoriesList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentDestinosArray.length; i++){
        let Destino = currentDestinosArray[i];

            htmlContentToAppend += `
            <a href="category-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + Destino.imgSrc + `" alt="` + Destino.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ Destino.name +`</h4>
                        </div>
                        <p class="mb-1">` + Destino.description + `</p>
                    </div>
                </div>
            </a>
            `

        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(DESTINOS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            showCategoriesList();
        }
    });

});