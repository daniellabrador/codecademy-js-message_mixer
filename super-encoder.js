// Import the encryptors functions here.
const encoders = require('./encryptors.js');
const { caesarCipher, symbolCipher, reverseCipher } = encoders;

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    let encrypt = caesarCipher(str, 12);
    encrypt = reverseCipher(encrypt);
    encrypt = symbolCipher(encrypt);
    return encrypt;
}
  
const decodeMessage = (str) => {
// Use the encryptor functions here.
    let decrypt = symbolCipher(str);
    decrypt = reverseCipher(decrypt);
    decrypt = caesarCipher(decrypt, -12);
    return decrypt;
}
  
// User input / output.
  
const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;

    if (process.argv[2] === 'encode') {
      output = encodeMessage(str);
    }

    if (process.argv[2] === 'decode') {
      output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
}
  
// Run the program.
if (process.argv[2] === 'encode') {
    process.stdout.write('Enter the message you would like to encrypt...\n> ');
} else if (process.argv[2] === 'decode') {
    process.stdout.write('Enter the message you would like to decrypt...\n> ');
} 

process.stdin.on('data', handleInput);