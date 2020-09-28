
#include <WiFi.h>
#include ".\env.h"


IPAddress local_IP(ENV_LOCAL_IP[0], ENV_LOCAL_IP[1], ENV_LOCAL_IP[2], ENV_LOCAL_IP[3]);
IPAddress gateway(ENV_GATEWAY[0], ENV_GATEWAY[1], ENV_GATEWAY[2], ENV_GATEWAY[3]);
IPAddress subnet(ENV_SUBNET[0], ENV_SUBNET[1], ENV_SUBNET[2], ENV_SUBNET[3]);

WiFiServer server(ENV_SERVER_PORT);


struct DataStruct {
  char client_id[30];
  byte read1;
  byte read2;
  byte read3;
  byte read4;
  byte read5;
  float readAnalog1;
};

// use first channel of 16 channels (started from zero)
#define LEDC_CHANNEL_0     0

// use 13 bit precission for LEDC timer
#define LEDC_TIMER_13_BIT  13

// use 5000 Hz as a LEDC base frequency
#define LEDC_BASE_FREQ     5000

#define indicative_led 25


int ledPin1 = 21;
int ledPin2 = 22;
int ledPin3 = 23;
int ledPin4 = 14;
int ledPin5 = 32;
int ledPin6 = 33;


void ledcAnalogWrite(uint8_t channel, uint32_t value, uint32_t valueMax = 255) {
  // calculate duty, 8191 from 2 ^ 13 - 1
  uint32_t duty = (8191 / valueMax) * min(value, valueMax);

  // write duty to LEDC
  ledcWrite(channel, duty);
}

void setup()
{
    Serial.begin(115200);

    // configurando saida do LED para analógico
    ledcSetup(LEDC_CHANNEL_0, LEDC_BASE_FREQ, LEDC_TIMER_13_BIT);
    ledcAttachPin(indicative_led, LEDC_CHANNEL_0);

    
    pinMode(ledPin1, OUTPUT);
    pinMode(ledPin2, OUTPUT);
    pinMode(ledPin3, OUTPUT);
    pinMode(ledPin4, OUTPUT);
    pinMode(ledPin5, OUTPUT);
    pinMode(ledPin6, OUTPUT);

    
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
              
                byte buffer[sizeof(struct DataStruct)];
                int len = client.read(buffer, sizeof(struct DataStruct));
                DataStruct dataReceived = * (DataStruct *) &buffer;
                
                
                digitalWrite(ledPin1, dataReceived.read1);
                digitalWrite(ledPin2, dataReceived.read2);
                digitalWrite(ledPin3, dataReceived.read3);
                digitalWrite(ledPin4, dataReceived.read4);
                digitalWrite(ledPin5, dataReceived.read5);
                digitalWrite(ledPin6, (dataReceived.readAnalog1 >= 50) ? true : false);

                Serial.println("DADOS RECEBIDOS: ");
                Serial.println(dataReceived.read1);
                Serial.println(dataReceived.read2);
                Serial.println(dataReceived.read3);
                Serial.println(dataReceived.read4);
                Serial.println(dataReceived.read5);
                Serial.println(dataReceived.readAnalog1);
                
            }
        }
        delay(1); 
        client.stop();
        Serial.println("----------------------------");
        digitalWrite(indicative_led, LOW);
    }
}
