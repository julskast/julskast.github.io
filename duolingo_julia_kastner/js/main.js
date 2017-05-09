// save variables for two strings entered
// remove the spaces - str.replace(/\s/g, '')
// split into array
// alphabetize

// check to see if the two strings have the same number of letters
// if not the same number of letters show an error message. Else:
// check to see if the strings are identical
// if not anagrams show an error
// else show ‘these two phrases are in fact anagrams, horaah’
// maybe show success gif (hide the gif on load, show if match)
// if user clicks submit again, clear the message

$(document).ready(function(){


	$('form').on('submit', function (e) {
		e.preventDefault();
		$('.answer').remove();
		var firstValue = $('#firstField').val();
		var secondValue = $('#secondField').val();
		var firstValueArray = firstValue.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
		var secondValueArray = secondValue.replace(/\W+/g, '').toLowerCase().split("").sort().join("");
		if (firstValue.length !== secondValue.length) {
			$('form').append('<p class="answer">These two strings are not the same length. Try again.</p>');
			$('#congrats').css( "display", "none" );
		} else if (firstValueArray !== secondValueArray) {
			$('form').append('<p class="answer">These two strings are the same length but not anagrams. Try again.</p>');
			$('#congrats').css( "display", "none" );
		} else {
			$('form').append('<p class="answer">These two strings are in fact anagrams. Hoorah!!</p>');
			$('#congrats').css( "display", "block" );
		}
//		console.log('first', firstValue, 'second',  secondValue);
	});
});