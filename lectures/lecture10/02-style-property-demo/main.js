
function changeStyle(action, selector, color){
    console.log(selector, color);
    const el = document.querySelector(selector);
    if(action === "change"){
        el.style.fontWeight = "bold";
        if(el.style.backgroundColor === color){
            el.style.backgroundColor = 'white';
        }else{
            el.style.backgroundColor = color;
        }
    }else if(action === "reset"){
        let section = document.querySelectorAll(".my-section");
        for(let i = 0; i < section.length; i++){
            section[i].style.backgroundColor = '';
            section[i].style.fontWeight = '';
        }
    }
}

function resetStyles(){
    let section = document.querySelectorAll(".my-section");
    for(let i = 0; i < section.length; i++){
        section[i].style.backgroundColor = '';
        section[i].style.fontWeight = '';
    }
}

