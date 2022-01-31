let forHtml = document.getElementById('forHtml');
let forJs = document.getElementById('forJs');
let forCss = document.getElementById('forCss');
for(let i = 1; i <= 400; i++) {
	let iTemp = i;
	iTemp = iTemp < 10 ? '00' + iTemp : iTemp;
	iTemp = iTemp < 100 && iTemp >= 10 ? '0' +iTemp : iTemp;
	/*forHtml.innerHTML += 
	` &lt;!--★★★★★★★ ${iTemp}  ★★★★★★★--&gt;<br>
	 &lt;!--&lt;div class="start-num">${iTemp}&lt;/div&gt;--&gt;<br>
	&lt;!--&lt;div id="id${iTemp}"&gt;<br><br></div>&lt;/div&gt;--&gt;<br>`;
*/
	forJs.innerHTML +=
	`//★★★★★★★ ${iTemp}  ★★★★★★★<br>
	(function(global) { <br>
	let loc = document.querySelector('#id${iTemp}');
<br>
<br>

	 })(window);<br>`;

	// `<div> /*★★★★★★★ ${iTemp}  ★★★★★★★*/</div>
	// .b${iTemp} {<br><br>}<br><br>
	// .b${iTemp} {<br><br>}<br><br>`;
}