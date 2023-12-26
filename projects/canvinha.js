if (xvely1 == 'x') {
    bex+= 2*time*vely1
    aex+= vely1**2
}else{
    cex+= 2*time*vely1
    cex+= vely1**2
}
if (xvely2 == 'x') {
    bex+= -2*time*vely2
    aex+= vely2**2
}else{
    cex+= -2*time*vely2
    cex+= vely2**2
}
if (xvely1 == 'x' && xvely2 == '' || xvely2 == 'x' && xvely1 == '') {
    bex+= -2*vely1*vely2
}else if(xvely1 == 'x' && xvely2 == 'x') {
    aex+= -2*vely1*vely2
}else{
    cex+= -2*vely1*vely2
}
