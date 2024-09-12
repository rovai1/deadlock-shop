let selectedModType = "Weapon"

const reader = new FileReader()
// fetch('./shop_data.json')
//     .then((response) => response.json)
//     .then((json) => readJson(jsonFile))

function readJson(jsonFile) {
    
    // reader.readAsText(jsonFile)
    // reader.onload = function(){
        
        CardRenderer(jsonFile)
    // }
}

function CardRenderer(data) {
    data.forEach(element => {
        // var data = JSON.parse(element)
        CreateCard(element)
    });
}


function CreateCard(shittyobj) {
    var cardTemplate = document.getElementsByClassName("card_template")[0]
    var clone = cardTemplate.content.cloneNode(true)
    clone.querySelector(".item_icon").src = shittyobj.icon
    clone.querySelector(".item_title").innerHTML = shittyobj.name
    clone.querySelector(".item_icon_div").style.setProperty("--mod-color", "var(--mod-color-" + shittyobj.type + (shittyobj.active? "-Active" : "") +")")
    clone.querySelector(".item_shop_item").classList.add(shittyobj.type)
    if(shittyobj.type != selectedModType) {
        clone.querySelector(".item_shop_item").style.display = "none" 
    }

    // This is temporary way to see how it now actually looks like. 
    // maybe we make all items have a tier and thats how we then separete them
    switch(shittyobj.price){
        case 500:
            document.getElementsByClassName("item_shop_row")[0].appendChild(clone)
        case 1250:
            document.getElementsByClassName("item_shop_row2")[0].appendChild(clone)
        case 3000:
            document.getElementsByClassName("item_shop_row")[1].appendChild(clone)
        case 6300:
            document.getElementsByClassName("item_shop_row2")[1].appendChild(clone)
    }
}

function ChangeCategory(changed) {
    ChangeVisibility(selectedModType)
    switch(changed){
        default:
        case 0:
            selectedModType = "Weapon"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "rgb(230, 148, 55)"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "rgb(102, 61, 0)"
            document.getElementsByClassName("item_shop_row2")[0].style.backgroundColor = "rgb(102, 61, 0)"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "rgb(102, 61, 0)"
            document.getElementsByClassName("item_shop_row2")[1].style.backgroundColor = "rgb(102, 61, 0)"
            break;        
        case 1:
            selectedModType = "Vitality"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "GreenYellow"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "green"
            document.getElementsByClassName("item_shop_row2")[0].style.backgroundColor = "darkgreen"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "green"
            document.getElementsByClassName("item_shop_row2")[1].style.backgroundColor = "darkgreen"
            break;        
        case 2:
            selectedModType = "Spirit"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "Fuchsia"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "purple"
            document.getElementsByClassName("item_shop_row2")[0].style.backgroundColor = "darkorchid"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "purple"
            document.getElementsByClassName("item_shop_row2")[1].style.backgroundColor = "darkorchid"
            break;        
    }
    console.log(selectedModType)
    ChangeVisibility(selectedModType, "block")
}

function ChangeVisibility(type, display = "none") {
    var a = document.getElementsByClassName(type)
    Array.prototype.forEach.call(
        a,
        (element) => element.style.display = display
    )
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
    },
    {
        "name": "Active Reload",
        "price": 1250,
        "type": "Weapon",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "active": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_utility/deployable_bullet_shield_psd.png"
    },
    {
        "name": "Burst Fire",
        "price": 3000,
        "type": "Weapon",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "active": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/fire_rate_plus_plus_psd.png"
    },
    {
        "name": "Crippling Headshot",
        "price": 6300,
        "type": "Weapon",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "active": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/banshee_slugs_psd.png"
    }
]

readJson(temporaryJSON)
