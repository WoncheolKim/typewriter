const sentence = "hello there from lighthouse labs \n";
let iterater = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, iterater);
  iterater += 50;
}
