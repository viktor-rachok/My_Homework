
var $imageButtonChr = $('.information-image-1');
var $imageButtonMoz = $('.information-image-2');
var $imageButtonOp = $('.information-image-3');
var $imageButtonSaf = $('.information-image-4');


var $link = this;
var $body = $('body');
var $modal;
var	$overlay;

function showModalChr(){
	$modal = $('<div class="browser-modal"><span class="modal-image-all modal-image-chrome"></span><h2>Google Chrome</h2><p>Google Chrome (chrome с англ. — «хром») — браузер, разрабатываемый компанией Google на основе свободного браузера Chromium и движка Blink (до апреля 2013 года использовался WebKit). Первая публичная бета-версия для Windows вышла 2 сентября 2008 года, а первая стабильная — 11 декабря 2008 года. По данным StatCounter, Chrome используют около 300 миллионов интернет-пользователей, что делает его самым популярным браузером в мире — его рыночная доля в декабре 2015 года составила 54,04%. По данным LiveInternet, в декабре 2015 года с долей 41,8 % Chrome занимает первое место и в Рунете.</p><p>На протяжении шести лет главный исполнительный директор Google Эрик Шмидт не поддерживал идею о создании отдельного браузера. Он указывал на то, что «Google являлась небольшой компанией», и что он не хотел участвовать в «болезненных войнах браузеров». После того как основатели компании Сергей Брин и Ларри Пейдж наняли нескольких разработчиков Mozilla Firefox и создали демонстрацию Chrome, Шмидт сказал: «она была настолько хорошей, что заставила меня изменить своё мнение». Первоначально Chrome выпущен только под Windows, позднее (9 декабря 2009 года) появились dev- и beta-версии для операционных систем Linux и OS X. Первоначально сборки для этих ОС не обладали полной функциональностью аналогичных бета-версий для Windows (например, синхронизацией закладок), но с появлением ветви 5.0.* функциональность сборок для всех ОС стала равной.</p></div>');
	$overlay = $('<div class="browser-modal-overlay"></div>')
	$overlay.one('click', hideModal);
	$modal.one('click', hideModal);
	$body.append($overlay);
	$body.append($modal);
	function hideModal(){
		$modal.fadeOut(700);
		$overlay.fadeOut(500);
		 }; };

function showModalMoz(){
	$modal = $('<div class="browser-modal"><span class="modal-image-all modal-image-firefox"></span><h2>Mozilla Firefox</h2><p>Mozilla Firefox — свободный браузер на движке Gecko, разработкой и распространением которого занимается Mozilla Corporation. Третий по популярности браузер в мире и первый среди свободного ПО — в июле 2014 года его рыночная доля составила 17,52 %. Браузер имеет особенный успех в некоторых странах, в частности, в Германии это самый популярный браузер с долей 43,07 % на июль 2014 года. В России Firefox занимает второе место по популярности среди браузеров для ПК с долей 12,41 % пользователей на декабрь 2015 года.</p><p>Проект Firefox был начат Блейком Россом (англ. Blake Ross) и Дейвом Ха́йатом (англ. Dave Hyatt) в качестве экспериментальной ветки от проекта Mozilla Suite, когда они работали в Netscape Communications, бывшей в составе AOL Time Warner. С момента закрытия Netscape Communications весь проект Mozilla управляется созданной тогда Mozilla Foundation, которой принадлежат торговые знаки Mozilla Firefox. Firefox 1.0 появился на свет 9 ноября 2004 года. Каждая новая версия с началом разработки получает кодовое имя. Оно используется для неофициальных сборок и альфа-версий браузера. При этом используется и специальный логотип. Сборки для разработчиков имеют кодовое имя Nightly («Ночная» — англ.), а для тестеров (альфа-версии) — Aurora («Аврора» — англ.). В отличие от названия и логотипа, используемых в официальных сборках, они распространяются под тройной лицензией Mozilla (MPL/GPL/LGPL), не являются зарегистрированными товарными знаками, и не имеют дополнительных ограничений на использование.</p></div>');
	$overlay = $('<div class="browser-modal-overlay"></div>')
	$overlay.one('click', hideModal);
	$modal.one('click', hideModal);
	$body.append($overlay);
	$body.append($modal);
	function hideModal(){
		$modal.fadeOut(700);
		$overlay.fadeOut(500);
		 }; };

