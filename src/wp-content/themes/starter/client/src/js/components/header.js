import $ from 'jquery';

export default () => {
	$('.hamburgerBtn').on('click', function () {
		$(this).toggleClass('active');
		$('.navigation').toggleClass('active');
	});
};
