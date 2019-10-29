$(document).ready(function() {
    $("a").each(function() {
      $(this).click(function(evt) {
        evt.preventDefault();
        $("img").attr("src",$(this).attr("href"));
        $("h2").val($(this).attr("title"));
      })
    })
    $("#image_list").first().children("li").first().children("a").first().focus();
}); // end ready
