#include <SPI.h>

int latchPin = 8;  // Pin connected to ST_CP of 74HC595
int clockPin = 13; // Pin connected to SH_CP of 74HC595
int dataPin = 11;  // Pin connected to DS of 74HC595

typedef struct
{
    byte  rgbtBlue;
    byte  rgbtGreen;
    byte  rgbtRed;
} RGBLedLine;

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
  RGBLedLine line;
  
  line.rgbtRed = 0x01;
  line.rgbtGreen = 0x0F;
  line.rgbtBlue = 0xAA;
  
  byte lineCathode = 0x77;
  
  SPI.transfer(lineCathode);
  SPI.transfer(line.rgbtGreen);
  SPI.transfer(line.rgbtBlue);
  SPI.transfer(line.rgbtRed);
  
  digitalWrite(latchPin, HIGH);
  digitalWrite(latchPin, LOW);
  delay(1000);

  SPI.end();
}
