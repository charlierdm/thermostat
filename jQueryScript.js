$(document).ready(function(){
  var thermostat = new Thermostat();
  updateTemperature();

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

  function updateTemperature() {
    $('#temperature').text(thermostat.temp);
    $('#temperature').attr('class', thermostat.energyUsage());
  
  }

});