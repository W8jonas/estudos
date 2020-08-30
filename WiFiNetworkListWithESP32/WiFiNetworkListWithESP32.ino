
/*
 * Programa para listar todos os WIFIs disponíveis para conexão e seus respectivos sinais.
 * 
 * Autor: Jonas Henrique Nascimento
 * Data: 30/08/2020
 * 
 * Baseado no código desenvolvido pelo Fernando K tecnologia - "Introdução ao ESP32 - Parte 2"
 * 
 */

#include "WiFi.h"

String redeSSID = "";
int intensidadeSinal = -9999;

void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  
  // Escaneamento das redes disponíveis
  int networksList = WiFi.scanNetworks();
  
  Serial.println("Escaneamento realizado");

  if (networksList == 0) {
    Serial.println("Nenhuma rede encontrada");  
  } else {
    redeSSID = "";
    intensidadeSinal = -9999;
    Serial.print(networksList);
    Serial.println(" redes econtradas");
    for (int network = 0; network < networksList; ++network) {
      Serial.print("Rede encontrada: ");
      Serial.print(WiFi.SSID(network));
      Serial.print(": Intensidade do sinal:");
      Serial.println(WiFi.RSSI(network));

      if (abs(WiFi.RSSI(network)) < abs(intensidadeSinal)){
        intensidadeSinal = WiFi.RSSI(network);
        redeSSID = WiFi.SSID(network);
      }
    }
    
    Serial.println("----------------------------------------------");
    Serial.print("Rede com melhor sinal encontrada até o momento: ");
    Serial.print(redeSSID);
    Serial.print(", com sinal de: ");
    Serial.println(intensidadeSinal);
  }
}

void loop() {


}
