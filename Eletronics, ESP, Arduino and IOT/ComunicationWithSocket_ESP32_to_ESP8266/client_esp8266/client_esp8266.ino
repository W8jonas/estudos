

#include <ESP8266WiFi.h> //lib para conectar o wifi do ESP201
#include <ESP8266WiFiMulti.h>//lib para as funções addAP e  run


const char* ssid     = ENV_STASSID;
const char* password = ENV_STAPSK;

const char* host = ENV_HOST;
const uint16_t port = ENV_PORT;

ESP8266WiFiMulti WiFiMulti;
IPAddress local_IP(192, 168, 10, 110);

#define IN_PIN 23


enum Protocol{
  PIN, //Pino que se deseja alterar o estado
  VALUE, //Estado para qual o pino deve ir (HIGH = 1 ou LOW = 0)
  BUFFER_SIZE //O tamanho do nosso protocolo. IMPORTANTE: deixar sempre como último do enum
};


void setup() {
  Serial.begin(115200);

  // We start by connecting to a WiFi network
  WiFi.mode(WIFI_STA);
  WiFiMulti.addAP(ssid, password);

  Serial.println();
  Serial.println();
  Serial.print("Wait for WiFi... ");

  while (WiFiMulti.run() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  delay(500);
}


void loop() {
  Serial.print("connecting to ");
  Serial.print(host);
  Serial.print(':');
  Serial.println(port);

  // Use WiFiClient class to create TCP connections
  WiFiClient client;

  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    Serial.println("wait 5 sec...");
    delay(5000);
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
     
  /*
  // This will send the request to the server
  client.println("hello from ESP8266");

  //read back one line from server
  Serial.println("receiving from remote server");
  String line = client.readStringUntil('\r');
  Serial.println(line);

  Serial.println("closing connection");
  client.stop();

  Serial.println("wait 5 sec...");
  delay(5000);
  */

  
}
