const game = () => {
      const playGame = () => {
      const rockBtn = document.querySelector('.rock');
      const paperBtn = document.querySelector('.paper');
      const scissorBtn = document.querySelector('.scissor');
      const playerOptions = [rockBtn,paperBtn,scissorBtn];
      const computerOptions = ['rock','paper','scissors']
          
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
  
                // Function for winner
                winner(this.innerText,computerChoice)
            })
        })
          
    }
  
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
  
            }else{
                result.textContent = 'Player Won'
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
            }else{
                result.textContent = 'Player Won';
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
            }else{
                result.textContent = 'Player Won';
            }
        }
    }
    // Calling playGame function inside game
    playGame();     
} 
// Calling the game function
game();
