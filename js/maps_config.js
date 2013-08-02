function MapsConfig() {
  var BACKGROUND = {
    general  : 635,
    navigator: 413,
    chrome   : 428,
    firefox  : 458
  }

  var MODAL = {
    general  : { height: 480, container: 380 },
    navigator: { height: 280, container: 225 },
    chrome   : { height: 290, container: 235 },
    firefox  : { height: 320, container: 270 }
  }

  var TIP = {
    general  : "tip-animation-general",
    navigator: "tip-animation-navigator",
    chrome   : "tip-animation-chrome",
    firefox  : "tip-animation-firefox"
  }

  var SUB_MENU = {
    general  : 598,
    navigator: 376,
    chrome   : 391,
    firefox  : 421
  }

  this.apply = function() {
    $(".background").height(this.background);

    $(".modal").height(this.modal.height);
    $(".modal .container").height(this.modal.container);

    $("#subMenus nav").css("top", this.subMenu);
  }

  this.setBackground = function(section) {
    $(".background").attr("src", "img/mapas/" + section + "/bg-" + this.background + ".jpg");
  }

  this.setMeasures = function() {
    var browser = "general";

    if (userAgentContains("Android")) { //if Android
      if (userAgentContains("Safari")) {
        if (userAgentContains("Chrome")) {
          browser = "chrome";
        } else {
          browser = "navigator";
        }
      }

      if (userAgentContains("Firefox")) {
        browser = "firefox";
      }
    } //if Android

    this.background = BACKGROUND[browser];
    this.modal = MODAL[browser];
    this.tip = TIP[browser];
    this.subMenu = SUB_MENU[browser];
  }

  this.setMeasures();

  function userAgentContains(text) {
    return navigator.userAgent.toLowerCase().indexOf(text.toLowerCase()) > -1;
  }
}