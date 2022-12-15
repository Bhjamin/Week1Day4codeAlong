
let backpack = []

backpack.push(`Sword`, `Shield`, `Food`)

let exteriorItems = []

exteriorItems.push(backpack.shift())

backpack.push(`Fur Coat`)

exteriorItems.push(backpack.pop())

backpack.push(`Flint`, `Knife`, `Toothbrush`, `Sleeping Bag`)

let backpackItems = backpack.length 
let exteriorCount = exteriorItems.length

let saddleBag = []

saddleBag.push(backpack.splice(0, 1)[0])
saddleBag.unshift(backpack.splice(4, 1)[0])

for(let i = 0; i < backpack.length; i++){
    if(backpack[i] === "Knife"){
        console.log(`Skinned a rabbit with the knife`)
    } else {
        console.log(backpack[i])
    }
}

console.log(`Backpack Items:`, backpack)
console.log(`Belt Items:`, exteriorItems)
console.log(`Saddle bag items:`, saddleBag)
console.log(`# of items in backpack:`, backpackItems)
console.log(`# of items on belt:`, exteriorCount)


