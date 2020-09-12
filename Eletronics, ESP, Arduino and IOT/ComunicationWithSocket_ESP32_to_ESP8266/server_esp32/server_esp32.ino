//Apenas vai compilar o código contido neste arquivo
//caso IS_SERVER esteja definido

#include <WiFi.h>


//Cria o server na porta definida por 'SERVER_PORT'
WiFiServer server(ENV_SERVER_PORT);

enum Protocol{
    PIN, //Pino que se deseja alterar o estado
    VALUE, //Estado para qual o pino deve ir (HIGH = 1 ou LOW = 0)
    BUFFER_SIZE //O tamanho do nosso protocolo. IMPORTANTE: deixar sempre como último do enum
};


void setup()
{
    Serial.begin(115200);
  
    //Coloca este ESP como Access Point
    WiFi.mode(WIFI_AP);
    //SSID e Senha para se conectarem a este ESP
    WiFi.softAP(ENV_SSID, ENV_PASSWORD);
    //Inicia o server
    server.begin();
    Serial.print("Wait for WiFi");
}
void loop()
{
    //Verifica se tem algum cliente se conectando
    WiFiClient client = server.available();
    if (client) 
    {      
        Serial.println("Achou client");
        //Se o cliente tem dados que deseja nos enviar
        if (client.available())
        {
            //Criamos um buffer para colocar os dados 
            uint8_t buffer[Protocol::BUFFER_SIZE];
            //Colocamos os dados enviados pelo cliente no buffer
            int len = client.read(buffer, Protocol::BUFFER_SIZE);
            //Verificamos qual o pino que o cliente enviou
            int pinNumber = buffer[Protocol::PIN];
            //Verificamos qual o valor deste pino
            int value = buffer[Protocol::VALUE];
            //Colocamos o pino em modo de saída
            pinMode(pinNumber, OUTPUT);
            // Alteramos o estado do pino para o valor passado
            digitalWrite(pinNumber, value);
            Serial.print("pegou dado ");
            Serial.print(pinNumber);
            Serial.print(" -- ");
            Serial.println(value);
            Serial.println("_______________");
        }

        //Fecha a conexão com o cliente
        client.stop();
    }
}
