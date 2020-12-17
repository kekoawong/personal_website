function highlight_skills(skill) {

    let elements = document.getElementsByClassName(skill);

    let highlighted = (elements[0].style.color == '#425BB5') ? true:false;
    
    if (!highlighted) {
        // loop through and highlight all elements
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = '#425BB5';
            elements[i].style.borderColor = '#425BB5';
        }
    } else {
        // loop through and un highlight all elements
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = 'black';
            elements[i].style.borderColor = 'black';
        }
    }

}