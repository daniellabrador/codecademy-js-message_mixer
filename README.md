# **Message Mixer**

The Message Mixer programs encrypts data using three of the famous ciphers. This training project, prepared by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript), has been an invaluable exercise in the use of JavaScript modules.

## Table of Contents

- [Project Prompt](#project-prompt)
- [Technologies](#technologies)
- [Setup](#setup)
- [Sources](#sources)

## Project Prompt

Message Mixer Inc. offers a message-encryption service that transforms input text, using various [ciphers](https://en.wikipedia.org/wiki/Cipher), and displays the encrypted message to the console.

There are three encryption methods provided by this service:

- A [“Caesar Cipher”](https://en.wikipedia.org/wiki/Caesar_cipher) in which the characters of the input message are shifted alphabetically by a given amount.
- A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
- A “Reverse Cipher” in which each word of the input message is reversed in place.

To use this service, run the command below:

```bash
node script.js ['caesar'|'symbol'|'reverse'] [amount]
```

Here are some examples of running this program:

```bash
$ node script.js caesar 4
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> lipps asvph
 
$ node script.js 'reverse'
Enter the message you would like to encrypt...
> hello world
 
Here is your encrypted message:
> olleh dlrow
```

At present, Message Mixer Inc. sells their encryption service as a program in a single file called **script.js**. This single file includes:

- The functions that perform the encryptions listed above.
- The code for retrieving the user input.
- The code for displaying the output back to the user.

Message Mixer Inc. now wants to join the open-source community by packaging its encryption functions in a module and allowing other developers to import these encryption functions into their own projects.

In this project, you will help Message Mixer Inc. extract and isolate its encryption functions into a module, called **encryptors.js**, and then refactor **script.js** to use this module’s functions.

Before you begin, try running the commands listed above in the terminal. Then, familiarize yourself with how the program works by examining the three files in the file directory, focusing on **script.js**. At the top of this file you will find the three encryption cipher functions. Towards the bottom of the file, you will find some code that uses the [`process.argv`](https://nodejs.org/api/process.html#process_process_argv), [`process.stdin`](https://nodejs.org/api/process.html#process_process_stdin), [`process.stdout`](https://nodejs.org/api/process.html#process_process_stdout) environment variables to determine which encryption method to use, parse the user input, and display the encrypted message.

## Technologies

- JavaScript (ES6)

## Setup

To run this program, you need install [Node.js](https://nodejs.org/en/download/) to your machine.

Enter this command to the terminal:

```bash
node script.js ['caesar'|'symbol'|'reverse'] [amount]
```

Enter `[amount]` if you pick choose to encrypt your message if you choose Caesar Cipher. Otherwise, drop the `[amount]`.

If you wish to encode your message through a series of ciphers, you can use `super-encoder.js` for that. The encoder will run the three ciphers and process the string you pass on to the terminal.

Enter this command to the terminal:

```bash
node super-encoder.js ['encode'|'decode']
```

## Sources

The techniques utilized was based on the lessons taught in [Codecademy's Learn JavaScript Course](https://www.codecademy.com/learn/introduction-to-javascript). The challenge is also provided by Codecademy.
