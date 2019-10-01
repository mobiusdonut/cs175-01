var $ = function (id) {
    return document.getElementById(id);
};
var processEntries = function() {
    var subtotal = parseFloat($("subtotal").value);
    var tax_rate = parseFloat($("tax_rate").value);

    if (isNaN(subtotal) || isNaN(tax_rate)) {
        alert("Both entries must be numeric");
    }
    else if (subtotal <= 0 || subtotal >= 10000) {
      alert("Subtotal must be > 0 and < 10000");
    }
    else if (tax_rate <= 0 || tax_rate >= 12) {
      alert("Tax Rate must be > 0 and < 12");
    }
    else {
      var salesTax = subtotal * (tax_rate / 100);
      salesTax = parseFloat( salesTax.toFixed(2) );
      var total = subtotal + salesTax;
      $("sales_tax").value = salesTax;
      $("total").value = total.toFixed(2);
    }
    $("subtotal").focus();
};
var clearFields = function() {
  $("subtotal").value = "";
  $("tax_rate").value = "";
  $("sales_tax").value = "";
  $("total").value = "";
  $("subtotal").focus();
}
var clearSubtotal = function() {
  $("subtotal").value = "";
}
var clearTaxRate = function() {
  $("tax_rate").value = "";
}
window.onload = function() {
        $("calculate").onclick = processEntries;
        $("clear").onclick = clearFields;
        $("subtotal").onfocus = clearSubtotal;
        $("tax_rate").onfocus = clearTaxRate;
        $("subtotal").focus();
    };
