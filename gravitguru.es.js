import "./index.css";
const r = `
.icon-activity-circle:before {
  content: "\\edbd";
}
.icon-activity-heart-circle:before {
  content: "\\edbe";
}
.icon-activity-heart-square:before {
  content: "\\edbf";
}
.icon-activity-notification-circle:before {
  content: "\\edc0";
}
.icon-activity-notification-square:before {
  content: "\\edc1";
}
.icon-activity-square:before {
  content: "\\edc2";
}
.icon-activity-star-circle:before {
  content: "\\edc3";
}
.icon-activity-star-square:before {
  content: "\\edc4";
}
.icon-address-book:before {
  content: "\\edc5";
}
.icon-airplay:before {
  content: "\\edc6";
}
.icon-airplay-alt:before {
  content: "\\edc7";
}
.icon-alarm-check:before {
  content: "\\edc8";
}
.icon-alarm-check-alt:before {
  content: "\\edc9";
}
.icon-alarm-clock:before {
  content: "\\edca";
}
.icon-alarm-clock-alt:before {
  content: "\\edcb";
}
.icon-alarm-clock-empty:before {
  content: "\\edcc";
}
.icon-alarm-edit:before {
  content: "\\edcd";
}
.icon-alarm-minus:before {
  content: "\\edce";
}
.icon-alarm-minus-alt:before {
  content: "\\edcf";
}
.icon-alarm-plus:before {
  content: "\\edd0";
}
.icon-alarm-plus-alt:before {
  content: "\\edd1";
}
.icon-alarm-times:before {
  content: "\\edd2";
}
.icon-alarm-times-alt:before {
  content: "\\edd3";
}
.icon-angle-down:before {
  content: "\\edd4";
}
.icon-angle-down-circle:before {
  content: "\\edd5";
}
.icon-angle-down-small:before {
  content: "\\edd6";
}
.icon-angle-down-square:before {
  content: "\\edd7";
}
.icon-angle-left:before {
  content: "\\edd8";
}
.icon-angle-left-circle:before {
  content: "\\edd9";
}
.icon-angle-left-small:before {
  content: "\\edda";
}
.icon-angle-left-square:before {
  content: "\\eddb";
}
.icon-angle-right:before {
  content: "\\eddc";
}
.icon-angle-right-circle:before {
  content: "\\eddd";
}
.icon-angle-right-small:before {
  content: "\\edde";
}
.icon-angle-right-square:before {
  content: "\\eddf";
}
.icon-angles-down:before {
  content: "\\ede0";
}
.icon-angles-down-small:before {
  content: "\\ede1";
}
.icon-angles-down-up:before {
  content: "\\ede2";
}
.icon-angles-left:before {
  content: "\\ede3";
}
.icon-angles-left-right:before {
  content: "\\ede4";
}
.icon-angles-left-small:before {
  content: "\\ede5";
}
.icon-angles-right:before {
  content: "\\ede6";
}
.icon-angles-right-small:before {
  content: "\\ede7";
}
.icon-angles-up:before {
  content: "\\ede8";
}
.icon-angles-up-small:before {
  content: "\\ede9";
}
.icon-angle-up:before {
  content: "\\edea";
}
.icon-angle-up-circle:before {
  content: "\\edeb";
}
.icon-angle-up-small:before {
  content: "\\edec";
}
.icon-angle-up-square:before {
  content: "\\eded";
}
.icon-archive:before {
  content: "\\edee";
}
.icon-archway:before {
  content: "\\edef";
}
.icon-arrow-back:before {
  content: "\\edf0";
}
.icon-arrow-back-alt:before {
  content: "\\edf1";
}
.icon-arrow-back-circle:before {
  content: "\\edf2";
}
.icon-arrow-back-circle-alt:before {
  content: "\\edf3";
}
.icon-arrow-back-square:before {
  content: "\\edf4";
}
.icon-arrow-back-square-alt:before {
  content: "\\edf5";
}
.icon-arrow-down:before {
  content: "\\edf6";
}
.icon-arrow-down-arrow-up:before {
  content: "\\edf7";
}
.icon-arrow-down-arrow-up-circle:before {
  content: "\\edf8";
}
.icon-arrow-down-arrow-up-square:before {
  content: "\\edf9";
}
.icon-arrow-down-circle:before {
  content: "\\edfa";
}
.icon-arrow-down-from-line:before {
  content: "\\edfb";
}
.icon-arrow-down-left:before {
  content: "\\edfc";
}
.icon-arrow-down-left-circle:before {
  content: "\\edfd";
}
.icon-arrow-down-left-small:before {
  content: "\\edfe";
}
.icon-arrow-down-left-square:before {
  content: "\\edff";
}
.icon-arrow-down-right:before {
  content: "\\ee00";
}
.icon-arrow-down-right-circle:before {
  content: "\\ee01";
}
.icon-arrow-down-right-small:before {
  content: "\\ee02";
}
.icon-arrow-down-right-square:before {
  content: "\\ee03";
}
.icon-arrow-down-small:before {
  content: "\\ee04";
}
.icon-arrow-down-square:before {
  content: "\\ee05";
}
.icon-arrow-down-to-line:before {
  content: "\\ee06";
}
.icon-arrow-export:before {
  content: "\\ee07";
}
.icon-arrow-forward:before {
  content: "\\ee08";
}
.icon-arrow-forward-alt:before {
  content: "\\ee09";
}
.icon-arrow-forward-circle:before {
  content: "\\ee0a";
}
.icon-arrow-forward-circle-alt:before {
  content: "\\ee0b";
}
.icon-arrow-forward-square:before {
  content: "\\ee0c";
}
.icon-arrow-forward-square-alt:before {
  content: "\\ee0d";
}
.icon-arrow-import:before {
  content: "\\ee0e";
}
.icon-arrow-left:before {
  content: "\\ee0f";
}
.icon-arrow-left-arrow-right:before {
  content: "\\ee10";
}
.icon-arrow-left-arrow-right-circle:before {
  content: "\\ee11";
}
.icon-arrow-left-arrow-right-square:before {
  content: "\\ee12";
}
.icon-arrow-left-circle:before {
  content: "\\ee13";
}
.icon-arrow-left-from-line:before {
  content: "\\ee14";
}
.icon-arrow-left-small:before {
  content: "\\ee15";
}
.icon-arrow-left-square:before {
  content: "\\ee16";
}
.icon-arrow-left-to-line:before {
  content: "\\ee17";
}
.icon-arrow-reply:before {
  content: "\\ee18";
}
.icon-arrow-right:before {
  content: "\\ee19";
}
.icon-arrow-right-circle:before {
  content: "\\ee1a";
}
.icon-arrow-right-from-line:before {
  content: "\\ee1b";
}
.icon-arrow-right-small:before {
  content: "\\ee1c";
}
.icon-arrow-right-square:before {
  content: "\\ee1d";
}
.icon-arrow-right-to-line:before {
  content: "\\ee1e";
}
.icon-arrows-compress:before {
  content: "\\ee1f";
}
.icon-arrows-expand:before {
  content: "\\ee20";
}
.icon-arrow-share:before {
  content: "\\ee21";
}
.icon-arrows-left-right:before {
  content: "\\ee22";
}
.icon-arrows-move:before {
  content: "\\ee23";
}
.icon-arrows-repeat:before {
  content: "\\ee24";
}
.icon-arrows-repeat-circle:before {
  content: "\\ee25";
}
.icon-arrows-repeat-square:before {
  content: "\\ee26";
}
.icon-arrows-up-down:before {
  content: "\\ee27";
}
.icon-arrow-turn-down-left:before {
  content: "\\ee28";
}
.icon-arrow-turn-down-right:before {
  content: "\\ee29";
}
.icon-arrow-turn-left-down:before {
  content: "\\ee2a";
}
.icon-arrow-turn-left-up:before {
  content: "\\ee2b";
}
.icon-arrow-turn-right-down:before {
  content: "\\ee2c";
}
.icon-arrow-turn-right-up:before {
  content: "\\ee2d";
}
.icon-arrow-turn-up-left:before {
  content: "\\ee2e";
}
.icon-arrow-turn-up-right:before {
  content: "\\ee2f";
}
.icon-arrow-up:before {
  content: "\\ee30";
}
.icon-arrow-up-circle:before {
  content: "\\ee31";
}
.icon-arrow-up-from-line:before {
  content: "\\ee32";
}
.icon-arrow-up-left:before {
  content: "\\ee33";
}
.icon-arrow-up-left-circle:before {
  content: "\\ee34";
}
.icon-arrow-up-left-small:before {
  content: "\\ee35";
}
.icon-arrow-up-left-square:before {
  content: "\\ee36";
}
.icon-arrow-up-right:before {
  content: "\\ee37";
}
.icon-arrow-up-right-circle:before {
  content: "\\ee38";
}
.icon-arrow-up-right-small:before {
  content: "\\ee39";
}
.icon-arrow-up-right-square:before {
  content: "\\ee3a";
}
.icon-arrow-up-small:before {
  content: "\\ee3b";
}
.icon-arrow-up-square:before {
  content: "\\ee3c";
}
.icon-arrow-up-to-line:before {
  content: "\\ee3d";
}
.icon-at:before {
  content: "\\ee3e";
}
.icon-atom:before {
  content: "\\ee3f";
}
.icon-award:before {
  content: "\\ee40";
}
.icon-award-check:before {
  content: "\\ee41";
}
.icon-award-star:before {
  content: "\\ee42";
}
.icon-backpack:before {
  content: "\\ee43";
}
.icon-backward:before {
  content: "\\ee44";
}
.icon-badge:before {
  content: "\\ee45";
}
.icon-badge-check:before {
  content: "\\ee46";
}
.icon-badge-discount:before {
  content: "\\ee47";
}
.icon-badge-discount-alt:before {
  content: "\\ee48";
}
.icon-badge-dollar:before {
  content: "\\ee49";
}
.icon-badge-like:before {
  content: "\\ee4a";
}
.icon-ban:before {
  content: "\\ee4b";
}
.icon-bandage:before {
  content: "\\ee4c";
}
.icon-bank:before {
  content: "\\ee4d";
}
.icon-battery-bolt:before {
  content: "\\ee4e";
}
.icon-battery-empty:before {
  content: "\\ee4f";
}
.icon-battery-full:before {
  content: "\\ee50";
}
.icon-battery-half:before {
  content: "\\ee51";
}
.icon-bed:before {
  content: "\\ee52";
}
.icon-bell:before {
  content: "\\ee53";
}
.icon-bell-exclamation:before {
  content: "\\ee54";
}
.icon-bell-minus:before {
  content: "\\ee55";
}
.icon-bell-notification:before {
  content: "\\ee56";
}
.icon-bell-on:before {
  content: "\\ee57";
}
.icon-bell-plus:before {
  content: "\\ee58";
}
.icon-bell-slash:before {
  content: "\\ee59";
}
.icon-bell-times:before {
  content: "\\ee5a";
}
.icon-bezier:before {
  content: "\\ee5b";
}
.icon-bitcoin:before {
  content: "\\ee5c";
}
.icon-bitcoin-circle:before {
  content: "\\ee5d";
}
.icon-bitcoin-square:before {
  content: "\\ee5e";
}
.icon-bluetooth:before {
  content: "\\ee5f";
}
.icon-bolt:before {
  content: "\\ee60";
}
.icon-bolt-alt:before {
  content: "\\ee61";
}
.icon-bolt-circle:before {
  content: "\\ee62";
}
.icon-bolt-circle-alt:before {
  content: "\\ee63";
}
.icon-bolt-slash:before {
  content: "\\ee64";
}
.icon-bolt-slash-alt:before {
  content: "\\ee65";
}
.icon-bolt-square:before {
  content: "\\ee66";
}
.icon-bolt-square-alt:before {
  content: "\\ee67";
}
.icon-bone:before {
  content: "\\ee68";
}
.icon-bone-break:before {
  content: "\\ee69";
}
.icon-book:before {
  content: "\\ee6a";
}
.icon-book-alt:before {
  content: "\\ee6b";
}
.icon-book-bookmark:before {
  content: "\\ee6c";
}
.icon-book-empty:before {
  content: "\\ee6d";
}
.icon-bookmark:before {
  content: "\\ee6e";
}
.icon-bookmark-check:before {
  content: "\\ee6f";
}
.icon-bookmark-heart:before {
  content: "\\ee70";
}
.icon-bookmark-minus:before {
  content: "\\ee71";
}
.icon-bookmark-plus:before {
  content: "\\ee72";
}
.icon-bookmarks:before {
  content: "\\ee73";
}
.icon-bookmarks-check:before {
  content: "\\ee74";
}
.icon-bookmark-settings:before {
  content: "\\ee75";
}
.icon-bookmarks-heart:before {
  content: "\\ee76";
}
.icon-bookmarks-minus:before {
  content: "\\ee77";
}
.icon-bookmarks-plus:before {
  content: "\\ee78";
}
.icon-bookmarks-settings:before {
  content: "\\ee79";
}
.icon-bookmarks-star:before {
  content: "\\ee7a";
}
.icon-bookmark-star:before {
  content: "\\ee7b";
}
.icon-bookmarks-times:before {
  content: "\\ee7c";
}
.icon-bookmarks-user:before {
  content: "\\ee7d";
}
.icon-bookmark-times:before {
  content: "\\ee7e";
}
.icon-bookmark-user:before {
  content: "\\ee7f";
}
.icon-book-open:before {
  content: "\\ee80";
}
.icon-book-open-bookmark:before {
  content: "\\ee81";
}
.icon-book-open-reader:before {
  content: "\\ee82";
}
.icon-book-open-text:before {
  content: "\\ee83";
}
.icon-books:before {
  content: "\\ee84";
}
.icon-book-text:before {
  content: "\\ee85";
}
.icon-box:before {
  content: "\\ee86";
}
.icon-box-check:before {
  content: "\\ee87";
}
.icon-boxes:before {
  content: "\\ee88";
}
.icon-box-minus:before {
  content: "\\ee89";
}
.icon-box-plus:before {
  content: "\\ee8a";
}
.icon-box-search:before {
  content: "\\ee8b";
}
.icon-box-times:before {
  content: "\\ee8c";
}
.icon-brain:before {
  content: "\\ee8d";
}
.icon-briefcase:before {
  content: "\\ee8e";
}
.icon-briefcase-check:before {
  content: "\\ee8f";
}
.icon-briefcase-minus:before {
  content: "\\ee90";
}
.icon-briefcase-money:before {
  content: "\\ee91";
}
.icon-briefcase-plus:before {
  content: "\\ee92";
}
.icon-briefcase-times:before {
  content: "\\ee93";
}
.icon-brush:before {
  content: "\\ee94";
}
.icon-brush-alt:before {
  content: "\\ee95";
}
.icon-bug:before {
  content: "\\ee96";
}
.icon-bug-slash:before {
  content: "\\ee97";
}
.icon-building:before {
  content: "\\ee98";
}
.icon-building-coins:before {
  content: "\\ee99";
}
.icon-buildings:before {
  content: "\\ee9a";
}
.icon-buildings-alt:before {
  content: "\\ee9b";
}
.icon-building-tree:before {
  content: "\\ee9c";
}
.icon-bus:before {
  content: "\\ee9d";
}
.icon-cabinet-filing:before {
  content: "\\ee9e";
}
.icon-cake:before {
  content: "\\ee9f";
}
.icon-calculator:before {
  content: "\\eea0";
}
.icon-calculator-simple:before {
  content: "\\eea1";
}
.icon-calendar:before {
  content: "\\eea2";
}
.icon-calendar-check:before {
  content: "\\eea3";
}
.icon-calendar-check-alt:before {
  content: "\\eea4";
}
.icon-calendar-clock:before {
  content: "\\eea5";
}
.icon-calendar-edit:before {
  content: "\\eea6";
}
.icon-calendar-empty:before {
  content: "\\eea7";
}
.icon-calendar-empty-alt:before {
  content: "\\eea8";
}
.icon-calendar-heart:before {
  content: "\\eea9";
}
.icon-calendar-lock:before {
  content: "\\eeaa";
}
.icon-calendar-minus:before {
  content: "\\eeab";
}
.icon-calendar-minus-alt:before {
  content: "\\eeac";
}
.icon-calendar-plus:before {
  content: "\\eead";
}
.icon-calendar-plus-alt:before {
  content: "\\eeae";
}
.icon-calendar-search:before {
  content: "\\eeaf";
}
.icon-calendar-star:before {
  content: "\\eeb0";
}
.icon-calendar-times:before {
  content: "\\eeb1";
}
.icon-calendar-times-alt:before {
  content: "\\eeb2";
}
.icon-camera:before {
  content: "\\eeb3";
}
.icon-camera-circle:before {
  content: "\\eeb4";
}
.icon-camera-rotate:before {
  content: "\\eeb5";
}
.icon-camera-slash:before {
  content: "\\eeb6";
}
.icon-camera-square:before {
  content: "\\eeb7";
}
.icon-caret-down:before {
  content: "\\eeb8";
}
.icon-caret-down-circle:before {
  content: "\\eeb9";
}
.icon-caret-down-square:before {
  content: "\\eeba";
}
.icon-caret-left:before {
  content: "\\eebb";
}
.icon-caret-left-circle:before {
  content: "\\eebc";
}
.icon-caret-left-square:before {
  content: "\\eebd";
}
.icon-caret-right:before {
  content: "\\eebe";
}
.icon-caret-right-circle:before {
  content: "\\eebf";
}
.icon-caret-right-square:before {
  content: "\\eec0";
}
.icon-caret-up:before {
  content: "\\eec1";
}
.icon-caret-up-circle:before {
  content: "\\eec2";
}
.icon-caret-up-square:before {
  content: "\\eec3";
}
.icon-castle:before {
  content: "\\eec4";
}
.icon-certificate:before {
  content: "\\eec5";
}
.icon-chart-bar:before {
  content: "\\eec6";
}
.icon-chart-bar-alt:before {
  content: "\\eec7";
}
.icon-chart-bar-circle:before {
  content: "\\eec8";
}
.icon-chart-bar-horizontal:before {
  content: "\\eec9";
}
.icon-chart-bar-square:before {
  content: "\\eeca";
}
.icon-chart-bar-vertical:before {
  content: "\\eecb";
}
.icon-chart-line:before {
  content: "\\eecc";
}
.icon-chart-line-dots:before {
  content: "\\eecd";
}
.icon-chart-line-down:before {
  content: "\\eece";
}
.icon-chart-line-up:before {
  content: "\\eecf";
}
.icon-chart-pie:before {
  content: "\\eed0";
}
.icon-chart-pyramid:before {
  content: "\\eed1";
}
.icon-chart-trend-down:before {
  content: "\\eed2";
}
.icon-chart-trend-up:before {
  content: "\\eed3";
}
.icon-chat:before {
  content: "\\eed4";
}
.icon-chat-activity:before {
  content: "\\eed5";
}
.icon-chat-check:before {
  content: "\\eed6";
}
.icon-chat-check-alt:before {
  content: "\\eed7";
}
.icon-chat-clock:before {
  content: "\\eed8";
}
.icon-chat-code:before {
  content: "\\eed9";
}
.icon-chat-dots:before {
  content: "\\eeda";
}
.icon-chat-dots-check:before {
  content: "\\eedb";
}
.icon-chat-dots-minus:before {
  content: "\\eedc";
}
.icon-chat-dots-notification:before {
  content: "\\eedd";
}
.icon-chat-dots-plus:before {
  content: "\\eede";
}
.icon-chat-dots-times:before {
  content: "\\eedf";
}
.icon-chat-edit:before {
  content: "\\eee0";
}
.icon-chat-exclamation:before {
  content: "\\eee1";
}
.icon-chat-heart:before {
  content: "\\eee2";
}
.icon-chat-info:before {
  content: "\\eee3";
}
.icon-chat-lock:before {
  content: "\\eee4";
}
.icon-chat-minus:before {
  content: "\\eee5";
}
.icon-chat-minus-alt:before {
  content: "\\eee6";
}
.icon-chat-notification:before {
  content: "\\eee7";
}
.icon-chat-plus:before {
  content: "\\eee8";
}
.icon-chat-plus-alt:before {
  content: "\\eee9";
}
.icon-chat-question:before {
  content: "\\eeea";
}
.icon-chats:before {
  content: "\\eeeb";
}
.icon-chats-dots:before {
  content: "\\eeec";
}
.icon-chat-search:before {
  content: "\\eeed";
}
.icon-chat-settings:before {
  content: "\\eeee";
}
.icon-chat-shield:before {
  content: "\\eeef";
}
.icon-chat-star:before {
  content: "\\eef0";
}
.icon-chats-text:before {
  content: "\\eef1";
}
.icon-chat-text:before {
  content: "\\eef2";
}
.icon-chat-text-check:before {
  content: "\\eef3";
}
.icon-chat-text-minus:before {
  content: "\\eef4";
}
.icon-chat-text-notification:before {
  content: "\\eef5";
}
.icon-chat-text-plus:before {
  content: "\\eef6";
}
.icon-chat-text-times:before {
  content: "\\eef7";
}
.icon-chat-times:before {
  content: "\\eef8";
}
.icon-chat-times-alt:before {
  content: "\\eef9";
}
.icon-check:before {
  content: "\\eefa";
}
.icon-checkbox-square-fill:before {
  content: "\\eefb";
}
.icon-check-circle:before {
  content: "\\eefc";
}
.icon-check-double:before {
  content: "\\eefd";
}
.icon-check-square:before {
  content: "\\eefe";
}
.icon-chromecast:before {
  content: "\\eeff";
}
.icon-clipboard:before {
  content: "\\ef00";
}
.icon-clipboard-check:before {
  content: "\\ef01";
}
.icon-clipboard-edit:before {
  content: "\\ef02";
}
.icon-clipboard-heart:before {
  content: "\\ef03";
}
.icon-clipboard-list:before {
  content: "\\ef04";
}
.icon-clipboard-list-check:before {
  content: "\\ef05";
}
.icon-clipboard-minus:before {
  content: "\\ef06";
}
.icon-clipboard-plus:before {
  content: "\\ef07";
}
.icon-clipboard-search:before {
  content: "\\ef08";
}
.icon-clipboard-star:before {
  content: "\\ef09";
}
.icon-clipboard-text:before {
  content: "\\ef0a";
}
.icon-clipboard-times:before {
  content: "\\ef0b";
}
.icon-clock:before {
  content: "\\ef0c";
}
.icon-clock-alt:before {
  content: "\\ef0d";
}
.icon-clock-square:before {
  content: "\\ef0e";
}
.icon-clock-square-alt:before {
  content: "\\ef0f";
}
.icon-closed-captioning:before {
  content: "\\ef10";
}
.icon-cloud:before {
  content: "\\ef11";
}
.icon-cloud-check:before {
  content: "\\ef12";
}
.icon-cloud-connection:before {
  content: "\\ef13";
}
.icon-cloud-download:before {
  content: "\\ef14";
}
.icon-cloud-lock:before {
  content: "\\ef15";
}
.icon-cloud-minus:before {
  content: "\\ef16";
}
.icon-cloud-plus:before {
  content: "\\ef17";
}
.icon-cloud-share:before {
  content: "\\ef18";
}
.icon-cloud-shield:before {
  content: "\\ef19";
}
.icon-cloud-slash:before {
  content: "\\ef1a";
}
.icon-cloud-times:before {
  content: "\\ef1b";
}
.icon-cloud-upload:before {
  content: "\\ef1c";
}
.icon-code:before {
  content: "\\ef1d";
}
.icon-code-circle:before {
  content: "\\ef1e";
}
.icon-code-square:before {
  content: "\\ef1f";
}
.icon-coin:before {
  content: "\\ef20";
}
.icon-coin-card-transfer:before {
  content: "\\ef21";
}
.icon-coin-convert:before {
  content: "\\ef22";
}
.icon-coins:before {
  content: "\\ef23";
}
.icon-comment:before {
  content: "\\ef24";
}
.icon-comment-activity:before {
  content: "\\ef25";
}
.icon-comment-check:before {
  content: "\\ef26";
}
.icon-comment-check-alt:before {
  content: "\\ef27";
}
.icon-comment-clock:before {
  content: "\\ef28";
}
.icon-comment-code:before {
  content: "\\ef29";
}
.icon-comment-dots:before {
  content: "\\ef2a";
}
.icon-comment-dots-check:before {
  content: "\\ef2b";
}
.icon-comment-dots-minus:before {
  content: "\\ef2c";
}
.icon-comment-dots-notification:before {
  content: "\\ef2d";
}
.icon-comment-dots-plus:before {
  content: "\\ef2e";
}
.icon-comment-dots-times:before {
  content: "\\ef2f";
}
.icon-comment-edit:before {
  content: "\\ef30";
}
.icon-comment-exclamation:before {
  content: "\\ef31";
}
.icon-comment-heart:before {
  content: "\\ef32";
}
.icon-comment-info:before {
  content: "\\ef33";
}
.icon-comment-lock:before {
  content: "\\ef34";
}
.icon-comment-minus:before {
  content: "\\ef35";
}
.icon-comment-minus-alt:before {
  content: "\\ef36";
}
.icon-comment-notification:before {
  content: "\\ef37";
}
.icon-comment-plus:before {
  content: "\\ef38";
}
.icon-comment-plus-alt:before {
  content: "\\ef39";
}
.icon-comment-question:before {
  content: "\\ef3a";
}
.icon-comments:before {
  content: "\\ef3b";
}
.icon-comments-dots:before {
  content: "\\ef3c";
}
.icon-comment-search:before {
  content: "\\ef3d";
}
.icon-comment-settings:before {
  content: "\\ef3e";
}
.icon-comment-shield:before {
  content: "\\ef3f";
}
.icon-comment-star:before {
  content: "\\ef40";
}
.icon-comments-text:before {
  content: "\\ef41";
}
.icon-comment-text:before {
  content: "\\ef42";
}
.icon-comment-text-check:before {
  content: "\\ef43";
}
.icon-comment-text-minus:before {
  content: "\\ef44";
}
.icon-comment-text-notification:before {
  content: "\\ef45";
}
.icon-comment-text-plus:before {
  content: "\\ef46";
}
.icon-comment-text-times:before {
  content: "\\ef47";
}
.icon-comment-times:before {
  content: "\\ef48";
}
.icon-comment-times-alt:before {
  content: "\\ef49";
}
.icon-compass:before {
  content: "\\ef4a";
}
.icon-compass-needle:before {
  content: "\\ef4b";
}
.icon-compress:before {
  content: "\\ef4c";
}
.icon-contrast:before {
  content: "\\ef4d";
}
.icon-copy:before {
  content: "\\ef4e";
}
.icon-copy-alt:before {
  content: "\\ef4f";
}
.icon-copy-check:before {
  content: "\\ef50";
}
.icon-copy-plus:before {
  content: "\\ef51";
}
.icon-copyright-circle:before {
  content: "\\ef52";
}
.icon-copyright-square:before {
  content: "\\ef53";
}
.icon-coupon:before {
  content: "\\ef54";
}
.icon-coupon-heart:before {
  content: "\\ef55";
}
.icon-coupon-percent:before {
  content: "\\ef56";
}
.icon-coupon-star:before {
  content: "\\ef57";
}
.icon-cpu:before {
  content: "\\ef58";
}
.icon-credit-card:before {
  content: "\\ef59";
}
.icon-credit-card-ban:before {
  content: "\\ef5a";
}
.icon-credit-card-change:before {
  content: "\\ef5b";
}
.icon-credit-card-check:before {
  content: "\\ef5c";
}
.icon-credit-card-convert:before {
  content: "\\ef5d";
}
.icon-credit-card-edit:before {
  content: "\\ef5e";
}
.icon-credit-card-minus:before {
  content: "\\ef5f";
}
.icon-credit-card-plus:before {
  content: "\\ef60";
}
.icon-credit-card-slash:before {
  content: "\\ef61";
}
.icon-credit-card-times:before {
  content: "\\ef62";
}
.icon-crown:before {
  content: "\\ef63";
}
.icon-crown-alt:before {
  content: "\\ef64";
}
.icon-cursor:before {
  content: "\\ef65";
}
.icon-cursor-click:before {
  content: "\\ef66";
}
.icon-database:before {
  content: "\\ef67";
}
.icon-delete-left:before {
  content: "\\ef68";
}
.icon-delete-right:before {
  content: "\\ef69";
}
.icon-delivery-cart:before {
  content: "\\ef6a";
}
.icon-delivery-cart-arrow-down:before {
  content: "\\ef6b";
}
.icon-delivery-cart-arrow-up:before {
  content: "\\ef6c";
}
.icon-desktop:before {
  content: "\\ef6d";
}
.icon-desktop-code:before {
  content: "\\ef6e";
}
.icon-desktop-mobile:before {
  content: "\\ef6f";
}
.icon-diamond:before {
  content: "\\ef70";
}
.icon-diamond-exclamation:before {
  content: "\\ef71";
}
.icon-disc:before {
  content: "\\ef72";
}
.icon-dislike:before {
  content: "\\ef73";
}
.icon-dislike-circle:before {
  content: "\\ef74";
}
.icon-dislike-square:before {
  content: "\\ef75";
}
.icon-dislike-tag:before {
  content: "\\ef76";
}
.icon-dna:before {
  content: "\\ef77";
}
.icon-document:before {
  content: "\\ef78";
}
.icon-document-list:before {
  content: "\\ef79";
}
.icon-document-list-check:before {
  content: "\\ef7a";
}
.icon-dollar:before {
  content: "\\ef7b";
}
.icon-dollar-circle:before {
  content: "\\ef7c";
}
.icon-dollar-receive-circle:before {
  content: "\\ef7d";
}
.icon-dollar-receive-square:before {
  content: "\\ef7e";
}
.icon-dollar-send-circle:before {
  content: "\\ef7f";
}
.icon-dollar-send-square:before {
  content: "\\ef80";
}
.icon-dollar-square:before {
  content: "\\ef81";
}
.icon-door-closed:before {
  content: "\\ef82";
}
.icon-door-open:before {
  content: "\\ef83";
}
.icon-download:before {
  content: "\\ef84";
}
.icon-download-alt:before {
  content: "\\ef85";
}
.icon-drag-horizontal:before {
  content: "\\ef86";
}
.icon-drag-lines-horizontal:before {
  content: "\\ef87";
}
.icon-drag-lines-vertical:before {
  content: "\\ef88";
}
.icon-drag-vertical:before {
  content: "\\ef89";
}
.icon-droplet:before {
  content: "\\ef8a";
}
.icon-droplet-slash:before {
  content: "\\ef8b";
}
.icon-edit:before {
  content: "\\ef8c";
}
.icon-eject:before {
  content: "\\ef8d";
}
.icon-envelope:before {
  content: "\\ef8e";
}
.icon-envelope-ban:before {
  content: "\\ef8f";
}
.icon-envelope-check:before {
  content: "\\ef90";
}
.icon-envelope-clock:before {
  content: "\\ef91";
}
.icon-envelope-edit:before {
  content: "\\ef92";
}
.icon-envelope-eye:before {
  content: "\\ef93";
}
.icon-envelope-heart:before {
  content: "\\ef94";
}
.icon-envelope-lock:before {
  content: "\\ef95";
}
.icon-envelope-minus:before {
  content: "\\ef96";
}
.icon-envelope-notification:before {
  content: "\\ef97";
}
.icon-envelope-open:before {
  content: "\\ef98";
}
.icon-envelope-plus:before {
  content: "\\ef99";
}
.icon-envelopes:before {
  content: "\\ef9a";
}
.icon-envelope-search:before {
  content: "\\ef9b";
}
.icon-envelope-settings:before {
  content: "\\ef9c";
}
.icon-envelope-shield:before {
  content: "\\ef9d";
}
.icon-envelope-star:before {
  content: "\\ef9e";
}
.icon-envelope-times:before {
  content: "\\ef9f";
}
.icon-ethereum:before {
  content: "\\efa0";
}
.icon-ethereum-circle:before {
  content: "\\efa1";
}
.icon-ethereum-square:before {
  content: "\\efa2";
}
.icon-euro:before {
  content: "\\efa3";
}
.icon-euro-circle:before {
  content: "\\efa4";
}
.icon-euro-square:before {
  content: "\\efa5";
}
.icon-exchange-horizontal:before {
  content: "\\efa6";
}
.icon-exchange-horizontal-circle:before {
  content: "\\efa7";
}
.icon-exchange-horizontal-square:before {
  content: "\\efa8";
}
.icon-exchange-vertical:before {
  content: "\\efa9";
}
.icon-exchange-vertical-circle:before {
  content: "\\efaa";
}
.icon-exchange-vertical-square:before {
  content: "\\efab";
}
.icon-exclamation-circle:before {
  content: "\\efac";
}
.icon-exclamation-square:before {
  content: "\\efad";
}
.icon-expand:before {
  content: "\\efae";
}
.icon-eye:before {
  content: "\\efaf";
}
.icon-eye-closed:before {
  content: "\\efb0";
}
.icon-eye-slash:before {
  content: "\\efb1";
}
.icon-fast-backward:before {
  content: "\\efb2";
}
.icon-fast-forward:before {
  content: "\\efb3";
}
.icon-file:before {
  content: "\\efb4";
}
.icon-file-ban:before {
  content: "\\efb5";
}
.icon-file-check:before {
  content: "\\efb6";
}
.icon-file-clock:before {
  content: "\\efb7";
}
.icon-file-code:before {
  content: "\\efb8";
}
.icon-file-copy:before {
  content: "\\efb9";
}
.icon-file-download:before {
  content: "\\efba";
}
.icon-file-edit:before {
  content: "\\efbb";
}
.icon-file-export:before {
  content: "\\efbc";
}
.icon-file-export-alt:before {
  content: "\\efbd";
}
.icon-file-heart:before {
  content: "\\efbe";
}
.icon-file-import:before {
  content: "\\efbf";
}
.icon-file-import-alt:before {
  content: "\\efc0";
}
.icon-file-list:before {
  content: "\\efc1";
}
.icon-file-list-ban:before {
  content: "\\efc2";
}
.icon-file-list-check:before {
  content: "\\efc3";
}
.icon-file-list-edit:before {
  content: "\\efc4";
}
.icon-file-list-heart:before {
  content: "\\efc5";
}
.icon-file-list-lock:before {
  content: "\\efc6";
}
.icon-file-list-minus:before {
  content: "\\efc7";
}
.icon-file-list-plus:before {
  content: "\\efc8";
}
.icon-file-list-search:before {
  content: "\\efc9";
}
.icon-file-list-shield:before {
  content: "\\efca";
}
.icon-file-list-star:before {
  content: "\\efcb";
}
.icon-file-list-times:before {
  content: "\\efcc";
}
.icon-file-lock:before {
  content: "\\efcd";
}
.icon-file-minus:before {
  content: "\\efce";
}
.icon-file-music:before {
  content: "\\efcf";
}
.icon-file-plus:before {
  content: "\\efd0";
}
.icon-file-search:before {
  content: "\\efd1";
}
.icon-file-settings:before {
  content: "\\efd2";
}
.icon-file-shield:before {
  content: "\\efd3";
}
.icon-file-star:before {
  content: "\\efd4";
}
.icon-file-text:before {
  content: "\\efd5";
}
.icon-file-text-ban:before {
  content: "\\efd6";
}
.icon-file-text-check:before {
  content: "\\efd7";
}
.icon-file-text-edit:before {
  content: "\\efd8";
}
.icon-file-text-heart:before {
  content: "\\efd9";
}
.icon-file-text-lock:before {
  content: "\\efda";
}
.icon-file-text-minus:before {
  content: "\\efdb";
}
.icon-file-text-plus:before {
  content: "\\efdc";
}
.icon-file-text-search:before {
  content: "\\efdd";
}
.icon-file-text-shield:before {
  content: "\\efde";
}
.icon-file-text-star:before {
  content: "\\efdf";
}
.icon-file-text-times:before {
  content: "\\efe0";
}
.icon-file-times:before {
  content: "\\efe1";
}
.icon-file-upload:before {
  content: "\\efe2";
}
.icon-file-user:before {
  content: "\\efe3";
}
.icon-film:before {
  content: "\\efe4";
}
.icon-filter:before {
  content: "\\efe5";
}
.icon-filter-check:before {
  content: "\\efe6";
}
.icon-filter-minus:before {
  content: "\\efe7";
}
.icon-filter-plus:before {
  content: "\\efe8";
}
.icon-filter-times:before {
  content: "\\efe9";
}
.icon-fingerprint:before {
  content: "\\efea";
}
.icon-fingerprint-viewfinder:before {
  content: "\\efeb";
}
.icon-fire:before {
  content: "\\efec";
}
.icon-flag:before {
  content: "\\efed";
}
.icon-flag-triangle:before {
  content: "\\efee";
}
.icon-flashlight:before {
  content: "\\efef";
}
.icon-flask:before {
  content: "\\eff0";
}
.icon-flask-round:before {
  content: "\\eff1";
}
.icon-floppy-disk:before {
  content: "\\eff2";
}
.icon-folder:before {
  content: "\\eff3";
}
.icon-folder-alt:before {
  content: "\\eff4";
}
.icon-folder-ban:before {
  content: "\\eff5";
}
.icon-folder-check:before {
  content: "\\eff6";
}
.icon-folder-clock:before {
  content: "\\eff7";
}
.icon-folder-code:before {
  content: "\\eff8";
}
.icon-folder-connection:before {
  content: "\\eff9";
}
.icon-folder-download:before {
  content: "\\effa";
}
.icon-folder-edit:before {
  content: "\\effb";
}
.icon-folder-export:before {
  content: "\\effc";
}
.icon-folder-heart:before {
  content: "\\effd";
}
.icon-folder-import:before {
  content: "\\effe";
}
.icon-folder-lock:before {
  content: "\\efff";
}
.icon-folder-minus:before {
  content: "\f000";
}
.icon-folder-music:before {
  content: "\f001";
}
.icon-folder-open:before {
  content: "\f002";
}
.icon-folder-plus:before {
  content: "\f003";
}
.icon-folder-search:before {
  content: "\f004";
}
.icon-folder-settings:before {
  content: "\f005";
}
.icon-folder-shield:before {
  content: "\f006";
}
.icon-folder-star:before {
  content: "\f007";
}
.icon-folder-times:before {
  content: "\f008";
}
.icon-folder-upload:before {
  content: "\f009";
}
.icon-folder-user:before {
  content: "\f00a";
}
.icon-food-tray:before {
  content: "\f00b";
}
.icon-forward:before {
  content: "\f00c";
}
.icon-game-controller:before {
  content: "\f00d";
}
.icon-gift:before {
  content: "\f00e";
}
.icon-glasses:before {
  content: "\f00f";
}
.icon-globe:before {
  content: "\f010";
}
.icon-globe-earth:before {
  content: "\f011";
}
.icon-globe-stand:before {
  content: "\f012";
}
.icon-graduation-cap:before {
  content: "\f013";
}
.icon-grid-1:before {
  content: "\f014";
}
.icon-grid-2:before {
  content: "\f015";
}
.icon-grid-circle:before {
  content: "\f016";
}
.icon-grid-dividers:before {
  content: "\f017";
}
.icon-grid-square:before {
  content: "\f018";
}
.icon-grid-square-circle:before {
  content: "\f019";
}
.icon-grid-square-plus:before {
  content: "\f01a";
}
.icon-grid-web-1:before {
  content: "\f01b";
}
.icon-grid-web-2:before {
  content: "\f01c";
}
.icon-grid-web-3:before {
  content: "\f01d";
}
.icon-grid-web-4:before {
  content: "\f01e";
}
.icon-grid-web-5:before {
  content: "\f01f";
}
.icon-grid-web-6:before {
  content: "\f020";
}
.icon-grid-web-7:before {
  content: "\f021";
}
.icon-hand-holding-dollar:before {
  content: "\f022";
}
.icon-hand-holding-dollar-circle:before {
  content: "\f023";
}
.icon-hand-holding-user:before {
  content: "\f024";
}
.icon-hard-drive:before {
  content: "\f025";
}
.icon-hashtag:before {
  content: "\f026";
}
.icon-headphones:before {
  content: "\f027";
}
.icon-heart:before {
  content: "\f028";
}
.icon-heart-check:before {
  content: "\f029";
}
.icon-heart-circle:before {
  content: "\f02a";
}
.icon-heart-minus:before {
  content: "\f02b";
}
.icon-heart-plus:before {
  content: "\f02c";
}
.icon-heart-pulse:before {
  content: "\f02d";
}
.icon-heart-slash:before {
  content: "\f02e";
}
.icon-heart-square:before {
  content: "\f02f";
}
.icon-heart-tag:before {
  content: "\f030";
}
.icon-heart-times:before {
  content: "\f031";
}
.icon-home:before {
  content: "\f032";
}
.icon-home-activity:before {
  content: "\f033";
}
.icon-home-dash:before {
  content: "\f034";
}
.icon-home-dash-activity:before {
  content: "\f035";
}
.icon-home-dash-dollar:before {
  content: "\f036";
}
.icon-home-dash-heart:before {
  content: "\f037";
}
.icon-home-dash-lock:before {
  content: "\f038";
}
.icon-home-dash-search:before {
  content: "\f039";
}
.icon-home-dash-shield:before {
  content: "\f03a";
}
.icon-home-dash-star:before {
  content: "\f03b";
}
.icon-home-dash-trend-down:before {
  content: "\f03c";
}
.icon-home-dash-trend-up:before {
  content: "\f03d";
}
.icon-home-dash-user:before {
  content: "\f03e";
}
.icon-home-dash-wifi:before {
  content: "\f03f";
}
.icon-home-dollar:before {
  content: "\f040";
}
.icon-home-heart:before {
  content: "\f041";
}
.icon-home-lock:before {
  content: "\f042";
}
.icon-home-roof:before {
  content: "\f043";
}
.icon-home-roof-activity:before {
  content: "\f044";
}
.icon-home-roof-dollar:before {
  content: "\f045";
}
.icon-home-roof-heart:before {
  content: "\f046";
}
.icon-home-roof-lock:before {
  content: "\f047";
}
.icon-home-roof-search:before {
  content: "\f048";
}
.icon-home-roof-shield:before {
  content: "\f049";
}
.icon-home-roof-star:before {
  content: "\f04a";
}
.icon-home-roof-trend-down:before {
  content: "\f04b";
}
.icon-home-roof-trend-up:before {
  content: "\f04c";
}
.icon-home-roof-user:before {
  content: "\f04d";
}
.icon-home-roof-wifi:before {
  content: "\f04e";
}
.icon-home-search:before {
  content: "\f04f";
}
.icon-home-shield:before {
  content: "\f050";
}
.icon-home-star:before {
  content: "\f051";
}
.icon-home-trend-down:before {
  content: "\f052";
}
.icon-home-trend-up:before {
  content: "\f053";
}
.icon-home-user:before {
  content: "\f054";
}
.icon-home-wifi:before {
  content: "\f055";
}
.icon-hospital:before {
  content: "\f056";
}
.icon-hospital-h-sign-circle:before {
  content: "\f057";
}
.icon-hospital-h-sign-square:before {
  content: "\f058";
}
.icon-hourglass:before {
  content: "\f059";
}
.icon-id-badge:before {
  content: "\f05a";
}
.icon-id-card:before {
  content: "\f05b";
}
.icon-image:before {
  content: "\f05c";
}
.icon-image-check:before {
  content: "\f05d";
}
.icon-image-download:before {
  content: "\f05e";
}
.icon-image-gallery:before {
  content: "\f05f";
}
.icon-image-gallery-plus:before {
  content: "\f060";
}
.icon-image-minus:before {
  content: "\f061";
}
.icon-image-plus:before {
  content: "\f062";
}
.icon-image-times:before {
  content: "\f063";
}
.icon-image-upload:before {
  content: "\f064";
}
.icon-inbox:before {
  content: "\f065";
}
.icon-inbox-download:before {
  content: "\f066";
}
.icon-inbox-empty:before {
  content: "\f067";
}
.icon-inbox-upload:before {
  content: "\f068";
}
.icon-info-circle:before {
  content: "\f069";
}
.icon-info-square:before {
  content: "\f06a";
}
.icon-invoice:before {
  content: "\f06b";
}
.icon-kaaba:before {
  content: "\f06c";
}
.icon-key:before {
  content: "\f06d";
}
.icon-keyboard:before {
  content: "\f06e";
}
.icon-key-circle:before {
  content: "\f06f";
}
.icon-keyhole-circle:before {
  content: "\f070";
}
.icon-keyhole-square:before {
  content: "\f071";
}
.icon-keypad:before {
  content: "\f072";
}
.icon-key-square:before {
  content: "\f073";
}
.icon-laptop:before {
  content: "\f074";
}
.icon-laptop-code:before {
  content: "\f075";
}
.icon-layer-group:before {
  content: "\f076";
}
.icon-layout-web-1:before {
  content: "\f077";
}
.icon-layout-web-2:before {
  content: "\f078";
}
.icon-layout-web-3:before {
  content: "\f079";
}
.icon-layout-web-4:before {
  content: "\f07a";
}
.icon-layout-web-5:before {
  content: "\f07b";
}
.icon-layout-web-6:before {
  content: "\f07c";
}
.icon-layout-web-7:before {
  content: "\f07d";
}
.icon-layout-web-8:before {
  content: "\f07e";
}
.icon-layout-web-9:before {
  content: "\f07f";
}
.icon-layout-web-10:before {
  content: "\f080";
}
.icon-layout-web-11:before {
  content: "\f081";
}
.icon-layout-web-12:before {
  content: "\f082";
}
.icon-leaf:before {
  content: "\f083";
}
.icon-life-ring:before {
  content: "\f084";
}
.icon-lightbulb:before {
  content: "\f085";
}
.icon-light-emergency:before {
  content: "\f086";
}
.icon-light-emergency-on:before {
  content: "\f087";
}
.icon-like:before {
  content: "\f088";
}
.icon-like-circle:before {
  content: "\f089";
}
.icon-like-square:before {
  content: "\f08a";
}
.icon-like-tag:before {
  content: "\f08b";
}
.icon-line-chart-dots:before {
  content: "\f08c";
}
.icon-line-chart-dots-circle:before {
  content: "\f08d";
}
.icon-line-chart-dots-square:before {
  content: "\f08e";
}
.icon-line-down-circle:before {
  content: "\f08f";
}
.icon-line-down-square:before {
  content: "\f090";
}
.icon-line-up-circle:before {
  content: "\f091";
}
.icon-line-up-square:before {
  content: "\f092";
}
.icon-link:before {
  content: "\f093";
}
.icon-link-alt:before {
  content: "\f094";
}
.icon-link-broken:before {
  content: "\f095";
}
.icon-link-broken-horizontal:before {
  content: "\f096";
}
.icon-link-horizontal:before {
  content: "\f097";
}
.icon-link-horizontal-alt:before {
  content: "\f098";
}
.icon-list:before {
  content: "\f099";
}
.icon-location-arrow:before {
  content: "\f09a";
}
.icon-location-arrow-circle:before {
  content: "\f09b";
}
.icon-location-arrow-square:before {
  content: "\f09c";
}
.icon-location-crosshairs:before {
  content: "\f09d";
}
.icon-location-crosshairs-slash:before {
  content: "\f09e";
}
.icon-location-pin:before {
  content: "\f09f";
}
.icon-location-pin-alt:before {
  content: "\f0a0";
}
.icon-location-pin-check:before {
  content: "\f0a1";
}
.icon-location-pin-edit:before {
  content: "\f0a2";
}
.icon-location-pin-exclamation:before {
  content: "\f0a3";
}
.icon-location-pin-eye:before {
  content: "\f0a4";
}
.icon-location-pin-heart:before {
  content: "\f0a5";
}
.icon-location-pin-lock:before {
  content: "\f0a6";
}
.icon-location-pin-minus:before {
  content: "\f0a7";
}
.icon-location-pin-plus:before {
  content: "\f0a8";
}
.icon-location-pin-question:before {
  content: "\f0a9";
}
.icon-location-pin-search:before {
  content: "\f0aa";
}
.icon-location-pin-slash:before {
  content: "\f0ab";
}
.icon-location-pin-slash-alt:before {
  content: "\f0ac";
}
.icon-location-pin-star:before {
  content: "\f0ad";
}
.icon-location-pin-times:before {
  content: "\f0ae";
}
.icon-lock:before {
  content: "\f0af";
}
.icon-lock-viewfinder:before {
  content: "\f0b0";
}
.icon-log-in:before {
  content: "\f0b1";
}
.icon-log-out:before {
  content: "\f0b2";
}
.icon-magnet:before {
  content: "\f0b3";
}
.icon-map:before {
  content: "\f0b4";
}
.icon-map-location:before {
  content: "\f0b5";
}
.icon-map-pin:before {
  content: "\f0b6";
}
.icon-mask-face:before {
  content: "\f0b7";
}
.icon-maximize:before {
  content: "\f0b8";
}
.icon-medal:before {
  content: "\f0b9";
}
.icon-medal-check:before {
  content: "\f0ba";
}
.icon-medal-star:before {
  content: "\f0bb";
}
.icon-megaphone:before {
  content: "\f0bc";
}
.icon-menu:before {
  content: "\f0bd";
}
.icon-menu-alt:before {
  content: "\f0be";
}
.icon-menu-circle:before {
  content: "\f0bf";
}
.icon-menu-circle-alt:before {
  content: "\f0c0";
}
.icon-menu-duo:before {
  content: "\f0c1";
}
.icon-menu-duo-circle:before {
  content: "\f0c2";
}
.icon-menu-duo-square:before {
  content: "\f0c3";
}
.icon-menu-left:before {
  content: "\f0c4";
}
.icon-menu-left-alt:before {
  content: "\f0c5";
}
.icon-menu-left-circle:before {
  content: "\f0c6";
}
.icon-menu-left-circle-alt:before {
  content: "\f0c7";
}
.icon-menu-left-square:before {
  content: "\f0c8";
}
.icon-menu-left-square-alt:before {
  content: "\f0c9";
}
.icon-menu-right:before {
  content: "\f0ca";
}
.icon-menu-right-alt:before {
  content: "\f0cb";
}
.icon-menu-right-circle:before {
  content: "\f0cc";
}
.icon-menu-right-circle-alt:before {
  content: "\f0cd";
}
.icon-menu-right-square:before {
  content: "\f0ce";
}
.icon-menu-right-square-alt:before {
  content: "\f0cf";
}
.icon-menu-square:before {
  content: "\f0d0";
}
.icon-menu-square-alt:before {
  content: "\f0d1";
}
.icon-message:before {
  content: "\f0d2";
}
.icon-message-activity:before {
  content: "\f0d3";
}
.icon-message-check:before {
  content: "\f0d4";
}
.icon-message-check-alt:before {
  content: "\f0d5";
}
.icon-message-clock:before {
  content: "\f0d6";
}
.icon-message-code:before {
  content: "\f0d7";
}
.icon-message-dots:before {
  content: "\f0d8";
}
.icon-message-dots-check:before {
  content: "\f0d9";
}
.icon-message-dots-minus:before {
  content: "\f0da";
}
.icon-message-dots-notification:before {
  content: "\f0db";
}
.icon-message-dots-plus:before {
  content: "\f0dc";
}
.icon-message-dots-times:before {
  content: "\f0dd";
}
.icon-message-edit:before {
  content: "\f0de";
}
.icon-message-exclamation:before {
  content: "\f0df";
}
.icon-message-heart:before {
  content: "\f0e0";
}
.icon-message-info:before {
  content: "\f0e1";
}
.icon-message-lock:before {
  content: "\f0e2";
}
.icon-message-minus:before {
  content: "\f0e3";
}
.icon-message-minus-alt:before {
  content: "\f0e4";
}
.icon-message-notification:before {
  content: "\f0e5";
}
.icon-message-plus:before {
  content: "\f0e6";
}
.icon-message-plus-alt:before {
  content: "\f0e7";
}
.icon-message-question:before {
  content: "\f0e8";
}
.icon-messages:before {
  content: "\f0e9";
}
.icon-messages-dots:before {
  content: "\f0ea";
}
.icon-message-search:before {
  content: "\f0eb";
}
.icon-message-settings:before {
  content: "\f0ec";
}
.icon-message-shield:before {
  content: "\f0ed";
}
.icon-message-star:before {
  content: "\f0ee";
}
.icon-messages-text:before {
  content: "\f0ef";
}
.icon-message-text:before {
  content: "\f0f0";
}
.icon-message-text-check:before {
  content: "\f0f1";
}
.icon-message-text-minus:before {
  content: "\f0f2";
}
.icon-message-text-notification:before {
  content: "\f0f3";
}
.icon-message-text-plus:before {
  content: "\f0f4";
}
.icon-message-text-times:before {
  content: "\f0f5";
}
.icon-message-times:before {
  content: "\f0f6";
}
.icon-message-times-alt:before {
  content: "\f0f7";
}
.icon-microphone:before {
  content: "\f0f8";
}
.icon-microphone-slash:before {
  content: "\f0f9";
}
.icon-microphone-stand:before {
  content: "\f0fa";
}
.icon-microscope:before {
  content: "\f0fb";
}
.icon-minimize:before {
  content: "\f0fc";
}
.icon-minus:before {
  content: "\f0fd";
}
.icon-minus-circle:before {
  content: "\f0fe";
}
.icon-minus-square:before {
  content: "\f0ff";
}
.icon-mobile:before {
  content: "\f100";
}
.icon-money-bill:before {
  content: "\f101";
}
.icon-money-bill-ban:before {
  content: "\f102";
}
.icon-money-bill-check:before {
  content: "\f103";
}
.icon-money-bill-clock:before {
  content: "\f104";
}
.icon-money-bill-convert:before {
  content: "\f105";
}
.icon-money-bill-minus:before {
  content: "\f106";
}
.icon-money-bill-plus:before {
  content: "\f107";
}
.icon-money-bill-receive:before {
  content: "\f108";
}
.icon-money-bills:before {
  content: "\f109";
}
.icon-money-bill-send:before {
  content: "\f10a";
}
.icon-money-bill-times:before {
  content: "\f10b";
}
.icon-money-convert:before {
  content: "\f10c";
}
.icon-money-withdrawal:before {
  content: "\f10d";
}
.icon-monitor-waveform:before {
  content: "\f10e";
}
.icon-moon:before {
  content: "\f10f";
}
.icon-more-horizontal:before {
  content: "\f110";
}
.icon-more-horizontal-circle:before {
  content: "\f111";
}
.icon-more-horizontal-square:before {
  content: "\f112";
}
.icon-more-vertical:before {
  content: "\f113";
}
.icon-more-vertical-circle:before {
  content: "\f114";
}
.icon-more-vertical-square:before {
  content: "\f115";
}
.icon-mortar-pestle:before {
  content: "\f116";
}
.icon-mosque:before {
  content: "\f117";
}
.icon-mouse:before {
  content: "\f118";
}
.icon-mug:before {
  content: "\f119";
}
.icon-mug-hot:before {
  content: "\f11a";
}
.icon-music:before {
  content: "\f11b";
}
.icon-music-list:before {
  content: "\f11c";
}
.icon-music-note:before {
  content: "\f11d";
}
.icon-newspaper:before {
  content: "\f11e";
}
.icon-note:before {
  content: "\f11f";
}
.icon-notebook:before {
  content: "\f120";
}
.icon-note-list:before {
  content: "\f121";
}
.icon-note-list-check:before {
  content: "\f122";
}
.icon-note-list-check-square:before {
  content: "\f123";
}
.icon-note-list-square:before {
  content: "\f124";
}
.icon-note-text:before {
  content: "\f125";
}
.icon-note-text-square:before {
  content: "\f126";
}
.icon-nut:before {
  content: "\f127";
}
.icon-octagon:before {
  content: "\f128";
}
.icon-octagon-check:before {
  content: "\f129";
}
.icon-octagon-exclamation:before {
  content: "\f12a";
}
.icon-octagon-minus:before {
  content: "\f12b";
}
.icon-octagon-plus:before {
  content: "\f12c";
}
.icon-octagon-times:before {
  content: "\f12d";
}
.icon-package:before {
  content: "\f12e";
}
.icon-package-check:before {
  content: "\f12f";
}
.icon-package-dollar:before {
  content: "\f130";
}
.icon-package-heart:before {
  content: "\f131";
}
.icon-package-star:before {
  content: "\f132";
}
.icon-palette:before {
  content: "\f133";
}
.icon-paperclip:before {
  content: "\f134";
}
.icon-papers:before {
  content: "\f135";
}
.icon-papers-text:before {
  content: "\f136";
}
.icon-parking-circle:before {
  content: "\f137";
}
.icon-parking-square:before {
  content: "\f138";
}
.icon-pause:before {
  content: "\f139";
}
.icon-pause-circle:before {
  content: "\f13a";
}
.icon-pen:before {
  content: "\f13b";
}
.icon-pen-line:before {
  content: "\f13c";
}
.icon-pen-tool:before {
  content: "\f13d";
}
.icon-percent:before {
  content: "\f13e";
}
.icon-percent-circle:before {
  content: "\f13f";
}
.icon-percent-square:before {
  content: "\f140";
}
.icon-percent-tag:before {
  content: "\f141";
}
.icon-phone:before {
  content: "\f142";
}
.icon-phone-1:before {
  content: "\f143";
}
.icon-phone-2:before {
  content: "\f144";
}
.icon-phone-call:before {
  content: "\f145";
}
.icon-phone-flip:before {
  content: "\f146";
}
.icon-phone-hangup:before {
  content: "\f147";
}
.icon-phone-incoming:before {
  content: "\f148";
}
.icon-phone-missed:before {
  content: "\f149";
}
.icon-phone-office:before {
  content: "\f14a";
}
.icon-phone-outgoing:before {
  content: "\f14b";
}
.icon-phone-plus:before {
  content: "\f14c";
}
.icon-phone-slash:before {
  content: "\f14d";
}
.icon-phone-times:before {
  content: "\f14e";
}
.icon-pills:before {
  content: "\f14f";
}
.icon-play:before {
  content: "\f150";
}
.icon-play-circle:before {
  content: "\f151";
}
.icon-playlist:before {
  content: "\f152";
}
.icon-play-pause:before {
  content: "\f153";
}
.icon-play-square:before {
  content: "\f154";
}
.icon-plug:before {
  content: "\f155";
}
.icon-plus:before {
  content: "\f156";
}
.icon-plus-circle:before {
  content: "\f157";
}
.icon-plus-square:before {
  content: "\f158";
}
.icon-poll-horizontal-circle:before {
  content: "\f159";
}
.icon-poll-horizontal-square:before {
  content: "\f15a";
}
.icon-poll-vertical-circle:before {
  content: "\f15b";
}
.icon-poll-vertical-square:before {
  content: "\f15c";
}
.icon-power-off:before {
  content: "\f15d";
}
.icon-power-off-circle:before {
  content: "\f15e";
}
.icon-power-off-square:before {
  content: "\f15f";
}
.icon-presentation:before {
  content: "\f160";
}
.icon-presentation-chart-line:before {
  content: "\f161";
}
.icon-presentation-chart-pie:before {
  content: "\f162";
}
.icon-presentation-dollar:before {
  content: "\f163";
}
.icon-presentation-lightbulb:before {
  content: "\f164";
}
.icon-presentation-pen:before {
  content: "\f165";
}
.icon-presentation-play:before {
  content: "\f166";
}
.icon-presentation-poll:before {
  content: "\f167";
}
.icon-presentation-text:before {
  content: "\f168";
}
.icon-presentation-trend-down:before {
  content: "\f169";
}
.icon-presentation-trend-up:before {
  content: "\f16a";
}
.icon-presentation-user:before {
  content: "\f16b";
}
.icon-print:before {
  content: "\f16c";
}
.icon-print-slash:before {
  content: "\f16d";
}
.icon-puzzle:before {
  content: "\f16e";
}
.icon-question-circle:before {
  content: "\f16f";
}
.icon-question-square:before {
  content: "\f170";
}
.icon-radar:before {
  content: "\f171";
}
.icon-radiation:before {
  content: "\f172";
}
.icon-radiation-circle:before {
  content: "\f173";
}
.icon-radio:before {
  content: "\f174";
}
.icon-radio-button-fill:before {
  content: "\f175";
}
.icon-ranking:before {
  content: "\f176";
}
.icon-receipt:before {
  content: "\f177";
}
.icon-receipt-alt:before {
  content: "\f178";
}
.icon-receipt-heart:before {
  content: "\f179";
}
.icon-receipt-heart-alt:before {
  content: "\f17a";
}
.icon-receipt-list:before {
  content: "\f17b";
}
.icon-receipt-list-alt:before {
  content: "\f17c";
}
.icon-receipt-percent:before {
  content: "\f17d";
}
.icon-receipt-percent-alt:before {
  content: "\f17e";
}
.icon-receipt-star:before {
  content: "\f17f";
}
.icon-receipt-star-alt:before {
  content: "\f180";
}
.icon-receipt-text:before {
  content: "\f181";
}
.icon-receipt-text-alt:before {
  content: "\f182";
}
.icon-registered-circle:before {
  content: "\f183";
}
.icon-registered-square:before {
  content: "\f184";
}
.icon-repeat:before {
  content: "\f185";
}
.icon-restaurant:before {
  content: "\f186";
}
.icon-road:before {
  content: "\f187";
}
.icon-rocket:before {
  content: "\f188";
}
.icon-rocket-launch:before {
  content: "\f189";
}
.icon-rotate:before {
  content: "\f18a";
}
.icon-rotate-circle:before {
  content: "\f18b";
}
.icon-rotate-left:before {
  content: "\f18c";
}
.icon-rotate-left-circle:before {
  content: "\f18d";
}
.icon-rotate-left-square:before {
  content: "\f18e";
}
.icon-rotate-right:before {
  content: "\f18f";
}
.icon-rotate-right-circle:before {
  content: "\f190";
}
.icon-rotate-right-square:before {
  content: "\f191";
}
.icon-rotate-square:before {
  content: "\f192";
}
.icon-route:before {
  content: "\f193";
}
.icon-sack-dollar:before {
  content: "\f194";
}
.icon-scan:before {
  content: "\f195";
}
.icon-scan-circle:before {
  content: "\f196";
}
.icon-scanner:before {
  content: "\f197";
}
.icon-scan-qr:before {
  content: "\f198";
}
.icon-school:before {
  content: "\f199";
}
.icon-scissors:before {
  content: "\f19a";
}
.icon-sd-card:before {
  content: "\f19b";
}
.icon-search:before {
  content: "\f19c";
}
.icon-search-minus:before {
  content: "\f19d";
}
.icon-search-plus:before {
  content: "\f19e";
}
.icon-search-text:before {
  content: "\f19f";
}
.icon-send:before {
  content: "\f1a0";
}
.icon-send-right:before {
  content: "\f1a1";
}
.icon-server:before {
  content: "\f1a2";
}
.icon-settings:before {
  content: "\f1a3";
}
.icon-share:before {
  content: "\f1a4";
}
.icon-shield:before {
  content: "\f1a5";
}
.icon-shield-bolt:before {
  content: "\f1a6";
}
.icon-shield-check:before {
  content: "\f1a7";
}
.icon-shield-exclamation:before {
  content: "\f1a8";
}
.icon-shield-heart:before {
  content: "\f1a9";
}
.icon-shield-lock:before {
  content: "\f1aa";
}
.icon-shield-minus:before {
  content: "\f1ab";
}
.icon-shield-play:before {
  content: "\f1ac";
}
.icon-shield-plus:before {
  content: "\f1ad";
}
.icon-shield-question:before {
  content: "\f1ae";
}
.icon-shield-search:before {
  content: "\f1af";
}
.icon-shield-slash:before {
  content: "\f1b0";
}
.icon-shield-star:before {
  content: "\f1b1";
}
.icon-shield-times:before {
  content: "\f1b2";
}
.icon-shield-user:before {
  content: "\f1b3";
}
.icon-shopping-bag:before {
  content: "\f1b4";
}
.icon-shopping-bag-alt:before {
  content: "\f1b5";
}
.icon-shopping-basket:before {
  content: "\f1b6";
}
.icon-shopping-basket-arrow-down:before {
  content: "\f1b7";
}
.icon-shopping-basket-arrow-up:before {
  content: "\f1b8";
}
.icon-shopping-basket-check:before {
  content: "\f1b9";
}
.icon-shopping-basket-heart:before {
  content: "\f1ba";
}
.icon-shopping-basket-minus:before {
  content: "\f1bb";
}
.icon-shopping-basket-plus:before {
  content: "\f1bc";
}
.icon-shopping-basket-star:before {
  content: "\f1bd";
}
.icon-shopping-basket-times:before {
  content: "\f1be";
}
.icon-shopping-cart:before {
  content: "\f1bf";
}
.icon-shopping-cart-arrow-down:before {
  content: "\f1c0";
}
.icon-shopping-cart-arrow-top:before {
  content: "\f1c1";
}
.icon-shopping-cart-check:before {
  content: "\f1c2";
}
.icon-shopping-cart-heart:before {
  content: "\f1c3";
}
.icon-shopping-cart-minus:before {
  content: "\f1c4";
}
.icon-shopping-cart-plus:before {
  content: "\f1c5";
}
.icon-shopping-cart-star:before {
  content: "\f1c6";
}
.icon-shopping-cart-times:before {
  content: "\f1c7";
}
.icon-shuffle:before {
  content: "\f1c8";
}
.icon-signal-stream:before {
  content: "\f1c9";
}
.icon-sign-direction-left:before {
  content: "\f1ca";
}
.icon-sign-direction-right:before {
  content: "\f1cb";
}
.icon-signs-direction:before {
  content: "\f1cc";
}
.icon-sim-card:before {
  content: "\f1cd";
}
.icon-sim-card-1:before {
  content: "\f1ce";
}
.icon-sim-card-2:before {
  content: "\f1cf";
}
.icon-sliders-horizontal:before {
  content: "\f1d0";
}
.icon-sliders-horizontal-alt:before {
  content: "\f1d1";
}
.icon-sliders-vertical:before {
  content: "\f1d2";
}
.icon-sliders-vertical-alt:before {
  content: "\f1d3";
}
.icon-sofa:before {
  content: "\f1d4";
}
.icon-sort:before {
  content: "\f1d5";
}
.icon-sort-ascending:before {
  content: "\f1d6";
}
.icon-sort-ascending-circle:before {
  content: "\f1d7";
}
.icon-sort-ascending-square:before {
  content: "\f1d8";
}
.icon-sort-descending:before {
  content: "\f1d9";
}
.icon-sort-descending-circle:before {
  content: "\f1da";
}
.icon-sort-descending-square:before {
  content: "\f1db";
}
.icon-sort-horizontal:before {
  content: "\f1dc";
}
.icon-sort-vertical:before {
  content: "\f1dd";
}
.icon-sparkle:before {
  content: "\f1de";
}
.icon-speaker:before {
  content: "\f1df";
}
.icon-speedometer:before {
  content: "\f1e0";
}
.icon-star:before {
  content: "\f1e1";
}
.icon-star-circle:before {
  content: "\f1e2";
}
.icon-star-half:before {
  content: "\f1e3";
}
.icon-star-magic:before {
  content: "\f1e4";
}
.icon-star-shooting:before {
  content: "\f1e5";
}
.icon-star-shooting-horizontal:before {
  content: "\f1e6";
}
.icon-star-slash:before {
  content: "\f1e7";
}
.icon-star-square:before {
  content: "\f1e8";
}
.icon-star-tag:before {
  content: "\f1e9";
}
.icon-step-backward:before {
  content: "\f1ea";
}
.icon-step-forward:before {
  content: "\f1eb";
}
.icon-stethoscope:before {
  content: "\f1ec";
}
.icon-sticky-note-circle:before {
  content: "\f1ed";
}
.icon-sticky-note-square:before {
  content: "\f1ee";
}
.icon-sticky-note-text-circle:before {
  content: "\f1ef";
}
.icon-sticky-note-text-square:before {
  content: "\f1f0";
}
.icon-stop:before {
  content: "\f1f1";
}
.icon-stop-circle:before {
  content: "\f1f2";
}
.icon-stopwatch:before {
  content: "\f1f3";
}
.icon-stopwatch-alt:before {
  content: "\f1f4";
}
.icon-stopwatch-check:before {
  content: "\f1f5";
}
.icon-stopwatch-check-alt:before {
  content: "\f1f6";
}
.icon-stopwatch-edit:before {
  content: "\f1f7";
}
.icon-stopwatch-empty:before {
  content: "\f1f8";
}
.icon-stopwatch-minus:before {
  content: "\f1f9";
}
.icon-stopwatch-minus-alt:before {
  content: "\f1fa";
}
.icon-stopwatch-plus:before {
  content: "\f1fb";
}
.icon-stopwatch-plus-alt:before {
  content: "\f1fc";
}
.icon-stopwatch-times:before {
  content: "\f1fd";
}
.icon-stopwatch-times-alt:before {
  content: "\f1fe";
}
.icon-store:before {
  content: "\f1ff";
}
.icon-story:before {
  content: "\f200";
}
.icon-sun:before {
  content: "\f201";
}
.icon-syringe:before {
  content: "\f202";
}
.icon-tablet:before {
  content: "\f203";
}
.icon-tag:before {
  content: "\f204";
}
.icon-tags:before {
  content: "\f205";
}
.icon-target:before {
  content: "\f206";
}
.icon-taxi:before {
  content: "\f207";
}
.icon-telescope:before {
  content: "\f208";
}
.icon-test-tube:before {
  content: "\f209";
}
.icon-test-tube-alt:before {
  content: "\f20a";
}
.icon-thermometer:before {
  content: "\f20b";
}
.icon-thumbtack:before {
  content: "\f20c";
}
.icon-thumbtack-vertical:before {
  content: "\f20d";
}
.icon-time-forward:before {
  content: "\f20e";
}
.icon-time-past:before {
  content: "\f20f";
}
.icon-times:before {
  content: "\f210";
}
.icon-times-circle:before {
  content: "\f211";
}
.icon-times-square:before {
  content: "\f212";
}
.icon-toggle-off:before {
  content: "\f213";
}
.icon-toggle-off-alt:before {
  content: "\f214";
}
.icon-toggle-off-rectangle:before {
  content: "\f215";
}
.icon-toggle-on:before {
  content: "\f216";
}
.icon-toggle-on-alt:before {
  content: "\f217";
}
.icon-toggle-on-rectangle:before {
  content: "\f218";
}
.icon-tool:before {
  content: "\f219";
}
.icon-tooth:before {
  content: "\f21a";
}
.icon-traffic-cone:before {
  content: "\f21b";
}
.icon-trash:before {
  content: "\f21c";
}
.icon-trash-check:before {
  content: "\f21d";
}
.icon-trash-minus:before {
  content: "\f21e";
}
.icon-trash-plus:before {
  content: "\f21f";
}
.icon-trash-redo:before {
  content: "\f220";
}
.icon-trash-slash:before {
  content: "\f221";
}
.icon-trash-times:before {
  content: "\f222";
}
.icon-trash-undo:before {
  content: "\f223";
}
.icon-tree:before {
  content: "\f224";
}
.icon-trend-down:before {
  content: "\f225";
}
.icon-trend-down-circle:before {
  content: "\f226";
}
.icon-trend-down-square:before {
  content: "\f227";
}
.icon-trend-up:before {
  content: "\f228";
}
.icon-trend-up-circle:before {
  content: "\f229";
}
.icon-trend-up-square:before {
  content: "\f22a";
}
.icon-triangle:before {
  content: "\f22b";
}
.icon-triangle-exclamation:before {
  content: "\f22c";
}
.icon-trophy:before {
  content: "\f22d";
}
.icon-trophy-star:before {
  content: "\f22e";
}
.icon-truck:before {
  content: "\f22f";
}
.icon-tv:before {
  content: "\f230";
}
.icon-tv-play:before {
  content: "\f231";
}
.icon-tv-retro:before {
  content: "\f232";
}
.icon-university:before {
  content: "\f233";
}
.icon-unlock:before {
  content: "\f234";
}
.icon-upload:before {
  content: "\f235";
}
.icon-upload-alt:before {
  content: "\f236";
}
.icon-usb-drive:before {
  content: "\f237";
}
.icon-user:before {
  content: "\f238";
}
.icon-user-alt:before {
  content: "\f239";
}
.icon-user-ban:before {
  content: "\f23a";
}
.icon-user-change:before {
  content: "\f23b";
}
.icon-user-check:before {
  content: "\f23c";
}
.icon-user-check-alt:before {
  content: "\f23d";
}
.icon-user-check-bottom:before {
  content: "\f23e";
}
.icon-user-circle:before {
  content: "\f23f";
}
.icon-user-clock:before {
  content: "\f240";
}
.icon-user-code:before {
  content: "\f241";
}
.icon-user-dollar:before {
  content: "\f242";
}
.icon-user-edit:before {
  content: "\f243";
}
.icon-user-eye:before {
  content: "\f244";
}
.icon-user-heart:before {
  content: "\f245";
}
.icon-user-lock:before {
  content: "\f246";
}
.icon-user-minus:before {
  content: "\f247";
}
.icon-user-minus-alt:before {
  content: "\f248";
}
.icon-user-minus-bottom:before {
  content: "\f249";
}
.icon-user-plus:before {
  content: "\f24a";
}
.icon-user-plus-alt:before {
  content: "\f24b";
}
.icon-user-plus-bottom:before {
  content: "\f24c";
}
.icon-users:before {
  content: "\f24d";
}
.icon-users-alt:before {
  content: "\f24e";
}
.icon-user-search:before {
  content: "\f24f";
}
.icon-user-settings:before {
  content: "\f250";
}
.icon-users-group:before {
  content: "\f251";
}
.icon-users-group-alt:before {
  content: "\f252";
}
.icon-users-group-slash:before {
  content: "\f253";
}
.icon-user-shield:before {
  content: "\f254";
}
.icon-user-slash:before {
  content: "\f255";
}
.icon-user-square:before {
  content: "\f256";
}
.icon-users-slash:before {
  content: "\f257";
}
.icon-user-star:before {
  content: "\f258";
}
.icon-user-tag:before {
  content: "\f259";
}
.icon-user-times:before {
  content: "\f25a";
}
.icon-user-times-alt:before {
  content: "\f25b";
}
.icon-user-times-bottom:before {
  content: "\f25c";
}
.icon-user-viewfinder:before {
  content: "\f25d";
}
.icon-vector:before {
  content: "\f25e";
}
.icon-video:before {
  content: "\f25f";
}
.icon-video-circle:before {
  content: "\f260";
}
.icon-video-eye:before {
  content: "\f261";
}
.icon-video-incoming:before {
  content: "\f262";
}
.icon-video-outgoing:before {
  content: "\f263";
}
.icon-video-play:before {
  content: "\f264";
}
.icon-video-plus:before {
  content: "\f265";
}
.icon-video-slash:before {
  content: "\f266";
}
.icon-video-square:before {
  content: "\f267";
}
.icon-virus-covid:before {
  content: "\f268";
}
.icon-virus-covid-slash:before {
  content: "\f269";
}
.icon-voicemail:before {
  content: "\f26a";
}
.icon-volume:before {
  content: "\f26b";
}
.icon-volume-high:before {
  content: "\f26c";
}
.icon-volume-high-slash:before {
  content: "\f26d";
}
.icon-volume-low:before {
  content: "\f26e";
}
.icon-volume-minus:before {
  content: "\f26f";
}
.icon-volume-plus:before {
  content: "\f270";
}
.icon-volume-slash:before {
  content: "\f271";
}
.icon-volume-times:before {
  content: "\f272";
}
.icon-wallet:before {
  content: "\f273";
}
.icon-warehouse:before {
  content: "\f274";
}
.icon-watch-circle:before {
  content: "\f275";
}
.icon-watch-square:before {
  content: "\f276";
}
.icon-wave-pulse:before {
  content: "\f277";
}
.icon-wifi:before {
  content: "\f278";
}
.icon-wifi-slash:before {
  content: "\f279";
}
.icon-activity-circle-fill:before {
  content: "\\e900";
}
.icon-activity-heart-circle-fill:before {
  content: "\\e901";
}
.icon-activity-heart-square-fill:before {
  content: "\\e902";
}
.icon-activity-notification-circle-fill:before {
  content: "\\e903";
}
.icon-activity-notification-square-fill:before {
  content: "\\e904";
}
.icon-activity-square-fill:before {
  content: "\\e905";
}
.icon-activity-star-circle-fill:before {
  content: "\\e906";
}
.icon-activity-star-square-fill:before {
  content: "\\e907";
}
.icon-address-book-fill:before {
  content: "\\e908";
}
.icon-airplay-alt-fill:before {
  content: "\\e909";
}
.icon-airplay-fill:before {
  content: "\\e90a";
}
.icon-alarm-check-alt-fill:before {
  content: "\\e90b";
}
.icon-alarm-check-fill:before {
  content: "\\e90c";
}
.icon-alarm-clock-alt1:before {
  content: "\\e90d";
}
.icon-alarm-clock-empty-fill:before {
  content: "\\e90e";
}
.icon-alarm-clock-fill:before {
  content: "\\e90f";
}
.icon-alarm-edit-fill:before {
  content: "\\e910";
}
.icon-alarm-minus-alt-fill:before {
  content: "\\e911";
}
.icon-alarm-minus-fill:before {
  content: "\\e912";
}
.icon-alarm-plus-alt-fill:before {
  content: "\\e913";
}
.icon-alarm-plus-fill:before {
  content: "\\e914";
}
.icon-alarm-times-alt-fill:before {
  content: "\\e915";
}
.icon-alarm-times-fill:before {
  content: "\\e916";
}
.icon-angle-down-circle-fill:before {
  content: "\\e917";
}
.icon-angle-down-fill:before {
  content: "\\e918";
}
.icon-angle-down-small-fill:before {
  content: "\\e919";
}
.icon-angle-down-square-fill:before {
  content: "\\e91a";
}
.icon-angle-left-circle-fill:before {
  content: "\\e91b";
}
.icon-angle-left-fill:before {
  content: "\\e91c";
}
.icon-angle-left-small-fill:before {
  content: "\\e91d";
}
.icon-angle-left-square-fill:before {
  content: "\\e91e";
}
.icon-angle-right-circle-fill:before {
  content: "\\e91f";
}
.icon-angle-right-fill:before {
  content: "\\e920";
}
.icon-angle-right-small-fill:before {
  content: "\\e921";
}
.icon-angle-right-square-fill:before {
  content: "\\e922";
}
.icon-angles-down-fill:before {
  content: "\\e923";
}
.icon-angles-down-small-fill:before {
  content: "\\e924";
}
.icon-angles-down-up-fill:before {
  content: "\\e925";
}
.icon-angles-left-fill:before {
  content: "\\e926";
}
.icon-angles-left-right-fill:before {
  content: "\\e927";
}
.icon-angles-left-small-fill:before {
  content: "\\e928";
}
.icon-angles-right-fill:before {
  content: "\\e929";
}
.icon-angles-right-small1:before {
  content: "\\e92a";
}
.icon-angles-up-fill:before {
  content: "\\e92b";
}
.icon-angles-up-small-fill:before {
  content: "\\e92c";
}
.icon-angle-up-circle-fill:before {
  content: "\\e92d";
}
.icon-angle-up-fill:before {
  content: "\\e92e";
}
.icon-angle-up-small-fill:before {
  content: "\\e92f";
}
.icon-angle-up-square-fill:before {
  content: "\\e930";
}
.icon-archive-fill:before {
  content: "\\e931";
}
.icon-archway-fill:before {
  content: "\\e932";
}
.icon-arrow-back-alt-fill:before {
  content: "\\e933";
}
.icon-arrow-back-circle-alt-fill:before {
  content: "\\e934";
}
.icon-arrow-back-circle-fill:before {
  content: "\\e935";
}
.icon-arrow-back-fill:before {
  content: "\\e936";
}
.icon-arrow-back-square-alt-fill:before {
  content: "\\e937";
}
.icon-arrow-back-square-fill:before {
  content: "\\e938";
}
.icon-arrow-down-arrow-up-circle-fill:before {
  content: "\\e939";
}
.icon-arrow-down-arrow-up-fill:before {
  content: "\\e93a";
}
.icon-arrow-down-arrow-up-square-fill:before {
  content: "\\e93b";
}
.icon-arrow-down-circle-fill:before {
  content: "\\e93c";
}
.icon-arrow-down-fill:before {
  content: "\\e93d";
}
.icon-arrow-down-from-line-fill:before {
  content: "\\e93e";
}
.icon-arrow-down-left-circle-fill:before {
  content: "\\e93f";
}
.icon-arrow-down-left-fill:before {
  content: "\\e940";
}
.icon-arrow-down-left-small-fill:before {
  content: "\\e941";
}
.icon-arrow-down-left-square-fill:before {
  content: "\\e942";
}
.icon-arrow-down-right-circle-fill:before {
  content: "\\e943";
}
.icon-arrow-down-right-fill:before {
  content: "\\e944";
}
.icon-arrow-down-right-small-fill:before {
  content: "\\e945";
}
.icon-arrow-down-right-square-fill:before {
  content: "\\e946";
}
.icon-arrow-down-small-fill:before {
  content: "\\e947";
}
.icon-arrow-down-square-fill:before {
  content: "\\e948";
}
.icon-arrow-down-to-line-fill:before {
  content: "\\e949";
}
.icon-arrow-export-fill:before {
  content: "\\e94a";
}
.icon-arrow-forward-alt-fill:before {
  content: "\\e94b";
}
.icon-arrow-forward-circle-alt-fill:before {
  content: "\\e94c";
}
.icon-arrow-forward-circle-fill:before {
  content: "\\e94d";
}
.icon-arrow-forward-fill:before {
  content: "\\e94e";
}
.icon-arrow-forward-square-alt-fill:before {
  content: "\\e94f";
}
.icon-arrow-forward-square-fill:before {
  content: "\\e950";
}
.icon-arrow-import-fill:before {
  content: "\\e951";
}
.icon-arrow-left-arrow-right-circle-fill:before {
  content: "\\e952";
}
.icon-arrow-left-arrow-right-fill:before {
  content: "\\e953";
}
.icon-arrow-left-arrow-right-square-fill:before {
  content: "\\e954";
}
.icon-arrow-left-circle-fill:before {
  content: "\\e955";
}
.icon-arrow-left-fill:before {
  content: "\\e956";
}
.icon-arrow-left-from-line-fill:before {
  content: "\\e957";
}
.icon-arrow-left-small-fill:before {
  content: "\\e958";
}
.icon-arrow-left-square-fill:before {
  content: "\\e959";
}
.icon-arrow-left-to-line-fill:before {
  content: "\\e95a";
}
.icon-arrow-reply-fill:before {
  content: "\\e95b";
}
.icon-arrow-right-circle-fill:before {
  content: "\\e95c";
}
.icon-arrow-right-fill:before {
  content: "\\e95d";
}
.icon-arrow-right-from-line-fill:before {
  content: "\\e95e";
}
.icon-arrow-right-small-fill:before {
  content: "\\e95f";
}
.icon-arrow-right-square-fill:before {
  content: "\\e960";
}
.icon-arrow-right-to-line-fill:before {
  content: "\\e961";
}
.icon-arrows-compress-fill:before {
  content: "\\e962";
}
.icon-arrows-expand-fill:before {
  content: "\\e963";
}
.icon-arrow-share-fill:before {
  content: "\\e964";
}
.icon-arrows-left-right-fill:before {
  content: "\\e965";
}
.icon-arrows-move-fill:before {
  content: "\\e966";
}
.icon-arrows-repeat-circle-fill:before {
  content: "\\e967";
}
.icon-arrows-repeat-fill:before {
  content: "\\e968";
}
.icon-arrows-repeat-square-fill:before {
  content: "\\e969";
}
.icon-arrows-up-down-fill:before {
  content: "\\e96a";
}
.icon-arrow-turn-down-left-fill:before {
  content: "\\e96b";
}
.icon-arrow-turn-down-right-fill:before {
  content: "\\e96c";
}
.icon-arrow-turn-left-down-fill:before {
  content: "\\e96d";
}
.icon-arrow-turn-left-up-fill:before {
  content: "\\e96e";
}
.icon-arrow-turn-right-down-fill:before {
  content: "\\e96f";
}
.icon-arrow-turn-right-up-fill:before {
  content: "\\e970";
}
.icon-arrow-turn-up-left-fill:before {
  content: "\\e971";
}
.icon-arrow-turn-up-right-fill:before {
  content: "\\e972";
}
.icon-arrow-up-circle-fill:before {
  content: "\\e973";
}
.icon-arrow-up-fill:before {
  content: "\\e974";
}
.icon-arrow-up-from-line-fill:before {
  content: "\\e975";
}
.icon-arrow-up-left-circle-fill:before {
  content: "\\e976";
}
.icon-arrow-up-left-fill:before {
  content: "\\e977";
}
.icon-arrow-up-left-small-fill:before {
  content: "\\e978";
}
.icon-arrow-up-left-square-fill:before {
  content: "\\e979";
}
.icon-arrow-up-right-circle-fill:before {
  content: "\\e97a";
}
.icon-arrow-up-right-fill:before {
  content: "\\e97b";
}
.icon-arrow-up-right-small-fill:before {
  content: "\\e97c";
}
.icon-arrow-up-right-square-fill:before {
  content: "\\e97d";
}
.icon-arrow-up-small-fill:before {
  content: "\\e97e";
}
.icon-arrow-up-square-fill:before {
  content: "\\e97f";
}
.icon-arrow-up-to-line-fill:before {
  content: "\\e980";
}
.icon-at-fill:before {
  content: "\\e981";
}
.icon-atom-fill:before {
  content: "\\e982";
}
.icon-award-check-fill:before {
  content: "\\e983";
}
.icon-award-fill:before {
  content: "\\e984";
}
.icon-award-star-fill:before {
  content: "\\e985";
}
.icon-backpack-fill:before {
  content: "\\e986";
}
.icon-backward-fill:before {
  content: "\\e987";
}
.icon-badge-check-fill:before {
  content: "\\e988";
}
.icon-badge-discount-alt-fill:before {
  content: "\\e989";
}
.icon-badge-discount-fill:before {
  content: "\\e98a";
}
.icon-badge-dollar-fill:before {
  content: "\\e98b";
}
.icon-badge-fill:before {
  content: "\\e98c";
}
.icon-badge-like-fill:before {
  content: "\\e98d";
}
.icon-bandage-fill:before {
  content: "\\e98e";
}
.icon-ban-fill:before {
  content: "\\e98f";
}
.icon-bank-fill:before {
  content: "\\e990";
}
.icon-battery-bolt-fill:before {
  content: "\\e991";
}
.icon-battery-empty-fill:before {
  content: "\\e992";
}
.icon-battery-full-fill:before {
  content: "\\e993";
}
.icon-battery-half-fill:before {
  content: "\\e994";
}
.icon-bed-fill:before {
  content: "\\e995";
}
.icon-bell-exclamation-fill:before {
  content: "\\e996";
}
.icon-bell-fill:before {
  content: "\\e997";
}
.icon-bell-minus-fill:before {
  content: "\\e998";
}
.icon-bell-notification-fill:before {
  content: "\\e999";
}
.icon-bell-on-fill:before {
  content: "\\e99a";
}
.icon-bell-plus-fill:before {
  content: "\\e99b";
}
.icon-bell-slash-fill:before {
  content: "\\e99c";
}
.icon-bell-times-fill:before {
  content: "\\e99d";
}
.icon-bezier-fill:before {
  content: "\\e99e";
}
.icon-bitcoin-circle-fill:before {
  content: "\\e99f";
}
.icon-bitcoin-fill:before {
  content: "\\e9a0";
}
.icon-bitcoin-square-fill:before {
  content: "\\e9a1";
}
.icon-bluetooth-fill:before {
  content: "\\e9a2";
}
.icon-bolt-alt-fill:before {
  content: "\\e9a3";
}
.icon-bolt-circle-alt-fill:before {
  content: "\\e9a4";
}
.icon-bolt-circle-fill:before {
  content: "\\e9a5";
}
.icon-bolt-fill:before {
  content: "\\e9a6";
}
.icon-bolt-slash-alt-fill:before {
  content: "\\e9a7";
}
.icon-bolt-slash-fill:before {
  content: "\\e9a8";
}
.icon-bolt-square-alt-fill:before {
  content: "\\e9a9";
}
.icon-bolt-square-fill:before {
  content: "\\e9aa";
}
.icon-bone-break-fill:before {
  content: "\\e9ab";
}
.icon-bone-fill:before {
  content: "\\e9ac";
}
.icon-book-alt-fill:before {
  content: "\\e9ad";
}
.icon-book-bookmark-fill:before {
  content: "\\e9ae";
}
.icon-book-empty-fill:before {
  content: "\\e9af";
}
.icon-book-fill:before {
  content: "\\e9b0";
}
.icon-bookmark-check-fill:before {
  content: "\\e9b1";
}
.icon-bookmark-fill:before {
  content: "\\e9b2";
}
.icon-bookmark-heart-fill:before {
  content: "\\e9b3";
}
.icon-bookmark-minus-fill:before {
  content: "\\e9b4";
}
.icon-bookmark-plus-fill:before {
  content: "\\e9b5";
}
.icon-bookmarks-check-fill:before {
  content: "\\e9b6";
}
.icon-bookmark-settings-fill:before {
  content: "\\e9b7";
}
.icon-bookmarks-fill:before {
  content: "\\e9b8";
}
.icon-bookmarks-heart-fill:before {
  content: "\\e9b9";
}
.icon-bookmarks-minus-fill:before {
  content: "\\e9ba";
}
.icon-bookmarks-plus-fill:before {
  content: "\\e9bb";
}
.icon-bookmarks-settings-fill:before {
  content: "\\e9bc";
}
.icon-bookmarks-star-fill:before {
  content: "\\e9bd";
}
.icon-bookmark-star-fill:before {
  content: "\\e9be";
}
.icon-bookmarks-times-fill:before {
  content: "\\e9bf";
}
.icon-bookmarks-user-fill:before {
  content: "\\e9c0";
}
.icon-bookmark-times-fill:before {
  content: "\\e9c1";
}
.icon-bookmark-user-fill:before {
  content: "\\e9c2";
}
.icon-book-open-bookmark-fill:before {
  content: "\\e9c3";
}
.icon-book-open-fill:before {
  content: "\\e9c4";
}
.icon-book-open-reader-fill:before {
  content: "\\e9c5";
}
.icon-book-open-text-fill:before {
  content: "\\e9c6";
}
.icon-books-fill:before {
  content: "\\e9c7";
}
.icon-book-text-fill:before {
  content: "\\e9c8";
}
.icon-box-check-fill:before {
  content: "\\e9c9";
}
.icon-boxes-fill:before {
  content: "\\e9ca";
}
.icon-box-fill:before {
  content: "\\e9cb";
}
.icon-box-minus-fill:before {
  content: "\\e9cc";
}
.icon-box-plus-fill:before {
  content: "\\e9cd";
}
.icon-box-search-fill:before {
  content: "\\e9ce";
}
.icon-box-times-fill:before {
  content: "\\e9cf";
}
.icon-brain-fill:before {
  content: "\\e9d0";
}
.icon-briefcase-check-fill:before {
  content: "\\e9d1";
}
.icon-briefcase-fill:before {
  content: "\\e9d2";
}
.icon-briefcase-minus-fill:before {
  content: "\\e9d3";
}
.icon-briefcase-money-fill:before {
  content: "\\e9d4";
}
.icon-briefcase-plus-fill:before {
  content: "\\e9d5";
}
.icon-briefcase-times-fill:before {
  content: "\\e9d6";
}
.icon-brush-alt-fill:before {
  content: "\\e9d7";
}
.icon-brush-fill:before {
  content: "\\e9d8";
}
.icon-bug-fill:before {
  content: "\\e9d9";
}
.icon-bug-slash-fill:before {
  content: "\\e9da";
}
.icon-building-coins-fill:before {
  content: "\\e9db";
}
.icon-building-fill:before {
  content: "\\e9dc";
}
.icon-buildings-alt-fill:before {
  content: "\\e9dd";
}
.icon-buildings-fill:before {
  content: "\\e9de";
}
.icon-building-tree-fill:before {
  content: "\\e9df";
}
.icon-bus-fill:before {
  content: "\\e9e0";
}
.icon-cabinet-filing-fill:before {
  content: "\\e9e1";
}
.icon-cake-fill:before {
  content: "\\e9e2";
}
.icon-calculator-fill:before {
  content: "\\e9e3";
}
.icon-calculator-simple-fill:before {
  content: "\\e9e4";
}
.icon-calendar-check-alt-fill:before {
  content: "\\e9e5";
}
.icon-calendar-check-fill:before {
  content: "\\e9e6";
}
.icon-calendar-clock-fill:before {
  content: "\\e9e7";
}
.icon-calendar-edit-fill:before {
  content: "\\e9e8";
}
.icon-calendar-empty-alt-fill:before {
  content: "\\e9e9";
}
.icon-calendar-empty-fill:before {
  content: "\\e9ea";
}
.icon-calendar-fill:before {
  content: "\\e9eb";
}
.icon-calendar-heart-fill:before {
  content: "\\e9ec";
}
.icon-calendar-lock-fill:before {
  content: "\\e9ed";
}
.icon-calendar-minus-alt-fill:before {
  content: "\\e9ee";
}
.icon-calendar-minus-fill:before {
  content: "\\e9ef";
}
.icon-calendar-plus-alt-fill:before {
  content: "\\e9f0";
}
.icon-calendar-plus-fill:before {
  content: "\\e9f1";
}
.icon-calendar-search-fill:before {
  content: "\\e9f2";
}
.icon-calendar-star-fill:before {
  content: "\\e9f3";
}
.icon-calendar-times-alt-fill:before {
  content: "\\e9f4";
}
.icon-calendar-times-fill:before {
  content: "\\e9f5";
}
.icon-camera-circle-fill:before {
  content: "\\e9f6";
}
.icon-camera-fill:before {
  content: "\\e9f7";
}
.icon-camera-rotate-fill:before {
  content: "\\e9f8";
}
.icon-camera-slash-fill:before {
  content: "\\e9f9";
}
.icon-camera-square-fill:before {
  content: "\\e9fa";
}
.icon-caret-down-circle-fill:before {
  content: "\\e9fb";
}
.icon-caret-down-fill:before {
  content: "\\e9fc";
}
.icon-caret-down-square-fill:before {
  content: "\\e9fd";
}
.icon-caret-left-circle-fill:before {
  content: "\\e9fe";
}
.icon-caret-left-fill:before {
  content: "\\e9ff";
}
.icon-caret-left-square-fill:before {
  content: "\\ea00";
}
.icon-caret-right-circle-fill:before {
  content: "\\ea01";
}
.icon-caret-right-fill:before {
  content: "\\ea02";
}
.icon-caret-right-square-fill:before {
  content: "\\ea03";
}
.icon-caret-up-circle-fill:before {
  content: "\\ea04";
}
.icon-caret-up-fill:before {
  content: "\\ea05";
}
.icon-caret-up-square-fill:before {
  content: "\\ea06";
}
.icon-castle-fill:before {
  content: "\\ea07";
}
.icon-certificate-fill:before {
  content: "\\ea08";
}
.icon-chart-bar-alt-fill:before {
  content: "\\ea09";
}
.icon-chart-bar-circle-fill:before {
  content: "\\ea0a";
}
.icon-chart-bar-fill:before {
  content: "\\ea0b";
}
.icon-chart-bar-horizontal-fill:before {
  content: "\\ea0c";
}
.icon-chart-bar-square-fill:before {
  content: "\\ea0d";
}
.icon-chart-bar-vertical-fill:before {
  content: "\\ea0e";
}
.icon-chart-line-dots-fill:before {
  content: "\\ea0f";
}
.icon-chart-line-down-fill:before {
  content: "\\ea10";
}
.icon-chart-line-fill:before {
  content: "\\ea11";
}
.icon-chart-line-up-fill:before {
  content: "\\ea12";
}
.icon-chart-pie-fill:before {
  content: "\\ea13";
}
.icon-chart-pyramid-fill:before {
  content: "\\ea14";
}
.icon-chart-trend-down-fill:before {
  content: "\\ea15";
}
.icon-chart-trend-up-fill:before {
  content: "\\ea16";
}
.icon-chat-activity-fill:before {
  content: "\\ea17";
}
.icon-chat-check-alt-fill:before {
  content: "\\ea18";
}
.icon-chat-check-fill:before {
  content: "\\ea19";
}
.icon-chat-clock-fill:before {
  content: "\\ea1a";
}
.icon-chat-code-fill:before {
  content: "\\ea1b";
}
.icon-chat-dots-check-fill:before {
  content: "\\ea1c";
}
.icon-chat-dots-fill:before {
  content: "\\ea1d";
}
.icon-chat-dots-minus-fill:before {
  content: "\\ea1e";
}
.icon-chat-dots-notification-fill:before {
  content: "\\ea1f";
}
.icon-chat-dots-plus-fill:before {
  content: "\\ea20";
}
.icon-chat-dots-times-fill:before {
  content: "\\ea21";
}
.icon-chat-edit-fill:before {
  content: "\\ea22";
}
.icon-chat-exclamation-fill:before {
  content: "\\ea23";
}
.icon-chat-fill:before {
  content: "\\ea24";
}
.icon-chat-heart-fill:before {
  content: "\\ea25";
}
.icon-chat-info-fill:before {
  content: "\\ea26";
}
.icon-chat-lock-fill:before {
  content: "\\ea27";
}
.icon-chat-minus-alt-fill:before {
  content: "\\ea28";
}
.icon-chat-minus-fill:before {
  content: "\\ea29";
}
.icon-chat-notification-fill:before {
  content: "\\ea2a";
}
.icon-chat-plus-alt-fill:before {
  content: "\\ea2b";
}
.icon-chat-plus-fill:before {
  content: "\\ea2c";
}
.icon-chat-question-fill:before {
  content: "\\ea2d";
}
.icon-chats-dots-fill:before {
  content: "\\ea2e";
}
.icon-chat-search-fill:before {
  content: "\\ea2f";
}
.icon-chat-settings-fill:before {
  content: "\\ea30";
}
.icon-chats-fill:before {
  content: "\\ea31";
}
.icon-chat-shield-fill:before {
  content: "\\ea32";
}
.icon-chat-star-fill:before {
  content: "\\ea33";
}
.icon-chats-text-fill:before {
  content: "\\ea34";
}
.icon-chat-text-check-fill:before {
  content: "\\ea35";
}
.icon-chat-text-fill:before {
  content: "\\ea36";
}
.icon-chat-text-minus-fill:before {
  content: "\\ea37";
}
.icon-chat-text-notification-fill:before {
  content: "\\ea38";
}
.icon-chat-text-plus-fill:before {
  content: "\\ea39";
}
.icon-chat-text-times-fill:before {
  content: "\\ea3a";
}
.icon-chat-times-alt-fill:before {
  content: "\\ea3b";
}
.icon-chat-times-fill:before {
  content: "\\ea3c";
}
.icon-checkbox-square-fill1:before {
  content: "\\ea3d";
}
.icon-check-circle-fill:before {
  content: "\\ea3e";
}
.icon-check-double-fill:before {
  content: "\\ea3f";
}
.icon-check-fill:before {
  content: "\\ea40";
}
.icon-check-square-fill:before {
  content: "\\ea41";
}
.icon-chromecast-fill:before {
  content: "\\ea42";
}
.icon-clipboard-check-fill:before {
  content: "\\ea43";
}
.icon-clipboard-edit-fill:before {
  content: "\\ea44";
}
.icon-clipboard-fill:before {
  content: "\\ea45";
}
.icon-clipboard-heart-fill:before {
  content: "\\ea46";
}
.icon-clipboard-list-check-fill:before {
  content: "\\ea47";
}
.icon-clipboard-list-fill:before {
  content: "\\ea48";
}
.icon-clipboard-minus-fill:before {
  content: "\\ea49";
}
.icon-clipboard-plus-fill:before {
  content: "\\ea4a";
}
.icon-clipboard-search-fill:before {
  content: "\\ea4b";
}
.icon-clipboard-star-fill:before {
  content: "\\ea4c";
}
.icon-clipboard-text-fill:before {
  content: "\\ea4d";
}
.icon-clipboard-times-fill:before {
  content: "\\ea4e";
}
.icon-clock-alt-fill:before {
  content: "\\ea4f";
}
.icon-clock-fill:before {
  content: "\\ea50";
}
.icon-clock-square-alt-fill:before {
  content: "\\ea51";
}
.icon-clock-square-fill:before {
  content: "\\ea52";
}
.icon-closed-captioning-fill:before {
  content: "\\ea53";
}
.icon-cloud-check-fill:before {
  content: "\\ea54";
}
.icon-cloud-connection-fill:before {
  content: "\\ea55";
}
.icon-cloud-download-fill:before {
  content: "\\ea56";
}
.icon-cloud-fill:before {
  content: "\\ea57";
}
.icon-cloud-lock-fill:before {
  content: "\\ea58";
}
.icon-cloud-minus-fill:before {
  content: "\\ea59";
}
.icon-cloud-plus-fill:before {
  content: "\\ea5a";
}
.icon-cloud-share-fill:before {
  content: "\\ea5b";
}
.icon-cloud-shield-fill:before {
  content: "\\ea5c";
}
.icon-cloud-slash-fill:before {
  content: "\\ea5d";
}
.icon-cloud-times-fill:before {
  content: "\\ea5e";
}
.icon-cloud-upload-fill:before {
  content: "\\ea5f";
}
.icon-code-circle-fill:before {
  content: "\\ea60";
}
.icon-code-fill:before {
  content: "\\ea61";
}
.icon-code-square-fill:before {
  content: "\\ea62";
}
.icon-coin-card-transfer-fill:before {
  content: "\\ea63";
}
.icon-coin-convert-fill:before {
  content: "\\ea64";
}
.icon-coin-fill:before {
  content: "\\ea65";
}
.icon-coins-fill:before {
  content: "\\ea66";
}
.icon-comment-activity-fill:before {
  content: "\\ea67";
}
.icon-comment-check-alt-fill:before {
  content: "\\ea68";
}
.icon-comment-check-fill:before {
  content: "\\ea69";
}
.icon-comment-clock-fill:before {
  content: "\\ea6a";
}
.icon-comment-code-fill:before {
  content: "\\ea6b";
}
.icon-comment-dots-check-fill:before {
  content: "\\ea6c";
}
.icon-comment-dots-fill:before {
  content: "\\ea6d";
}
.icon-comment-dots-minus-fill:before {
  content: "\\ea6e";
}
.icon-comment-dots-notification-fill:before {
  content: "\\ea6f";
}
.icon-comment-dots-plus-fill:before {
  content: "\\ea70";
}
.icon-comment-dots-times-fill:before {
  content: "\\ea71";
}
.icon-comment-edit-fill:before {
  content: "\\ea72";
}
.icon-comment-exclamation-fill:before {
  content: "\\ea73";
}
.icon-comment-fill:before {
  content: "\\ea74";
}
.icon-comment-heart-fill:before {
  content: "\\ea75";
}
.icon-comment-info-fill:before {
  content: "\\ea76";
}
.icon-comment-lock-fill:before {
  content: "\\ea77";
}
.icon-comment-minus-alt-fill:before {
  content: "\\ea78";
}
.icon-comment-minus-fill:before {
  content: "\\ea79";
}
.icon-comment-notification-fill:before {
  content: "\\ea7a";
}
.icon-comment-plus-alt-fill:before {
  content: "\\ea7b";
}
.icon-comment-plus-fill:before {
  content: "\\ea7c";
}
.icon-comment-question-fill:before {
  content: "\\ea7d";
}
.icon-comments-dots-fill:before {
  content: "\\ea7e";
}
.icon-comment-search-fill:before {
  content: "\\ea7f";
}
.icon-comment-settings-fill:before {
  content: "\\ea80";
}
.icon-comments-fill:before {
  content: "\\ea81";
}
.icon-comment-shield-fill:before {
  content: "\\ea82";
}
.icon-comment-star-fill:before {
  content: "\\ea83";
}
.icon-comments-text-fill:before {
  content: "\\ea84";
}
.icon-comment-text-check-fill:before {
  content: "\\ea85";
}
.icon-comment-text-fill:before {
  content: "\\ea86";
}
.icon-comment-text-minus-fill:before {
  content: "\\ea87";
}
.icon-comment-text-notification-fill:before {
  content: "\\ea88";
}
.icon-comment-text-plus-fill:before {
  content: "\\ea89";
}
.icon-comment-text-times-fill:before {
  content: "\\ea8a";
}
.icon-comment-times-alt-fill:before {
  content: "\\ea8b";
}
.icon-comment-times-fill:before {
  content: "\\ea8c";
}
.icon-compass-fill:before {
  content: "\\ea8d";
}
.icon-compass-needle-fill:before {
  content: "\\ea8e";
}
.icon-compress-fill:before {
  content: "\\ea8f";
}
.icon-contrast-fill:before {
  content: "\\ea90";
}
.icon-copy-alt-fill:before {
  content: "\\ea91";
}
.icon-copy-check-fill:before {
  content: "\\ea92";
}
.icon-copy-fill:before {
  content: "\\ea93";
}
.icon-copy-plus-fill:before {
  content: "\\ea94";
}
.icon-copyright-circle-fill:before {
  content: "\\ea95";
}
.icon-copyright-square-fill:before {
  content: "\\ea96";
}
.icon-coupon-fill:before {
  content: "\\ea97";
}
.icon-coupon-heart-fill:before {
  content: "\\ea98";
}
.icon-coupon-percent-fill:before {
  content: "\\ea99";
}
.icon-coupon-star-fill:before {
  content: "\\ea9a";
}
.icon-cpu-fill:before {
  content: "\\ea9b";
}
.icon-credit-card-ban-fill:before {
  content: "\\ea9c";
}
.icon-credit-card-change-fill:before {
  content: "\\ea9d";
}
.icon-credit-card-check-fill:before {
  content: "\\ea9e";
}
.icon-credit-card-convert-fill:before {
  content: "\\ea9f";
}
.icon-credit-card-edit-fill:before {
  content: "\\eaa0";
}
.icon-credit-card-fill:before {
  content: "\\eaa1";
}
.icon-credit-card-minus-fill:before {
  content: "\\eaa2";
}
.icon-credit-card-plus-fill:before {
  content: "\\eaa3";
}
.icon-credit-card-slash-fill:before {
  content: "\\eaa4";
}
.icon-credit-card-times-fill:before {
  content: "\\eaa5";
}
.icon-crown-alt-fill:before {
  content: "\\eaa6";
}
.icon-crown-fill:before {
  content: "\\eaa7";
}
.icon-cursor-click-fill:before {
  content: "\\eaa8";
}
.icon-cursor-fill:before {
  content: "\\eaa9";
}
.icon-database-fill:before {
  content: "\\eaaa";
}
.icon-delete-left-fill:before {
  content: "\\eaab";
}
.icon-delete-right-fill:before {
  content: "\\eaac";
}
.icon-delivery-cart-arrow-down1:before {
  content: "\\eaad";
}
.icon-delivery-cart-arrow-up-fill:before {
  content: "\\eaae";
}
.icon-delivery-cart-fill:before {
  content: "\\eaaf";
}
.icon-desktop-code-fill:before {
  content: "\\eab0";
}
.icon-desktop-fill:before {
  content: "\\eab1";
}
.icon-desktop-mobile-fill:before {
  content: "\\eab2";
}
.icon-diamond-exclamation-fill:before {
  content: "\\eab3";
}
.icon-diamond-fill:before {
  content: "\\eab4";
}
.icon-disc-fill:before {
  content: "\\eab5";
}
.icon-dislike-circle-fill:before {
  content: "\\eab6";
}
.icon-dislike-fill:before {
  content: "\\eab7";
}
.icon-dislike-square-fill:before {
  content: "\\eab8";
}
.icon-dislike-tag-fill:before {
  content: "\\eab9";
}
.icon-dna-fill:before {
  content: "\\eaba";
}
.icon-document-fill:before {
  content: "\\eabb";
}
.icon-document-list-check-fill:before {
  content: "\\eabc";
}
.icon-document-list-fill:before {
  content: "\\eabd";
}
.icon-dollar-circle-fill:before {
  content: "\\eabe";
}
.icon-dollar-fill:before {
  content: "\\eabf";
}
.icon-dollar-receive-circle-fill:before {
  content: "\\eac0";
}
.icon-dollar-receive-square-fill:before {
  content: "\\eac1";
}
.icon-dollar-send-circle-fill:before {
  content: "\\eac2";
}
.icon-dollar-send-square-fill:before {
  content: "\\eac3";
}
.icon-dollar-square-fill:before {
  content: "\\eac4";
}
.icon-door-closed-fill:before {
  content: "\\eac5";
}
.icon-door-open-fill:before {
  content: "\\eac6";
}
.icon-download-alt-fill:before {
  content: "\\eac7";
}
.icon-download-fill:before {
  content: "\\eac8";
}
.icon-drag-horizontal-fill:before {
  content: "\\eac9";
}
.icon-drag-lines-horizontal-fill:before {
  content: "\\eaca";
}
.icon-drag-lines-vertical-fill:before {
  content: "\\eacb";
}
.icon-drag-vertical-fill:before {
  content: "\\eacc";
}
.icon-droplet-fill:before {
  content: "\\eacd";
}
.icon-droplet-slash-fill:before {
  content: "\\eace";
}
.icon-edit-fill:before {
  content: "\\eacf";
}
.icon-eject-fill:before {
  content: "\\ead0";
}
.icon-envelope-ban-fill:before {
  content: "\\ead1";
}
.icon-envelope-check-fill:before {
  content: "\\ead2";
}
.icon-envelope-clock-fill:before {
  content: "\\ead3";
}
.icon-envelope-edit1:before {
  content: "\\ead4";
}
.icon-envelope-eye-fill:before {
  content: "\\ead5";
}
.icon-envelope-fill:before {
  content: "\\ead6";
}
.icon-envelope-heart-fill:before {
  content: "\\ead7";
}
.icon-envelope-lock-fill:before {
  content: "\\ead8";
}
.icon-envelope-minus-fill:before {
  content: "\\ead9";
}
.icon-envelope-notification-fill:before {
  content: "\\eada";
}
.icon-envelope-open-fill:before {
  content: "\\eadb";
}
.icon-envelope-plus-fill:before {
  content: "\\eadc";
}
.icon-envelope-search-fill:before {
  content: "\\eadd";
}
.icon-envelope-settings-fill:before {
  content: "\\eade";
}
.icon-envelopes-fill:before {
  content: "\\eadf";
}
.icon-envelope-shield-fill:before {
  content: "\\eae0";
}
.icon-envelope-star-fill:before {
  content: "\\eae1";
}
.icon-envelope-times-fill:before {
  content: "\\eae2";
}
.icon-ethereum-circle-fill:before {
  content: "\\eae3";
}
.icon-ethereum-fill:before {
  content: "\\eae4";
}
.icon-ethereum-square-fill:before {
  content: "\\eae5";
}
.icon-euro-circle-fill:before {
  content: "\\eae6";
}
.icon-euro-fill:before {
  content: "\\eae7";
}
.icon-euro-square-fill:before {
  content: "\\eae8";
}
.icon-exchange-horizontal-circle1:before {
  content: "\\eae9";
}
.icon-exchange-horizontal-fill:before {
  content: "\\eaea";
}
.icon-exchange-horizontal-square-fill:before {
  content: "\\eaeb";
}
.icon-exchange-vertical-circle1:before {
  content: "\\eaec";
}
.icon-exchange-vertical-fill:before {
  content: "\\eaed";
}
.icon-exchange-vertical-square-fill:before {
  content: "\\eaee";
}
.icon-exclamation-circle-fill:before {
  content: "\\eaef";
}
.icon-exclamation-square-fill:before {
  content: "\\eaf0";
}
.icon-expand-fill:before {
  content: "\\eaf1";
}
.icon-eye-closed-fill:before {
  content: "\\eaf2";
}
.icon-eye-fill:before {
  content: "\\eaf3";
}
.icon-eye-slash-fill:before {
  content: "\\eaf4";
}
.icon-fast-backward-fill:before {
  content: "\\eaf5";
}
.icon-fast-forward-fill:before {
  content: "\\eaf6";
}
.icon-file-ban-fill:before {
  content: "\\eaf7";
}
.icon-file-check1:before {
  content: "\\eaf8";
}
.icon-file-clock-fill:before {
  content: "\\eaf9";
}
.icon-file-code-fill:before {
  content: "\\eafa";
}
.icon-file-copy-fill:before {
  content: "\\eafb";
}
.icon-file-download-fill:before {
  content: "\\eafc";
}
.icon-file-edit-fill:before {
  content: "\\eafd";
}
.icon-file-export-alt-fill:before {
  content: "\\eafe";
}
.icon-file-export-fill:before {
  content: "\\eaff";
}
.icon-file-fill:before {
  content: "\\eb00";
}
.icon-file-heart-fill:before {
  content: "\\eb01";
}
.icon-file-import-alt-fill:before {
  content: "\\eb02";
}
.icon-file-import-fill:before {
  content: "\\eb03";
}
.icon-file-list-ban1:before {
  content: "\\eb04";
}
.icon-file-list-check-fill:before {
  content: "\\eb05";
}
.icon-file-list-edit-fill:before {
  content: "\\eb06";
}
.icon-file-list-fill:before {
  content: "\\eb07";
}
.icon-file-list-heart-fill:before {
  content: "\\eb08";
}
.icon-file-list-lock-fill:before {
  content: "\\eb09";
}
.icon-file-list-minus-fill:before {
  content: "\\eb0a";
}
.icon-file-list-plus-fill:before {
  content: "\\eb0b";
}
.icon-file-list-search-fill:before {
  content: "\\eb0c";
}
.icon-file-list-shield-fill:before {
  content: "\\eb0d";
}
.icon-file-list-star-fill:before {
  content: "\\eb0e";
}
.icon-file-list-times-fill:before {
  content: "\\eb0f";
}
.icon-file-lock-fill:before {
  content: "\\eb10";
}
.icon-file-minus-fill:before {
  content: "\\eb11";
}
.icon-file-music-fill:before {
  content: "\\eb12";
}
.icon-file-plus-fill:before {
  content: "\\eb13";
}
.icon-file-search-fill:before {
  content: "\\eb14";
}
.icon-file-settings-fill:before {
  content: "\\eb15";
}
.icon-file-shield-fill:before {
  content: "\\eb16";
}
.icon-file-star-fill:before {
  content: "\\eb17";
}
.icon-file-text-ban-fill:before {
  content: "\\eb18";
}
.icon-file-text-check-fill:before {
  content: "\\eb19";
}
.icon-file-text-edit-fill:before {
  content: "\\eb1a";
}
.icon-file-text-fill:before {
  content: "\\eb1b";
}
.icon-file-text-heart-fill:before {
  content: "\\eb1c";
}
.icon-file-text-lock-fill:before {
  content: "\\eb1d";
}
.icon-file-text-minus-fill:before {
  content: "\\eb1e";
}
.icon-file-text-plus-fill:before {
  content: "\\eb1f";
}
.icon-file-text-search-fill:before {
  content: "\\eb20";
}
.icon-file-text-shield-fill:before {
  content: "\\eb21";
}
.icon-file-text-star-fill:before {
  content: "\\eb22";
}
.icon-file-text-times-fill:before {
  content: "\\eb23";
}
.icon-file-times-fill:before {
  content: "\\eb24";
}
.icon-file-upload-fill:before {
  content: "\\eb25";
}
.icon-file-user-fill:before {
  content: "\\eb26";
}
.icon-film-fill:before {
  content: "\\eb27";
}
.icon-filter-check-fill:before {
  content: "\\eb28";
}
.icon-filter-fill:before {
  content: "\\eb29";
}
.icon-filter-minus-fill:before {
  content: "\\eb2a";
}
.icon-filter-plus-fill:before {
  content: "\\eb2b";
}
.icon-filter-times-fill:before {
  content: "\\eb2c";
}
.icon-fingerprint-fill:before {
  content: "\\eb2d";
}
.icon-fingerprint-viewfinder-fill:before {
  content: "\\eb2e";
}
.icon-fire-fill:before {
  content: "\\eb2f";
}
.icon-flag-fill:before {
  content: "\\eb30";
}
.icon-flag-triangle-fill:before {
  content: "\\eb31";
}
.icon-flashlight-fill:before {
  content: "\\eb32";
}
.icon-flask-fill:before {
  content: "\\eb33";
}
.icon-flask-round-fill:before {
  content: "\\eb34";
}
.icon-floppy-disk-fill:before {
  content: "\\eb35";
}
.icon-folder-alt1:before {
  content: "\\eb36";
}
.icon-folder-ban-fill:before {
  content: "\\eb37";
}
.icon-folder-check-fill:before {
  content: "\\eb38";
}
.icon-folder-clock-fill:before {
  content: "\\eb39";
}
.icon-folder-code-fill:before {
  content: "\\eb3a";
}
.icon-folder-connection-fill:before {
  content: "\\eb3b";
}
.icon-folder-download-fill:before {
  content: "\\eb3c";
}
.icon-folder-edit-fill:before {
  content: "\\eb3d";
}
.icon-folder-export-fill:before {
  content: "\\eb3e";
}
.icon-folder-fill:before {
  content: "\\eb3f";
}
.icon-folder-heart-fill:before {
  content: "\\eb40";
}
.icon-folder-import-fill:before {
  content: "\\eb41";
}
.icon-folder-lock-fill:before {
  content: "\\eb42";
}
.icon-folder-minus-fill:before {
  content: "\\eb43";
}
.icon-folder-music-fill:before {
  content: "\\eb44";
}
.icon-folder-open-fill:before {
  content: "\\eb45";
}
.icon-folder-plus-fill:before {
  content: "\\eb46";
}
.icon-folder-search-fill:before {
  content: "\\eb47";
}
.icon-folder-settings-fill:before {
  content: "\\eb48";
}
.icon-folder-shield-fill:before {
  content: "\\eb49";
}
.icon-folder-star-fill:before {
  content: "\\eb4a";
}
.icon-folder-times-fill:before {
  content: "\\eb4b";
}
.icon-folder-upload-fill:before {
  content: "\\eb4c";
}
.icon-folder-user-fill:before {
  content: "\\eb4d";
}
.icon-food-tray-fill:before {
  content: "\\eb4e";
}
.icon-forward-fill:before {
  content: "\\eb4f";
}
.icon-game-controller-fill:before {
  content: "\\eb50";
}
.icon-gift-fill:before {
  content: "\\eb51";
}
.icon-glasses-fill:before {
  content: "\\eb52";
}
.icon-globe-earth-fill:before {
  content: "\\eb53";
}
.icon-globe-fill:before {
  content: "\\eb54";
}
.icon-globe-stand-fill:before {
  content: "\\eb55";
}
.icon-graduation-cap-fill:before {
  content: "\\eb56";
}
.icon-grid-1-fill:before {
  content: "\\eb57";
}
.icon-grid-2-fill:before {
  content: "\\eb58";
}
.icon-grid-circle-fill:before {
  content: "\\eb59";
}
.icon-grid-dividers-fill:before {
  content: "\\eb5a";
}
.icon-grid-square-circle-fill:before {
  content: "\\eb5b";
}
.icon-grid-square-fill:before {
  content: "\\eb5c";
}
.icon-grid-square-plus-fill:before {
  content: "\\eb5d";
}
.icon-grid-web-1-fill:before {
  content: "\\eb5e";
}
.icon-grid-web-2-fill:before {
  content: "\\eb5f";
}
.icon-grid-web-3-fill:before {
  content: "\\eb60";
}
.icon-grid-web-4-fill:before {
  content: "\\eb61";
}
.icon-grid-web-5-fill:before {
  content: "\\eb62";
}
.icon-grid-web-6-fill:before {
  content: "\\eb63";
}
.icon-grid-web-7-fill:before {
  content: "\\eb64";
}
.icon-hand-holding-dollar-circle-fill:before {
  content: "\\eb65";
}
.icon-hand-holding-dollar-fill:before {
  content: "\\eb66";
}
.icon-hand-holding-user-fill:before {
  content: "\\eb67";
}
.icon-hard-drive-fill:before {
  content: "\\eb68";
}
.icon-hashtag-fill:before {
  content: "\\eb69";
}
.icon-headphones-fill:before {
  content: "\\eb6a";
}
.icon-heart-check-fill:before {
  content: "\\eb6b";
}
.icon-heart-circle-fill:before {
  content: "\\eb6c";
}
.icon-heart-fill:before {
  content: "\\eb6d";
}
.icon-heart-minus-fill:before {
  content: "\\eb6e";
}
.icon-heart-plus-fill:before {
  content: "\\eb6f";
}
.icon-heart-pulse-fill:before {
  content: "\\eb70";
}
.icon-heart-slash-fill:before {
  content: "\\eb71";
}
.icon-heart-square-fill:before {
  content: "\\eb72";
}
.icon-heart-tag-fill:before {
  content: "\\eb73";
}
.icon-heart-times-fill:before {
  content: "\\eb74";
}
.icon-home-activity-fill:before {
  content: "\\eb75";
}
.icon-home-dash-activity-fill:before {
  content: "\\eb76";
}
.icon-home-dash-dollar-fill:before {
  content: "\\eb77";
}
.icon-home-dash-fill-fill:before {
  content: "\\eb78";
}
.icon-home-dash-heart-fill:before {
  content: "\\eb79";
}
.icon-home-dash-lock-fill:before {
  content: "\\eb7a";
}
.icon-home-dash-search-fill:before {
  content: "\\eb7b";
}
.icon-home-dash-shield-fill:before {
  content: "\\eb7c";
}
.icon-home-dash-star-fill:before {
  content: "\\eb7d";
}
.icon-home-dash-trend-down-fill:before {
  content: "\\eb7e";
}
.icon-home-dash-trend-up-fill:before {
  content: "\\eb7f";
}
.icon-home-dash-user-fill:before {
  content: "\\eb80";
}
.icon-home-dash-wifi-fill:before {
  content: "\\eb81";
}
.icon-home-dollar-fill:before {
  content: "\\eb82";
}
.icon-home-fill:before {
  content: "\\eb83";
}
.icon-home-heart-fill:before {
  content: "\\eb84";
}
.icon-home-lock-fill:before {
  content: "\\eb85";
}
.icon-home-roof-activity-fill:before {
  content: "\\eb86";
}
.icon-home-roof-dollar-fill:before {
  content: "\\eb87";
}
.icon-home-roof-fill:before {
  content: "\\eb88";
}
.icon-home-roof-heart-fill:before {
  content: "\\eb89";
}
.icon-home-roof-lock-fill:before {
  content: "\\eb8a";
}
.icon-home-roof-search-fill:before {
  content: "\\eb8b";
}
.icon-home-roof-shield-fill:before {
  content: "\\eb8c";
}
.icon-home-roof-star-fill:before {
  content: "\\eb8d";
}
.icon-home-roof-trend-down-fill:before {
  content: "\\eb8e";
}
.icon-home-roof-trend-up-fill:before {
  content: "\\eb8f";
}
.icon-home-roof-user-fill:before {
  content: "\\eb90";
}
.icon-home-roof-wifi-fill:before {
  content: "\\eb91";
}
.icon-home-search-fill:before {
  content: "\\eb92";
}
.icon-home-shield-fill:before {
  content: "\\eb93";
}
.icon-home-star-fill:before {
  content: "\\eb94";
}
.icon-home-trend-down-fill:before {
  content: "\\eb95";
}
.icon-home-trend-up-fill:before {
  content: "\\eb96";
}
.icon-home-user-fill:before {
  content: "\\eb97";
}
.icon-home-wifi-fill:before {
  content: "\\eb98";
}
.icon-hospital-fill:before {
  content: "\\eb99";
}
.icon-hospital-h-sign-circle-fill:before {
  content: "\\eb9a";
}
.icon-hospital-h-sign-square-fill:before {
  content: "\\eb9b";
}
.icon-hourglass-fill:before {
  content: "\\eb9c";
}
.icon-id-badge-fill:before {
  content: "\\eb9d";
}
.icon-id-card-fill:before {
  content: "\\eb9e";
}
.icon-image-check-fill:before {
  content: "\\eb9f";
}
.icon-image-download-fill:before {
  content: "\\eba0";
}
.icon-image-fill:before {
  content: "\\eba1";
}
.icon-image-gallery-fill:before {
  content: "\\eba2";
}
.icon-image-gallery-plus-fill:before {
  content: "\\eba3";
}
.icon-image-minus-fill:before {
  content: "\\eba4";
}
.icon-image-plus-fill:before {
  content: "\\eba5";
}
.icon-image-times-fill:before {
  content: "\\eba6";
}
.icon-image-upload-fill:before {
  content: "\\eba7";
}
.icon-inbox-download-fill:before {
  content: "\\eba8";
}
.icon-inbox-empty-fill:before {
  content: "\\eba9";
}
.icon-inbox-fill:before {
  content: "\\ebaa";
}
.icon-inbox-upload-fill:before {
  content: "\\ebab";
}
.icon-info-circle-fill:before {
  content: "\\ebac";
}
.icon-info-square-fill:before {
  content: "\\ebad";
}
.icon-invoice-fill:before {
  content: "\\ebae";
}
.icon-kaaba-fill:before {
  content: "\\ebaf";
}
.icon-keyboard-fill:before {
  content: "\\ebb0";
}
.icon-key-circle-fill:before {
  content: "\\ebb1";
}
.icon-key-fill:before {
  content: "\\ebb2";
}
.icon-keyhole-circle-fill:before {
  content: "\\ebb3";
}
.icon-keyhole-square-fill:before {
  content: "\\ebb4";
}
.icon-keypad-fill:before {
  content: "\\ebb5";
}
.icon-key-square-fill:before {
  content: "\\ebb6";
}
.icon-laptop-code-fill:before {
  content: "\\ebb7";
}
.icon-laptop-fill:before {
  content: "\\ebb8";
}
.icon-layer-group-fill:before {
  content: "\\ebb9";
}
.icon-layout-web-1-fill:before {
  content: "\\ebba";
}
.icon-layout-web-2-fill:before {
  content: "\\ebbb";
}
.icon-layout-web-3-fill:before {
  content: "\\ebbc";
}
.icon-layout-web-4-fill:before {
  content: "\\ebbd";
}
.icon-layout-web-5-fill:before {
  content: "\\ebbe";
}
.icon-layout-web-6-fill:before {
  content: "\\ebbf";
}
.icon-layout-web-7-fill:before {
  content: "\\ebc0";
}
.icon-layout-web-8-fill:before {
  content: "\\ebc1";
}
.icon-layout-web-9-fill:before {
  content: "\\ebc2";
}
.icon-layout-web-10-fill:before {
  content: "\\ebc3";
}
.icon-layout-web-11-fill:before {
  content: "\\ebc4";
}
.icon-layout-web-12-fill:before {
  content: "\\ebc5";
}
.icon-leaf-fill:before {
  content: "\\ebc6";
}
.icon-life-ring-fill:before {
  content: "\\ebc7";
}
.icon-lightbulb-fill:before {
  content: "\\ebc8";
}
.icon-light-emergency-fill:before {
  content: "\\ebc9";
}
.icon-light-emergency-on-fill:before {
  content: "\\ebca";
}
.icon-like-circle-fill:before {
  content: "\\ebcb";
}
.icon-like-fill:before {
  content: "\\ebcc";
}
.icon-like-square-fill:before {
  content: "\\ebcd";
}
.icon-like-tag-fill:before {
  content: "\\ebce";
}
.icon-line-chart-dots-circle-fill:before {
  content: "\\ebcf";
}
.icon-line-chart-dots-fill:before {
  content: "\\ebd0";
}
.icon-line-chart-dots-square-fill:before {
  content: "\\ebd1";
}
.icon-line-down-circle-fill:before {
  content: "\\ebd2";
}
.icon-line-down-square-fill:before {
  content: "\\ebd3";
}
.icon-line-up-circle-fill:before {
  content: "\\ebd4";
}
.icon-line-up-square-fill:before {
  content: "\\ebd5";
}
.icon-link-alt-fill:before {
  content: "\\ebd6";
}
.icon-link-broken-fill:before {
  content: "\\ebd7";
}
.icon-link-broken-horizontal-fill:before {
  content: "\\ebd8";
}
.icon-link-fill:before {
  content: "\\ebd9";
}
.icon-link-horizontal-alt-fill:before {
  content: "\\ebda";
}
.icon-link-horizontal-fill:before {
  content: "\\ebdb";
}
.icon-list-fill:before {
  content: "\\ebdc";
}
.icon-location-arrow-circle-fill:before {
  content: "\\ebdd";
}
.icon-location-arrow-fill:before {
  content: "\\ebde";
}
.icon-location-arrow-square-fill:before {
  content: "\\ebdf";
}
.icon-location-crosshairs-fill:before {
  content: "\\ebe0";
}
.icon-location-crosshairs-slash-fill:before {
  content: "\\ebe1";
}
.icon-location-pin-alt-fill:before {
  content: "\\ebe2";
}
.icon-location-pin-check-fill:before {
  content: "\\ebe3";
}
.icon-location-pin-edit-fill:before {
  content: "\\ebe4";
}
.icon-location-pin-exclamation-fill:before {
  content: "\\ebe5";
}
.icon-location-pin-eye-fill:before {
  content: "\\ebe6";
}
.icon-location-pin-fill-fill:before {
  content: "\\ebe7";
}
.icon-location-pin-heart-fill:before {
  content: "\\ebe8";
}
.icon-location-pin-lock-fill:before {
  content: "\\ebe9";
}
.icon-location-pin-minus-fill:before {
  content: "\\ebea";
}
.icon-location-pin-plus-fill:before {
  content: "\\ebeb";
}
.icon-location-pin-question-fill:before {
  content: "\\ebec";
}
.icon-location-pin-search-fill:before {
  content: "\\ebed";
}
.icon-location-pin-slash-alt-fill:before {
  content: "\\ebee";
}
.icon-location-pin-slash-fill:before {
  content: "\\ebef";
}
.icon-location-pin-star-fill:before {
  content: "\\ebf0";
}
.icon-location-pin-times-fill:before {
  content: "\\ebf1";
}
.icon-lock-fill:before {
  content: "\\ebf2";
}
.icon-lock-viewfinder-fill:before {
  content: "\\ebf3";
}
.icon-log-in-fill:before {
  content: "\\ebf4";
}
.icon-log-out-fill:before {
  content: "\\ebf5";
}
.icon-magnet-fill:before {
  content: "\\ebf6";
}
.icon-map-fill:before {
  content: "\\ebf7";
}
.icon-map-location-fill:before {
  content: "\\ebf8";
}
.icon-map-pin-fill:before {
  content: "\\ebf9";
}
.icon-mask-face-fill:before {
  content: "\\ebfa";
}
.icon-maximize-fill:before {
  content: "\\ebfb";
}
.icon-medal-check-fill:before {
  content: "\\ebfc";
}
.icon-medal-fill:before {
  content: "\\ebfd";
}
.icon-medal-star-fill:before {
  content: "\\ebfe";
}
.icon-megaphone-fill:before {
  content: "\\ebff";
}
.icon-menu-alt-fill:before {
  content: "\\ec00";
}
.icon-menu-circle-alt-fill:before {
  content: "\\ec01";
}
.icon-menu-circle-fill:before {
  content: "\\ec02";
}
.icon-menu-duo-circle-fill:before {
  content: "\\ec03";
}
.icon-menu-duo-fill:before {
  content: "\\ec04";
}
.icon-menu-duo-square-fill:before {
  content: "\\ec05";
}
.icon-menu-fill:before {
  content: "\\ec06";
}
.icon-menu-left-alt-fill:before {
  content: "\\ec07";
}
.icon-menu-left-circle-alt-fill:before {
  content: "\\ec08";
}
.icon-menu-left-circle-fill:before {
  content: "\\ec09";
}
.icon-menu-left-fill:before {
  content: "\\ec0a";
}
.icon-menu-left-square-alt-fill:before {
  content: "\\ec0b";
}
.icon-menu-left-square-fill:before {
  content: "\\ec0c";
}
.icon-menu-right-alt-fill:before {
  content: "\\ec0d";
}
.icon-menu-right-circle-alt-fill:before {
  content: "\\ec0e";
}
.icon-menu-right-circle-fill:before {
  content: "\\ec0f";
}
.icon-menu-right-fill:before {
  content: "\\ec10";
}
.icon-menu-right-square-alt-fill:before {
  content: "\\ec11";
}
.icon-menu-right-square-fill:before {
  content: "\\ec12";
}
.icon-menu-square-alt-fill:before {
  content: "\\ec13";
}
.icon-menu-square-fill:before {
  content: "\\ec14";
}
.icon-message-activity-fill:before {
  content: "\\ec15";
}
.icon-message-check-alt-fill:before {
  content: "\\ec16";
}
.icon-message-check-fill:before {
  content: "\\ec17";
}
.icon-message-clock-fill:before {
  content: "\\ec18";
}
.icon-message-code-fill:before {
  content: "\\ec19";
}
.icon-message-dots-check-fill:before {
  content: "\\ec1a";
}
.icon-message-dots-fill:before {
  content: "\\ec1b";
}
.icon-message-dots-minus-fill:before {
  content: "\\ec1c";
}
.icon-message-dots-notification-fill:before {
  content: "\\ec1d";
}
.icon-message-dots-plus-fill:before {
  content: "\\ec1e";
}
.icon-message-dots-times-fill:before {
  content: "\\ec1f";
}
.icon-message-edit-fill:before {
  content: "\\ec20";
}
.icon-message-exclamation-fill:before {
  content: "\\ec21";
}
.icon-message-fill:before {
  content: "\\ec22";
}
.icon-message-heart-fill:before {
  content: "\\ec23";
}
.icon-message-info-fill:before {
  content: "\\ec24";
}
.icon-message-lock-fill:before {
  content: "\\ec25";
}
.icon-message-minus-alt-fill:before {
  content: "\\ec26";
}
.icon-message-minus-fill:before {
  content: "\\ec27";
}
.icon-message-notification-fill:before {
  content: "\\ec28";
}
.icon-message-plus-alt-fill:before {
  content: "\\ec29";
}
.icon-message-plus-fill:before {
  content: "\\ec2a";
}
.icon-message-question-fill:before {
  content: "\\ec2b";
}
.icon-messages-dots-fill:before {
  content: "\\ec2c";
}
.icon-message-search-fill:before {
  content: "\\ec2d";
}
.icon-message-settings-fill:before {
  content: "\\ec2e";
}
.icon-messages-fill-fill:before {
  content: "\\ec2f";
}
.icon-message-shield-fill:before {
  content: "\\ec30";
}
.icon-message-star-fill:before {
  content: "\\ec31";
}
.icon-messages-text-fill:before {
  content: "\\ec32";
}
.icon-message-text-check-fill:before {
  content: "\\ec33";
}
.icon-message-text-fill:before {
  content: "\\ec34";
}
.icon-message-text-minus-fill:before {
  content: "\\ec35";
}
.icon-message-text-notification-fill:before {
  content: "\\ec36";
}
.icon-message-text-plus-fill:before {
  content: "\\ec37";
}
.icon-message-text-times-fill:before {
  content: "\\ec38";
}
.icon-message-times-alt-fill:before {
  content: "\\ec39";
}
.icon-message-times-fill:before {
  content: "\\ec3a";
}
.icon-microphone-fill:before {
  content: "\\ec3b";
}
.icon-microphone-slash-fill:before {
  content: "\\ec3c";
}
.icon-microphone-stand-fill:before {
  content: "\\ec3d";
}
.icon-microscope-fill:before {
  content: "\\ec3e";
}
.icon-minimize-fill:before {
  content: "\\ec3f";
}
.icon-minus-circle-fill:before {
  content: "\\ec40";
}
.icon-minus-fill:before {
  content: "\\ec41";
}
.icon-minus-square-fill:before {
  content: "\\ec42";
}
.icon-mobile-fill:before {
  content: "\\ec43";
}
.icon-money-bill-ban1:before {
  content: "\\ec44";
}
.icon-money-bill-check-fill:before {
  content: "\\ec45";
}
.icon-money-bill-clock-fill:before {
  content: "\\ec46";
}
.icon-money-bill-convert-fill:before {
  content: "\\ec47";
}
.icon-money-bill-fill:before {
  content: "\\ec48";
}
.icon-money-bill-minus-fill:before {
  content: "\\ec49";
}
.icon-money-bill-plus-fill:before {
  content: "\\ec4a";
}
.icon-money-bill-receive-fill:before {
  content: "\\ec4b";
}
.icon-money-bill-send-fill:before {
  content: "\\ec4c";
}
.icon-money-bills-fill:before {
  content: "\\ec4d";
}
.icon-money-bill-times-fill:before {
  content: "\\ec4e";
}
.icon-money-convert-fill:before {
  content: "\\ec4f";
}
.icon-money-withdrawal-fill:before {
  content: "\\ec50";
}
.icon-monitor-waveform-fill:before {
  content: "\\ec51";
}
.icon-moon-fill:before {
  content: "\\ec52";
}
.icon-more-horizontal-circle-fill:before {
  content: "\\ec53";
}
.icon-more-horizontal-fill:before {
  content: "\\ec54";
}
.icon-more-horizontal-square-fill:before {
  content: "\\ec55";
}
.icon-more-vertical-circle-fill:before {
  content: "\\ec56";
}
.icon-more-vertical-fill:before {
  content: "\\ec57";
}
.icon-more-vertical-square-fill:before {
  content: "\\ec58";
}
.icon-mortar-pestle-fill:before {
  content: "\\ec59";
}
.icon-mosque-fill:before {
  content: "\\ec5a";
}
.icon-mouse-fill:before {
  content: "\\ec5b";
}
.icon-mug-fill:before {
  content: "\\ec5c";
}
.icon-mug-hot-fill:before {
  content: "\\ec5d";
}
.icon-music-fill:before {
  content: "\\ec5e";
}
.icon-music-list-fill:before {
  content: "\\ec5f";
}
.icon-music-note-fill:before {
  content: "\\ec60";
}
.icon-newspaper-fill:before {
  content: "\\ec61";
}
.icon-notebook-fill:before {
  content: "\\ec62";
}
.icon-note-fill:before {
  content: "\\ec63";
}
.icon-note-list-check1:before {
  content: "\\ec64";
}
.icon-note-list-check-square-fill:before {
  content: "\\ec65";
}
.icon-note-list-fill:before {
  content: "\\ec66";
}
.icon-note-list-square-fill:before {
  content: "\\ec67";
}
.icon-note-text-fill:before {
  content: "\\ec68";
}
.icon-note-text-square-fill:before {
  content: "\\ec69";
}
.icon-nut-fill:before {
  content: "\\ec6a";
}
.icon-octagon-check-fill:before {
  content: "\\ec6b";
}
.icon-octagon-exclamation-fill:before {
  content: "\\ec6c";
}
.icon-octagon-fill:before {
  content: "\\ec6d";
}
.icon-octagon-minus-fill:before {
  content: "\\ec6e";
}
.icon-octagon-plus-fill:before {
  content: "\\ec6f";
}
.icon-octagon-times-fill:before {
  content: "\\ec70";
}
.icon-package-check-fill:before {
  content: "\\ec71";
}
.icon-package-dollar-fill:before {
  content: "\\ec72";
}
.icon-package-fill:before {
  content: "\\ec73";
}
.icon-package-heart-fill:before {
  content: "\\ec74";
}
.icon-package-star-fill:before {
  content: "\\ec75";
}
.icon-palette-fill:before {
  content: "\\ec76";
}
.icon-paperclip-fill:before {
  content: "\\ec77";
}
.icon-papers-fill:before {
  content: "\\ec78";
}
.icon-papers-text-fill:before {
  content: "\\ec79";
}
.icon-parking-circle-fill:before {
  content: "\\ec7a";
}
.icon-parking-square-fill:before {
  content: "\\ec7b";
}
.icon-pause-circle-fill:before {
  content: "\\ec7c";
}
.icon-pause-fill:before {
  content: "\\ec7d";
}
.icon-pen-fill:before {
  content: "\\ec7e";
}
.icon-pen-line-fill:before {
  content: "\\ec7f";
}
.icon-pen-tool-fill:before {
  content: "\\ec80";
}
.icon-percent-circle-fill:before {
  content: "\\ec81";
}
.icon-percent-fill:before {
  content: "\\ec82";
}
.icon-percent-square-fill:before {
  content: "\\ec83";
}
.icon-percent-tag-fill:before {
  content: "\\ec84";
}
.icon-phone-11:before {
  content: "\\ec85";
}
.icon-phone-2-fill:before {
  content: "\\ec86";
}
.icon-phone-call-fill:before {
  content: "\\ec87";
}
.icon-phone-fill:before {
  content: "\\ec88";
}
.icon-phone-flip-fill:before {
  content: "\\ec89";
}
.icon-phone-hangup-fill:before {
  content: "\\ec8a";
}
.icon-phone-incoming-fill:before {
  content: "\\ec8b";
}
.icon-phone-missed-fill:before {
  content: "\\ec8c";
}
.icon-phone-office-fill:before {
  content: "\\ec8d";
}
.icon-phone-outgoing-fill:before {
  content: "\\ec8e";
}
.icon-phone-plus-fill:before {
  content: "\\ec8f";
}
.icon-phone-slash-fill:before {
  content: "\\ec90";
}
.icon-phone-times-fill:before {
  content: "\\ec91";
}
.icon-pills-fill:before {
  content: "\\ec92";
}
.icon-play-circle-fill:before {
  content: "\\ec93";
}
.icon-play-fill:before {
  content: "\\ec94";
}
.icon-playlist-fill:before {
  content: "\\ec95";
}
.icon-play-pause-fill:before {
  content: "\\ec96";
}
.icon-play-square-fill:before {
  content: "\\ec97";
}
.icon-plug-fill:before {
  content: "\\ec98";
}
.icon-plus-circle-fill:before {
  content: "\\ec99";
}
.icon-plus-fill:before {
  content: "\\ec9a";
}
.icon-plus-square-fill:before {
  content: "\\ec9b";
}
.icon-poll-horizontal-circle-fill:before {
  content: "\\ec9c";
}
.icon-poll-horizontal-square-fill:before {
  content: "\\ec9d";
}
.icon-poll-vertical-circle-fill:before {
  content: "\\ec9e";
}
.icon-poll-vertical-square-fill:before {
  content: "\\ec9f";
}
.icon-power-off-circle-fill:before {
  content: "\\eca0";
}
.icon-power-off-fill:before {
  content: "\\eca1";
}
.icon-power-off-square-fill:before {
  content: "\\eca2";
}
.icon-presentation-chart-line-fill:before {
  content: "\\eca3";
}
.icon-presentation-chart-pie-fill:before {
  content: "\\eca4";
}
.icon-presentation-dollar-fill:before {
  content: "\\eca5";
}
.icon-presentation-fill:before {
  content: "\\eca6";
}
.icon-presentation-lightbulb-fill:before {
  content: "\\eca7";
}
.icon-presentation-pen-fill:before {
  content: "\\eca8";
}
.icon-presentation-play-fill:before {
  content: "\\eca9";
}
.icon-presentation-poll-fill:before {
  content: "\\ecaa";
}
.icon-presentation-text-fill:before {
  content: "\\ecab";
}
.icon-presentation-trend-down-fill:before {
  content: "\\ecac";
}
.icon-presentation-trend-up-fill:before {
  content: "\\ecad";
}
.icon-presentation-user-fill:before {
  content: "\\ecae";
}
.icon-print-fill:before {
  content: "\\ecaf";
}
.icon-print-slash-fill:before {
  content: "\\ecb0";
}
.icon-puzzle-fill:before {
  content: "\\ecb1";
}
.icon-question-circle-fill:before {
  content: "\\ecb2";
}
.icon-question-square-fill:before {
  content: "\\ecb3";
}
.icon-radar-fill:before {
  content: "\\ecb4";
}
.icon-radiation-circle-fill:before {
  content: "\\ecb5";
}
.icon-radiation-fill:before {
  content: "\\ecb6";
}
.icon-radio-button-fill1:before {
  content: "\\ecb7";
}
.icon-radio-fill:before {
  content: "\\ecb8";
}
.icon-ranking-fill:before {
  content: "\\ecb9";
}
.icon-receipt-alt-fill:before {
  content: "\\ecba";
}
.icon-receipt-fill:before {
  content: "\\ecbb";
}
.icon-receipt-heart-alt-fill:before {
  content: "\\ecbc";
}
.icon-receipt-heart-fill:before {
  content: "\\ecbd";
}
.icon-receipt-list-alt1:before {
  content: "\\ecbe";
}
.icon-receipt-list-fill-fill:before {
  content: "\\ecbf";
}
.icon-receipt-percent-alt-fill:before {
  content: "\\ecc0";
}
.icon-receipt-percent-fill:before {
  content: "\\ecc1";
}
.icon-receipt-star-alt-fill:before {
  content: "\\ecc2";
}
.icon-receipt-star-fill:before {
  content: "\\ecc3";
}
.icon-receipt-text-alt-fill:before {
  content: "\\ecc4";
}
.icon-receipt-text-fill:before {
  content: "\\ecc5";
}
.icon-registered-circle-fill:before {
  content: "\\ecc6";
}
.icon-registered-square-fill:before {
  content: "\\ecc7";
}
.icon-repeat-fill:before {
  content: "\\ecc8";
}
.icon-restaurant-fill:before {
  content: "\\ecc9";
}
.icon-road-fill:before {
  content: "\\ecca";
}
.icon-rocket-fill:before {
  content: "\\eccb";
}
.icon-rocket-launch-fill:before {
  content: "\\eccc";
}
.icon-rotate-circle-fill:before {
  content: "\\eccd";
}
.icon-rotate-fill:before {
  content: "\\ecce";
}
.icon-rotate-left-circle-fill:before {
  content: "\\eccf";
}
.icon-rotate-left-fill:before {
  content: "\\ecd0";
}
.icon-rotate-left-square-fill:before {
  content: "\\ecd1";
}
.icon-rotate-right-circle-fill:before {
  content: "\\ecd2";
}
.icon-rotate-right-fill:before {
  content: "\\ecd3";
}
.icon-rotate-right-square-fill:before {
  content: "\\ecd4";
}
.icon-rotate-square-fill:before {
  content: "\\ecd5";
}
.icon-route-fill:before {
  content: "\\ecd6";
}
.icon-sack-dollar-fill:before {
  content: "\\ecd7";
}
.icon-scan-circle-fill:before {
  content: "\\ecd8";
}
.icon-scan-fill:before {
  content: "\\ecd9";
}
.icon-scanner-fill:before {
  content: "\\ecda";
}
.icon-scan-qr-fill:before {
  content: "\\ecdb";
}
.icon-school-fill:before {
  content: "\\ecdc";
}
.icon-scissors-fill:before {
  content: "\\ecdd";
}
.icon-sd-card-fill:before {
  content: "\\ecde";
}
.icon-search-fill:before {
  content: "\\ecdf";
}
.icon-search-minus-fill:before {
  content: "\\ece0";
}
.icon-search-plus-fill:before {
  content: "\\ece1";
}
.icon-search-text-fill:before {
  content: "\\ece2";
}
.icon-send-fill:before {
  content: "\\ece3";
}
.icon-send-right-fill:before {
  content: "\\ece4";
}
.icon-server-fill:before {
  content: "\\ece5";
}
.icon-settings-fill:before {
  content: "\\ece6";
}
.icon-share-fill:before {
  content: "\\ece7";
}
.icon-shield-bolt-fill:before {
  content: "\\ece8";
}
.icon-shield-check-fill:before {
  content: "\\ece9";
}
.icon-shield-exclamation-fill:before {
  content: "\\ecea";
}
.icon-shield-fill:before {
  content: "\\eceb";
}
.icon-shield-heart-fill:before {
  content: "\\ecec";
}
.icon-shield-lock-fill:before {
  content: "\\eced";
}
.icon-shield-minus-fill:before {
  content: "\\ecee";
}
.icon-shield-play-fill:before {
  content: "\\ecef";
}
.icon-shield-plus-fill:before {
  content: "\\ecf0";
}
.icon-shield-question-fill:before {
  content: "\\ecf1";
}
.icon-shield-search-fill:before {
  content: "\\ecf2";
}
.icon-shield-slash-fill:before {
  content: "\\ecf3";
}
.icon-shield-star-fill:before {
  content: "\\ecf4";
}
.icon-shield-times-fill:before {
  content: "\\ecf5";
}
.icon-shield-user-fill:before {
  content: "\\ecf6";
}
.icon-shopping-bag-alt-fill:before {
  content: "\\ecf7";
}
.icon-shopping-bag-fill:before {
  content: "\\ecf8";
}
.icon-shopping-basket-arrow-down-fill:before {
  content: "\\ecf9";
}
.icon-shopping-basket-arrow-up-fill:before {
  content: "\\ecfa";
}
.icon-shopping-basket-check-fill:before {
  content: "\\ecfb";
}
.icon-shopping-basket-fill:before {
  content: "\\ecfc";
}
.icon-shopping-basket-heart-fill:before {
  content: "\\ecfd";
}
.icon-shopping-basket-minus-fill:before {
  content: "\\ecfe";
}
.icon-shopping-basket-plus-fill:before {
  content: "\\ecff";
}
.icon-shopping-basket-star-fill:before {
  content: "\\ed00";
}
.icon-shopping-basket-times-fill:before {
  content: "\\ed01";
}
.icon-shopping-cart-arrow-down-fill:before {
  content: "\\ed02";
}
.icon-shopping-cart-arrow-top-fill:before {
  content: "\\ed03";
}
.icon-shopping-cart-check-fill:before {
  content: "\\ed04";
}
.icon-shopping-cart-fill:before {
  content: "\\ed05";
}
.icon-shopping-cart-heart-fill:before {
  content: "\\ed06";
}
.icon-shopping-cart-minus-fill:before {
  content: "\\ed07";
}
.icon-shopping-cart-plus-fill:before {
  content: "\\ed08";
}
.icon-shopping-cart-star-fill:before {
  content: "\\ed09";
}
.icon-shopping-cart-times-fill:before {
  content: "\\ed0a";
}
.icon-shuffle-fill:before {
  content: "\\ed0b";
}
.icon-signal-stream-fill:before {
  content: "\\ed0c";
}
.icon-sign-direction-left-fill:before {
  content: "\\ed0d";
}
.icon-sign-direction-right-fill:before {
  content: "\\ed0e";
}
.icon-signs-direction-fill:before {
  content: "\\ed0f";
}
.icon-sim-card-1-fill:before {
  content: "\\ed10";
}
.icon-sim-card-2-fill:before {
  content: "\\ed11";
}
.icon-sim-card-fill:before {
  content: "\\ed12";
}
.icon-sliders-horizontal-alt-fill:before {
  content: "\\ed13";
}
.icon-sliders-horizontal-fill:before {
  content: "\\ed14";
}
.icon-sliders-vertical-alt-fill:before {
  content: "\\ed15";
}
.icon-sliders-vertical-fill:before {
  content: "\\ed16";
}
.icon-sofa-fill:before {
  content: "\\ed17";
}
.icon-sort-ascending-circle-fill:before {
  content: "\\ed18";
}
.icon-sort-ascending-fill:before {
  content: "\\ed19";
}
.icon-sort-ascending-square-fill:before {
  content: "\\ed1a";
}
.icon-sort-descending-circle-fill:before {
  content: "\\ed1b";
}
.icon-sort-descending-fill:before {
  content: "\\ed1c";
}
.icon-sort-descending-square-fill:before {
  content: "\\ed1d";
}
.icon-sort-fill:before {
  content: "\\ed1e";
}
.icon-sort-horizontal-fill:before {
  content: "\\ed1f";
}
.icon-sort-vertical-fill:before {
  content: "\\ed20";
}
.icon-sparkle-fill:before {
  content: "\\ed21";
}
.icon-speaker-fill:before {
  content: "\\ed22";
}
.icon-speedometer-fill:before {
  content: "\\ed23";
}
.icon-star-circle-fill:before {
  content: "\\ed24";
}
.icon-star-fill:before {
  content: "\\ed25";
}
.icon-star-half-fill:before {
  content: "\\ed26";
}
.icon-star-magic-fill:before {
  content: "\\ed27";
}
.icon-star-shooting-fill:before {
  content: "\\ed28";
}
.icon-star-shooting-horizontal-fill:before {
  content: "\\ed29";
}
.icon-star-slash-fill:before {
  content: "\\ed2a";
}
.icon-star-square-fill:before {
  content: "\\ed2b";
}
.icon-star-tag-fill:before {
  content: "\\ed2c";
}
.icon-step-backward-fill:before {
  content: "\\ed2d";
}
.icon-step-forward-fill:before {
  content: "\\ed2e";
}
.icon-stethoscope-fill:before {
  content: "\\ed2f";
}
.icon-sticky-note-circle-fill:before {
  content: "\\ed30";
}
.icon-sticky-note-square-fill:before {
  content: "\\ed31";
}
.icon-sticky-note-text-circle-fill:before {
  content: "\\ed32";
}
.icon-sticky-note-text-square-fill:before {
  content: "\\ed33";
}
.icon-stop-circle-fill:before {
  content: "\\ed34";
}
.icon-stop-fill:before {
  content: "\\ed35";
}
.icon-stopwatch-alt-fill:before {
  content: "\\ed36";
}
.icon-stopwatch-check-alt-fill:before {
  content: "\\ed37";
}
.icon-stopwatch-check-fill:before {
  content: "\\ed38";
}
.icon-stopwatch-edit-fill:before {
  content: "\\ed39";
}
.icon-stopwatch-empty-fill:before {
  content: "\\ed3a";
}
.icon-stopwatch-fill:before {
  content: "\\ed3b";
}
.icon-stopwatch-minus-alt-fill:before {
  content: "\\ed3c";
}
.icon-stopwatch-minus-fill:before {
  content: "\\ed3d";
}
.icon-stopwatch-plus-alt-fill:before {
  content: "\\ed3e";
}
.icon-stopwatch-plus-fill:before {
  content: "\\ed3f";
}
.icon-stopwatch-times-alt-fill:before {
  content: "\\ed40";
}
.icon-stopwatch-times-fill:before {
  content: "\\ed41";
}
.icon-store-fill:before {
  content: "\\ed42";
}
.icon-story-fill:before {
  content: "\\ed43";
}
.icon-sun-fill:before {
  content: "\\ed44";
}
.icon-syringe-fill:before {
  content: "\\ed45";
}
.icon-tablet-fill:before {
  content: "\\ed46";
}
.icon-tag-fill:before {
  content: "\\ed47";
}
.icon-tags-fill:before {
  content: "\\ed48";
}
.icon-target-fill:before {
  content: "\\ed49";
}
.icon-taxi-fill:before {
  content: "\\ed4a";
}
.icon-telescope-fill:before {
  content: "\\ed4b";
}
.icon-test-tube-alt-fill:before {
  content: "\\ed4c";
}
.icon-test-tube-fill:before {
  content: "\\ed4d";
}
.icon-thermometer-fill:before {
  content: "\\ed4e";
}
.icon-thumbtack-fill:before {
  content: "\\ed4f";
}
.icon-thumbtack-vertical-fill:before {
  content: "\\ed50";
}
.icon-time-forward-fill:before {
  content: "\\ed51";
}
.icon-time-past-fill:before {
  content: "\\ed52";
}
.icon-times-circle-fill:before {
  content: "\\ed53";
}
.icon-times-fill:before {
  content: "\\ed54";
}
.icon-times-square-fill:before {
  content: "\\ed55";
}
.icon-toggle-off-alt-fill:before {
  content: "\\ed56";
}
.icon-toggle-off-fill:before {
  content: "\\ed57";
}
.icon-toggle-off-rectangle-fill:before {
  content: "\\ed58";
}
.icon-toggle-on-alt-fill:before {
  content: "\\ed59";
}
.icon-toggle-on-fill:before {
  content: "\\ed5a";
}
.icon-toggle-on-rectangle-fill:before {
  content: "\\ed5b";
}
.icon-tool-fill:before {
  content: "\\ed5c";
}
.icon-tooth-fill:before {
  content: "\\ed5d";
}
.icon-traffic-cone-fill:before {
  content: "\\ed5e";
}
.icon-trash-check-fill:before {
  content: "\\ed5f";
}
.icon-trash-fill:before {
  content: "\\ed60";
}
.icon-trash-minus-fill:before {
  content: "\\ed61";
}
.icon-trash-plus-fill:before {
  content: "\\ed62";
}
.icon-trash-redo-fill:before {
  content: "\\ed63";
}
.icon-trash-slash-fill:before {
  content: "\\ed64";
}
.icon-trash-times-fill:before {
  content: "\\ed65";
}
.icon-trash-undo-fill:before {
  content: "\\ed66";
}
.icon-tree-fill:before {
  content: "\\ed67";
}
.icon-trend-down-circle-fill:before {
  content: "\\ed68";
}
.icon-trend-down-fill:before {
  content: "\\ed69";
}
.icon-trend-down-square-fill:before {
  content: "\\ed6a";
}
.icon-trend-up-circle-fill:before {
  content: "\\ed6b";
}
.icon-trend-up-fill:before {
  content: "\\ed6c";
}
.icon-trend-up-square-fill:before {
  content: "\\ed6d";
}
.icon-triangle-exclamation-fill:before {
  content: "\\ed6e";
}
.icon-triangle-fill:before {
  content: "\\ed6f";
}
.icon-trophy-fill:before {
  content: "\\ed70";
}
.icon-trophy-star-fill:before {
  content: "\\ed71";
}
.icon-truck-fill:before {
  content: "\\ed72";
}
.icon-tv-fill:before {
  content: "\\ed73";
}
.icon-tv-play-fill:before {
  content: "\\ed74";
}
.icon-tv-retro-fill:before {
  content: "\\ed75";
}
.icon-university-fill:before {
  content: "\\ed76";
}
.icon-unlock-fill:before {
  content: "\\ed77";
}
.icon-upload-alt-fill:before {
  content: "\\ed78";
}
.icon-upload-fill:before {
  content: "\\ed79";
}
.icon-usb-drive-fill:before {
  content: "\\ed7a";
}
.icon-user-alt-fill:before {
  content: "\\ed7b";
}
.icon-user-ban-fill:before {
  content: "\\ed7c";
}
.icon-user-change-fill:before {
  content: "\\ed7d";
}
.icon-user-check-alt-fill:before {
  content: "\\ed7e";
}
.icon-user-check-bottom-fill:before {
  content: "\\ed7f";
}
.icon-user-check-fill:before {
  content: "\\ed80";
}
.icon-user-circle-fill:before {
  content: "\\ed81";
}
.icon-user-clock-fill:before {
  content: "\\ed82";
}
.icon-user-code-fill:before {
  content: "\\ed83";
}
.icon-user-dollar-fill:before {
  content: "\\ed84";
}
.icon-user-edit-fill:before {
  content: "\\ed85";
}
.icon-user-eye-fill:before {
  content: "\\ed86";
}
.icon-user-fill:before {
  content: "\\ed87";
}
.icon-user-heart-fill:before {
  content: "\\ed88";
}
.icon-user-lock-fill:before {
  content: "\\ed89";
}
.icon-user-minus-alt-fill:before {
  content: "\\ed8a";
}
.icon-user-minus-bottom-fill:before {
  content: "\\ed8b";
}
.icon-user-minus-fill:before {
  content: "\\ed8c";
}
.icon-user-plus-alt-fill:before {
  content: "\\ed8d";
}
.icon-user-plus-bottom-fill:before {
  content: "\\ed8e";
}
.icon-user-plus-fill:before {
  content: "\\ed8f";
}
.icon-users-alt-fill:before {
  content: "\\ed90";
}
.icon-user-search-fill:before {
  content: "\\ed91";
}
.icon-user-settings-fill:before {
  content: "\\ed92";
}
.icon-users-fill:before {
  content: "\\ed93";
}
.icon-users-group-alt-fill:before {
  content: "\\ed94";
}
.icon-users-group-fill:before {
  content: "\\ed95";
}
.icon-users-group-slash-fill:before {
  content: "\\ed96";
}
.icon-user-shield-fill:before {
  content: "\\ed97";
}
.icon-user-slash-fill:before {
  content: "\\ed98";
}
.icon-user-square-fill:before {
  content: "\\ed99";
}
.icon-users-slash-fill:before {
  content: "\\ed9a";
}
.icon-user-star-fill:before {
  content: "\\ed9b";
}
.icon-user-tag-fill:before {
  content: "\\ed9c";
}
.icon-user-times-alt-fill:before {
  content: "\\ed9d";
}
.icon-user-times-bottom-fill:before {
  content: "\\ed9e";
}
.icon-user-times-fill:before {
  content: "\\ed9f";
}
.icon-user-viewfinder-fill:before {
  content: "\\eda0";
}
.icon-vector-fill:before {
  content: "\\eda1";
}
.icon-video-circle-fill:before {
  content: "\\eda2";
}
.icon-video-eye-fill:before {
  content: "\\eda3";
}
.icon-video-fill:before {
  content: "\\eda4";
}
.icon-video-incoming-fill:before {
  content: "\\eda5";
}
.icon-video-outgoing-fill:before {
  content: "\\eda6";
}
.icon-video-play-fill:before {
  content: "\\eda7";
}
.icon-video-plus-fill:before {
  content: "\\eda8";
}
.icon-video-slash-fill:before {
  content: "\\eda9";
}
.icon-video-square-fill:before {
  content: "\\edaa";
}
.icon-virus-covid-fill:before {
  content: "\\edab";
}
.icon-virus-covid-slash-fill:before {
  content: "\\edac";
}
.icon-voicemail-fill:before {
  content: "\\edad";
}
.icon-volume-fill:before {
  content: "\\edae";
}
.icon-volume-high-fill:before {
  content: "\\edaf";
}
.icon-volume-high-slash-fill:before {
  content: "\\edb0";
}
.icon-volume-low-fill:before {
  content: "\\edb1";
}
.icon-volume-minus-fill:before {
  content: "\\edb2";
}
.icon-volume-plus-fill:before {
  content: "\\edb3";
}
.icon-volume-slash-fill:before {
  content: "\\edb4";
}
.icon-volume-times-fill:before {
  content: "\\edb5";
}
.icon-wallet-fill:before {
  content: "\\edb6";
}
.icon-warehouse-fill:before {
  content: "\\edb7";
}
.icon-watch-circle-fill:before {
  content: "\\edb8";
}
.icon-watch-square-fill:before {
  content: "\\edb9";
}
.icon-wave-pulse-fill:before {
  content: "\\edba";
}
.icon-wifi-fill:before {
  content: "\\edbb";
}
.icon-wifi-slash-fill:before {
  content: "\\edbc";
}
`, l = r, b = (e) => e.split("-").map((o) => o.charAt(0).toUpperCase() + o.slice(1)).join(" "), a = (e) => (e.match(/\.icon-(.+?):before\s*{\s*content:\s*"\\(.+?)";\s*}/g) || []).map((t) => {
  const n = t.match(/\.icon-(.+?):before\s*{\s*content:\s*"\\(.+?)";\s*}/);
  if (n) {
    const [, c, i] = n, f = b(c);
    return {
      className: `icon-${c}`,
      iconName: f,
      unicode: i
    };
  }
  return null;
}).filter(Boolean), h = a(l).map((e) => ({ className: e.className, iconName: e.iconName, unicode: e.unicode }));
export {
  h as iconsArray
};
//# sourceMappingURL=gravitguru.es.js.map
