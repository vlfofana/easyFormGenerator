import leftPanelMultiSelectControlTemplate from './edaDragDropWay.leftpanel.multiSelectControl.template.html!text';

const LEFT_PANEL_MULTI_SELECT_CONTROL_DIRECTIVE = 'leftPanelMultiSelectControl';

function leftPanelMultiSelectControl() {
  let directive = {
    restrict : 'E',
    template : leftPanelMultiSelectControlTemplate
  };
  return directive;
}

leftPanelMultiSelectControl.$inject = [];

export default leftPanelMultiSelectControl;

export {
  LEFT_PANEL_MULTI_SELECT_CONTROL_DIRECTIVE
};
