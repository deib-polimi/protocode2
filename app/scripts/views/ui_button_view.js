App.UiButtonView = Ember.View.extend({
  tagName: 'div',
  classNames: ['control-button', 'expanded'],
  classNameBindings: ['controller.controllers.editor.device.platform'],
  templateName: 'views/ui_button_view',

  attributeBindings: ['style'],

  mouseDown: function() {
    var clickColor = this.get('context.clickColor');
    var hasClickColor = clickColor != '';
    if(hasClickColor) {
      this.$().css("backgroundColor", clickColor);
      this.$().css("borderColor", clickColor);
    }

  },

  mouseUp: function() {
    var backColor = this.get('context.backgroundColor');
    var clickColor = this.get('context.clickColor');
    var hasBackColor = backColor != '';
    var hasClickColor = clickColor != '';
    var isButtonDefault = (!hasBackColor && !hasClickColor);
    var screenColor = this.get("parentView.parentView.context.backgroundColor");
    var isScreenDefault = screenColor == '';
    if(hasBackColor) {
        this.$().css("backgroundColor", backColor);
        this.$().css("borderColor", backColor);
    } else {
        if(this.get('controller.controllers.editor.device.platform') == 'ios') {
          this.$().css("backgroundColor", "");
        } else {
          this.$().css("backgroundColor", "#cecece");
          if(hasClickColor) {
            this.$().css("borderColor", "#cecece");
          }
          else {
            if(isScreenDefault) {
                this.$().css("borderColor", "#f9f9f9");
            } else {
                this.$().css("borderColor", screenColor);
            }
          }
        }
    }
  },

  style: function () {
    var style = ""
  	style += 'color: ' + this.get('context.textColor') + ";";
  	style += 'border-radius: ' + this.get('context.borderRadius') + "px;";


    if(this.get('controller.controllers.editor.device.platform') == 'android') {

      var backColor = this.get('context.backgroundColor');
      var clickColor = this.get('context.clickColor');
      var hasBackColor = backColor != '';
      var hasClickColor = clickColor != '';
      var isButtonDefault = (!hasBackColor && !hasClickColor);
      var screenColor = this.get("parentView.parentView.context.backgroundColor");
      var isScreenDefault = screenColor == '';

      if(isScreenDefault) {
        if(isButtonDefault) {
          style += 'background-color: #cecece; ';
          style += 'border-color: #f9f9f9; ';
        }
        else if(hasBackColor) {
          style += 'background-color: '+backColor+'; ';
          style += 'border-color: '+backColor+'; ';
        }
        else if(hasClickColor) {
          style += 'background-color: #cecece; ';
          style += 'border-color: #cecece; ';
        }
      } else {
        if(isButtonDefault) {
          style += 'background-color: #cecece; ';
          style += 'border-color: '+screenColor+'; ';
        }
        else if(hasBackColor) {
          style += 'background-color: '+backColor+'; ';
          style += 'border-color: '+backColor+'; ';
        }
        else if(hasClickColor) {
          style += 'background-color: #cecece; ';
          style += 'border-color: #cecece; ';
        }
      }

    } else {
      style += 'background-color: '+this.get('context.backgroundColor')+'; ';
    }

  	return style;
  }.property(
    'context.textColor',
  	'context.backgroundColor',
    'context.clickColor',
  	'context.borderRadius',
    'parentView.parentView.context.backgroundColor',
    'controller.controllers.editor.device.platform'
  )

});
