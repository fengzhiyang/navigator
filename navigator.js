var browser = (function () {
    return function () {
        var user_agent = navigator.userAgent.toLowerCase();
        var browser_info = function () {
            return {
                onLine: navigator.onLine,
                language: navigator.language,
                appCodeName: navigator.appCodeName,
                appName: navigator.appName,
                browser_type: get_brower_info()
            }
        }
        var get_brower_info = function () {
            var browser_type = '';
            while (!browser_type) {
                /chrome/.test(user_agent) ? browser_type = 'chrome' : null;
                /ipad/.test(user_agent) ? browser_type = 'ipad' : null;
                /iphone/.test(user_agent) ? browser_type = 'iphone' : null;
                /android/.test(user_agent) ? browser_type = 'android' : null;
                /msie/.test(user_agent) || /trident/.test(user_agent) ? browser_type = 'ie' : null;
                /firefox/.test(user_agent) ? browser_type = 'firefox' : null;
                /ubrowser/.test(user_agent) ? browser_type = 'uc' : null;
                /opera/.test(user_agent) ? browser_type = 'opera' : null;
                /bidubrowser/.test(user_agent) ? browser_type = 'baidu' : null;
                /metasr/.test(user_agent) ? browser_type = 'sougou' : null;
                /maxthon/.test(user_agent) ? browser_type = '遨游' : null;
                user_agent.match(/MicroMessenger/i) == "micromessenger" ? browser_type = 'weicat' : null;
                user_agent.match(/WeiBo/i) == "micromessenger" ? browser_type = 'weibo' : null;
                user_agent.match(/QQ/i) == "qq" ? browser_type = 'qq' : null;

            }
            return browser_type
        }
        var isMobile = function name() {
            return /android|webos|iphone|ipod|blackberry/i.test(navigator.userAgent)
        }
        return { browser_info, isMobile }
    }
})()
