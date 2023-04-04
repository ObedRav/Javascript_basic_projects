const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', () => {
    // Shuffle the elements in the array randomly
    hex.sort(() => Math.random() - 0.5)

    const random_color = hex.slice(0, 6).join('')
    const hexColor = `#${random_color}`

    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor
})
