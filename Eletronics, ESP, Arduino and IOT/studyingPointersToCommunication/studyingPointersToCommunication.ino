
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
  
  Serial.println(newObject.value);
  Serial.println(newObject.halfValue);

  // Acessando os dados usando os dois operadores (*). ou ->
  Serial.println((*pointerToNumbers).value);
  Serial.println(pointerToNumbers->halfValue);
  Serial.println(sizeof(numbers));

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
