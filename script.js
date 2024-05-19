
    window.onload = function() {
const element = document.getElementById('ascii-art');
if (element) {
    const text = element.textContent;
    const boldedHtml = text.split('').map(char => {

        return char === '_' ? char : `<strong>${char}</strong>`;
        
    }).join('');
    element.innerHTML = boldedHtml;
    
} else {
    console.log('Element not found');
}
};


function dropdwn(){
    const buttons = document.getElementsByClassName('dropbtn');

    for(i = 0; i < buttons.length ; ++i){
        buttons[i].addEventListener('click', function() {
            const icon = this.querySelector('i'); 
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            if (content.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    }

};
dropdwn();


document.addEventListener('DOMContentLoaded', function() {
  const currentVersion = '1.2';  // Update this with every major update
  const cachedVersion = localStorage.getItem('cachedVersion');

  if (cachedVersion !== currentVersion) {
    localStorage.setItem('cachedVersion', currentVersion);
    location.reload(true);  // Force reload of the page from the server
  }
});

