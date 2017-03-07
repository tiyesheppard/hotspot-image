$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	$(".circle").on("click", function (e) {
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)

		var circle_clicked = $(this), // capture the circle that was clicked on into a variable
			text = circle_clicked.data("text"), //looks for the data-text attribute and stores its value
			/*
				Traverse DOM to the closest .photo-container ancestor and then
				find a descendant of that ancestor with the selector .info_slides. This
				allows us to only trigger and manipulate the pop up for the clicked circle's
				photo container
			*/
			popUp = circle_clicked.closest('.photo-container').find(".info_slides"),
			popUp_text = popUp.find(".info_popIn"); //find this pop up's text container

		//first, inject the text into the pop up
		popUp_text.text(text);

		//then, show the popup
		popUp.addClass("active");
	});

	$(".btn_close").on("click", function (e) {
		e.preventDefault();

		//figure out which popup is open
		var close_button_clicked = $(this),
			popUp = close_button_clicked.closest(".info_slides");

		//remove the active class from the triggered popup
		popUp.removeClass("active"); //remove class="active" from #slide, making it not visible
	});
});