function revealMenu(x){
    document.getElementById("menu-hidden").style.display="none";
        let pos = -30;
        const el = document.getElementById("menu-visible");
        setInterval(slideMenu, 30);

        function slideMenu(){
            if (pos < 0){
                pos = pos + 1;
                document.getElementById("menu-visible").style.right = pos + "vw";
            }
        }
}
function hideMenu(){
    setTimeout(() => {
        document.getElementById("menu-hidden").style.display="block";
    }, 500);
    let pos = 0;
    const el = document.getElementById("menu-visible");
    setInterval(slideMenu, 30);
    function slideMenu(){
        if (pos > -30){
            pos = pos - 1;
            document.getElementById("menu-visible").style.right = pos + "vw";
        }
    }
}

setTimeout(() => {
    document.getElementsByClassName("image-col")[0].style.display = "flex";
    document.getElementsByClassName("indicator")[0].style.color = "rgb(0,0,0)";
    document.getElementsByClassName("carousel-header")[0].style.display = "block";
    document.getElementsByClassName("carousel-text")[0].style.display = "block";
    document.getElementsByClassName("carousel-more")[0].style.display = "block";

}, 5);

setInterval(nextImage, 10000);

function nextImage(){
    const carousel = document.getElementsByClassName("image-col");
    const indicators =  document.getElementsByClassName("indicator");
    const headers = document.getElementsByClassName("carousel-header");
    const texts = document.getElementsByClassName("carousel-text");
    const buttons = document.getElementsByClassName("carousel-more");
    for (let i = 0; i < carousel.length; i++){
        if (carousel[i].style.display == "flex"){
            if (i == 3){
                carousel[0].style.display = "flex";
                indicators[0].style.color = "rgb(0,0,0)";
                headers[0].style.display = "block";
                texts[0].style.display = "block";
                buttons[0].style.display = "block";
                for (let k = 1; k < carousel.length; k++){
                    carousel[k].style.display = "none";
                    indicators[k].style.color = "rgba(105, 173, 182, 0.795)";
                    headers[k].style.display = "none";
                    texts[k].style.display = "none";
                    buttons[k].style.display = "none";
                }
            }
            else{
                const j = i + 1;
                carousel[i].style.display = "none";
                indicators[i].style.color = "rgba(105, 173, 182, 0.795)";
                headers[i].style.display = "none";
                texts[i].style.display = "none";
                buttons[i].style.display = "none";
                carousel[j].style.display = "flex";
                indicators[j].style.color = "rgb(0,0,0)";
                headers[j].style.display = "block";
                texts[j].style.display = "block";
                buttons[j].style.display = "block";
            }
            break;
        }
    }
}

function previousImage(){
    const carousel = document.getElementsByClassName("image-col");
    const indicators =  document.getElementsByClassName("indicator");
    const headers = document.getElementsByClassName("carousel-header");
    const texts = document.getElementsByClassName("carousel-text");
    const buttons = document.getElementsByClassName("carousel-more");
    for (let i = 3; i >= 0; i--){
        if (carousel[i].style.display == "flex"){
            if (i == 0){
                carousel[3].style.display = "flex";
                indicators[3].style.color = "rgb(0,0,0)";
                headers[3].style.display = "block";
                texts[3].style.display = "block";
                buttons[3].style.display = "block";
                for (let k = 2; k >= 0; k--){
                    carousel[k].style.display = "none";
                    indicators[k].style.color = "rgba(53, 53, 53, 0.678)";
                    headers[k].style.display = "none";
                    texts[k].style.display = "none";
                    buttons[k].style.display = "none";
                }
            }
            else{
                const j = i - 1;
                carousel[i].style.display = "none";
                indicators[i].style.color = "rgba(53, 53, 53, 0.678)";
                headers[i].style.display = "none";
                texts[i].style.display = "none";
                buttons[i].style.display = "none";
                carousel[j].style.display = "flex";
                indicators[j].style.color = "rgb(0,0,0)";
                headers[j].style.display = "block";
                texts[j].style.display = "block";
                buttons[j].style.display = "block";
            }
            break;
        }
    }
}

// IntersectionObserver
const ratio = .1;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > ratio){
        entry.target.classList.add('reveal-visible')
        observer.unobserve(entry.target)
      }
    });
  };

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})

/*window.onload = function(){
    document.getElementById("loading-page").style.opacity = "0";
    document.getElementById("div-container").style.opacity = "1";
}*/