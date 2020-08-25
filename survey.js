const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favorite? ', (type) => {
        rl.question('What\'s your favorite thing to eat for that meal? ', (meal) => {
          rl.question('Which sport is your absolute favorite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => 
            {console.log(`${name} likes to listen to ${music} while ${activity}, eat ${meal} during ${type}, likes ${sport} and is amazing at ${superpower}.`);
            
            rl.close();}
            );
          });
        });
      });
    });
  });
});