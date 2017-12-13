/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }

    setInterval(function(){
      var d = new Date();
      var h = d.getHours() < 10 ? '0'+d.getHours() : d.getHours();
      var m = d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes();
      var s = d.getSeconds() < 10 ? '0'+d.getSeconds() : d.getSeconds();
      $('#currentTime').html(h+':'+m+':'+s);
      function SecondsTohhmmss(totalSeconds) {
        var hours   = Math.floor(totalSeconds / 3600);
        var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
        var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
        // round seconds
        seconds = Math.round(seconds * 100) / 100;
        var result = (hours < 10 ? "0" + hours : hours);
        result += " hrs, " + (minutes < 10 ? "0" + minutes : minutes);
        result += " mins, <br>" + (seconds < 10 ? "0" + seconds : seconds) + ' secs';
        return result;
      }
      $.getJSON('/api/system/uptime',function (data) {
        $('#uptime-disp').html(SecondsTohhmmss(data));
      });
    },1000);

    function formatBytes(a,b){
      if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));
      return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]
    }
    function getDisks() {
      $.getJSON('/api/system/fsSize',function (data) {
        for(var did in data){
          var item = data[did],ptype = 'success';
          if(item.use > 40){ptype = 'warning';}
          if(item.use > 80){ptype = 'danger';}
          var out = '<tr><td>'+item.fs+' | Type: '+item.type+'</td></tr>';
          out += '<tr><td>Mount: '+item.mount+'</td></tr>';
          out += '<tr><td><div class="progress"><div class="progress-bar progress-bar-'+ptype+' progress-bar-striped" role="progressbar" aria-valuenow="'+item.used+'" aria-valuemin="0" aria-valuemax="'+item.size+'" style="width:'+item.use+'%;">'+item.use+'%</div></div></td></tr>';
          $('#storage-disp').append(out);
        }
        $('#storagespin').hide();
      });
    }
    getDisks();

    $.getJSON('/api/system/mem',function (data) {
      var total = data.total;
      var used = data.used;
      var meh = ((data.total - data.available)/data.total)*100;
      var ptype = 'success';
      if(meh > 40){ptype = 'warning';}
      if(meh > 80){ptype = 'danger';}
      var free = formatBytes(data.available);
      var swaptotal = data.swaptotal;
      var swapused = data.swapused;
      var out = '<tr><td><div class="progress">';
      out += '<div class="progress-bar progress-bar-'+ptype+' progress-bar-striped" role="progressbar" aria-valuenow="'+meh+'" aria-valuemin="0" aria-valuemax="100" style="width: '+meh+'%">';
      out += '<span class="sr-only">'+meh+'% Complete (success)</span></div>';
      out += '</div></td></tr>';
      out += '<tr><td>Free: '+formatBytes(data.available)+'</td></tr>';
      out += '<tr><td>Total: '+formatBytes(data.total)+'</td></tr>';
      if(data.swaptotal > 0){
        out += '<tr><td>Swap Total: '+formatBytes(data.swaptotal)+'</td></tr>';
        out += '<tr><td>Swap Used : '+formatBytes(data.swapused)+'</td></tr>';
      }
      $('#mem-disp').append(out);
      $('#memspin').hide();
    });
    $.getJSON('/api/system/osInfo',function (data) {
      for(var id in data){
        $('#'+id+'-disp').html(data[id]);
      }
    });
    $.getJSON('/api/system/networkInterfaces',function (data) {
      for(var id in data){
        var item = data[id];
        if(item.iface != 'lo'){
          var out = '<tr><td>'+item.iface+' | mac: '+item.mac+'</td></tr>';
          out += '<tr><td>ip4: '+item.ip4+'</td></tr>';
          out += '<tr><td>ip6: '+item.ip6+'</td></tr>';
        }
        $('#net-disp').append(out);
      }
      $('#netspin').hide();
    });
    function getbtcblkcnt() {
      $.getJSON('https://blockchain.info/q/getblockcount',function (data) {
        $('#btc_ext_blk_cnt').html(data);
      })
    }
    getbtcblkcnt();
    setInterval(getbtcblkcnt,1000 * 60 * 5);
});
