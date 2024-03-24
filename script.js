let isDrawTrue = false;
let isEraserTrue = false;
let particleBackgroundColor = 'black';
let particleSize = '5px';
let eraserSize = '0px';
let pencilSize = "50px"

document.addEventListener('mousedown',(e)=>{
    if(!isEraserTrue) 
    isDrawTrue = true;
})

document.addEventListener('mouseup',(e)=>{
    isDrawTrue = false;
})


document.addEventListener('mousemove',(e)=>{
    if(isDrawTrue) draw(e);
})

// functionality of clear button 
// it will delete all the particle elemetns


const clearBtn = document.querySelector('.nav-clear')
clearBtn.addEventListener("click",()=>{
    let allElementParticles = document.querySelectorAll('.particle');
    for(let i=0;i<allElementParticles.length;i++){
        allElementParticles[i].remove();
    } 
    console.log("element removed");
})

function draw(e)
{
    const element =  document.createElement('div')
    element.classList.add('particle')
    element.style.left = e.clientX + "px"
    element.style.top = e.clientY + "px"
    element.style.backgroundColor = particleBackgroundColor;
    element.style.height = particleSize;
    element.style.width = particleSize;
    document.querySelector('body').appendChild(element);
    console.log("Element created")
}


// adding this hover feature to each navitem individually

const penColor = document.querySelector('.nav-pen-color');
const penSize = document.querySelector('.nav-pen-size');
const canvasColor = document.querySelector('.nav-canvas-color');
const eraser = document.querySelector('.nav-eraser');


const penColorDrop = document.querySelector('.pen-color');
const penSizeDrop = document.querySelector('.pen-size');
const canvasColorDrop = document.querySelector('.canvas-color');
const eraserDrop = document.querySelector('.eraser');


penColor.addEventListener("mouseenter",()=>{
    penColorDrop.classList.remove('gayab')
    penColorDrop.classList.add('aage')
})

penSize.addEventListener("mouseenter",()=>{
    penSizeDrop.classList.remove('gayab')
    penSizeDrop.classList.add('aage')
})

canvasColor.addEventListener("mouseenter",()=>{
    canvasColorDrop.classList.remove('gayab')
    canvasColorDrop.classList.add('aage')
})

eraser.addEventListener("mouseenter",()=>{
    eraserDrop.classList.remove('gayab')
    eraserDrop.classList.add('aage')
})



penColorDrop.addEventListener("mouseleave",()=>{
    penColorDrop.classList.add('gayab')
    penColorDrop.classList.remove('aage')

})

penSizeDrop.addEventListener("mouseleave",()=>{
    penSizeDrop.classList.add('gayab')
    penSizeDrop.classList.remove('aage')
})

canvasColorDrop.addEventListener("mouseleave",()=>{
    canvasColorDrop.classList.add('gayab')
    canvasColorDrop.classList.remove('aage')

})

eraserDrop.addEventListener("mouseleave",()=>{

    eraserDrop.classList.add('gayab')
    eraserDrop.classList.remove('aage')

})



// changing the background color
const canvasColorChange = document.querySelectorAll(".canvas-color .colors")

for(let i=0;i<canvasColorChange.length;i++)
{
    canvasColorChange[i].addEventListener("click",()=>{

        console.log("heyyya");
        if (canvasColorChange[i].classList.contains('pink')) {
            document.querySelector('body').style.backgroundColor = 'pink';
        }
        else if (canvasColorChange[i].classList.contains('red')) {
            document.querySelector('body').style.backgroundColor = 'red';
        }
        else if (canvasColorChange[i].classList.contains('white')) {
            document.querySelector('body').style.backgroundColor = 'white';
        }
        else if (canvasColorChange[i].classList.contains('black')) {
            document.querySelector('body').style.backgroundColor = '#343a40';
        }
        else if (canvasColorChange[i].classList.contains('green')) {
            document.querySelector('body').style.backgroundColor = 'green';
        }
        else if (canvasColorChange[i].classList.contains('yellow')) {
            document.querySelector('body').style.backgroundColor = 'yellow';
        }
        else if (canvasColorChange[i].classList.contains('purple')) {
            document.querySelector('body').style.backgroundColor = 'purple';
        }
        else if (canvasColorChange[i].classList.contains('blue')) {
            document.querySelector('body').style.backgroundColor = 'blue';
        }
        else if (canvasColorChange[i].classList.contains('brown')) {
            document.querySelector('body').style.backgroundColor = 'brown';
        }

    })
}

