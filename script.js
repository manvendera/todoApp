const addValue = document.querySelector('.inputTe')
const displayValue = document.querySelector('.inputText')
const valueAds = document.querySelector('.textbox')



addValue.addEventListener('click', () => {
    if (displayValue.value == 0) {
        alert('Please Enter a value')
    } else {
        let newElemnt = document.createElement('p')
        newElemnt.innerHTML = `${displayValue.value}  <i class="fa-solid fa-trash"></i>`;
        valueAds.appendChild(newElemnt);
        displayValue.value = " ";
        // let span = document.createElement('span')
        // span.innerHTML = ``;
        // valueAds.appendChild(span)

        newElemnt.querySelector('i').addEventListener('click', remove)
        function remove() {
            newElemnt.remove()
        }
    }
}

)



