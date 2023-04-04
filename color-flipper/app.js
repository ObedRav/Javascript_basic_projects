const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    // Random number beetween the indexes of colors[]
    const random_number = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[random_number]
    color.textContent = colors[random_number]
})
