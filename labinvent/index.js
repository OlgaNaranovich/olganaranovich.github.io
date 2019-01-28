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
(function() {
    let ajaxSampler = new XMLHttpRequest();
    ajaxSampler.open("GET", "img/sampler-icon.svg", true);
    ajaxSampler.send();

    ajaxSampler.onload = function(e) {
        let parser = new DOMParser();
        console.log(parser);
        let ajaxSamplerDoc = parser.parseFromString( ajaxSampler.responseText, "image/svg+xml" );
        document.getElementsByTagName('body')[0].appendChild( ajaxSamplerDoc.getElementsByTagName('svg')[0] );
}

})();
