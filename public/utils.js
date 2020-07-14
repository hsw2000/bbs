var constellations = [
    {"Start":121,"End":220,"Name":"水平座"},    {"Start":221,"End":320,"Name":"双鱼座"},
    {"Start":321,"End":420,"Name":"白羊座"},    {"Start":421,"End":520,"Name":"金牛座"},
    {"Start":521,"End":620,"Name":"双子座"},    {"Start":621,"End":720,"Name":"巨蟹座"},
    {"Start":721,"End":820,"Name":"狮子座"},    {"Start":821,"End":920,"Name":"处女座"},
    {"Start":921,"End":1020,"Name":"天秤座"},       {"Start":1021,"End":1120,"Name":"天蝎座"},    
    {"Start":1121,"End":1220,"Name":"射手座"}    ];

//根据年份计算二月天数
function GetSpecialDays(y)
{
     if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) return 29;
     return 28;
}
function WhatIsYourConstellation(obj)
{
    /*
    判断日期有效性
    1,3,5,7,8,10,12为31天
    2月润年29，非润年28
    4,6,9,11为30天
    */
   var y = obj.getFullYear()
   var m = obj.getMonth()+1
   var d = obj.getDate()

    var daysInMonth = [31,99,31,30,31,30,31,31,30,31,30,31];
    
    //检测年份
    if(y < 1970 || y > 2099) return "滚犊子1";
    
    //检测月份
    if(m < 1 || m > 12) return "滚犊子2";
    
    //检测日期
    var mDays = daysInMonth[m-1];
    //如果是二月，要根据年份计算天数，不是二月时略过此计算
    if(m == 2)
    {
        mDays = GetSpecialDays(y)
    }

    //判断日数据是不是在月份的有效天范围
    if(d < 0 || d > mDays)  return "滚犊子3";

    //好了，走到这一步，说明上面的验证都TM过了。
    //这才判断是哪一个星座
    //星座座标等于m*100 + d
    var pos = m * 100 + d;

    for(var i in constellations)
    {
        if(pos >= constellations[i].Start && pos <= constellations[i].End)
        {
            return constellations[i].Name;
        }
    }
}

function zeroize( num ) {
  return (String(num).length == 1 ? '0' : '') + num;
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

// 传入“2020-07-12 12:45”
function formatTime(param) {
    
    var timestamp = new Date(param).getTime()
    timestamp = Number(timestamp);     
    
    var curTimestamp = parseInt(new Date().getTime()); //当前时间戳
    if(String.toString(curTimestamp).length != 13) {
        curTimestamp /= 1000
    }

    var timestampDiff =timestamp- curTimestamp; // 参数时间戳与当前时间戳相差秒数
    var curDate = new Date(curTimestamp); // 当前时间日期对象
    var tmDate = new Date(timestamp);  // 参数时间戳转换成的日期对象
    var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

    if ( timestampDiff < 60 ) { // 一分钟以内
        return "刚刚";
    } else if( timestampDiff < 3600 ) { // 一小时前之内
        return Math.floor( timestampDiff / 60 ) + "分钟前";
    } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
        return '今天' + zeroize(H) + ':' + zeroize(i);
    } else {
        var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
        if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
            return '昨天' + zeroize(H) + ':' + zeroize(i);
        } else if ( curDate.getFullYear() == Y ) {
            return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        } else {
            return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        }
    } 
}
// 转换成 yyyy-MM-dd
function formatDate(fmt, date) {
    let ret;
    let m = (date.getMonth() + 1)
    const opt = {
        "y+": date.getFullYear().toString(),        // 年
        "m+": m.toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

export default {
    formatDate,
    formatTime,
    getCookie,
    WhatIsYourConstellation
}