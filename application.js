(function () {

  new WOW().init();

  $("#modal-email-button").click(function() {
    var url = "https://github.com/repos/corbinpage/nav-labs/issues";
    data = {
      "title": "Contact via Website Form",
      "assignee": "corbinpage",
      "body": "From: "+$("#modal-email-address").val()+" - "+$("#modal-email-body").val()
    }
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      success: function(data) {
        console.log("data");
      }
    });
  })  


})();