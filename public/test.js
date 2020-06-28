function zeroize( num ) {
  return (String(num).length == 1 ? '0' : '') + num;
}

var  formatDate = function(timestamp){
      timestamp = Number(timestamp);
      
var curTimestamp = parseInt(new Date().getTime()); //当前时间戳
var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
console.log(timestampDiff)
var curDate = new Date( curTimestamp ); // 当前时间日期对象
var tmDate = new Date( timestamp );  // 参数时间戳转换成的日期对象

var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
console.log(Y)
console.log(m)
console.log(d)

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


console.log(formatDate('1593242591947'))
console.log(formatDate('1593242773025'))
