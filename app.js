
let passwordArea = document.getElementById("password")
const length=16
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/~`";
const allCharacters = uppercase + lowercase + numbers + symbols;

function generatePassword(){
  let password = ""
  password+=uppercase[Math.floor(Math.random()*uppercase.length)]
  password+=lowercase[Math.floor(Math.random()*lowercase.length)]
  password+=numbers[Math.floor(Math.random()*numbers.length)]
  password+=symbols[Math.floor(Math.random()*symbols.length)]

  while(password.length < length){
  password+=allCharacters[Math.floor(Math.random()*allCharacters.length)]
  }
  passwordArea.value=password;
}

document.getElementById("submit").addEventListener("click",()=>{
  passwordArea.value="";
  generatePassword();
})
document.getElementById("copy").addEventListener("click", () => {
    const input = document.getElementById("password");
    input.select();
    navigator.clipboard.writeText(input.value)
      .then(() => console.log("Text copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text:", err));
});