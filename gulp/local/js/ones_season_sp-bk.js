// アンドロイド4.3未満CSS代替Jqueryスクリプト（※CSS整理後修正）
// アンドロイドのバージョンをUAから取得
function androidVersion() {
  var ua = navigator.userAgent;
  if( ua.indexOf("Android") > 0 ){
      var version = parseFloat(ua.slice(ua.indexOf("Android")+8));
      return version;
    }
  }
if (androidVersion() <= 4.4) {//もしアンドロイドのバージョンが4.3以下だったら
$(window).on('load resize', function(){
    $('.container--link__text').css('width', '100%').css('width', '-=10px');
    $('.container--box__002:after').css('width', '50%').css('width', '-=8px');
	//エリアから秋祭りを探す
    $('.contents--area section#search--festa__area .container--box').css('width', '100%').css('width', '-=20px');
    $('.contents--area section#search--festa__area .container--box .container--box__area a').css('width', '50%').css('width', '-=5px');
    $('.contents--area section#search--festa__area .container--box .container--box__area a.margin--right__not').css('width', '50%');
	//秋イベントオススメ情報
	$('#footer-before .button-top').css('width', '100%').css('width', '-=20px');
    $('#footer-before .breadcrumb').css('width', '100%').css('width', '-=20px');
});
}

//トップに戻るボタンの挙動
function getScrolled() {
 return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}
window.onscroll = function() {
  ( getScrolled() > 300 ) ? $('.btn_scroll_top').css('display', 'block'):$('.btn_scroll_top').css('display', 'none');
};

//イベント情報カセット
$(window).on('load', function(){
var eventNum = 3;
hideevent = "<div class='accordion--toggle__nonactive'>お出かけ記事を隠す</div>";
showevent = "<div class='accordion--toggle__active'>お出かけ記事をもっと見る</div>";
$("#eventinformation--casset__more").html( showevent );
$(".event--casset__common:not(:lt("+eventNum+"))").hide();
$("#eventinformation--casset__more").click(function (e) {
   e.preventDefault();
       if ($(".event--casset__common:eq("+eventNum+")").is(":hidden")) {
           $(".event--casset__common:hidden").slideDown();
           $("#eventinformation--casset__more").html( hideevent );
			//イベント情報カセット	   
	   } else {
           $(".event--casset__common:not(:lt("+eventNum+"))").slideUp();
           $("#eventinformation--casset__more").html( showevent );
       }
	});
//Y 記事誘導枠（秋のイベントのおでかけ記事）のアコーディオン
var 　outingNum = 3;
hideouting = "<p class='accordion--toggle__nonactive'>お出かけ記事を隠す</p>";
showouting = "<p class='accordion--toggle__active'>おでかけ記事をもっと見る</p>";
$(".archive--outing").html( showouting );
$(".accordion--outing:not(:lt("+outingNum+"))").hide();
$(".archive--outing").click(function (e) {
   e.preventDefault();
       if ($(".accordion--outing:eq("+outingNum+")").is(":hidden")) {
           $(".accordion--outing:hidden").slideToggle(200);
           $(".archive--outing").html( hideouting );
       } else {
           $(".accordion--outing:not(:lt("+outingNum+"))").slideToggle(200);
           $(".archive--outing").html( showouting );
       }
});
//X レストラン誘導枠（デートやディナーにおすすめのレストラン）のアコーディオン
var spotNum = 0;
hidespot = "<p class='accordion--toggle__nonactive'>東京のバレンタインスポットを隠す</p>";
showspot = "<p class='accordion--toggle__active'>東京のバレンタインスポットをもっと見る</p>";
$(".archive").html( showspot );
$(".accordion--spot:not(:lt("+spotNum+"))").hide();
$(".archive").click(function (e) {
   e.preventDefault();
       if ($(".accordion--spot:eq("+spotNum+")").is(":hidden")) {
           $(".accordion--spot:hidden").slideToggle(200);
           $(".archive").html( hidespot );
       } else {
           $(".accordion--spot:not(:lt("+spotNum+"))").slideToggle(200);
           $(".archive").html( showspot );
       }
});
var 　outingNum__002 = 3;
hideouting__002 = "<p class='accordion--toggle__nonactive'>お出かけ記事を隠す</p>";
showouting__002 = "<p class='accordion--toggle__active'>おでかけ記事をもっと見る</p>";
$(".archive--outing__002").html( showouting__002 );
$(".accordion--outing__002:not(:lt("+outingNum__002+"))").hide();
$(".archive--outing__002").click(function (e) {
   e.preventDefault();
       if ($(".accordion--outing__002:eq("+outingNum__002+")").is(":hidden")) {
           $(".accordion--outing__002:hidden").slideToggle(200);
           $(".archive--outing__002").html( hideouting__002 );
       } else {
           $(".accordion--outing__002:not(:lt("+outingNum__002+"))").slideToggle(200);
           $(".archive--outing__002").html( showouting__002 );
       }
});
});


