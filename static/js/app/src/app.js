/* beautify preserve:start */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import satellizer from 'satellizer';
import ngUpload from 'ng-file-upload';
import {appDirective} from './app.directive';
import {navigationDirective} from './components/navigation/navigation.directive';
import {home} from './components/home/home';
import {login} from './components/login/login';
import {uploadDirective} from './components/upload/upload.directive';
import {fileDirective} from './components/upload/file.directive';
import {profileEdit} from './components/dashboard/profile/edit/profile.edit';
import {dashboard} from './components/dashboard/dashboard';
import {register} from './components/register/register';
import {MainConfig} from './components/common/Main.config';
import {compareTo} from './components/common/Compare.validation';
import ngStorage from 'ngstorage';
/* beautify preserve:end */


var config = ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) => {
    $authProvider.baseUrl = 'http://firebreathingrubberduckies.azurewebsites.net/';
    $authProvider.facebook({
        name: 'facebook',
        redirectUri: 'http://localhost/Projects/hackathon-front-starter/',
        clientId: '916889011691947',
        url: '/auth/facebook',
        authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
    });
    $authProvider.google({
        url: '/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        redirectUri: 'http://localhost/Projects/hackathon-front-starter/',
        requiredUrlParams: ['scope'],
        optionalUrlParams: ['display'],
        scope: ['profile', 'email'],
        scopePrefix: 'openid',
        clientId:'251380982976-6dm321scj99sq9f09ug07vk2elteu2nd.apps.googleusercontent.com',
        scopeDelimiter: ' ',
        display: 'popup',
        type: '2.0',
        popupOptions: {
            width: 452,
            height: 633
        }
    });
    $httpProvider.interceptors.push(interceptor);
    $stateProvider.state('hackathon', {
        url: '',
        abstract: true
    });
    $urlRouterProvider.otherwise('/');
};
config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider', '$authProvider'];

var interceptor = ($q, $location, $localStorage, $log) => {
    return {
        'request': function(config) {
            config.headers = config.headers || {};
            if ($localStorage.token) {
                config.headers.Authorization = 'Bearer ' + $localStorage.token;
            }
            return config;
        },
        'responseError': function(response) {
            $log.log(response);
            if (response.status === 400 || response.status === 404) {
                $location.path('/login');
            }
            return $q.reject(response);
        }
    };
};

interceptor.$inject = ['$q', '$location', '$localStorage', '$log'];
var runPolicy = ($state, $localStorage, $rootScope, $auth) => {
    $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
        var policy = toState.policy;
        if (policy == 'auth') {
            if ((typeof $localStorage.token == "undefined") && (!$auth.isAuthenticated())) {
                e.preventDefault();
                $state.go('hackathon.login');
            }
        }
    });
};

runPolicy.$inject = ['$state', '$localStorage', '$rootScope', '$auth'];

angular.module('hackathon', [
        uiRouter,
        satellizer,
        ngUpload,
        home.name,
        dashboard.name,
        profileEdit.name,
        login.name,
        register.name,
        ngStorage.name
    ]).config(config).run(runPolicy).service('MainConfig', MainConfig)
    .directive('navigation', navigationDirective)
    .directive('upl',uploadDirective)
    .directive('file',fileDirective)
    .directive('compareTo', compareTo)
    .directive('hackathon', appDirective);
