const Randomize = () => {
  let messages = ['Today I will do what others won\'t, so tomorrow I can accomplish what others can\'t - Jerry Rice',
      'Precision beats power and timing beats speed - Conor McGregor',
      'You have time - Gary Vaynerchuk'
  ];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let randomMsg = Math.floor(Math.random() * messages.length);
  let randomNum = Math.floor(Math.random() * numbers.length);

  let output = [];
  output.push('Your motivational quote is: ' + messages[randomMsg] + ' and your number is: ' + numbers[randomNum]);
  return output
};

console.log(Randomize());