const { exec } = require('child_process');

// Run ESLint first
exec('eslint src --max-warnings=0', (err, stdout, stderr) => {
  if (err) {
    console.error(`ESLint errors:\n${stderr}`);
    // Do not exit, just log the errors
  } else {
    console.log(`ESLint output:\n${stdout}`);
  }

  // Proceed with the build process
  exec('react-scripts build', (err, stdout, stderr) => {
    if (err) {
      console.error(`Build failed:\n${stderr}`);
      process.exit(1);
    } else {
      console.log(`Build succeeded:\n${stdout}`);
    }
  });
});
