angular.module('templates-app', ['auth/auth.tpl.html', 'auth/register.tpl.html', 'auth/sign.tpl.html', 'home/home.tpl.html', 'profile/profile.tpl.html', 'team/team.tpl.html']);

angular.module("auth/auth.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/auth.tpl.html",
    "<ui-view name=\"auth\" class=\"container-fluid\"></ui-view>\n" +
    "");
}]);

angular.module("auth/register.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/register.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col col-md-4 col-md-offset-4\">\n" +
    "            <div class=\"card card-1\">\n" +
    "              <h3>Registration</h3>\n" +
    "                <form>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"full-name\">Full Name</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"full-name\" placeholder=\"Full Name\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"email\">Email</label>\n" +
    "                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"password\">Password</label>\n" +
    "                        <input type=\"password\" id=\"password\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"job\">Job</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"job\" placeholder=\"Job\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"industry\">Industry</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"industry\" placeholder=\"Industry\">\n" +
    "                    </div>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <button type=\"button\" class=\"btn btn-primary\">Register with Linkdin</button>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default\">Register</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("auth/sign.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("auth/sign.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col col-md-4 col-md-offset-4\">\n" +
    "            <div class=\"card card-1\">\n" +
    "                <h3>Sign in</h3>\n" +
    "                <form>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"email\">Email</label>\n" +
    "                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"password\">Password</label>\n" +
    "                        <input type=\"password\" id=\"password\" class=\"form-control\">\n" +
    "                    </div>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <button type=\"button\" class=\"btn btn-primary\">Sign in with Linkdin</button>\n" +
    "                        <button type=\"submit\" class=\"btn btn-default\">Sign in</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

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
    "      <button class=\"btn btn-default btn-lg\" ui-sref=\"auth.register\">Register with Email</button>\n" +
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
    "<div class=\"team\">\n" +
    "    <h3 class=\"pull-left\">Companies</h3>\n" +
    "    <div class=\"form-group pull-right\">\n" +
    "      <input type=\"search\" name=\"name\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\">\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col col-md-4\" ng-repeat=\"i in [1,2,3,4,5,6,7,8,9]\">\n" +
    "            <div class=\"card card-1 no-padding\">\n" +
    "                <div class=\"card-image\">\n" +
    "                    <img src=\"http://placehold.it/130x145\" alt=\"\" />\n" +
    "                </div>\n" +
    "                <div class=\"card-container\">\n" +
    "                    <h4>Company {{$index + 1}}</h4>\n" +
    "                    <p>\n" +
    "                      Lorem ipsum dolor sit amet, consectetur adipisicing elit\n" +
    "                    </p>\n" +
    "                    <button class=\"btn btn-danger\">Join</button>\n" +
    "                    <button class=\"btn btn-default\">Details</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
