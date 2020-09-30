
/*
 * Código retirado do site Fernando K para ser utilizado para estudos.
 */

#include <Wire.h>                //Biblioteca para I2C
#include <SparkFunMLX90614.h>    //Biblioteca SparkFunMLX90614

#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

BLECharacteristic *characteristicTX; //através desse objeto iremos enviar dados para o client

//objeto responsável pela comunicação com o sensor de temperatura infravermelho
IRTherm sensor;

bool deviceConnected = false; //controle de dispositivo conectado

const int LED = 2; //LED interno do ESP32 (esse pino pode variar de placa para placa) // Could be different depending on the dev board. I used the DOIT ESP32 dev board.
const int BUZZER = 23; //pino d BUZZER

// See the following for generating UUIDs:
// https://www.uuidgenerator.net/

#define SERVICE_UUID           "ab0828b1-198e-4351-b779-901fa0e0371e" // UART service UUID
#define CHARACTERISTIC_UUID_RX "4ac8a682-9736-4e5d-932b-e9b31405049c"
#define CHARACTERISTIC_UUID_TX "0972EF8C-7613-4075-AD52-756F33D4DA91"


//callback para receber os eventos de conexão de dispositivos
class ServerCallbacks: public BLEServerCallbacks {
    void onConnect(BLEServer* pServer) {
      deviceConnected = true;
    };

    void onDisconnect(BLEServer* pServer) {
      deviceConnected = false;
    }
};

//callback  para envendos das características
class CharacteristicCallbacks: public BLECharacteristicCallbacks {
    void onWrite(BLECharacteristic *characteristic) {
      //retorna ponteiro para o registrador contendo o valor atual da caracteristica
      std::string rxValue = characteristic->getValue(); 
      //verifica se existe dados (tamanho maior que zero)
      if (rxValue.length() > 0) {
        Serial.println("*********");
        Serial.print("Received Value: ");

        for (int i = 0; i < rxValue.length(); i++) {
          Serial.print(rxValue[i]);
        }

        Serial.println();

        // Do stuff based on the command received
        if (rxValue.find("L1") != -1) { 
          Serial.print("Turning LED ON!");
          digitalWrite(LED, HIGH);
        }
        else if (rxValue.find("L0") != -1) {
          Serial.print("Turning LED OFF!");
          digitalWrite(LED, LOW);
        }
        // Do stuff based on the command received from the app
        else if (rxValue.find("B1") != -1) { 
          Serial.print("Turning Buzzer ON!");
          digitalWrite(BUZZER, HIGH);
        }
        else if (rxValue.find("B0") != -1) {
          Serial.print("Turning Buzzer OFF!");
          digitalWrite(BUZZER, LOW);
        }

        Serial.println();
        Serial.println("*********");
      }
    }
};

void setup() {
  Serial.begin(115200);

  pinMode(LED, OUTPUT);
  pinMode(BUZZER, OUTPUT);

  // Create the BLE Device
  BLEDevice::init("ESP32-BLE"); // nome do dispositivo bluetooth
  // Create the BLE Server
  BLEServer *server = BLEDevice::createServer(); //cria um BLE server 
  server->setCallbacks(new ServerCallbacks()); //seta o callback do server
  // Create the BLE Service
  BLEService *service = server->createService(SERVICE_UUID);
  // Create a BLE Characteristic para envio de dados
  characteristicTX = service->createCharacteristic(
                      CHARACTERISTIC_UUID_TX,
                      BLECharacteristic::PROPERTY_NOTIFY
                    );
                      
  characteristicTX->addDescriptor(new BLE2902());

  // Create a BLE Characteristic para recebimento de dados
  BLECharacteristic *characteristic = service->createCharacteristic(
                                         CHARACTERISTIC_UUID_RX,
                                         BLECharacteristic::PROPERTY_WRITE
                                       );

  characteristic->setCallbacks(new CharacteristicCallbacks());
  // Start the service
  service->start();
  // Start advertising (descoberta do ESP32)
  server->getAdvertising()->start();

  //Inicializa sensor de temperatura infravermelho            
  sensor.begin();  
  //Seleciona temperatura em Celsius               
  sensor.setUnit(TEMP_C);//podemos ainda utilizar TEMP_F para Fahrenheit ou TEMP_K para Kelvin    
  
  Serial.println("Waiting a client connection to notify...");

}

void loop() {
     //se existe algum dispositivo conectado
    if (deviceConnected) {
      //chamamos o método "read" do sensor para realizar a leitura da temperatura
      //read retornará 1 caso consiga realizar a leitura, ou 0 caso contrário 
      if (sensor.read())
      {
          //recupera a leitura da temperatura do ambiente
          float tempAmbiente = sensor.ambient();
          //recupera a leitura da temperatura do objeto apontado pelo sensor
          float tempObjeto   = sensor.object();
      
          // Let's convert the value to a char array:
          char txString[8]; // make sure this is big enuffz
          dtostrf(tempAmbiente, 1, 2, txString); // float_val, min_width, digits_after_decimal, char_buffer

          characteristicTX->setValue(txString); //seta o valor que a caracteristica notificará (enviar)       
          characteristicTX->notify(); // Envia o valor para o smartphone

          Serial.print("*** Sent Value: ");
          Serial.print(txString);
          Serial.println(" ***");
      }
  
/*
    delay(1000);


    characteristicTX2->setValue("Hello!"); // Sending a test message
    characteristicTX2->notify(); // Send the value to the app!
  
  */

  }
  delay(1000);

}

