
const reader = new FileReader()
fetch('./shop_data.json')
    .then((response) => response.json)
    .then((json) => readJson(jsonFile))


function readJson(jsonFile){
    reader.readAsText(jsonFile)
    reader.onload = function(){
        
        var data = JSON.parse(reader.result)
        CardRenderer(data)
    }
}

function CardRenderer(data){
    data.forEach(element => {
        CreateCard(element)
    });
}


function CreateCard(shittyobj){
    var cardTemplate = document.getElementsByClassName("card_template")[0]
    var clone = cardTemplate.content.cloneNode(true)
    clone.querySelector(".item_icon").src = shittyobj.icon
    clone.querySelector(".item_title").innerHTML = shittyobj.title
    document.getElementsByClassName("item_shop_row")[0].appendChild(clone)
}
