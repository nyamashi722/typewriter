const sentence = "hello there from Lighthouse Labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
}

setTimeout(() => {
  console.log();
}, 50 * sentence.length);