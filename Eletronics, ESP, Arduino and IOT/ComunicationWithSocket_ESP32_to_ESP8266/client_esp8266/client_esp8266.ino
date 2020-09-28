
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include ".\env.h"


ESP8266WiFiMulti WiFiMulti;

IPAddress local_IP(ENV_LOCAL_IP[0], ENV_LOCAL_IP[1], ENV_LOCAL_IP[2], ENV_LOCAL_IP[3]);


struct DataStruct {
  char client_id[30];
  byte read1;
  byte read2;
  byte read3;
  byte read4;
  byte read5;
  float readAnalog1;
};

DataStruct dataToSend;


int ledPin1 = D1;
int ledPin2 = D3;
int ledPin3 = D4;
int ledPin4 = D6;
int ledPin5 = D7;
int ledPin6 = A0;

void setup() {
	Serial.begin(115200);
	
  pinMode(ledPin1, INPUT);
  pinMode(ledPin2, INPUT);
  pinMode(ledPin3, INPUT);
  pinMode(ledPin4, INPUT);
  pinMode(ledPin5, INPUT);
  pinMode(ledPin6, INPUT);
  
	WiFi.mode(WIFI_STA);
	WiFiMulti.addAP(ENV_STASSID, ENV_PASSWORD);
	Serial.println("Pronto, cliente conectado.");

	Serial.print("Conectando.");
	while (WiFiMulti.run() != WL_CONNECTED) {
		Serial.print(".");
		delay(500);
	}
	Serial.println("");

	Serial.print("WiFi connected ");
	Serial.print(" IP address: ");
	Serial.println(WiFi.localIP().toString());

	delay(500);
}


void loop() {

	WiFiClient client;

	if (!client.connect(ENV_HOST, ENV_PORT)) {
		Serial.print("connection failed! ");
		Serial.println("Wait 2 sec...");
		delay(2000);
		return;
	}

  strcpy(dataToSend.client_id, "ESP8266_UID_GENERIC");

	int sensorValue = analogRead(ledPin6);
	float value = sensorValue * (255 / 1023.0);
  
  dataToSend.read1 = digitalRead(ledPin1);
  dataToSend.read2 = digitalRead(ledPin2);
  dataToSend.read3 = digitalRead(ledPin3);
  dataToSend.read4 = digitalRead(ledPin4);
  dataToSend.read5 = digitalRead(ledPin5);
  dataToSend.readAnalog1 = value;

  client.write((byte*)&dataToSend, sizeof(DataStruct));
  
	client.flush();
	client.stop();
  delay(10);
}
