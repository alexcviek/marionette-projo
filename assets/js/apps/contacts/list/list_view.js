ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _){
  List.Contact = Marionette.ItemView.extend({
    tagName: 'tr',
    template: '#contact-list-item',

    events: {
      'click': 'highlightName',
      'click td a.js-show': 'showClicked',
      'click td a.js-edit': 'editClicked',
      'click button.js-delete': 'deleteClicked'
    },

    highlightName: function(e){
      this.$el.toggleClass('warning');
    },

    editClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:edit', this.model);
    },

    showClicked: function(e){
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:show', this.model);
    },

    deleteClicked: function(e){
      e.stopPropagation();
      this.trigger('contact:delete', this.model);
    },

    remove: function(){
      var self = this;
      this.$el.fadeOut(function(){
        Marionette.ItemView.prototype.remove.call(self);
      });
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-hover',
    template: '#contact-list',
    childView: List.Contact,
    childViewContainer: 'tbody'
  });
});