function showModalOp(){
	$modal = $('<div class="browser-modal"><span class="modal-image-all modal-image-opera"></span><h2>Opera Software</h2><p>Opera — веб-браузер и пакет прикладных программ для работы в Интернете, выпускаемый компанией Opera Software. Разработан в 1994 году группой исследователей из норвежской компании Telenor. С 1995 года — продукт компании Opera Software, образованной авторами первой версии браузера. Суммарная рыночная доля Opera и Opera Mobile в декабре 2015 года составила 2,05 % — пятое место в мире. В России процент пользователей браузера в два раза выше среднемирового. В декабре 2015 года по данным LiveInternet доля браузера Opera в Рунете составила 4,7 %.</p><p>В 1992 году Йон Стефенсон фон Течнер (норв. Jon Stephenson von Tetzchner) и Гейр Иварсёй (норв. Geir Ivarsøy) входили в исследовательскую группу компании Televerket (Норвежская национальная телефонная компания, сейчас носит название Telenor). Они принимали участие в разработке комплекса ODA — стандартизированной системы сбора, хранения документации, изображений и другой информации. Разработанная система не нашла широкого распространения, и вскоре работы по ней были заморожены. Эта же исследовательская группа запустила первый норвежский сервер и «домашнюю страничку» в 1993 году. Наиболее распространённый в то время браузер NCSA Mosaic имел достаточно примитивную структуру и не обеспечивал достаточный уровень эффективности. Поэтому группа исследователей предложила компании Televerket разработать собственный браузер, более адаптированный к различным веб-стандартам. Руководство Televerket поддержало разработку, и в конце 1993 года вышел первый работающий прототип.</p></div>');
	$overlay = $('<div class="browser-modal-overlay"></div>')
	$overlay.one('click', hideModal);
	$modal.one('click', hideModal);
	$body.append($overlay);
	$body.append($modal);
	function hideModal(){
		$modal.fadeOut(700);
		$overlay.fadeOut(500);
		 }; };

function showModalSaf(){
	$modal = $('<div class="browser-modal"><span class="modal-image-all modal-image-safari"></span><h2>Apple Safari</h2><p>Safari — браузер, разработанный корпорацией Apple и входящий в состав OS X и iOS. Стабильно занимает четвёртое место по числу пользователей (рыночная доля в июне 2014 года — 9,17 %). В России браузер не столь популярен: по состоянию на май 2013 он занимал шестую позицию c 4,1 % пользователей.</p><p>11 июня 2007 года Apple выпустила тестовую версию Safari 3.0 для Windows XP и Vista. По утверждению Майкла Чейшпергера, Safari для Windows загружает и отображает страницы быстрее, чем Internet Explorer 7 и Mozilla Firefox 2, однако отрыв на самом деле не настолько велик, как это представляется Apple, и связано это с тем, что производительный тест iBench, разработанный компанией VeriTest, даёт преимущество Safari перед другими браузерами. Затем были выпущены полноценные версии 3.1 и 3.1.1. Версии для Windows обладают такой же производительностью, что и для Mac OS X (включая Bonjour). В ранних версиях внешний вид программы сильно отличался от обычного вида программ в Windows: элементы интерфейса (кнопки, полосы прокрутки, поля ввода, выпадающие меню, чекбоксы и др.) были выполнены в стиле Mac OS X (интерфейс Aqua). Также, в версии 3.х для Windows использовалась собственная система сглаживания шрифтов (в версиях 4.x, 5.x для Windows можно выбрать между системой сглаживания шрифтов от Apple или Microsoft). В последних версиях 4.0 интерфейс программы был переделан в более привычный для пользователей Windows, также цвет оформления поменялся на более светлый.</p></div>');
	$overlay = $('<div class="browser-modal-overlay"></div>')
	$overlay.one('click', hideModal);
	$modal.one('click', hideModal);
	$body.append($overlay);
	$body.append($modal);
	function hideModal(){
		$modal.fadeOut(700);
		$overlay.fadeOut(500);
		 }; };

	$imageButtonChr.on('click', function() { 
	  	  	showModalChr(); });
	$imageButtonMoz.on('click', function() {
	  	  	showModalMoz(); });
	$imageButtonOp.on('click', function() {
	  	  	showModalOp(); });
	$imageButtonSaf.on('click', function() {
	  	  	showModalSaf(); });

