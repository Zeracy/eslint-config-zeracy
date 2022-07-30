const { exec } = require('child_process');

const commandHandler = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(error.message);
      return;
    }

    if (stderr) {
      console.error(stderr);
      return;
    }

    console.log(stdout);
  });
} 

commandHandler('yarn');

commandHandler('cd jsdoc && yarn');

commandHandler('cd json && yarn');

commandHandler('cd react && yarn');
