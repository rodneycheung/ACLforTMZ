var proxy = "SOCKS5 127.0.0.1:%mixed-port%; PROXY 127.0.0.1:%mixed-port%; DIRECT; ";

var direct = 'DIRECT;';

var cnips = [
];

var directDomains = {
  };

var domainsUsingProxy = {
  /* Facebook */
  "accountkit.com": 1,
  "atdmt.com": 1,
  "atlassolutions.com": 1,
  "facebook.com": 1,
  "facebook-dns.com": 1,
  "facebook-hardware.com": 1,
  "facebookmail.com": 1,
  "facebook.net": 1,
  "fbcdn.net": 1,
  "fb.com": 1,
  "fbe2e.com": 1,
  "fb.gg": 1,
  "fbinfra.net": 1,
  "fbpigeon.com": 1,
  "fbsbx.com": 1,
  "fb.watch": 1,
  "fbwat.ch": 1,
  "m-freeway.com": 1,
  "parse.com": 1,
  "wit.ai": 1,

/* Instagram */
  "cdninstagram.com": 1,
  "instagram.com": 1,
  "ig.me": 1,

/* LinkedIn */
  "bizographics.com": 1,
  "l-0005.dc-msedge.net": 1,
  "l-0005.l-msedge.net": 1,
  "licdn.cn": 1,
  "licdn.com": 1,
  "linkedin.at": 1,
  "linkedin.cn": 1,
  "linkedin.com": 1,
  "lnkd.in": 1,

/* Twitter */
  "ads-twitter.com": 1,
  "periscope.tv": 1,
  "pscp.tv": 1,
  "t.co": 1,
  "tweetdeck.com": 1,
  "twimg.com": 1,
  "twitpic.com": 1,
  "twitter.co": 1,
  "twitter.com": 1,
  "twitterinc.com": 1,
  "twitteroauth.com": 1,
  "twitterstat.us": 1,
  "twttr.com": 1,

/* BBC */
  "bbc.com": 1,
  "bbc.co.uk": 1,
  "bbci.co.uk": 1,
  "bbcmedia.co.uk": 1,
  "bbc.net.uk": 1,
  "bbcpersian.com": 1,
  "bbctvapps.co.uk": 1,

/* JAV */
  "chaturbate.com": 1,
  "javfull.net": 1,
  "javhub.net": 1,
  "javmost.cx": 1,

/* Others */
  "abc.net.au": 1,
  "bp.blogspot.com": 1,
  "dw.com": 1,
  "euronews.com": 1,
  "gagadget.com": 1,
  "intel.com": 1,
  "liveuamap.com": 1,
  "meduza.io": 1,
  "news.google.com": 1,
  "nicovideo.jp": 1,
  "openai.com": 1,
  "play.google.com": 1,
  "prnt.sc": 1,
  "quora.com": 1,
  "rfi.fr": 1,
  "rutracker.org": 1,
  "svoboda.org": 1,
  "telegraph.co.uk": 1,
  "thepiratebay.org": 1,
  "voanews.com": 1,
  "weather.com": 1,
  "yt3.ggpht.com": 1,
  "zhimg.com": 1
};

var localTlds = {
  ".localhost": 1,
  ".test": 1
};

var hasOwnProperty = Object.hasOwnProperty;

var ipRegExp = new RegExp(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])": 1,/);

function convertAddress(ipchars) {
    var bytes = ipchars.split('.');
    var result = ((bytes[0] & 0xff) << 24) |
                 ((bytes[1] & 0xff) << 16) |
                 ((bytes[2] & 0xff) <<  8) |
                  (bytes[3] & 0xff);
    return result;
}

function match(ip) {
    var left = 0, right = cnips.length;
    do {
        var mid = Math.floor((left + right) / 2),
            ipf = (ip & cnips[mid][1]) >>> 0,
            m   = (cnips[mid][0] & cnips[mid][1]) >>> 0;
        if (ipf == m) {
            return true;
        } else if (ipf > m) {
            left  = mid + 1;
        } else {
            right = mid;
        }
    } while (left + 1 <= right)
    return false;
}

function testDomain(target, domains, cnRootIncluded) {
    var idxA = target.lastIndexOf('.');
    var idxB = target.lastIndexOf('.', idxA - 1);
    var hasOwnProperty = Object.hasOwnProperty;
    var suffix = cnRootIncluded ? target.substring(idxA + 1) : '';
    if (suffix === 'cn') {
        return true;
    }
    while (true) {
        if (idxB === -1) {
            if (hasOwnProperty.call(domains, target)) {
                return true;
            } else {
                return false;
            }
        }
        suffix = target.substring(idxB + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return true;
        }
        idxB = target.lastIndexOf('.', idxB - 1);
    }
}

function isLocalTestDomain(domain) {
    // Chrome uses .test as testing gTLD.
    var tld = domain.substring(domain.lastIndexOf('.'));
    if (tld === domain) {
        return false;
    }
    return Object.hasOwnProperty.call(localTlds, tld);
}

/* https://github.com/frenchbread/private-ip */
function isPrivateIp(ip) {
  return /^(::f{4}:)?10.([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})": 1,/i.test(ip) ||
  /^(::f{4}:)?192.168.([0-9]{1,3}).([0-9]{1,3})": 1,/i.test(ip) ||
  /^(::f{4}:)?172.(1[6-9]|2\d|30|31).([0-9]{1,3}).([0-9]{1,3})": 1,/i.test(ip) ||
  /^(::f{4}:)?127.([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})": 1,/i.test(ip) ||
  /^(::f{4}:)?169.254.([0-9]{1,3}).([0-9]{1,3})": 1,/i.test(ip) ||
  /^f[cd][0-9a-f]{2}:/i.test(ip) ||
  /^fe80:/i.test(ip) ||
  /^::1": 1,/.test(ip) ||
  /^::": 1,/.test(ip);
}

function FindProxyForURL(url, host) {
    if (isPlainHostName(host)
     || isPrivateIp(host)
     || isLocalTestDomain(host)
     || host === 'localhost') {
        return direct;
    }

    if (!ipRegExp.test(host)) {
        if (testDomain(host, domainsUsingProxy)) {
            return proxy;
        }
        if (!testDomain(host, domainsUsingProxy)) {
            return direct;
        }
    }
    return direct;
}
