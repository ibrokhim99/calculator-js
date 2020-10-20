let runningTotal = 0;
let buffer = '0';
let previosOperator = null;
const screen = document.querySelector('.screen');


document
    .querySelector('.button')
    .addEventListener("click", function(event) {

        buttonClick(event.target.innerText);
    })

function rerander() {
    screen.innerText = buffer;
}


function handleNumber(value) {


    if (buffer === '0') {
        buffer = value;
    } else {
        buffer += value;
    }


}


function handleSymbal(value) {
    switch (value) {
        case "C":
            console.log('hwe');
            buffer = '0';
            runningTotal = 0;
            previosOperator = null;
            break;
        case "=":
            if (previosOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previosOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        default:
            handleMath(value);
            break;



    }
}

function handleMath(value) {
    const iBuffer = parseInt(buffer);
    if (runningTotal === 0) {
        runningTotal = iBuffer;
    } else {
        flushOperation(iBuffer);
    }
    previosOperator = value;
    buffer = '0';

}

function flushOperation(iBuffer) {
    if (previosOperator === '+') {
        runningTotal += iBuffer;
    } else if (previosOperator === '-') {
        runningTotal -= iBuffer;
    } else if (previosOperator === '÷') {
        runningTotal /= iBuffer;

    } else if (previosOperator === '×') {
        runningTotal *= iBuffer;
    }
}


function buttonClick(value) {

    if (isNaN(parseInt(value))) {
        handleSymbal(value);

    } else {
        handleNumber(value);
    }
    rerander();
}