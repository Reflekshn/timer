'use strict';

for (let i = 2; i < process.argv.length; i++) {
  const num = Number(process.argv[i]);

  if (!Number.isNaN(num) && num >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000)
  }
}