const product = {
  name: "i-phone",
  color: "black",
};

const str = JSON.stringify(product);
const str2 = '{"name":"i-phone","color":"black"';

try {
  const obj = JSON.parse(str2);

  console.log(obj);
} catch (err) {
  console.log(err.message, "err");
}
