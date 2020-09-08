//Neste arquivo vão os 'includes' e as configurações pincipais
//que são compartilhadas entre os outros arquivos .ino
#include <WiFi.h>

#define SSID "ESP32Server"
#define PASSWORD "87654321"
#define SERVER_PORT 5000

//Protocolo que o Server e o Client utilizarão para se comunicar
enum Protocol{
    PIN, //Pino que se deseja alterar o estado
    VALUE, //Estado para qual o pino deve ir (HIGH = 1 ou LOW = 0)
    BUFFER_SIZE //O tamanho do nosso protocolo. IMPORTANTE: deixar sempre como último do enum
};

//Diretiva de compilação que informará qual arquivo que queremos que seja compilado
//Caso queira que o arquivo Client.ino seja compilado, remova ou comente a linha do '#define' abaixo
//Caso queira que o arquivo Server.ino seja compilado, deixe o '#define IS_SERVER' abaixo descomentado
#define IS_SERVER