function m_footer(){
	sel = "";
	sel += '<table border="0" cellpadding="0" cellspacing="0">';
	sel += '<tr>';
	sel += '<td><img src="/portal/shareimgs/footer200801.gif" width="783" height="61" border="0" alt="" usemap="#footer"><map name="footer"><area';
	sel += ' shape="rect" coords="119,10,273,25" href="/portal/member/privacy.cfm" alt="プライバシーについて"><area';
	sel += ' shape="rect" coords="281,10,350,25" href="/portal/member/copyright.cfm" alt="コピーライト"><area';
	sel += ' shape="rect" coords="358,10,463,25" href="/portal/member/browser.cfm" alt="パソコンのせってい"><area';
	sel += ' shape="rect" coords="471,10,563,25" href="/portal/member/faq/faq.cfm" alt="よくあるしつもん"><area';
	sel += ' shape="rect" coords="570,10,629,25" href="/portal/member/oyakusoku.cfm" alt="おやくそく"></map></td>';
	sel += '</tr>';
	sel += '</table>';
	document.write(sel);
}

function h_footer(){
	sel = "";
	sel += '<table border="0" cellpadding="0" cellspacing="0">';
	sel += '<tr>';
	sel += '<td><img src="/portal/shareimgs/footer200801.gif" width="783" height="61" border="0" alt="" usemap="#footer"><map name="footer"><area';
	sel += ' shape="rect" coords="119,10,273,25" href="/portal/html/privacy.html" alt="プライバシーについて"><area';
	sel += ' shape="rect" coords="281,10,350,25" href="/portal/html/copyright.html" alt="コピーライト"><area';
	sel += ' shape="rect" coords="358,10,463,25" href="/portal/html/browser.html" alt="パソコンのせってい"><area';
	sel += ' shape="rect" coords="471,10,563,25" href="/portal/html/faq/faq.cfm" alt="よくあるしつもん"><area';
	sel += ' shape="rect" coords="570,10,629,25" href="/portal/html/oyakusoku.html" alt="おやくそく"></map></td>';
	sel += '</tr>';
	sel += '</table>';
	document.write(sel);
}

function s_footer(IPADDSERV,isForce){
	IPADDTOP      = IPADDSERV + "portal/top.cfm";
	IPADDPRI      = IPADDSERV + "portal/member/privacy.cfm";
	IPADDCOPY     = IPADDSERV + "portal/member/copyright.cfm";
	IPADDBRO      = IPADDSERV + "portal/member/browser.cfm";
	IPADDYAK      = IPADDSERV + "portal/member/oyakusoku.cfm";	
	
	if(isForce == 1){
		IPADDFAQ      = IPADDSERV + "portal/html/faq/faq.cfm";
	}else{
		IPADDFAQ      = IPADDSERV + "portal/member/faq/faq.cfm";				
	}

	sel = "";
	sel += '<table border="0" cellpadding="0" cellspacing="0">';
	sel += '<tr>';
	sel += '<td><img src="/portal/shareimgs/footer200801.gif" width="783" height="61" border="0" alt="" usemap="#footer"><map name="footer"><area';
	sel += ' shape="rect" coords="119,10,273,25" href="' + IPADDPRI + '" alt="プライバシーについて"><area';
	sel += ' shape="rect" coords="281,10,350,25" href="' + IPADDCOPY + '" alt="コピーライト"><area';
	sel += ' shape="rect" coords="358,10,463,25" href="' + IPADDBRO + '" alt="パソコンのせってい"><area';
	sel += ' shape="rect" coords="471,10,563,25" href="' + IPADDFAQ + '" alt="よくあるしつもん"><area';
	sel += ' shape="rect" coords="570,10,629,25" href="' + IPADDYAK + '" alt="おやくそく"></map></td>';
	sel += '</tr>';
	sel += '</table>';
	document.write(sel);
}