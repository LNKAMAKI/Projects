potball = 0
                if (pokebolas[0].y >= (150 - alt)/2 + potwidth - radius && pokebolas[0].y <= 150 - (150 - alt)/2 - potwidth + radius) {
                if (pokebolas[0].x > (300 - comp)/2 + comp - pokebolas[0].width && pokebolas[0].velx > 0 || pokebolas[0].x < pokebolas[0].width + (300 - comp)/2 && pokebolas[0].velx < 0) {
                    velx1 = -pokebolas[0].velx
                    pokebolas[0].velx = -pokebolas[0].velx
                }
            }else{
                potball++
            }
                if (pokebolas[0].x >=  (300 - comp)/2 + potwidth - radius && pokebolas[0].x <= 300 - (300 - comp)/2 - potwidth + radius) {
                if (pokebolas[0].y > (150 - alt)/2 + alt - pokebolas[0].width && pokebolas[0].vely > 0|| pokebolas[0].y < pokebolas[0].width + (150 - alt)/2 && pokebolas[0].vely < 0) {
                    vely1 = -pokebolas[0].vely
                    pokebolas[0].vely = -pokebolas[0].vely
                }
            }else{
                potball++
            }
            if (potball == 2) {
                //window.alert('ENTROU')
                pokebolas[0].pot = true
            }