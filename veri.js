var sayi=0;
function cek() {

    fetch("veri.json")
    .then(response=>response.json())
    .then((data)=>{
        
        var temp="";
        data.map((itemData) =>{

            temp+=`<div class="card mb-3 col-12 col-lg-3" style=border:none"> 
                    <div class="row g-0">
                    <img src="${itemData.img}" class="img-fluid rounded-start" alt="..." style="height:150px;">

                    <div class="card-body">
                    <h5 id="title1 class="card-title">${itemData.title}</h5>
                    </div>
                    </div>
                    </div>`
        });
        
        sayi++;
        if(sayi%2==1) {
            document.getElementById("data").innerHTML=temp;
        }
        else {
            document.getElementById("data").innerHTML="";

        }
    })

}
function kapat() {

document.getElementById("data").innerHTML="";
}