let biler = {
    Nissan: "r34",
    Mercedes: "m5",
    McLaren: "p1",
    Pagani: "zonda r",
    Lamborghini: ["SVJ", "Adventadore", "Huracan"],
    Bugatti: true,
    Zenvo: {
        type: "st1",
        color: "black",
    } 
}

biler.Lamborghini.forEach(function(modeller) {
    console.log(modeller)
})

console.log(biler.Nissan)
console.log(biler.Mercedes)
console.log(biler.McLaren)
console.log(biler.Pagani)

console.log(biler["Nissan"])
console.log(biler["Mercedes"])
console.log(biler["McLaren"])
console.log(biler["Pagani"])

