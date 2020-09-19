
/*
 * Projeto criado para estudar o comportamento de 
 * ponteiros na familia ESP para comunicação de dados
 * 
*/


typedef struct {
  int value;
  float halfValue;
} Object;

Object numbers;


void setVariables(){
  
  numbers.value = 10;
  numbers.halfValue = 10/2;

}


void readVariables() {

  Object *pointerToNumbers;
  pointerToNumbers = &numbers;

  Object newObject = *pointerToNumbers;

  Serial.print("newObject.value: ");
  Serial.println(newObject.value);
  Serial.print("newObject.halfValue: ");
  Serial.println(newObject.halfValue);
  Serial.print("sizeof(numbers): ");
  Serial.println(sizeof(numbers));
  
  // Acessando os dados usando os dois operadores (*). ou ->
  Serial.print("(*pointerToNumbers).value, HEX: ");
  Serial.println((*pointerToNumbers).value, HEX);
  Serial.print("pointerToNumbers->value, HEX: ");
  Serial.println(pointerToNumbers->halfValue, HEX);

}


void setup() {
  Serial.begin(115200);
  
  for(int i=0; i<=10; i++) Serial.println("");
  
  Serial.println("Initializing");
  setVariables();
  readVariables();
  Serial.println("end");
}


void loop() {}
