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

  SPI.begin();
}

void loop() {
  digitalWrite(latchPin, LOW);
  SPI.transfer(0xAA);
  SPI.transfer(0x0A);
  SPI.transfer(0x88);
  SPI.transfer(0x99);
  digitalWrite(latchPin, HIGH);
  digitalWrite(latchPin, LOW);
  delay(1000);
  
  SPI.transfer(0x77);
  digitalWrite(latchPin, HIGH);
  digitalWrite(latchPin, LOW);
  delay(1000);
  
  SPI.end();
}
