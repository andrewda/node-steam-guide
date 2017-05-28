var socket = io();

$(function() {
	$('.deposit.item').click(function(one, two) {
		socket.emit('deposit', {
			assetid: $(this).data('assetid')
		});

		alert('We will send you a tradeoffer for your ' + $(this).text());
	});

	$('.withdraw.item').click(function(one, two) {
		socket.emit('withdraw', {
			assetid: $(this).data('assetid')
		});

		alert('We will send you a tradeoffer with a ' + $(this).text());
	});
}());
