App.InputColorPickerComponent = Ember.Component.extend({
  
	actions: {
	    acceptChanges: function() {
	      this.sendAction();
	    }
  	},

	didInsertElement: function() {
		$('.colorpicker').colorpicker({
			format : 'hex'
		});
	}

});
