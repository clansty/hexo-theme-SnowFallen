function show_date_time() {
    window.setTimeout("show_date_time()", 1e3);
    var BirthDay = new Date("2016/07/28")
      , today = new Date
      , timeold = today.getTime() - BirthDay.getTime()
      , msPerDay = 864e5
      , e_daysold = timeold / msPerDay
      , daysold = Math.floor(e_daysold)
      , e_hrsold = 24 * (e_daysold - daysold)
      , hrsold = Math.floor(e_hrsold)
      , e_minsold = 60 * (e_hrsold - hrsold)
      , minsold = Math.floor(60 * (e_hrsold - hrsold))
      , seconds = Math.floor(60 * (e_minsold - minsold));
    span_dt_dt.innerHTML = daysold + "天" + hrsold + "小时" + minsold + "分" + seconds + "秒";
}
show_date_time();
