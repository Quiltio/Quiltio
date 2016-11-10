angular.module('templates-app', ['home/home.tpl.html', 'profile/profile.tpl.html', 'team/team.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"row home\">\n" +
    "  <div class=\"home-wrapper\">\n" +
    "    <h3>Lorem ipsum dolor sit amet</h3>\n" +
    "    <p>\n" +
    "      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n" +
    "    </p>\n" +
    "  </div>\n" +
    "  <div class=\"home-image col-ms-12\">\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<h1>Profile</h1>\n" +
    "\n" +
    "<p>This is what this is profile.</p>\n" +
    "");
}]);

angular.module("team/team.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("team/team.tpl.html",
    "<h1>Team</h1>\n" +
    "\n" +
    "<p>This is what this is team.</p>\n" +
    "");
}]);
