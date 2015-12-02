/**
 *
 * @authors Your Name
 * @date    2015-12-2 22:56:56
 * @version $Id$
 */
/* ×óÓÒÀ¸×ÔÊÊÓ¦¿í¶È*/
 $(document).ready(function(e) {
 var winResize = function () {
 var left = $(".left");
 var right = $(".right");
 var w = $(window).width();
 var lw = left.width();
 var rw = right.width();
 var mw = 1280;

 if (w > mw) {
 left.css("left", "" + (w - mw) / 2 + "px");
 }
 else {
 left.css("left", "0");
 }

 if (w > mw) {
 right.css("right", "" + (w - mw) / 2 + "px");
 }
 else {
 right.css("right", "0");
 }

 };

 $(window).resize(winResize);
 winResize();
 });