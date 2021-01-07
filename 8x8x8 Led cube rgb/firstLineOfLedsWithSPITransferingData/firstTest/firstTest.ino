#include <SPI.h>

int latchPin = 12; // Pin connected to ST_CP of 74HC595
int clockPin = 13; // Pin connected to SH_CP of 74HC595
int dataPin = 11; // Pin connected to DS of 74HC595

void setup() {
  pinMode(latchPin, OUTPUT);
  pinMode(clockPin, OUTPUT);
  pinMode(dataPin, OUTPUT);
  
  SPI.begin();
  SPI.setDataMode(SPI_MODE0);
  SPI.setBitOrder(MSBFIRST);
  SPI.setClockDivider(SPI_CLOCK_DIV128);
}

void loop() {
  SPI.transfer(0xAA);
  SPI.transfer(0x11);
  SPI.transfer(0x22);
  digitalWrite(latchPin, HIGH);
  delay(5);
  digitalWrite(latchPin, LOW);
  delay(500);
  
  SPI.transfer(0x00);
  SPI.transfer(0x00);
  digitalWrite(latchPin, HIGH);
  delay(5);
  digitalWrite(latchPin, LOW);
  delay(500);
}
