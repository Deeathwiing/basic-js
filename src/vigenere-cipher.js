class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

 

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    
  }
}

module.exports = VigenereCipheringMachine;
