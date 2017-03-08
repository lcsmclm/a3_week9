(function(){

$('.thumbInfo img').on('click', function(){

  //do an AJAX call
  $.ajax({
    url: "includes/ajaxQuery.php",
    data: {model: this.id},
    type: "GET"
  }) //don't put a semicolon here so we can chain methods together
  .done(function(data){
    console.log(data);

    data = JSON.parse(data);
    renderCarInfo(data);
  })

  .fail(function(ajaxCall, status, error) {
    console.log(status, ", ", error);
    console.dir(ajaxCall);
  });

  function renderCarInfo(car){
    $('.subhead span').text(" mini Cooper" + car.model);
    $('.modelName').text(car.modelName);
    $('.priceInfo').text(car.pricing);
    $('.modelDetails').text(car.modelDetails);
  }
});
})();
