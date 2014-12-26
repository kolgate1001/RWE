//(function (angular) {
//    'use strict';
//    angular.module('ngViewTest', ['ngRoute']).config([
//            '$routeProvider', '$locationProvider',
//            function($routeProvider, $locationProvider) {
//                $routeProvider
//                    .when('/project', {
//                        templateUrl: 'project.html',
//                        controller: 'projectCtrl'
//                    })
//                    .when('/user', {
//                        templateUrl: 'user.html',
//                        controller: 'userCtrl'
//                    })
//                    .when('/group', {
//                        templateUrl: 'group.html',
//                        controller: 'groupCtrl'
//                    });
//                $locationProvider.html5Mode(true);
//                $locationProvider.test = "a";
//            }
//        ])
//        .controller('MainCtrl', [
//            '$route', '$routeParams', '$location',
//            function($route, $routeParams, $location) {
//                this.$route = $route;
//                this.$location = $location;
//                this.$routeParams = $routeParams;
//            }
//        ]);
//})(window.angular);

(function (angular) {
    'use strict';
    angular.module('ngViewExample', ['ngRoute'])
        .config([
            '$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when('/project', {
                        templateUrl: '/pages/projectPage.html',
                        controller: 'BookCtrl',
                        controllerAs: 'book'
                    })
                    .when('/project/id:projectId', {
                        templateUrl: '/pages/projectPage.html',
                        controller: 'ProjectCtrl',
                        controllerAs: 'project'
                    })
                    .when('/user', {
                        templateUrl: '/pages/userPage.html',
                        controller: 'ChapterCtrl',
                        controllerAs: 'chapter'
                    });

                $locationProvider.html5Mode(true);
            }
        ])
        .controller('MainCtrl', [
            '$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
                this.$route = $route;
                this.$location = $location;
                this.$routeParams = $routeParams;
            }
        ])
        .controller('BookCtrl', [
            '$routeParams', function($routeParams) {
                this.name = "BookCtrl";
                this.params = $routeParams;
            }
        ])
        .controller('ChapterCtrl', [
            '$routeParams', function($routeParams) {
                this.name = "ChapterCtrl";
                this.params = $routeParams;
            }
        ])
        .controller('ProjectCtrl', [
            '$routeParams', function($routeParams) {
                this.name = "ProjectCtrl";
                this.params = $routeParams;
            }
        ]);
})(window.angular);