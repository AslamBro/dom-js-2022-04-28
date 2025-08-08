// Get element by id
// Get element by class name
// Get element by tag name

let chooseBtn = document.getElementById('choose'),
receiveBtn = document.getElementById('receive'),
contactForm = document.getElementsByClassName('contactform_name'),
text = document.getElementsByTagName('h2')[0],
modal = document.querySelector('.modal'),
btn = document.querySelectorAll('.main_tel_title'),
closeBtn = document.querySelector('.close'),
message = document.getElementsByName('message')[0] ;



// First way (No)
function hover(){
    text.textContent = 'Действително tugadi'
}
 
console.log(text);

// Secon Way (No)
text.onmouseenter = hover 

//third Way 

text.addEventListener('mouseenter', function(){
     this.textContent = 'Действително tugadi'
} )

text.addEventListener('mouseleave', function(){
    text.textContent = 'Vse Vkl'
})

receiveBtn.addEventListener('click', function(){
    modal.style.display = 'block';
})


closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})

contactForm.addEventListener('input', function(){
    message.value = ` Mening ismim ${contactForm.value} :`
})
 
