import * as promptsync from 'prompt-sync';
const prompt = promptsync();
while(true)
{
let no1 = parseFloat(prompt("Enter 1st Number: "));
let op = prompt("Enter Operator(+, -, *, /, %): ");
let no2 = parseFloat(prompt("Enter 2nD Number: "));
switch(op)
{
  case '+':
    {
      let cal= no1+no2;
      console.log("Answer is: " + cal)
      break;
    }
  case '-':
    {
      let cal=no1-no2;
      console.log("Answer is: " + cal)
      break;
    }
    case '-':
      {
        let cal=no1-no2;
        console.log("Answer is: " + cal)
        break;
      }
      case '*':
        {
          let cal=no1*no2;
          console.log("Answer is: " + cal)
          break;
        }
        case '/':
          {
            let cal=no1/no2;
            console.log("Answer is: " + cal)
            break;
          }
          case '%':
            {
              let cal=no1%no2;
              console.log("Answer is: " + cal)
              break;
            }
        default:
          console.log("Syntax Error")
}
}