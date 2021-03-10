$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.energyUsage());
  }

  $.get({url: "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=7e0e42249f88f6b7a06e50b513a8fc55", success: function(result){
    console.log(result.main.temp);
      $('#outsidetemp').text(result.main.temp);
      $('#city').text(result.name);
  }});

  $('#temperature-up').on('click', function(){
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').on('click', function(){
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.reset();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function(){
    thermostat.powerSavingSwitchOn()
    $('#power-saving-status').text('on');
  })

  $('#powersaving-off').on('click', function(){
    thermostat.powerSavingSwitchOff()
    $('#power-saving-status').text('off');
  })

});
