function camelize(str) {
  return str
  .split("-")
  .map(function (item, index) {
    return index ? (item[0].toUpperCase() + item.slice(1)) : item
  })
  .join("");
}
alert( camelize("-webkit-transition") );