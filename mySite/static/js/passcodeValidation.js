function validatePasscode(passcode, id) {
  var code = prompt("Enter the passcode ", "Passcode");
  if (code === null) {
    return false;
  }
  if (code != null) {
    if (code == passcode) {
      console.log("Passcodes are the same");
      return true;
    } else {
      console.log("Passcodes are not the same");
      return false;
    }
  }

}

