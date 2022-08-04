function capitalizeWord(word) {
    let arr = word.split("");
    arr[0]=arr[0].toUpperCase();
    arr = arr.join("");
    return arr;
  }
  alert(capitalizeWord("prompt()"));