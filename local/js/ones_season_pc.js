
//B-1新着情報（写真）の最大高さの値を取得してコンテンツの高さを揃えるJS
$(window).on('load resize', function(){
	$('#new--information__photo').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.conteiner--box__001').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.conteiner--box__001').height(maxHeight);
	});
});

//Y 記事誘導枠の最大高さの値を取得してコンテンツの高さを揃えるJS
$(window).on('load resize', function(){
	$('#contents--article__induction').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.conteiner--box__area a').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.conteiner--box__area a').height(maxHeight);
	});
});
//Z-1 関連特集（正方形）の最大高さの値を取得してコンテンツの高さを揃えるJS
$(window).on('load resize', function(){
	$('.contents--component__011').each(function(i, box) {
		var maxHeight = 0;
		$(box).find('.conteiner--box__area a').each(function() {
			if ($(this).height() > maxHeight) maxHeight = $(this).height();
		});
		$(box).find('.conteiner--box__area a').height(maxHeight);
	});
});





//カレンダーJS
var global_setYear = [];
var global_setLink = [];
var global_setDay = [];
var global_setMonth = [];
var global_setUrl = [];
var global_calendar_month = [];
var global_dateSet = 0 ;
var dateSet01;
var dateSet02;
var dateSet03;
function add(){
  monthNum = monthNum + 1;
  checkmonth = monthNum + 1 ;
	convertCSVtoArray(req.responseText);
};
function prev(){
  checkmonth = checkmonth - 1 ;
  monthNum = checkmonth - 1;
};
function reset(){
  monthNum = 0;
  checkmonth = monthNum + 1 ;
};
	
// CSVファイル読み込み
window.onload = function() {
req = new XMLHttpRequest();
req.open("get", "sample.csv", true);
req.send(null);
req.onload = function(){
convertCSVtoArray(req.responseText);
}
}
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
var result = [];
var tmp = str.split("\n");
for(var i=0;i<tmp.length;++i){
result[i] = tmp[i].split(',');
global_setYear.push(result[i][0]);
global_setLink.push(result[i][1]);
global_setMonth.push(result[i][2]);
global_setDay.push(result[i][3]);
global_setUrl.push(result[i][4]);
}
var thisDate = new Date();
var presentMonth = thisDate.getMonth()+1 ;
var calendarMonth = global_setMonth[1];
var setLink = global_setLink[1];
var monthNum = (calendarMonth - presentMonth);
var checkmonth = (monthNum - monthNum + 1);
//var target = document.getElementById('test');
//target.innerHTML = setLink;
//target.innerHTML += calendarMonth;
//target.innerHTML += monthNum;
//target.innerHTML += checkmonth;
var tableHtml = '' ;
var target01 = document.getElementById("output01");
var target02 = document.getElementById("output02");

function calendar( calendarOffset ){

//var calendarOffset = 0;
//チェック用にサンプルスクリプトを用意
//var target = document.getElementById('test');
//target.innerHTML = 'こんにちは';
// 今日の日付を取得する。

// 月曜日スタートの曜日をセットする。
var thisWeekTbl = new Array( "月","火","水","木","金","土","日" );
// var thisWeekTbl = new Array( "mon","tue","wed","thu","fri","sat","sun" );	
// 月の総日数を１２ヵ月分セットする。
var thisMonthTbl= new Array( 31,28,31,30,31,30,31,31,30,31,30,31 );
// 今日の日付を変数に格納する。
var thisToday = thisDate.getDate() ;
// 今日の月を格納する。
var thisMonth = thisDate.getMonth() ;
// 日付を '1日' に変えて、
thisDate.setDate(1);
// 今日の月に対してjsの呼び出しに入れた数値を加算する処理
var thisMonth = thisMonth + calendarOffset;
// セットした日付を加算した月に変更して新たに取得する。
thisDate.setMonth(thisMonth);
// 西暦を取得する
var thisYear = thisDate.getFullYear();


// 月を取得(0月～11月)
//thisMonth = thisDate.getMonth();
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
var tableSet001 = "<div class ='calendar--header eventtitle--backcolor__default outline'><a href='" + global_setLink[1] +"'>";
var tableSet002 = "</a></div><div id ='table'>";
//変数の中にHTML要素を格納する。
//thisYear + "<span>年</span>" 
tableHtml = tableSet001 + (thisMonth+1) + "<span>月の花火大会</span>" + tableSet002 + "<div class='row tabele--header outline'>";
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
//var target = document.getElementById('test');
//target.innerHTML = monthNumber;

//小数点を切り捨て。
dateSet =　Math.floor( dateSet ) ;
if (dateSet == 4) {
  dateSet = dateSet + 1;
}
//土曜日や日曜日開始の場合、日付が６行になってしまうので、２行追加の処理とデフォルトで１行追加の処理を加える。
if (monthNumber > 30){
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
//var target = document.getElementById('test');
//for (k = 0; k < monthNumber; k++) {
//target.innerHTML += i;
if ( thisDat == thisToday && calendarOffset == 0 ){	
tableHtml += "<div class='today'>";
}else if( j==5 ){	
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
//if ( thisDat == global_setDay[k] && thisMonth+1 == global_setMonth[k] && thisYear == global_setYear[k]){
if ( thisDat == global_setDay[k] && thisMonth+1 == global_setMonth[k]){
tableHtml += "<a href='" + global_setUrl[k] + "'>" + thisDat + "</a>";
}else{
}
}
// 日付セット
tableHtml += "<p>" + thisDat + "</p>";
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
target02.innerHTML = tableHtml;
}
}
	
calendar(monthNum);	
calendar(checkmonth);
}
