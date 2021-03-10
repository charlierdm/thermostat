"use strict";

class Thermostat{
  constructor(){
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this.temp = this.DEFAULT_TEMPERATURE;
    this.powerSavingMode = true;
    
  };
  
  getCurrentTemperature() {
    return this.temp
  }

  isMinimumTemperature() {
    return this.temp === this.MINIMUM_TEMPERATURE;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temp += 1;
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temp -= 1
  }

  powerSavingSwitch(){
    this.powerSavingMode === true ? this.powerSavingMode = false : this.powerSavingMode = true;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
}
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temp === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temp === this.MAX_LIMIT_PSM_ON;
  }

  reset(){
    return this.temp = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if (this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temp <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    }
    return 'high-usage';
  }
  
};
