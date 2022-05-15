var proxy = 'SOCKS5 127.0.0.1:1080';
var rules = [
    [
        [],
        []
    ],
    [
        [],
        [
		//Facebook
			"accountkit.com",
			"atdmt.com",
			"atlassolutions.com",
			"facebook-dns.com",
			"facebook-hardware.com",
			"facebook.com",
			"facebook.net",
			"facebookmail.com",
			"fb.com",
			"fb.gg",
			"fb.watch",
			"fbcdn.net",
			"fbe2e.com",
			"fbinfra.net",
			"fbpigeon.com",
			"fbsbx.com",
			"fbwat.ch",
			"m-freeway.com",
			"parse.com",
			"wit.ai",
			
		//Twitter
			"ads-twitter.com",
			"periscope.tv",
			"pscp.tv",
			"t.co",
			"tweetdeck.com",
			"twimg.com",
			"twitpic.com",
			"twitter.co",
			"twitter.com",
			"twitterinc.com",
			"twitteroauth.com",
			"twitterstat.us",
			"twttr.com",
			
		//Instagram
			"cdninstagram.com",
			"ig.me",
			"instagram.com",
			
		//LinkedIn
			"bizographics.com",
			"l-0005.dc-msedge.net",
			"l-0005.l-msedge.net",
			"licdn.cn",
			"licdn.com",
			"linkedin.at",
			"linkedin.cn",
			"linkedin.com",
			"lnkd.in",

		//BBC
			"bbc.com",
			"bbc.co.uk",
			"bbci.co.uk",
			"bbcmedia.co.uk",
			"bbc.net.uk",
			"bbcpersian.com",
			"bbctvapps.co.uk",

		//Others
			"dw.com",
			"dw.de",
			"javmost.com",
			"chaturbate.com",
			"javhdporn.net",
			"highporn.net",
			"javhub.net",
			"javfull.net",
			"rutracker.org",
			"upornia.com",
			"thepiratebay.org",
			"svoboda.org",
			"razer.com",
			"ggpht.com",
			"dmm.co.jp",
			"pornzog.com",
			"rfi.fr"
        ]
    ]
];

var lastRule = '';

function FindProxyForURL(url, host) {
    for (var i = 0; i < rules.length; i++) {
        ret = testHost(host, i);
        if (ret != undefined)
            return ret;
    }
    return 'DIRECT';
}

function testHost(host, index) {
    for (var i = 0; i < rules[index].length; i++) {
        for (var j = 0; j < rules[index][i].length; j++) {
            lastRule = rules[index][i][j];
            if (host == lastRule || host.endsWith('.' + lastRule))
                return i % 2 == 0 ? 'DIRECT' : proxy;
        }
    }
    lastRule = '';
}

// REF: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
  };
}
