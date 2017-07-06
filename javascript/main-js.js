//Contact Form Validator and Ajax Sender
$("#contactForm").submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "//formspree.io/mohamed.said.ib93@gmail.com",
      data:  $(this).serialize(),
      dataType: "json",
      success: function (data) {
        if (data.success == "email sent") {
          $("#contactSuccess").fadeIn(300);
          $("#contactError").addClass("hidden");
          $("#contactForm #name, #contactForm #email, #contactForm #message")
            .val("")
            .blur()
            .closest(".control-group")
            .removeClass("success")
            .removeClass("error");

        } else {
          $("#contactError").fadeIn(300);
          $("#contactSuccess").addClass("hidden");
        }
      }

    });
  });
