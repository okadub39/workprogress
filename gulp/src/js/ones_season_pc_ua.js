//ユーザーエージェント判定で表示・非表示をCSSで切り替えるスクリプト
	var sp__only__001 = document.getElementById('sp--only_001');
	var sp__only__002 = document.getElementById('sp--only_002');
	var sp__only__003 = document.getElementById('sp--only_003');
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0) && (ua.indexOf('Mobile') > 0) || ua.indexOf('Windows Phone') > 0) {
		sp__only__001.classList.add('display--block');
		sp__only__002.classList.add('display--block');
		sp__only__003.classList.add('display--block');
	}else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
		sp__only__001.classList.add('display--block');
		sp__only__002.classList.add('display--block');
		sp__only__003.classList.add('display--block');
	}else{
		sp__only__001.classList.add('display--block');
		sp__only__002.classList.add('display--block');
		sp__only__003.classList.add('display--block');
	}