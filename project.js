// 1. Deposit some money
// 2.  Determine number of lines
// 3. Collect a bet ammount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;


const symbols_count = {
    "A": 2,
    "B": 4, 
    "C": 6,
    "D": 8,
}

const symbol_values = {
    "A": 5,
    "B": 4, 
    "C": 3,
    "D": 2,
}





const deposit = () => {
    while(true){
    const depositAmmount = prompt("Enter a deposit ammount: ");
        const numberDepositAmmount = parseFloat(depositAmmount);

        if (isNaN(numberDepositAmmount) || numberDepositAmmount <= 0){
            console.log("Invalid deposit ammount, try again.");
        }else{
            return numberDepositAmmount;
        }
    }
};


const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
            const numberOfLines = parseFloat(lines);
    
            if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
                console.log("Invalid number of lines, try again.");
            }else{
                return numberOfLines;
            }
        }
};

const getBet = (balance, lines)=>{
    while(true){
        const bet = prompt("Enter the bet per line: ");
            const numberBet = parseFloat(bet);
    
            if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines){
                console.log("Invalid bet, balance to low, try again.");
            }else{
                return numberBet;
            }
        }
};

const spin = () =>{
  const symbols = [];
  for (const [symbol, count] of Object.entries(symbols_count)){
    for(let i = 0; i < count; i ++){
        symbols.push(symbol);
    }

  }
  const reels = [[], [], []];
  for(let i = 0; i < COLS; i++){
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++){
        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
    }
  }
};
spin()
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);