// F コンテンツ誘導枠（タイプ別編集部おすすめ秋祭り）
$(window).on('load resize', function(){
	$('#contents--induction').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.container--box__text a').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.container--box__text a').height(maxHeight);
	});
//テキストのみ角丸ボタン（エリアから秋祭りを探す）
	$('#search--festa__area').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.container--box__area a').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.container--box__area a').height(maxHeight);
	});
//画像とテキスト_2カラムと2カラム（秋イベントおすすめ情報）
	$('#imagetext--twocolum__twocolum').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.container--box__area a').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.container--box__area a').height(maxHeight);
	});
//C エリアから探す　エリアから秋祭り・イベントを探す
	$('#search--event__area').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.container--area__lists a').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.container--area__lists a').height(maxHeight);
	});
});

// ページ外アンカーリンク対策
$(function(){
var url = $(location).attr('href');
if(url.indexOf("#") != -1){
var anchor = url.split("#");
var target = $('#' + anchor[anchor.length - 1]);
if(target.length){
var pos = Math.floor(target.offset().top) - 44;
$("html, body").animate({scrollTop:pos}, 100);
}
}
// スムーズスクロール&&ページ内アンカーリンク対策
var headerHight = 44;
$('a[href^=#]').click(function(){
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
$("html, body").animate({scrollTop:position}, 550, "swing");
return false;
});
});
//カレンダーJS
//チェック用にサンプルスクリプトを用意
//var target = document.getElementById('test');
//target.innerHTML = 'こんにちは';

var monthNum = 0 ;
var checkmonth = monthNum + 1 ;
var dateSet01;
var dateSet02;
var dateSet03;
var global_csvFile = "eventdata.csv";
function change01(){
  document.getElementById("left").style.display="none";
  document.getElementById("right").style.display="block";
};

