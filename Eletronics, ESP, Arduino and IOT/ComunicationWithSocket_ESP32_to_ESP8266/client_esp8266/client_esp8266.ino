
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>

#include ".\env.h"


ESP8266WiFiMulti WiFiMulti;

IPAddress local_IP(ENV_LOCAL_IP[0], ENV_LOCAL_IP[1], ENV_LOCAL_IP[2], ENV_LOCAL_IP[3]);


#define pin_for_read A0


enum Protocol{
	PIN,
	VALUE,
	BUFFER_SIZE
};


void setup() {
	Serial.begin(115200);
	
	pinMode(pin_for_read, INPUT);

	WiFi.mode(WIFI_STA);
	WiFiMulti.addAP(ENV_STASSID, ENV_PASSWORD);
	Serial.println("Pronto, cliente conectado.");

	while (WiFiMulti.run() != WL_CONNECTED) {
		Serial.print(".");
		delay(500);
	}

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
	
	uint8_t buffer[Protocol::BUFFER_SIZE];
	
	int sensorValue = analogRead(pin_for_read);
  float value = sensorValue * (3.3 / 1023.0);
  
	Serial.print("O pino esta: ");
	Serial.println(value);

	buffer[Protocol::PIN] = pin_for_read;
	buffer[Protocol::VALUE] = value;
	
	client.write(buffer, Protocol::BUFFER_SIZE);
	client.flush();
	client.stop();
}
