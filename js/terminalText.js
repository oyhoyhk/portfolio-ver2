function terminalText() {
  $("#introText").t({
    speed: 60,
    speed_vary: true,
    delay: false,
    mistype: false,
    locale: "en",
    caret: true,
    blink: true,
    blink_perm: true,
    tag: "span",
    pause_on_click: false,
    repeat: false,
    init: function(elem) {},
    typing: function(elem, chars_total, chars_left, char) {},
    fin: function(elem) {}
  });
}
