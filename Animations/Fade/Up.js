var makeAnimation = require('../../src/TuxAnimations');
var assign = require('object-assign');
var CommonFadeProps = require('./CommonFadeProps');
//Default FadeUp animation component
var FadeUp = {
  //Class name given to the animation component once mounted
  className: 'fadeUp',
  //CSS for wrapped component on entry
  enter: assign(CommonFadeProps.enter, {
    'transform': 'translateY(20px)'
  }),
  //CSS for wrapped component when entry animation completes
  'enter-active': assign(CommonFadeProps['enter-active'], {
    'transform': 'translateY(0)'
  }),
  //CSS for wrapped component on leave
  leave: assign(CommonFadeProps.leave, {
    'transform': 'translateY(0)'
  }),
  //CSS for wrapped component when leave animation completes
  'leave-active': assign(CommonFadeProps['leave-active'], {
    'transform': 'translateY(20px)'
  })
};
//Use makeAnimation function from main Tux Animation module to create wrapping animation component and pass in the default params
module.exports = makeAnimation(FadeUp);
