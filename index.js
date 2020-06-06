$('#Form').on('submit', function() {
	let message = $('#EmailInput').val();
	let request = $.ajax({
		url: 'https://formspree.io/myynekpl', 
		method: 'POST',
		data: {message: message},
		dataType: 'json'
	});
	request.done((msg) => {
		console.log(msg);
		// Run success.
		$('#Form').fadeOut(() => {
			$('#Status').text('Thanks! Keep an eye on your inbox for the latest updates!');
			$('#Status').fadeIn();
		});
	});
	request.fail((jqXHR, textStatus) => {
		console.log(textStatus);
		// Run failure.
		$('#Form').fadeOut(() => {
			$('#Status').text('Looks like there was a problem. Get in touch by email at...');
			$('#Status').fadeIn();
		});
	});
	return false;
});