function change02(){
  document.getElementById("left").style.display="block";
  document.getElementById("right").style.display="none";
};
// CSVファイル読み込み
window.onload = function() {
req = new XMLHttpRequest();
req.open("get", global_csvFile , true);
req.send(null);
req.onload = function(){
convertCSVtoArray(req.responseText);
}
}
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
var global_setYear = [];
var global_setLink = [];
var global_setDay = [];
var global_defaultMonth = [];
var global_setMonth = [];
var global_setUrl = [];
var checkCurrent = 0;
var result = [];
var tmp = str.split("\n");
for(var i=0;i<tmp.length;++i){
result[i] = tmp[i].split(',');
global_setYear.push(result[i][0]);
global_defaultMonth.push(result[i][1]);
global_setLink.push(result[i][2]);
global_setMonth.push(result[i][3]);
global_setDay.push(result[i][4]);
global_setUrl.push(result[i][5]);
}
var thisDate = new Date();
var presentMonth = thisDate.getMonth()+1 ;
var calendarMonth = global_defaultMonth[1];
if( isNaN(calendarMonth) ) {
calendarMonth = presentMonth;	
}
var setLink = global_setLink[1];
var monthNum = (calendarMonth - presentMonth);
var checkmonth = (monthNum + 1);
var tableHtml = '' ;
var target01 = document.getElementById("output01");
var target02 = document.getElementById("output02");
function calendar( calendarOffset ){
//var calendarOffset = 0;
// 今日の日付を取得する。
var thisDate = new Date();
// 月曜日スタートの曜日をセットする。
var thisWeekTbl = new Array( "月","火","水","木","金","土","日" );
// var thisWeekTbl = new Array( "mon","tue","wed","thu","fri","sat","sun" );	
// 月の総日数を１２ヵ月分セットする。
var thisMonthTbl= new Array( 31,28,31,30,31,30,31,31,30,31,30,31 );
// 今日の日付を変数に格納する。
var thisToday = thisDate.getDate() ;
// 今日の月を格納する。
var thisMonth = thisDate.getMonth();
var currentMonth = thisMonth;
// 西暦を取得する
var thisYear = thisDate.getFullYear();
var calendarYear = global_setYear[1];
if( isNaN(calendarYear) ) {
calendarYear = thisYear;	
}
var margeYear = calendarYear - thisYear;
margeYear = margeYear * 12;
// 今日の月に対してjsの呼び出しに入れた数値を加算する処理
thisMonth = thisMonth + calendarOffset + margeYear;
// セットした日付を加算した月に変更して新たに取得する。
thisDate.setMonth(thisMonth);
// 日付を '1日' に変えて、
thisDate.setDate(1);
// 月を取得(0月～11月)
thisMonth = thisDate.getMonth();
nextMonth = thisDate.getMonth()+1;
// '１日'の曜日を取得する。月曜日スタートなので日曜日の0を６に置き換え、他の曜日に−1の処理を加える。
var thisWeek = thisDate.getDay();
if (thisWeek == 0) {
  thisWeek = 6;
} else {
  thisWeek = thisWeek-1;
}
//var thisWeek = thisWeek-1;
// ４で割り切れる西暦の場合は閏年なので2月を２９日にする。
if (((thisYear%4)==0 && (thisYear%100)!=0) || (thisYear%400)==0){
thisMonthTbl[1] = 29;
}
// 表のセル数分定義
var thisTable = new Array(7*6);
// テーブルの中身を綺麗にする。
for(i=0; i<7*6; i++) thisTable[i]="";
for(i=0; i<thisMonthTbl[thisMonth]; i++) thisTable[i+thisWeek]= i+1;
//これより前はPC・SP共通//

//スマートフォン用の記述 この範囲以外は同じスクリプト//
var spMonth001 = thisMonth+1;
if (spMonth001 > 12) {
spMonth001 = spMonth001 - 12;
};
var spMonth002 = nextMonth+1;
if (spMonth002 > 12) {
spMonth002 = spMonth002 - 12;
};
var spMonth003 = thisMonth;
if (spMonth003 == 0) {
spMonth003 = 12;
};
var spMonth004 = nextMonth;
if (spMonth004 == 0) {
spMonth004 = 12;
};
if (calendarOffset == monthNum){
var tableSet001 = "<div class ='calendar--header calendar--backcolor__default calendar--float__left outline'>";
var tableSet002 = "</div>";
var tableSet003 = "<div class ='calendar--header__002 calendar--backcolor__default calendar--float__right outline' onclick='change01()'>";
tableHtml = tableSet001 + spMonth001 + "<span>月の花火大会</span>" + tableSet002 + tableSet003 + spMonth002 + "<span>月の花火大会</span>" + tableSet002 + "<div id ='table'><div class='row tabele--header outline'>";
}	else {
var tableSet001 = "<div class ='calendar--header__002 calendar--backcolor__default calendar--float__left outline' onclick='change02()'>";
var tableSet002 = "</div>";
var tableSet003 = "<div class ='calendar--header calendar--backcolor__default calendar--float__right outline'>";
//変数の中にHTML要素を格納する。
//thisYear + "<span>年</span>" 
tableHtml = tableSet001 + spMonth003 + "<span>月の花火大会</span>" + tableSet002 + tableSet003 + spMonth004 + "<span>月の花火大会</span>" + tableSet002 + "<div id ='table'><div class='row tabele--header outline'>";
}
//スマートフォン用の記述//

//これより後はPC・SP共通//
// １週間分のカラムをセット。
var set001;
var set002;
var set003;
var z = 0;
for( i=0; i<7; i++ ){
var set001 ="";
if ( i==6 ){
// 日曜の見出しクラスを呼び出し
var set002 = "sunday";
}else if ( i==5 ){	
// 土曜の見出しクラスを呼び出し
var set002 ="saturday";
}	else {
// 平日の見出しクラスを呼び出し
var set002 ="weekday";
}
// １０行目に書いたthisWeekTblに入れた曜日セットを呼び出し
var set003 = ( thisWeekTbl[i] );
tableHtml += '<div class='+ set002 +'>'+ set003 +'</div>';
}
tableHtml += '</div>'; 
// カレンダーの行数をセット
//曜日の番号を取得
var dateWeek = thisDate.getDay();
//月の最大日付と曜日の番号を加算
var dateNum = thisMonthTbl[thisMonth] + dateWeek;
//月の最大日付と曜日の番号を加算した数値を７で割った数を行数に設定する。デフォルトとして+1を設定。
dateSet = (dateNum / 7) ;
var monthNumber = thisMonthTbl[thisMonth];
//小数点を切り捨て。
dateSet =　Math.floor( dateSet ) ;
if (dateSet == 4) {
  dateSet = dateSet + 1;
}
//土曜日や日曜日開始の場合、日付が６行になってしまうので、２行追加の処理とデフォルトで１行追加の処理を加える。
if (monthNumber > 29){
if (thisWeek == 5 || thisWeek == 6){
  dateSet = dateSet + 1;
}
}else{
}
//行数を退避。
var dateSet_stach = dateSet;
if (dateSet < dateSet03){
  dateSet = dateSet03;
} else if (dateSet < dateSet02){
  dateSet = dateSet02;
}
//dateSet = 6;
for( i=0; i< dateSet; i++ ){	
tableHtml += "<div class='row tabele--contents'>";
//for( k=0; k<setDay.length; k++ ){
for( j=0; j<7; j++ ){
// 表の「列」のループ
thisDat = thisTable[ j + (i*7) ];
// 書きこむ内容の取得
// 今日のクラスを設定

//for (k = 0; k < monthNumber; k++) {
//target.innerHTML += i;
if ( j==5 ){	
// 土曜のセルの色
tableHtml += "<div class='saturday'>";
}else if( j==6 ){	
// 日曜のセルの色
tableHtml += "<div class='sunday'>";
}else{	
// 平日のセルの色
tableHtml += "<div class='weekday'>";
}
//global_target.innerHTML += global_setUrl[1];
for( k=0; k<global_setDay.length; k++ ){
if ( thisDat == global_setDay[k] && thisMonth+1 == global_setMonth[k]){
tableHtml += "<a href='" + global_setUrl[k] + "'>" + thisDat + "</a>";
}else{
}
}
// 日付セット
tableHtml +=  "<p>" + thisDat + "</p>";
// 列(セル)の終わり
tableHtml += "</div>";
}	
// 行の終わり
tableHtml += "</div>";
}
// 表の終わり
tableHtml += "</div>";

// 次の月のカレンダー
if (calendarOffset == monthNum) {
dateSet02 = dateSet_stach;
target01.innerHTML = tableHtml;
// 次の月のカレンダー
} else if (calendarOffset == checkmonth) {
dateSet03 = dateSet_stach;
target02.innerHTML += tableHtml;
}
}
calendar(monthNum);	
calendar(checkmonth);
calendar(monthNum);	
}


