function load() {
    icards_holder = document.querySelector('#i-cards')
    console.log(icards_holder)
    icards_holder.innerHTML = ''

    console.log('AAAAAAAAAAATAAA',frutas,icards)
    for (icard in icards) {
     '<div class="icard"><div class="holder" style="background-color: #FFFFFF;"><img src="images/fatorador-img.png" alt=""><div class="star">⭐</div></div> <div class="p-holder"> <p>title</p>  </div></div>'
    }
}
