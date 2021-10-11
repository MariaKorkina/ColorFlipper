const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'],
      button = document.getElementById('btn'),
      color = document.querySelector('.color')


btn.addEventListener('click', function () {
    // получим рандомное число между 0 и 3, по количеству элементов в массиве colors
   const randomNumber = getRandomNumber()
   document.body.style.backgroundColor = colors[randomNumber] 
   color.textContent = colors[randomNumber]
   console.log(randomNumber)

})

//функция, которая будет генерировать рандомное число
function getRandomNumber () {
    return Math.floor(Math.random() * colors.length)
}