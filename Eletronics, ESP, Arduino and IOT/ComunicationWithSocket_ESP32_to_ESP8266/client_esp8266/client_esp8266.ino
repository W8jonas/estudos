
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include ".\env.h"


ESP8266WiFiMulti WiFiMulti;

IPAddress local_IP(ENV_LOCAL_IP[0], ENV_LOCAL_IP[1], ENV_LOCAL_IP[2], ENV_LOCAL_IP[3]);


#define pin_for_read A0


struct DataStruct {
  byte pin;
  float pinRead;
  char client_id[30];
};

DataStruct dataToSend;


void setup() {
	Serial.begin(115200);
	
	pinMode(pin_for_read, INPUT);

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

	int sensorValue = analogRead(pin_for_read);
	float value = sensorValue * (255 / 1023.0);

	Serial.print("O pino esta: ");
	Serial.println(value);

  strcpy(dataToSend.client_id, "ESP8266_UID_GENERIC");
  
  dataToSend.pin = pin_for_read;
  dataToSend.pinRead = value;

  client.write((byte*)&dataToSend, sizeof(DataStruct));
  
	client.flush();
	client.stop();
  
  delay(2000);
}
