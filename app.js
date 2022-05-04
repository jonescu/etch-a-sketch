const container = document.querySelector('.container');
const colorPicker = document.querySelector('color-picker');


function populate(integer) {
    for(let i = 0; i < integer; i++) {
        const newDiv = document.createElement('div')
        container.appendChild(newDiv);
    }
}

populate(256);