// changing the pen color

const penColorChange = document.querySelectorAll(".pen-color .colors")

for(let i=0;i<penColorChange.length;i++)
{
    penColorChange[i].addEventListener("click",()=>{

        isEraserTrue = false
        eraserShape.classList.add('gayab');

        if (penColorChange[i].classList.contains('pink')) {
            particleBackgroundColor = 'pink';
        }
        else if (penColorChange[i].classList.contains('red')) {
            particleBackgroundColor = 'red';
        }
        else if (penColorChange[i].classList.contains('white')) {
            particleBackgroundColor = 'white';
        }
        else if (penColorChange[i].classList.contains('black')) {
            particleBackgroundColor = 'black';
        }
        else if (penColorChange[i].classList.contains('green')) {
            particleBackgroundColor = 'green';
        }
        else if (penColorChange[i].classList.contains('yellow')) {
            particleBackgroundColor = 'yellow';
        }
    })
}


// changing pen size

const penSizeChange = document.querySelectorAll(".pen-size .size")

for(let i=0;i<penSizeChange.length;i++)
{
    penSizeChange[i].addEventListener("click",()=>{

        isEraserTrue = false 
        eraserShape.classList.add('gayab');

        if (penSizeChange[i].classList.contains('xs')) {
            particleSize = '5px';
            pencilSize = '50px'
        }
        else if (penSizeChange[i].classList.contains('s')) {
            particleSize = '10px';
            pencilSize = '60px'
        }
        else if (penSizeChange[i].classList.contains('m')) {
            particleSize = '15px';
            pencilSize = '70px'
        }
        else if (penSizeChange[i].classList.contains('l')) {
            particleSize = '20px';
            pencilSize = '80px'
        }
        else if (penSizeChange[i].classList.contains('xl')) {
            particleSize = '25px';
            pencilSize = '90px'
        }
        
    })
}


// eraser functionality
let eraserShape = document.querySelector('.eraser-shape');
eraserShape.classList.add('gayab');
document.addEventListener('mousemove',(e)=>{
   
    eraserShape.style.top = e.clientY - 20 + 'px';
    eraserShape.style.left = e.clientX - 25 + 'px';
    eraserShape.style.height = eraserSize;
    eraserShape.style.width = eraserSize;

    // collision of eraser shape with the particles and removing the particles
    
    if(isEraserTrue)
    {
        let allElementParticles = document.querySelectorAll('.particle');
        for(let i=0;i<allElementParticles.length;i++){
            if(detectCollision(allElementParticles[i],eraserShape))
            {
                allElementParticles[i].remove();
            }
        } 
    }

})

function detectCollision(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
             rect1.left > rect2.right || 
             rect1.bottom < rect2.top || 
             rect1.top > rect2.bottom);
}


// changing the eraser size

const eraserSizeDrop = document.querySelectorAll(".eraser .size")

for(let i=0;i<eraserSizeDrop.length;i++)
{
    eraserSizeDrop[i].addEventListener("click",()=>{

        isEraserTrue = true;
        eraserShape.classList.remove('gayab');
        if (eraserSizeDrop[i].classList.contains('xs')) {
            eraserSize = '10px';
        }
        else if (eraserSizeDrop[i].classList.contains('s')) {
            eraserSize = '20px';
        }
        else if (eraserSizeDrop[i].classList.contains('m')) {
            eraserSize = '30px';
        }
        else if (eraserSizeDrop[i].classList.contains('l')) {
            eraserSize = '40px';
        }
        else if (eraserSizeDrop[i].classList.contains('xl')) {
            eraserSize = '50px';
        }
        
    })
}



// movePen 

const pen = document.querySelector('.pen')
document.addEventListener("mousemove",(e)=>{
    if(!isEraserTrue)
    {   
        pen.style.opacity = '1';
        pen.style.left = e.clientX + "px"
        pen.style.top = e.clientY + "px"
        pen.style.width = pencilSize;
        pen.style.height = pencilSize;

    }else{
        pen.style.opacity = '0';
    }
})