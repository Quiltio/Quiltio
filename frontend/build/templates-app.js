angular.module('templates-app', ['home/home.tpl.html', 'profile/profile.tpl.html', 'team/team.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"row home\">\n" +
    "  <div class=\"home-wrapper\">\n" +
    "    <div class=\"home-content\">\n" +
    "      <img src=\"assets/logo.png\" alt=\"\" />\n" +
    "      <p>\n" +
    "        Find the team that match to you, register and begin to work\n" +
    "      </p>\n" +
    "      <div class=\"btn-wrapper\">\n" +
    "\n" +
    "\n" +
    "      <button class=\"btn btn-default btn-lg\">Register with Email</button>\n" +
    "      <button class=\"btn btn-primary btn-lg\">Register with Linkedin</button>\n" +
    "      </div>\n" +
    "      </div>\n" +
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
