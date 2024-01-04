
if (pokebolas[rb].velx > 0 && pokebolas[rb].x > re.x2 || pokebolas[rb].velx < 0 && pokebolas[rb].x < re.x2) {
    pokebolas[rb].x = re.x2
    pokebolas[rb].y = re.y2
    loop = false
}