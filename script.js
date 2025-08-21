// Construct adventurer Robin
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        //console.log(`${this.name} rolled a ${result}.`)
        return `${this.name} rolled a ${result}.`
    }

}



// console.log(adventurer.name);
// console.log(adventurer.health);

// ---------  Part 1: Humble Beginnings---------
console.log(`Robin's Inventory:`)
for (let item of adventurer.inventory){
    console.log(item);
}

console.log(`\n`)
// console.log(adventurer.roll());

// ------------ Part 2: Class Fantasy -----------------------
class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        return `${this.name} rolled a ${result}.`
    }
}


const robin = new Character ("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character ("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

const leo = robin.companion;
const frank = robin.companion.companion;

console.log(robin.roll());
console.log(leo.roll());
console.log(frank.roll());

// ---------   Part 3: Class Features. ----------------------
class Adventurer extends Character {
    constructor (name, role) {
        super (name);
        // Adventurers have specialized roles
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins
        this.inventory.push("bedroll", "50 gold coins");
        super.roll()
    }
        //Adventurers have the ability to scout ahead of them
        scout() {
            return (`${$this.name} is scouting ahead...`);
        }
        ;
}





    




