
/*
 * Projeto criado para estudar o comportamento de 
 * ponteiros na familia ESP para comunicação de dados
 * 
*/


typedef struct {
  int counter;
  float halfCounter;
} Object;


void setVariables(){
  
}


void readVariables() {
  
}


void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  for(int i=0; i<=10; i++) Serial.println("");
  
  Serial.println("Initializing");
  setVariables();
  readVariables();
  Serial.println("end");
}


void loop() {
}
