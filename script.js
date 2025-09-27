      //second part
      const textareaTwo = document.getElementById("textareaTwo");
      const countwordSpan = document.getElementById("countwordSpan");

      function countWords(){
          const words = textareaTwo.value;
          // const wordds = textareaTwo.value.length;
          const wordds = textareaTwo.value.trim().split(/\s+/).length;
          countwordSpan.innerText = `${wordds}`
      }

const textarea = document.getElementById("textarea");
const count = document.getElementById("count");

function countLetters(){
    const text = textarea.value;
    const textLength = textarea.value.length;
    count.innerText = `${textLength}`;
}



function filterItems(category) {
    const itemss = document.querySelectorAll('.container');
    itemss.forEach(item => {
    if (category === 'none') {
        // hide everything when home is clicked
        item.classList.add('hidden');
    } else if (item.getAttribute('data-category') === category) {
        item.classList.remove('hidden');
    } else {
        item.classList.add('hidden');
    }
    });
}

window.onload = function() {
    filterItems('none');
};




const container = document.querySelectorAll('.container');
const home = document.getElementById("home")
if (home = 'none'){
    container.classList.add('hidden')
}else{
    container.classList.add('hidden')
}