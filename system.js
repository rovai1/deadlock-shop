const reader = new FileReader()
// fetch('./shop_data.json')
//     .then((response) => response.json)
//     .then((json) => readJson(jsonFile))


function readJson(jsonFile){
    
    // reader.readAsText(jsonFile)
    // reader.onload = function(){
        
        CardRenderer(jsonFile)
    // }
}

function CardRenderer(data){
    data.forEach(element => {
        // var data = JSON.parse(element)
        CreateCard(element)
    });
}


function CreateCard(shittyobj){
    var cardTemplate = document.getElementsByClassName("card_template")[0]
    var clone = cardTemplate.content.cloneNode(true)
    clone.querySelector(".item_icon").src = shittyobj.icon
    clone.querySelector(".item_title").innerHTML = shittyobj.name
    clone.querySelector(".item_icon_div").style.setProperty("--mod-color", "var(--mod-color-" + shittyobj.type + (shittyobj.active? "-Active" : "") +")")
    document.getElementsByClassName("item_shop_row")[0].appendChild(clone)
}


const temporaryJSON = [
    {
        "name": "Basic Magazine",
        "price": 500,
        "type": "Weapon",

        "stats": [
            "+24% Ammo",
            "+15% Weapon Damage"
        ],

        "passive": "",
        "passive_cooldown": 0,

        "active": false,
        "active_cooldown": 0,

        "component_of": "INT | id of the component",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/clip_size_psd.png"
    },
    {
        "name": "Close Quarters",
        "price": 500,
        "type": "Weapon",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "active": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/close_range_psd.png"
    },
    {
        "name": "Enduring Spirit",
        "price": 500,
        "type": "Vitality",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "active": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_armor/resilience_psd.png"
    },
    {
        "name": "Ammo Scavenger",
        "price": 500,
        "type": "Spirit",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "active": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/ammo_scavenger_psd.png"
    },
    {
        "name": "Infuser",
        "price": 500,
        "type": "Spirit",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "active": true,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/ammo_scavenger_psd.png"
    }
]

readJson(temporaryJSON)
