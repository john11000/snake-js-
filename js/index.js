window.addEventListener("load",()=>{
    const tablero = document.querySelector(".tablero");

    const board = [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]

    const vacio = board

    class Snake {
        constructor(posiciones, tamaño){
            this.posiciones = posiciones;
            this.tamaño = tamaño;
            this.score = 0;
            this.direccion = "r"
        }
    }
    

    const snake  = new Snake(["00","01","02","03"],3)
    const renderSnake = ()=>{
        snake.posiciones.forEach((posicion)=>{
            const [p1,p2] = posicion.split("");
            board[p1][p2] = 1;
    
        })
    }


    const dibujar = ()=>{
        tablero.innerHTML ="";
        for(let i = 0; i< 10; i++) {
            for(let j = 0; j < 10; j++) {
                if(board[i][j] === 2 ){
                    tablero.innerHTML += `<div class="food"></div>`

                }else if(board[i][j] === 1 ){
                    tablero.innerHTML += `<div class="snake"></div>`

                }else if(board[i][j] === 0 ){
                    tablero.innerHTML += `<div class="casilla"></div>`

                }
            }
            
        }
    }

    let x,y;

    const renderFood =()=>{
        if(x !==  undefined && y !== undefined && board[x][y] === 2 ){
            board[x][y] = 0 ;
           }
           x = Math.floor(Math.random() * 10)
           y = Math.floor(Math.random() * 10)
           if(vacio[x][y] === 0 ){
            board[x][y] = 2;
           }
    }
    renderFood()

    const limpiarSnakes = ()=>{

    }
    const move = ()=>{
        board[snake.posiciones[0][0]][snake.posiciones[0][1]] = 0;

        snake.posiciones.forEach((posicion)=>{
            const [y,x] = posicion.split("");
            snake.posiciones.splice(0,1);
            if(x==="9"){
                snake.posiciones.push(`${parseInt(y)+ 1}0`)

            }else{
                snake.posiciones.push(`${y}${parseInt(x) + 1}`)
            }
            
            
        })

    }
    
    setInterval(()=>{
        renderSnake()
        if(snake.direccion === "r"){
        move()
        }
        console.log(snake.posiciones)
       dibujar()
    },1000)

})