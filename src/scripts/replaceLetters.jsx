import $ from "jquery";

function replaceLetters() {
  $(document).ready(function () {
    console.log("Skrypt działa!");
    $("p, h1, h2, h3, h4, li, b").each(function () {
      var htmlContent = $(this).html();
      var lettersToReplace = [
        "a",
        "i",
        "o",
        "u",
        "w",
        "z",
        "na",
        "że",
        "do",
        "A",
        "I",
        "O",
        "U",
        "W",
        "Z",
      ];

      lettersToReplace.forEach(function (letter) {
        var regex = new RegExp("(\\s)" + letter + "(\\s)", "g");
        htmlContent = htmlContent.replace(
          regex,
          '$1<span class="replaced-letter">' + letter + "&nbsp;" + "</span>"
        );
      });

      $(this).html(htmlContent);
    });
  });
}

export default replaceLetters;
