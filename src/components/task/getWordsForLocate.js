export default function getWordsForLocate(){
  const wordsArray = ['example','turtle','multiply','monster','germany', 'england'];
  let x = Math.floor(Math.random() * wordsArray.length);
  let d_word = wordsArray[x].split('');
  let result;
  shuffle(d_word);
  function shuffle(a, b, c, d) {
    c = a.length;
    while (c) b = Math.random() * (--c + 1) | 0, d = a[c], a[c] = a[b], a[b] = d;
  }
  const listen = [];
  for (let i = 0; i < d_word.length; i++) {
    listen.push('<li class="ui-state-default">' + d_word[i] + '</li>')
  }
  result = [wordsArray[x], listen];
  return result;
}