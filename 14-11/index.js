// Rewrite 'if..else' into '?'

function ternaryOperation(login) {
  let message =
    login == "Employee"
      ? "Hello"
      : login == "Director"
      ? "Greetings"
      : login == ""
      ? "No login"
      : "";
  return message;
}
console.log(ternaryOperation("Employee"));
