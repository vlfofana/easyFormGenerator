
import leftPanelNumberControlTemplate from './edaDragDropWay.leftpanel.numberControl.template.html!text';

const LEFT_PANEL_NUMBER_CONTROL_DIRECTIVE = 'leftPanelNumberControl';

function leftPanelNumberControl() {
  let directive = {
    restrict : 'E',
    template : leftPanelNumberControlTemplate
  };
  return directive;
}

leftPanelNumberControl.$inject = [];

export default leftPanelNumberControl;

export {
  LEFT_PANEL_NUMBER_CONTROL_DIRECTIVE
};
