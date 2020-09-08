//Apenas vai compilar o código contido neste arquivo
//caso IS_SERVER NÃO esteja definido 
//(if n def, atenção para o 'n')
#ifndef IS_SERVER

//Pino que vamos fazer a leitura
#define IN_PIN 23

void setup(){
    //Colocamos o pino em modo de leitura
    pinMode(IN_PIN, INPUT);
    //Conectamos Access Point criado
    //pelo outro ESP
    WiFi.begin(SSID, PASSWORD);

    //Esperamos conectar
    while (WiFi.status() != WL_CONNECTED){
        delay(500);
    }
}

void loop(){ 
    //Variável que utlizaremos para conectar ao servidor
    WiFiClient client;
    //Se não conseguiu se conectar então retornamos
    if (!client.connect(WiFi.gatewayIP(), SERVER_PORT)){
        return;
    }

    //Criamos um buffer para colocar os dados 
    uint8_t buffer[Protocol::BUFFER_SIZE];
    //Fazemos a leitura do pino
    int value = digitalRead(IN_PIN);
    //Colocamos no buffer o número do pino
    //cujo estado queremos enviar
    buffer[Protocol::PIN] = IN_PIN;
    //Colocamos no buffer o estado atual do pino
    buffer[Protocol::VALUE] = value;
    //Enviamos e finalizamos a conexão
    client.write(buffer, Protocol::BUFFER_SIZE);
    client.flush();
    client.stop();
}
//Encerra o #ifndef do começo do arquivo
#endif