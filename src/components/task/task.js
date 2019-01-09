import english from './english.json'; 
import getNumberInt from './getNumberInt';
import getWordsForLocate from './getWordsForLocate';

export default class Task{
  constructor(){
    this.english = english;
    this.question=``;
    this.words = getWordsForLocate();
  }
  random(){
    let number = Math.floor(Math.random() * (Object.keys(this.english).length));
    let x = getNumberInt(1,4);
    switch(x){
      case 1: return this.mathTask();
      case 2: return this.englishTask(number);
      case 3: return this.getherPhraseOfWords();
    }
  }
  mathTask(){
    let val_1 = getNumberInt();
    let val_2 = getNumberInt();
    const operation = ['+','-','*', '/'];
    let x = getNumberInt(0,4);
    if(x === 3){
      val_1 = getNumberInt();
      val_2 = getNumberInt();
    }
    this.result =eval(val_1+operation[x]+val_2);

    return this.question = `
    <section class = "question">
      <h2>Count the expression "${val_1+operation[x]+val_2}"</h2>
      <form onclick="event.preventDefault()"> 
        <input type="number" class="answer" placeholder="Enter your answer" step="0.01">
        <button type = "submit" class = "submit offset">Submit</button>
      </form>
    </section>`;
  }
  englishTask(number){
    this.result = this.english[Object.keys(this.english)[number]];
    return this.question = `
    <section class = "question">
      <h2>Translate word "${Object.keys(this.english)[number]}"</h2> 
      <form onclick="event.preventDefault()">
        <input type="text" class="answer" placeholder="Enter your answer">
        <button type = "submit" class = "submit offset">Submit</button>
      </form>
    </section>`;
  }
  getherPhraseOfWords(){
    this.result = this.words[0];
    return this.question = `<section class = "question">
      <h2>Collect the word: </h2>
      <ul id="sortable">
      ${this.words[1].join('')}
      </ul> 
      <form onclick="event.preventDefault()">
        <button type = "submit" class = "submit">Submit</button>
      </form>
    </section>`;
  }
}