
#include <WiFi.h>
#include ".\env.h"


IPAddress local_IP(ENV_LOCAL_IP[0], ENV_LOCAL_IP[1], ENV_LOCAL_IP[2], ENV_LOCAL_IP[3]);
IPAddress gateway(ENV_GATEWAY[0], ENV_GATEWAY[1], ENV_GATEWAY[2], ENV_GATEWAY[3]);
IPAddress subnet(ENV_SUBNET[0], ENV_SUBNET[1], ENV_SUBNET[2], ENV_SUBNET[3]);

WiFiServer server(ENV_SERVER_PORT);


enum Protocol{
    PIN,
    VALUE,
    BUFFER_SIZE
};


#define indicative_led 13

void setup()
{
    Serial.begin(115200);
    
    pinMode(indicative_led, OUTPUT);

    WiFi.mode(WIFI_AP);

    while (!(WiFi.softAP(ENV_SSID, ENV_PASSWORD, 6, false))) {
        Serial.println(".");  
        delay(100);
    }

    while (!(WiFi.softAPConfig(local_IP, gateway, subnet))) {
        Serial.println(".");  
        delay(100);
    }

    server.begin();
    server.setNoDelay(true);

}


void loop()
{

    while (WiFi.softAPgetStationNum() == 0)
    {
        //aguarda 1 segundo
        delay(1000);

        //se alguém conectou
        if (WiFi.softAPgetStationNum() != 0)
        {
            //exibe mensagem
            Serial.println("STA conectada!");
        }
    }

    //Verifica se tem algum cliente se conectando
    WiFiClient client = server.available();

    if (client)
    {
        digitalWrite(indicative_led, HIGH);

        while (client.connected())
        {
            if (client.available())
            { 
                uint8_t buffer[Protocol::BUFFER_SIZE];

                int len = client.read(buffer, Protocol::BUFFER_SIZE);
                int pinNumber = buffer[Protocol::PIN];
                int value = buffer[Protocol::VALUE];
                
                pinMode(pinNumber, OUTPUT);
                digitalWrite(pinNumber, value);
            }
        }
        delay(1); 
        client.stop();
        digitalWrite(indicative_led, LOW);
    }
}
