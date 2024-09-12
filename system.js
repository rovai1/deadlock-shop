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
    switch(shittyobj.tier){
        case 1:
            document.getElementsByClassName("item_shop_row")[0].appendChild(clone)
        case 2:
            document.getElementsByClassName("item_shop_row2")[0].appendChild(clone)
        case 3:
            document.getElementsByClassName("item_shop_row")[1].appendChild(clone)
        case 4:
            document.getElementsByClassName("item_shop_row2")[1].appendChild(clone)
    }
}
// ik its bad
function ChangeCategory(changed) {
    ChangeVisibility(selectedModType)

    const buttons = document.querySelectorAll('.category_button');

    buttons.forEach(button => {
        button.classList.remove("focus")
    })

    switch(changed){
        default:
        case 0:
            selectedModType = "Weapon"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "rgb(117,76,13)"
            document.getElementsByClassName("item_shop_row2")[0].style.backgroundColor = "rgb(117,76,13)"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "rgb(117,76,13)"
            document.getElementsByClassName("item_shop_row2")[1].style.backgroundColor = "rgb(117,76,13)"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "rgb(230, 148, 55)"
            document.getElementsByClassName("category_button")[0].classList.add("focus")
            break;        
        case 1:
            selectedModType = "Vitality"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("item_shop_row2")[0].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("item_shop_row2")[1].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "rgb(116, 176, 28)"
            document.getElementsByClassName("category_button")[1].classList.add("focus")
            break;        
        case 2:
            selectedModType = "Spirit"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "rgb(98,66,123)"
            document.getElementsByClassName("item_shop_row2")[0].style.backgroundColor = "rgb(98,66,123)"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "rgb(98,66,123)"
            document.getElementsByClassName("item_shop_row2")[1].style.backgroundColor = "rgb(98,66,123)"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "rgb(194, 136, 240)"
            document.getElementsByClassName("category_button")[2].classList.add("focus")
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
        "tier": 1,
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
        "tier": 1,
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
        "tier": 1,
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
        "tier": 1,
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
        "tier": 1,
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
        "tier": 2,
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
        "tier": 3,
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
        "tier": 4,
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
