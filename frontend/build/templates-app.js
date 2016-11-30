angular.module('templates-app', ['auth/auth.tpl.html', 'auth/register.tpl.html', 'auth/sign.tpl.html', 'home/home.tpl.html', 'profile/profile.tpl.html', 'team/team-create.tpl.html', 'team/team-detail.tpl.html', 'team/team-list.tpl.html', 'team/team.tpl.html']);

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
    "                <form ng-submit=\"model.register()\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"full-name\">Full Name</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"full-name\" placeholder=\"Full Name\" ng-model=\"model.user.name\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"email\">Email</label>\n" +
    "                        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" ng-model=\"model.user.email\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"password\">Password</label>\n" +
    "                        <input type=\"password\" id=\"password\" class=\"form-control\" ng-model=\"model.user.password\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"job\">Job</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"job\" placeholder=\"Job\" ng-model=\"model.user.job\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"industry\">Industry</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"industry\" placeholder=\"Industry\" ng-model=\"model.user.industry\">\n" +
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
    "                <form ng-submit=\"model.auth()\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"email\">Email</label>\n" +
    "                        <input ng-model=\"model.user.email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"password\">Password</label>\n" +
    "                        <input ng-model=\"model.user.password\" type=\"password\" id=\"password\" class=\"form-control\">\n" +
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
    "    <div class=\"home-wrapper\">\n" +
    "        <div class=\"home-content\">\n" +
    "            <img src=\"assets/logo.png\" alt=\"\"/>\n" +
    "            <p>\n" +
    "                Find the team that match to you<span ng-hide=\"model.isAuthenticated\">,register and begin to work</span>\n" +
    "            </p>\n" +
    "            <div class=\"btn-wrapper\">\n" +
    "\n" +
    "                <div class=\"\" ng-hide=\"model.isAuthenticated\">\n" +
    "                    <button class=\"btn btn-default btn-lg\" ui-sref=\"auth.register\">Register with Email</button>\n" +
    "                    <button class=\"btn btn-primary btn-lg\">Register with Linkedin</button>\n" +
    "                </div>\n" +
    "                <div class=\"\" ng-show=\"model.isAuthenticated\">\n" +
    "                    <button class=\"btn btn-default btn-lg\" ui-sref=\"team.list\">Join a Team</button>\n" +
    "                    <button class=\"btn btn-primary btn-lg\" ui-sref=\"team.create\">Create a Team</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"home-image col-ms-12\"></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("profile/profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("profile/profile.tpl.html",
    "<div class=\"row profile\">\n" +
    "    <div class=\"col col-md-6 col-md-offset-3\">\n" +
    "\n" +
    "        <div class=\"card card-1\">\n" +
    "            <div class=\"image\">\n" +
    "                <img src=\"http://placehold.it/128x128\" class=\"img-circle\"/>\n" +
    "                <h3>{{model.user.name}}</h3>\n" +
    "            </div>\n" +
    "            <div class=\"card-content\">\n" +
    "              <h4>{{model.user.job}}</h4>\n" +
    "              <h4>{{model.user.industry}}</h4>             \n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("team/team-create.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("team/team-create.tpl.html",
    "<div class=\"container-fluid\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col col-md-4 col-md-offset-4\">\n" +
    "            <div class=\"card card-1\">\n" +
    "                <h3>Create a Team</h3>\n" +
    "                <form ng-submit=\"model.create()\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"full-name\">Team Name</label>\n" +
    "                        <input type=\"text\" class=\"form-control\" id=\"full-name\" placeholder=\"Full Name\" ng-model=\"model.team.name\">\n" +
    "                    </div>\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"description\">Description</label>\n" +
    "                        <textarea id=\"description\" class=\"form-control\" rows=\"3\" ng-model=\"model.team.description\"></textarea>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label for=\"website\">Website</label>\n" +
    "                        <input type=\"url\" class=\"form-control\" id=\"website\" placeholder=\"Website\" ng-model=\"model.team.website\">\n" +
    "                    </div>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                        <button type=\"button\" class=\"btn btn-default\">Return</button>\n" +
    "                        <button type=\"submit\" class=\"btn btn-primary\">Create</button>\n" +
    "                    </div>\n" +
    "                </form>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("team/team-detail.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("team/team-detail.tpl.html",
    "<div class=\"team-detail\">\n" +
    "    <div class=\"cover-image\">\n" +
    "        <!-- <img src=\"assets/bg.jpg\" alt=\"\"/> -->\n" +
    "    </div>\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row team-info\">\n" +
    "            <div class=\"col col-md-3 team-basic\">\n" +
    "                <div class=\"card card-1 no-padding\">\n" +
    "                    <img src=\"http://placehold.it/295x300\" alt=\"\"/>\n" +
    "                    <div class=\"card-container\">\n" +
    "                        <h4>Description</h4>\n" +
    "                        {{model.team.description}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col col-md-9 team-detail\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col col-md-12 team-name\">\n" +
    "                        <h2>{{model.team.name}}</h2>\n" +
    "                        <a href=\"{{model.team.website}}\">{{model.team.website}}</a>\n" +
    "                    </div>\n" +
    "                    <div class=\"col col-md-12 team-members\">\n" +
    "                        <h3>Members</h3>\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col col-md-12\">\n" +
    "                                <div class=\"wrapper\">\n" +
    "\n" +
    "                                    <div class=\"col col-md-4\">\n" +
    "                                        <div class=\"member-detail\" ui-sref=\"profile({id:model.team.lead._id})\">\n" +
    "                                            <img src=\"http://placehold.it/48x48\" alt=\"\"/>\n" +
    "                                            <div class=\"\">\n" +
    "                                                <h4>{{model.team.lead.name}} <small>(lead)</small></h4>\n" +
    "                                                <p>{{model.team.lead.industry}}</p>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                    <div class=\"col col-md-4\" ng-repeat=\"member in model.team.members\">\n" +
    "                                        <div class=\"member-detail\" ui-sref=\"profile({id:member._id})\">\n" +
    "                                            <img src=\"http://placehold.it/48x48\" alt=\"\"/>\n" +
    "                                            <div class=\"\">\n" +
    "                                                <h4>{{member.name}}</h4>\n" +
    "                                                <p>{{member.industry}}</p>\n" +
    "                                            </div>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "\n" +
    "                                    <div class=\"clearfix\">\n" +
    "\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("team/team-list.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("team/team-list.tpl.html",
    "<div class=\"team-list\">\n" +
    "\n" +
    "    <h3 class=\"pull-left\">Teams</h3>\n" +
    "    <div class=\"form-group pull-right\">\n" +
    "        <input type=\"search\" name=\"name\" value=\"\" class=\"form-control\" placeholder=\"Search...\" ng-model=\"filter\">\n" +
    "    </div>\n" +
    "    <div class=\"clearfix\"></div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col col-md-4\" ng-repeat=\"team in model.teams | filter:filter\">\n" +
    "            <div class=\"card card-1 no-padding\">\n" +
    "                <div class=\"card-image\">\n" +
    "                    <img src=\"http://placehold.it/130x145\" alt=\"\"/>\n" +
    "                </div>\n" +
    "                <div class=\"card-container\">\n" +
    "                    <h4>{{team.name}}</h4>\n" +
    "                    <p>\n" +
    "                        {{team.description}}\n" +
    "                    </p>\n" +
    "                    <button ng-hide=\"team.isMember\" class=\"btn btn-danger\" ng-click=\"model.join(team)\" >Join</button>\n" +
    "                    <button ng-show=\"team.isMember\" class=\"btn btn-danger\" ng-click=\"model.leave(team)\" >Leave</button>\n" +
    "                    <button class=\"btn btn-default\" ui-sref=\"team.detail({id:team._id})\">Details</button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"\" ng-show=\"model.teams.length === 0\">\n" +
    "          <h5 >Not team found</h5>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("team/team.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("team/team.tpl.html",
    "<div class=\"team\">\n" +
    "    <ui-view name=\"team\"></ui-view>\n" +
    "</div> \n" +
    "");
}]);
