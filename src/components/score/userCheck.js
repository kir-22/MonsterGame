export default function checkUser(name, round){
  if(localStorage.hasOwnProperty(name)){
    if(round >= localStorage.name){
      localStorage.setItem(name, round);
    }
  }
  else {
    localStorage.setItem(name, round);
  }
}