//Apenas vai compilar o código contido neste arquivo
//caso IS_SERVER esteja definido
#ifdef IS_SERVER

//Cria o server na porta definida por 'SERVER_PORT'
WiFiServer server(SERVER_PORT);

void setup()
{
    //Coloca este ESP como Access Point
    WiFi.mode(WIFI_AP);
    //SSID e Senha para se conectarem a este ESP
    WiFi.softAP(SSID, PASSWORD);
    //Inicia o server
    server.begin();
}
void loop()
{
    //Verifica se tem algum cliente se conectando
    WiFiClient client = server.available();
    if (client) 
    {      
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
            //Alteramos o estado do pino para o valor passado
            digitalWrite(pinNumber, value);
        }

        //Fecha a conexão com o cliente
        client.stop();
    }
}
//Encerra o #ifdef do começo do arquivo
#endif