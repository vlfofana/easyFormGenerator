import leftPanelRepeatSectionControlTemplate from './edaDragDropWay.leftpanel.repeatSectionControl.template.html!text';

const LEFT_PANEL_REPEAT_SECTION_CONTROL_DIRECTIVE = 'leftPanelRepeatSectionControl';

function leftPanelRepeatSectionControl() {
  let directive = {
    restrict : 'E',
    template : leftPanelRepeatSectionControlTemplate
  };
  return directive;
}

leftPanelRepeatSectionControl.$inject = [];

export default leftPanelRepeatSectionControl;

export {
  LEFT_PANEL_REPEAT_SECTION_CONTROL_DIRECTIVE
};
