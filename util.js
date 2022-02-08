module.exports = {
  /**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
  shuffle: function(a){
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },
  createLottoNumber: function(){
    let a = [];
    for(let i = 0; i < 49; i++){
    	a[i] = i + 1;
    }
    let b = this.shuffle(a);
    numbers = [];
    for(let j = 0; j < 6; j++){
      numbers[j] = a[j];
    }
    return numbers;
  },
  getDay: function(){
    let today = new Date();
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };
    return today.toLocaleDateString("de-DE", options);
  }
}
