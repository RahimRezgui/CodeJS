    let menuIcon = document.querySelector('.menuIcon');
    let nav = document.querySelector('.overlay-menu');
    let codeEditorOuterWrapper = document.querySelector('.codeEditorOuterWrapper');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
                codeEditorOuterWrapper.style.opacity = "0";
                codeEditorOuterWrapper.style.visibility = "hidden";
                codeEditorOuterWrapper.style.animation = "";
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
                codeEditorOuterWrapper.style.animation = "fadeIn 1s";
                codeEditorOuterWrapper.style.visibility = "visible";
                codeEditorOuterWrapper.style.opacity = "1";
                
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });

        function toggleMenu(){
            menuIcon.click();
        }




function joinSignUpRedirection(){
    window.open(`${window.location.origin}/signup`, "_blank")
}

function joinRedirection(){
    window.open(`${window.location.origin}/login`, "_blank")
}