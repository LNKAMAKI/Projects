function load() {
   
    iframe = document.getElementById('if')
    console.log(iframe)
    
    if (iframe != null) {
    function resizeIframe() {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
      }
    
      setInterval(function() {
        var currentHeight = iframe.style.height;
    
        // check if the iframe content has changed
        if (currentHeight !== iframe.contentWindow.document.body.scrollHeight + 'px') {
          resizeIframe();
    }}, 20)}
    }

function vocab() {
    section = document.getElementsByTagName('section')[0]
    section.innerHTML = ''
    frame = document.createElement('iframe')
    frame.setAttribute('src', '/librius-materials/vocab.html')
    section.appendChild(frame)
    frame.setAttribute('scrolling','no')
    
    iframe = frame
console.log(iframe)

if (iframe != null) {
function resizeIframe() {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }

  setInterval(function() {
    var currentHeight = iframe.style.height;

    // check if the iframe content has changed
    if (currentHeight !== iframe.contentWindow.document.body.scrollHeight + 'px') {
      resizeIframe();
    }
  }, 20)
}
}

function get1(thist) {
    return document.getElementById(thist)
}

function get2(thist) {
    return document.getElementsByClassName(thist)
}
