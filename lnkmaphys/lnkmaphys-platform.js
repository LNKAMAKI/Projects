function load() {
    icards_holder = document.querySelector('.i-cards')
    console.log(icards_holder)
    icards_holder.innerHTML = ''

    console.log('AAAAAAAAAAATAAA',frutas,nomes,icards)
    favslist_object = JSON.parse(localStorage.getItem("favslist"))
    for (icard in icards) {
        //console.log(icards[icard],icards[icard].title)
        objexists = favslist_object.find(obj => obj.title === icards[icard].title)
       if (objexists == undefined) {
      icards_holder.innerHTML += '<div class="icard"><div class="holder" style="background-color: #FFFFFF;"><img src='
     + `${icards[icard].img_src}` + ' alt=""><div class="star" onclick="addtolist(' + `${icard}` + ')">⭐</div></div> <div class="p-holder"> <p>' +
     `${icards[icard].title}</p>` +  '</div></div>'
    }else{
        icards_holder.innerHTML += '<div class="icard"><div class="holder" style="background-color: #FFFFFF;"><img src='
     + `${icards[icard].img_src}` + ' alt=""><div class="star star2" onclick="addtolist(' + `${icard}` + ')">⭐</div></div> <div class="p-holder"> <p>' +
     `${icards[icard].title}</p>` +  '</div></div>'
    }
}
    reloadFavs()
}

function addtolist(indexcard) {
    console.log('adicionar a lista',indexcard,icards[indexcard])
    objcard = icards[indexcard]
    fav_star = document.querySelectorAll('.icard')[indexcard].querySelector('.star')
    console.log(document.querySelectorAll('.icard')[indexcard].querySelector('.star'))
    favslist = localStorage.getItem("favslist")
    favslist_object = JSON.parse(favslist)
    if (fav_star.classList.value.search('star2') == -1) {
         fav_star.classList.add('star2')
         if (favslist) {
            favslist_object.push({img_src: objcard.img_src,title:objcard.title})
            localStorage.setItem('favslist',JSON.stringify(favslist_object))
         }else{
            console.log('precisa colocar o array')
            localStorage.setItem('favslist',JSON.stringify([{img_src: objcard.img_src,title:objcard.title}]))
         }
         console.log(JSON.parse(localStorage.getItem("favslist")))
    }else{
         fav_star.classList.remove('star2')
         console.log(favslist_object)
         console.log('tem q achar: ', objcard.title)
         favslist_object.splice(favslist_object.indexOf(favslist_object.find(obj => obj.title === objcard.title)),1)
         console.log(favslist_object)
         localStorage.setItem('favslist',JSON.stringify(favslist_object))
    }
    reloadFavs()
}

function reloadFavs() {
    favsection = document.querySelector('.favoritos')
    favsection.innerHTML = ''
    for (icard in favslist_object) {
        console.log('hau')
        favsection.innerHTML += '<div class="icard"><div class="holder" style="background-color: #FFFFFF;"><img src='
        + `${favslist_object[icard].img_src}` + ' alt=""><div class="star2" onclick="addtolist(' + `${icard}` + ')">⭐</div></div> <div class="p-holder"> <p>' +
        `${favslist_object[icard].title}</p>` +  '</div></div>'
    }
}