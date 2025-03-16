// 
// contact validation start
$(document).ready(function () {
    console.log("jQuery loaded:", $.fn.jquery);
    console.log("jQuery Validation Loaded:", $.validator);
  
    $("#contactid").validate({
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          phoneUS: true
        },
        message: {
          required: true,
          minlength: 3
        },
        checkbox: {
          required: true,
          minlength: 5
        }
      },
      messages: {
        name: {
          required: "Please enter your full name",
          minlength: "Your full name must consist of at least 3 characters"
        },
        email: {
          required: "Please enter your email",
          email: "Please enter a valid email address"
        },
        phone: {
          required: "Please enter your phone number",
          phoneUS: "Please enter a valid phone number"
        },
        message: {
          required: "Please enter a subject",
          minlength: "Subject must be at least 3 characters"
        },
        checkbox: {
          required: "Please enter a message",
          minlength: "Your message must be at least 5 characters"
        }
      },
      submitHandler: function (form) {
        console.log("Form is valid, submitting...");
        form.submit();
      }
    });

    $.validator.addMethod("phoneUS", function (value, element) {
      return this.optional(element) || /^[\+]?[0-9]{1,4}?[-\s\./0-9]*$/.test(value);
    }, "Please enter a valid phone number.");
  });
//   contact validation end
