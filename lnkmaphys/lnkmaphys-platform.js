function load() {
    icards_holder = document.querySelector('#i-cards')
    console.log(icards_holder)
    icards_holder.innerHTML = ''

    console.log('AAAAAAAAAAATAAA',frutas,nomes,icards)
    for (icard in icards) {
        console.log(icards[icard])
     icards_holder.innerHTML += '<div class="icard"><div class="holder" style="background-color: #FFFFFF;"><img src='
     + `${icards[icard].img_src}` + ' alt=""><div class="star" onclick="addtolist(' + `${icard}` + ')">⭐</div></div> <div class="p-holder"> <p>' +
     `${icards[icard].title}</p>` +  '</div></div>'
    }
}

function addtolist(indexcard) {
    console.log('adicionar a lista',icards[indexcard])
    fav_star = document.querySelectorAll('.icard')[indexcard].querySelector('.star')
    console.log(document.querySelectorAll('.icard')[indexcard].querySelector('.star'))
    if (fav_star.classList.value.search('star2') == -1) {
         fav_star.classList.add('star2')
    }else{
         fav_star.classList.remove('star2')
    }
}