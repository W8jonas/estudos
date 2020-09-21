## CommunicationWithSocket_ESP32_to_ESP8266

Esse projeto trata de um sistema de comunicação WiFi Client (ESP8266) to Server (ESP32). O server cria e estabelece um localhost para que o Client consiga se conectar e, a partir disto, enviar dados para o servidor.

<br/>


### História do desenvolvimento

Inicialmente o projeto usava `enum` para a transferência de dados. Sua vantagem e a simplicidade de código, pois basta criar uma nova variável dentro do enum que ela já poderá ser transmitida. Todavia, sua principal desvantagem é que o enum só é capaz de armazenar constantes inteiras, sendo vetado o uso de variáveis longs, floats, structs ou arrays.
Por esse motivo, o código foi modificado para transmitir structs capazes de armazenar quaisquer tipos de variáveis.

<br/>

Em primeiro momento o ESP8266 está lendo o valor digital (1 ou 0) de uma de suas portas e o envia para o o servidor que, por sua vez, repassa o estado digital que foi recebido para uma de suas portas.
Após a transferência de sinais digitais, iniciou-se a tentativa de transmissão de valores de ponto flutuante, sendo esse não possível pelas limitações do `enum`.

<br/>

### Variáveis de ambientes definidas
Para o funcionamento do projeto foram estabelecidas algumas variáveis de ambiente que estão mostradas abaixo como exemplo, sendo elas:


### ESP32 - Server

    #define ENV_SSID "NOME_DA_REDE_WIFI" 
    #define ENV_PASSWORD "SENHA_DA_REDE_WIFI"

    #define ENV_SERVER_PORT 1234

    int ENV_LOCAL_IP[] = {
    192, 168, 10, 11
    };

    int ENV_GATEWAY[] = {
    192, 168, 10, 10
    };

    int ENV_SUBNET[] = {
    255, 255, 255, 0
    };

### ESP8266 - Client

    #define ENV_STASSID "NOME_DA_REDE_WIFI"
    #define ENV_PASSWORD "SENHA_DA_REDE_WIFI"

    #define ENV_HOST "192.168.10.11"
    #define ENV_PORT 1234

    int ENV_LOCAL_IP[] = {
    192, 168, 10, 110
    };

É importante perceber que alguns parâmetros precisam ser estritamente iguais tanto no server quanto no client, como por exemplo: nome e senha da rede, e o IP local.

