#include <SPI.h>

int latchPin = 8;  // Pin connected to ST_CP of 74HC595
int clockPin = 13; // Pin connected to SH_CP of 74HC595
int dataPin = 11;  // Pin connected to DS of 74HC595

void setup() {
  SPI.setBitOrder(LSBFIRST);
  SPI.setDataMode(SPI_MODE0);
  SPI.setClockDivider(SPI_CLOCK_DIV2);
  
  pinMode(latchPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  digitalWrite(latchPin, LOW);
  
  SPI.begin();
}

void loop() {

  byte lineRed = 0x01;
  byte lineGreen = 0x0F;
  byte lineBlue = 0xAA;
  byte lineCathode = 0x77;
  
  SPI.transfer(lineCathode);
  SPI.transfer(lineRed);
  SPI.transfer(lineBlue);
  SPI.transfer(lineGreen);
  
  digitalWrite(latchPin, HIGH);
  digitalWrite(latchPin, LOW);
  delay(1000);

  SPI.end();
}
