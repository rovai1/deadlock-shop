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
    clone.querySelector(".item_icon_div").style.setProperty("--mod-color", "var(--mod-color-" + shittyobj.type + (shittyobj.isActive? "-Active" : "") +")")
    clone.querySelector(".item_shop_item").classList.add(shittyobj.type)
    clone.querySelector(".tooltip_title_text").innerHTML = shittyobj.name
    clone.querySelector(".soul_cost_text").innerHTML = shittyobj.price
    stats = ""
    if(shittyobj.stats) {
        for(let i = 0; i < shittyobj.stats.length; i++) {
            stats += "<li>" + String(shittyobj.stats[i]) + "</li>"
        }
    }
    clone.querySelector(".tooltip_stats").innerHTML = stats
    if(shittyobj.type != selectedModType) {
        clone.querySelector(".item_shop_item").style.display = "none" 
    }

    switch(shittyobj.tier){
        case 1:
            document.getElementsByClassName("items")[0].appendChild(clone)
        case 2:
            document.getElementsByClassName("items")[1].appendChild(clone)
        case 3:
            document.getElementsByClassName("items")[2].appendChild(clone)
        case 4:
            document.getElementsByClassName("items")[3].appendChild(clone)
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
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "rgb(117,76,13)"
            document.getElementsByClassName("item_shop_row")[2].style.backgroundColor = "rgb(117,76,13)"
            document.getElementsByClassName("item_shop_row")[3].style.backgroundColor = "rgb(117,76,13)"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "rgb(230, 148, 55)"
            document.getElementsByClassName("category_button")[0].classList.add("focus")
            break;        
        case 1:
            selectedModType = "Vitality"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("item_shop_row")[2].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("item_shop_row")[3].style.backgroundColor = "rgb(67,102,12)"
            document.getElementsByClassName("selected_shop_panel")[0].style.borderTopColor = "rgb(116, 176, 28)"
            document.getElementsByClassName("category_button")[1].classList.add("focus")
            break;        
        case 2:
            selectedModType = "Spirit"
            document.getElementsByClassName("item_shop_row")[0].style.backgroundColor = "rgb(98,66,123)"
            document.getElementsByClassName("item_shop_row")[1].style.backgroundColor = "rgb(98,66,123)"
            document.getElementsByClassName("item_shop_row")[2].style.backgroundColor = "rgb(98,66,123)"
            document.getElementsByClassName("item_shop_row")[3].style.backgroundColor = "rgb(98,66,123)"
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

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "Titanic Magazine",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/clip_size_psd.png"
    },
    {
        "name": "Close Quarters",
        "price": 500,
        "tier": 1,
        "type": "Weapon",

        "stats": [
            "+85 Bullet Shield Health"
        ],

        "passive": "Deal additional Weapon Damage when in close range to your target.\n+25% Weapon Damage Conditional: Close Range\nCondition: 15m Close Range",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/close_range_psd.png"
    },
    {
        "name": "Headshot Booster",
        "price": 500,
        "tier": 1,
        "type": "Weapon",

        "stats": [
            "+5% Fire Rate",
            "+40 Bullet Shield Health"
        ],

        "passive": "Deal bonus Weapon Damage with headshots\n+45 Head Shot Bonus Damage",
        "passive_cooldown": 7,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "High-Velocity Mag",
        "price": 500,
        "tier": 1,
        "type": "Weapon",

        "stats": [
            "+30% Bullet Velocity",
            "+14% Weapon Damage",
            "+50 Bullet Shield Health"
        ],

        "passive": "",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Hollow Point Ward",
        "price": 500,
        "tier": 1,
        "type": "Weapon",

        "stats": [
            "+85 Spirit Shield Health",
            "+4 Spirit Power"
        ],

        "passive": "When you are above 60% health, deal additional Weapon Damage. \n+20% Weapon Damage (Conditional)",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Monster Rounds",
        "price": 500,
        "tier": 1,
        "type": "Weapon",

        "stats": [
            "+35% Weapon Damage vs. NPCs",
            "+35% Bullet Resist vs. NPCs",
            "+50 Bonus Health",
            "+1 Health Regen"
        ],

        "passive": "",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Rapid Rounds",
        "price": 500,
        "tier": 1,
        "type": "Weapon",

        "stats": [
            "+12% Fire Rate",
            "+1m/s Sprint Speed",
            "-50 Max Health"
        ],

        "passive": "",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Restorative Shot",
        "price": 500,
        "tier": 1,
        "type": "Weapon",

        "stats": [
            "+7% Bullet Resist",
            "+8% Weapon Damage"
        ],

        "passive": "",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Active Reload",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+10% Weapon Damage",
            "-20% Reload Time"
        ],

        "passive": "Passive: While reloading, pressing [R] during the highlighted portion will instantly finish your reload and grant you Fire Rate and Bullet Lifesteal. \n+20% Fire Rate\n+22% Bullet Lifesteal\n7s Duration",
        "passive_cooldown": 17,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_utility/deployable_bullet_shield_psd.png"
    },
    {
        "name": "Berserker",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+4 Ammo",
            "+8% Bullet Resist"
        ],

        "passive": "Your Weapon Damage increases as you take sustained damage. \n+5% Weapon Damage per Stack\n110 Damage taken to Stack\n10 Max Stacks\n10 Duration",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Kinetic Dash",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+100 Bonus Health",
            "+1.5 Health Regen"
        ],

        "passive": "Your next Dash-Jump does not cost an extra stamina and you gain Fire Rate and bonus Ammo until your next reload. Lasts up to 8s. \n+25% Fire Rate\n+5 Temporary Ammo\n8s Duration",
        "passive_cooldown": 10,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Long Range",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+20% Ammo",
            "+90 Bullet Shield"
        ],

        "passive": "Deal additional Weapon Damage when beyond a minimum distance from your target. 15m. \n+40% Weapon Damage\nConditional, 15m Minimum Distance",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "Sharpshooter",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Melee Charge",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+15% Weapon Damage",
            "+100 Bonus Health",
            "+1 Health Regen"
        ],

        "passive": "Increases your Heavy Melee charge distance. When you perform a Heavy Melee attack against an enemy, your weapon reloads instantly.",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Mystic Shot",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+12% Weapon Damage",
            "+4 Spirit Power"
        ],

        "passive": "Your next bullet deals bonus Spirit Damage \n+65 Spirit Damage",
        "passive_cooldown": 6,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Slowing Bullets",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+16% Weapon Damage",
            "+5 Spirit Power"
        ],

        "passive": "Your bullets apply Movement Slow \n25% Movement Slow\n(Conditional)\n\n1.3s Slow Duration",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "Silencer",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Soul Shredder Bullets",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+6% Weapon Damage"
        ],

        "passive": "Your Bullets apply a debuff that amplifies your Spirit Damage against the target and grants you Spirit Lifesteal against them \n10% Spirit Amp\n+20% Lifesteal\n6s Debuff Duration",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Swift Striker",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+22% Fire Rate",
            "-5% Bullet Resist",
            "+10% Ammo"
        ],

        "passive": "",
        "passive_cooldown": null,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Fleetfoot",
        "price": 1250,
        "tier": 2,
        "type": "Weapon",

        "stats": [
            "+75 Bonus Health",
            "+25% Slide Distance"
        ],

        "passive": "Removes the Movement Speed penalty while shooting.",
        "passive_cooldown": null,

        "isActive": true,
        "active": "Gain bonus Movement Speed and Ammo. \n+4m/s Movement Speed\n+30% Temporary Ammo\n4s Duration",
        "active_cooldown": 22,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Burst Fire",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+12% Fire Rate",
            "+50% Slide Distance"
        ],

        "passive": "Briefly gain Fire Rate and Move Speed when one of your bullets hits an enemy hero \n+30% Fire Rate (Conditional)\n+2 m/s Move Speed (Conditional)\n4s Duration",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/fire_rate_plus_plus_psd.png"
    },
    {
        "name": "Escalating Resilience",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+14% Fire Rate",
            "+14% Weapon Damage"
        ],

        "passive": "Grants Bullet Resist when your bullets hit an enemy hero. Each shot can only grant one stack. \n40% Max Bullet Resist\n2% Bullet Resist per Stack\n20s Stack Duration",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Headhunter",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+50% Bullet Velocity",
            "+15% Weapon Damage",
            "+150 Bullet Shield"
        ],

        "passive": "Landing a headshot deals bonus damage, heals you for a portion of your Max HP, and briefly grants you bonus move speed. \n+140 Bonus Head Shot Damage\n8% Heal per Headshot\n+2 m/s\n3s Duration",
        "passive_cooldown": 6,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Hunter's Aura",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+150 Bonus Health"
        ],

        "passive": "Reduces nearby enemies' Bullet Resist and Fire Rate. If there is only one enemy hero nearby, this effect is tripled. \nConditional: -10% Bullet Resist\nConditional: 10% Fire Rate Slow\n15m Radius",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Intensifying Magazine",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+25% Ammo",
            "+20% Weapon Damage"
        ],

        "passive": "Increases Weapon Damage as you continuously fire your weapon. \nConditional: 75% Max Weapon Damage\n3s Time for Max Damage",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Point Blank",
        "price": 3500,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+15% Bullet Resist",
            "+1 Stamina"
        ],

        "passive": "When in close range to your target, gain Weapon Damage and your bullets apply a Movement Slow \nConditional: +45% Weapon Damage\nConditional: 25% Movement Slow\n2s Slow Duration\n15m Close Range",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": ["Close Quarters"],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Pristine Emblem",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+25% Weapon Damage",
            "+12 Spirit Power",
            "+12% Spirit Resist"
        ],

        "passive": "Your attacks have additional Weapon Damage against enemies above 50% health. \n+25% Weapon Damage (Conditional)",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Sharpshooter",
        "price": 4250,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+20% Ammo",
            "+15% Weapon Fall-off Range",
            "+30% Weapon Zoom",
            "+175 Bullet Shield"
        ],

        "passive": "Deal additional Weapon Damage when beyond a minimum distance from your target. \n+70% Weapon Damage (15m Min. Distance)",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "Long Range",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Tesla Bullets",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+14% Fire Rate"
        ],

        "passive": "Your bullets have a chance to shock your target. The shock will jump to a nearby enemy. \n30 Shock Damage\n60 Damage on Jump\n25% Proc Chance\n8m Jump Radius\n2 Max Jumps",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Titanic Magazine",
        "price": 3500,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+100% Ammo",
            "+18% Weapon Damage",
            "+15% Bullet Resist"
        ],

        "passive": "",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": ["Basic Magazine"],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Toxic Bullets",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+100 Health"
        ],

        "passive": "Your bullets build up a Bleed on enemies, causing them to lose a percentage of their current health over time. Also applies Healing Reduction on the bleeding target. \n5%/sec Bleed Damage\n-65% Healing Reduction\n3s Duration\n10.3% Buildup Per Shot",
        "passive_cooldown": 0,

        "isActive": false,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Alchemical Fire",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+225 Bullet Shield Health",
            "+14% Weapon Damage",
            "+7 Spirit Power"
        ],

        "passive": "",
        "passive_cooldown": 0,

        "isActive": true,
        "active": "Throw a flask that explodes on contact, creating an area that does increasing Spirit Damage per second and causes enemies to receive additional Weapon Damage from your team.\nDeals 40% less DPS vs non-heroes.\n46 DPS\nConditional: +50% Weapon Damage\n97 Max DPS\n10m Radius\n5s Duration",
        "active_cooldown": 26,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Heroic Aura",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+20% Bullet Lifesteal",
            "+150 Bonus Health",
            "+1m/s Move Speed"
        ],

        "passive": "Provides Fire Rate to nearby player minions. \n+40% Minions Fire Rate\n(Conditional)\n20m Radius",
        "passive_cooldown": 0,

        "isActive": true,
        "active": "Provides bonus Movement Speed and Fire Rate to you and nearby allies. \n+3m/s Movement Speed\n(Conditional)\n+25% Fire Rate\n(Conditional)\n30m Active Radius\n6s Duration",
        "active_cooldown": 30,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Warp Stone",
        "price": 3000,
        "tier": 3,
        "type": "Weapon",

        "stats": [
            "+20€ Weapon Damage",
            "+8 Sprint Power"
        ],

        "passive": "",
        "passive_cooldown": 0,

        "isActive": true,
        "active": "Teleport straight ahead, gaining Bullet Resist. \n+13m Teleport Range\n+30% Bullet Resist (Conditional)\n5s Buff Duration",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Crippling Headshot",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+20% Weapon Damage",
            "+10% Bullet Lifesteal",
            "+10% Spirit Lifesteal"
        ],

        "passive": "Headshots reduce target's Bullet and Spirit Resist. \n24% Bullet Resist Reduction\n24% Spirit Resist Reduction\n5s Debuff Duration",
        "passive_cooldown": 0,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/banshee_slugs_psd.png"
    },
    {
        "name": "Frenzy",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+12 Ammo",
            "+30% Weapon Damage",
            "+200 Bonus Health"
        ],

        "passive": "While you are below 40% health, you gain stat bonuses. \n4 m/s Movement Speed (Conditional)\n40% Fire Rate (Conditional)\n45% Spirit Resist (Conditional)",
        "passive_cooldown": 0,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Glass Cannon",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+70% Weapon Damage",
            "+10% Fire Rate",
            "+1 m/s Move Speed",
            "-15% Max Health"
        ],

        "passive": "Each hero kill grants permanent Weapon Damage (up to a max of 5 times). Death results in loss of 1 stack. \nConditional: +10% Weapon Damage per Kill",
        "passive_cooldown": 0,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Lucky Shot",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+30% Ammo"
        ],

        "passive": "Your bullets have a chance to be empowered, causing them to deal bonus damage and Slow on hit. \n35% Proc Chance\n80% Bonus Damage\nConditional: 30% Movement Slow\n1.5s Slow Duration",
        "passive_cooldown": 0,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Ricochet",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+35% Ammo",
            "+12% Fire Rate",
            "+150 Bonus Health"
        ],

        "passive": "Your bullets will ricochet on enemies near your target, applying any bullet procs and dealing a percentage of the original damage. \n60% Ricochet Damage\n2 Ricochet Targets\n14m Ricochet Range",
        "passive_cooldown": 0,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Siphon Bullets",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+28% Weapon Damage"
        ],

        "passive": "Your bullets temporarily steal Max HP from enemies. Enemies regain their stolen health when the debuff expires. Permanently steal one stack of health if a siphoned target dies and lose 2 stacks if you die. \n45 Max HP Steal Per Bullet\n20s Steal Duration\n0.8s Max Frequency",
        "passive_cooldown": 0,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Spiritual Overflow",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+20% Fire Rate",
            "+15% Cooldown Reduction",
            "+10% Spirit Lifesteal"
        ],

        "passive": "Gain bonus Spirit Power by charging up with your bullets on enemy heroes. \n+45 Spirit Power (Conditional)\n0.8% Buildup Per Shot\n18s Duration",
        "passive_cooldown": 0,

        "isActive": false,
        "active": "",
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Silencer",
        "price": 7550,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "+25% Bullet Slow Proc",
            "+15% Weapon Damage"
        ],

        "passive": "",
        "passive_cooldown": 0,

        "isActive": true,
        "active": "For the next 4s, all your bullets immediately apply Silence. Silence prevents targets from using abilities. \nSilence Silenced Status Effect\n2s Debuff Duration",
        "active_cooldown": 34,

        "component_of": "",
        "components": ["Slowing Bullets"],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Vampiric Burst",
        "price": 6300,
        "tier": 4,
        "type": "Weapon",

        "stats": [
            "2m/s Move Speed",
            "+25% Weapon Damage",
            "+150 Bonus Health"
        ],

        "passive": "",
        "passive_cooldown": 0,

        "isActive": true,
        "active": "Grants Lifesteal, Fire Rate, and Ammo. This added Ammo is not limited by your max magazine size. \n100% Bullet Lifesteal\n40% Fire Rate\n50% Ammo\n4.5s Duration",
        "active_cooldown": 35,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": ""
    },
    {
        "name": "Enduring Spirit",
        "price": 500,
        "tier": 1,
        "type": "Vitality",

        "stats": [],

        "passive": "",
        "passive_cooldown": 0,

        "isActive": false,
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

        "isActive": false,
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

        "isActive": true,
        "active_cooldown": 0,

        "component_of": "",
        "components": [],
        "component_icon": "",

        "icon": "icons/upgrades/mods_weapon/ammo_scavenger_psd.png"
    }
]

readJson(temporaryJSON)
