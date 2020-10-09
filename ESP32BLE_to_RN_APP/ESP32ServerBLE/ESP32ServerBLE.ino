
/*
 * Código retirado do site Fernando K para ser utilizado para estudos.
 */

#include <BLEDevice.h>
#include <BLEServer.h>
#include <BLEUtils.h>
#include <BLE2902.h>

BLECharacteristic *characteristicTX; //através desse objeto iremos enviar dados para o client

bool deviceConnected = false; //controle de dispositivo conectado

const int LED = 2; //LED interno do ESP32 (esse pino pode variar de placa para placa)

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

        Serial.println();
        Serial.println("*********");
      }
    }
};

void setup() {
  Serial.begin(115200);

  pinMode(LED, OUTPUT);

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

  Serial.println("Waiting a client connection to notify...");

}

float lastAnalogInput = 0.0;

void loop() {
  float analogInput = analogRead(34);
  
  //se existe algum dispositivo conectado
  if (deviceConnected) {
    float result = analogInput - lastAnalogInput;
    
    if( abs(result) > 20){
      char txString[8];
      dtostrf(analogInput, 1, 2, txString);
      
      characteristicTX->setValue(txString); //seta o valor que a caracteristica notificará (enviar)
      characteristicTX->notify(); // Envia o valor para o smartphone
      
      Serial.print("*** Original Value: ");
      Serial.print(analogInput);
      Serial.print(" *** Sent Value: ");
      Serial.print(txString);
      Serial.println(" ***");
      lastAnalogInput = analogInput;
    }

    delay(500);
  /*
    characteristicTX->setValue("Hello World!"); // Sending a test message
    characteristicTX->notify(); // Send the value to the app!
  */
  }
  
  delay(1000);

}
