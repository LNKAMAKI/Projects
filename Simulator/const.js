function start() {
    console.log('hi!')
    cont = new Funct ('hia')
    //console.log(constructor.a)
    cont2 = new Funct ('eeee')
    console.log('a1',cont2.a1)
    function Funct (a) {
        this.a1 = a
        this.o = function () {
            //console.log(this.a1)
        }
        f()
        function f() {
            //console.log(this.a1)
        }
        this.what = setInterval(() => {
            for (i = 0; i < 5; i++) {
            //console.log(this.a1,i)
            }
        }, 400);
    }
}