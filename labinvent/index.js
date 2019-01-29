function toggleMenu() {
	const toggleMnu = document.getElementById('toggle-menu');
	const folderTree = document.querySelector('.aside__folderTree');
	if (!toggleMnu.classList.contains('on')) {
		toggleMnu.classList.add('on');
	} else
		toggleMnu.classList.remove('on');

	if (!folderTree.classList.contains('show-folderTree')) {
		folderTree.classList.add('show-folderTree');
		console.log(folderTree);
	} else {
		folderTree.classList.remove('show-folderTree');
	}
}

const showWidgets = document.querySelector('.show-widgets');
showWidgets.addEventListener('click', function() {
	const widgets = document.querySelector('.widgets');
	const main = document.querySelector('.main');
	console.log(widgets);
	console.log(main);
	if (!widgets.classList.contains('hidden') ) {
		widgets.classList.add('hidden');
		main.classList.add('hidden');
	} else {
		widgets.classList.remove('hidden');
		main.classList.remove('hidden');
	}
});

$(document).ready(function() {
    $('select').niceSelect();
});
