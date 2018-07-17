/*
 * View model for OctoPrint-MultipleUpload
 *
 * Author: Eyal
 * License: AGPLv3
 */
$(function() {
  function MultipleuploadViewModel(parameters) {
    var self = this;
    self.onBeforeBinding = function() {
      for (let upload_button of document.getElementsByClassName("fileinput-button")) {
        if (upload_button.tagName == "INPUT") {
          upload_button.setAttribute("multiple", true);
        }
      }
    }
  }

  OCTOPRINT_VIEWMODELS.push({
    construct: MultipleuploadViewModel,
    dependencies: [],
    elements: []
  });
});
