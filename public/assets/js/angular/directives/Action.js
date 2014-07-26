forumApp.directive('action', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        /*
         * SMART ACTIONS
         */
        var smartActions = {
      
            // LOGOUT MSG 
            userLogout: function($this){
        
                // ask verification
                $.SmartMessageBox({
                  title : "<i class='fa fa-sign-out txt-color-red'></i> Logout <span class='txt-color-red'><strong>" + scope.currentUser.username + "</strong></span> ?",
                  content : $this.data('logout-msg') || "You can improve your security further after logging out by closing this opened browser",
                  buttons : '[No][Yes]'
            
                }, function(ButtonPressed) {
                  if (ButtonPressed == "Yes") {
                    $.root_.addClass('animated fadeOutUp');
                    setTimeout(logout, 1000);
                  }
                });
                function logout() {                      
                  scope.logout();
                }
          
            },
            
            // LAUNCH FULLSCREEN 
            launchFullscreen: function(element){
        
            if (!$.root_.hasClass("full-screen")) {
          
              $.root_.addClass("full-screen");
          
              if (element.requestFullscreen) {
                element.requestFullscreen();
              } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
              } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
              } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
              }
          
            } else {
              
              $.root_.removeClass("full-screen");
              
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              }
          
            }
        
           }  
           
        };
        
        var actionEvents = {
          userLogout: function(e) {
            smartActions.userLogout(element);
          },
          launchFullscreen: function(e) {
            smartActions.launchFullscreen(document.documentElement);
          }
        };

        if (angular.isDefined(attrs.action) && attrs.action != '') {
          var actionEvent = actionEvents[attrs.action];
          if (typeof actionEvent === 'function') {
            element.on('click', function(e) {
              actionEvent(e);
              e.preventDefault();
            });
          }
        }

      }
    };
  })