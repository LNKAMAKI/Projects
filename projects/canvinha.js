  
        if (diffx**2 + diffy**2 <= (pokebolas[a].width + pokebolas[b].width)**2) {
            console.log('PAROU!')
            //window.alert('PAROU')
            //loop = false
        }

        cx = pokebolas[a].x
        cy = pokebolas[a].y
        velx1 = pokebolas[a].velx
        vely1 = pokebolas[a].vely
        newcx = cx + velx1
        newcx2 = cx2 + velx2
        newcy = cy + vely1
        newcy2 = cy2 + vely2
        newdiffx = newcx - newcx2
        newdiffy = newcy - newcy2
        //if (diffx**2 + diffy**2 > (pokebolas[a].width + pokebolas[b].width)**2) {
           
        if (newdiffx**2 + newdiffy**2 < 1000) {
            console.log('difference',diffx**2 + diffy**2)
            console.log('NEXT',newdiffx**2 + newdiffy**2)
            console.log(velx1,vely1)
            console.log(pokebolas[a].velx,pokebolas[a].vely)
            console.log(velx2,vely2)
            console.log(pokebolas[b].velx,pokebolas[b].vely)
            }
        if (newdiffx**2 + newdiffy**2 <= (pokebolas[a].width + pokebolas[b].width)**2) {
            console.log('ih, vai dar ruim')
            //loop = false
            
            console.log('bola 0:')
            console.log('velx:',velx1)
            console.log('vely',vely1)
            console.log('bola 1:')
            console.log('velx:',velx2)
            console.log('vely',vely2)
            rvx1vx1 = 1
            rvx2vx1 = velx2/velx1 //cx2
            if (velx1 < 0) {
                rvx1vx1 = -1
            }
            if (velx2 < 0 && rvx2vx1 > 0 || velx2 > 0 && rvx2vx1 < 0) {
                rvx2vx1 = -rvx2vx1
            }
            rvy1vx1 = vely1/velx1 //cy
            rvy2vx1 = vely2/velx1 //cy2
            if (vely1 < 0 && rvy1vx1> 0 || vely1 > 0 && rvy1vx1 < 0) {
                rvy1vx1 = -rvy1vx1
            }
            if (vely2 < 0 && rvy2vx1> 0 || vely2 > 0 && rvy2vx1< 0) {
                rvy2vx1 = -rvy2vx1
            }
            console.log('x:',rvx1vx1,rvx2vx1)
            console.log('y:',rvy1vx1,rvy2vx1)
            addx = rvx1vx1 - rvx2vx1
            addy = rvy1vx1 - rvy2vx1
            console.log(addx,addy)
           
            console.log('diffx:',diffx,'diffy:',diffy)
            res = (pokebolas[a].width + pokebolas[b].width)**2
            cex = diffx**2 + diffy**2 - res
            bex = 2*(diffx*addx + diffy*addy)
            aex = addx**2 + addy**2
            delta = bex**2 - 4*aex*cex
            if (delta > 0) {
            raiz1 = (-bex + delta**(1/2))/(2*aex)
            raiz2 = (-bex - delta**(1/2))/(2*aex)
            console.log('a:',aex)
            console.log('b:',bex)
            console.log('c:',cex)
            console.log('raiz1:',raiz1)
            console.log('raiz2:',raiz2)
            }else{
                console.log('SEM SOLUÇÃO')
            xres = 0
            raiz1 = -1
            raiz2 = -1
            }
            if (delta > 0) {
            if (raiz2 < raiz1 && raiz2 > 0) {
             xres = raiz2
             
            }else if(raiz1 < raiz2 && raiz1 > 0) {
            
            }else {
               xres = 0
               console.log('IXI, MERMÃO')
            }
        }
           
             // vx1 = rvx1vx1*xres
             pokebolas[a].velx = rvx1vx1*xres
             // vy1 = rvy1vx1*xres
             pokebolas[a].vely = rvy1vx1*xres
             // vx2 = rvx2vx1*xres
             pokebolas[b].velx = rvx2vx1*xres
             // vy2 = rvy2vx1*xres
             pokebolas[b].vely = rvy2vx1*xres
             
            console.log(rvx1vx1*xres,rvy1vx1*xres,rvx2vx1*xres,rvy2vx1*xres)
            
           
        }
        