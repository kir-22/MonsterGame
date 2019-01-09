import $ from 'jquery';
import './score.css';
export default function score(){
  let table = `<div id="myTable" class="table-modal">
    <span class="table-close">&times;</span>
    <table class="table-content">
    </table>
    </div>`;
    let tableHead = `
    <caption>SCORE</caption>
    <tr>
      <th>Name</th>
      <th>Rounds</th>
    </tr>
    `;
  let collectionScore = Object.entries(localStorage).sort((a, b) => b[1] - a[1]);
  if (collectionScore.length > 10) {
      collectionScore.splice(10);
  }
  $('body').after(table);
  $('#myTable').fadeIn(200);
  $('#myTable').delegate('.table-close','click', function(){
		$('#myTable').fadeOut(200).remove();
		location.reload();
  });
  $('.table-content').empty().append(tableHead);
  collectionScore.forEach(user => {
    let tr = `<tr>
    <td>${user[0]}</td>
    <td>${user[1]}</td>
    </tr>`
    $('.table-content').append(tr);
  });
}