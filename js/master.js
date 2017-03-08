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
    if(data){
      data = JSON.parse(data);
      renderCarInfo(data);
    } else{
      alert('your ajax call did\'t work');
    }


  })

  .fail(function(ajaxCall, status, error) {
    console.log(status, ", ", error);
    console.dir(ajaxCall);
  });

  function renderCarInfo(car){
    $('.thumbInfo img').addClass('nonActive');
    $('#' + car.model).removeClass('nonActive');
    $('.subhead span').text(" mini Cooper" + car.model);
    $('.modelName').text(car.modelName);
    $('.priceInfo').text(car.pricing);
    $('.modelDetails').text(car.modelDetails);
  }
});
})();
