
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


// use first channel of 16 channels (started from zero)
#define LEDC_CHANNEL_0     0

// use 13 bit precission for LEDC timer
#define LEDC_TIMER_13_BIT  13

// use 5000 Hz as a LEDC base frequency
#define LEDC_BASE_FREQ     5000

#define indicative_led 23

int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void ledcAnalogWrite(uint8_t channel, uint32_t value, uint32_t valueMax = 255) {
  // calculate duty, 8191 from 2 ^ 13 - 1
  uint32_t duty = (8191 / valueMax) * min(value, valueMax);

  // write duty to LEDC
  ledcWrite(channel, duty);
}


void setup()
{
    Serial.begin(115200);

    ledcSetup(LEDC_CHANNEL_0, LEDC_BASE_FREQ, LEDC_TIMER_13_BIT);
    ledcAttachPin(indicative_led, LEDC_CHANNEL_0);
  
    //pinMode(indicative_led, OUTPUT);

    WiFi.mode(WIFI_AP);

    delay(100);
    
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
                float value = buffer[Protocol::VALUE];
                
                Serial.print("Dados recebidos: ");
                Serial.print(pinNumber);
                Serial.print(": ");
                Serial.println(value);

                ledcAnalogWrite(LEDC_CHANNEL_0, value);
                //pinMode(23, OUTPUT);
                //digitalWrite(23, value);
            }
        }
        delay(1); 
        client.stop();
        digitalWrite(indicative_led, LOW);
    }
}
