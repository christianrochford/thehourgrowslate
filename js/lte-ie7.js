/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fontawesome\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-music' : '&#xf001;',
			'icon-envelope' : '&#xf003;',
			'icon-remove' : '&#xf00d;',
			'icon-signal' : '&#xf012;',
			'icon-play-circle' : '&#xf01d;',
			'icon-headphones' : '&#xf025;',
			'icon-volume-off' : '&#xf026;',
			'icon-volume-down' : '&#xf027;',
			'icon-volume-up' : '&#xf028;',
			'icon-step-backward' : '&#xf048;',
			'icon-fast-backward' : '&#xf049;',
			'icon-backward' : '&#xf04a;',
			'icon-play' : '&#xf04b;',
			'icon-pause' : '&#xf04c;',
			'icon-stop' : '&#xf04d;',
			'icon-forward' : '&#xf04e;',
			'icon-fast-forward' : '&#xf050;',
			'icon-step-forward' : '&#xf051;',
			'icon-chevron-left' : '&#xf053;',
			'icon-chevron-right' : '&#xf054;',
			'icon-chevron-up' : '&#xf077;',
			'icon-chevron-down' : '&#xf078;',
			'icon-facebook' : '&#xf09a;',
			'icon-envelope-alt' : '&#xf0e0;',
			'icon-angle-left' : '&#xf104;',
			'icon-angle-right' : '&#xf105;',
			'icon-angle-up' : '&#xf106;',
			'icon-angle-down' : '&#xf107;',
			'icon-quote-left' : '&#xf10d;',
			'icon-quote-right' : '&#xf10e;',
			'icon-euro' : '&#xf153;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};