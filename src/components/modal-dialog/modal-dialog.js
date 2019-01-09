import $ from 'jquery';
import Task from '../task/task';
import './madal-dialog.css';
import 'jquery-ui-dist/jquery-ui.css';
import sortable from 'jquery-ui/ui/widgets/sortable';
import disableSelection from 'jquery-ui/ui/disable-selection';
import observer from './observer';

function doTask() {
	const task = new Task();
	$('.modal-content')
        .empty()
        .append(task.random());
      $(function() {
        $('#sortable').sortable({
          cursorAt: { left: 2 },
        });
        $('#sortable').disableSelection();
      });
      $('.question').delegate('.submit', 'click', function(e) {
				let result = $('input.answer').val();
        if (Array.isArray(task.result)) {
          if (task.result.includes(result)) {
						observer.isChange = true;
						observer.userIsWin = true;
          } else {
						observer.isChange = true;
						observer.userIsWin = false;
					}
        }
        if (typeof task.result === 'number') {
          if (parseInt(task.result) === parseInt(result)) {
						observer.isChange = true;
						observer.userIsWin = true;
					}
          else {
						observer.isChange = true;
						observer.userIsWin = false;
					}
        }
        if (typeof task.result === 'string') {
          result = $('#sortable>li').text();
          if (task.result === result) {
						observer.isChange = true;
						observer.userIsWin = true;
          } else {
						observer.isChange = true;
						observer.userIsWin = false;
          }
				}
				$('#myModal').fadeOut(200).remove();
        e.preventDefault();
      });
}

export default function modalEnable() {
  let modal = `<div id="myModal" class="modal">
  <span class="close">&times;</span>
	<div class="modal-content">
	<div class="btnBox">
	<button type="submit" class="attack selectedIcon" id="attack">
    <img src="../../screens/battle/images/icons/attack.jpg" id="attack" alt="attack" width="100px" height="100px">
  </button>
  <button type="submit" class="healing" id="health">
    <img src="../../screens/battle/images/icons/health.jpg" id="health" alt="health" width="100px" height="100px">
  </button>
	</div>
  </div>
  </div>`;
  $('body').after(modal);
  $('#myModal').fadeIn(200);
  $('#myModal').delegate('.close', 'click', function() {
    $('#myModal')
      .fadeOut(200)
      .remove();
	});
	const buttons = document.querySelectorAll('.btnBox button');
	$(window).delegate(this, 'keydown', (e) => {

		if(e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
			(Array.from(buttons)).forEach((value) => {
				value.classList.toggle('selectedIcon');
			});
		}
		if(e.key === 'Enter') {
			(Array.from(buttons)).forEach((value) => {
				if(value.classList.contains('selectedIcon')) {
					observer.typeOfSpell = value.id;
				}
			});
			doTask();
		}
		if(e.key === 'Escape') {
			$('#myModal').fadeOut(200).remove();
		}
	});
  $('.modal-content').delegate(this, 'click', function(e) {
    if (e.target.tagName === 'IMG') {
			const typeOfSpell = e.target.id;
			observer.typeOfSpell = typeOfSpell;
      doTask();
    }
	});
}
