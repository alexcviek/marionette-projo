ContactManager.module('ContactsApp', function(ContactsApp, ContactManager, Backbone, Marionette, $, _){
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'contacts': 'listContacts'
    }
  });

  var API = {
    listContacts: function(){
      console.log('route to list contacts was triggered');
    }
  };


  ContactsApp.on('start', function(){
    new ContactsApp.Router({
      controller: API
    });
  });
});
