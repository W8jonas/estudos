
/*
 * Projeto criado para comparar tamanho das variáveis 
 * nos ambientes ESPs
 * Código baseado na seguinte 
 * issue https://github.com/espressif/arduino-esp32/issues/1745
*/


struct Object {
  int value;
  float halfValue;
};

Object numbers;


void show(const char * tag, int l) {
    Serial.print(tag); 
    Serial.print("\t");
    Serial.println(l);
}

void setup() {
    
    Serial.begin(115200);
    delay(200);
    Serial.println();

    show("              bool",sizeof(bool));
    show("           boolean",sizeof(boolean));
    show("              byte",sizeof(byte));
    show("              char",sizeof(char));
    show("     unsigned char",sizeof(unsigned char));
    show("           uint8_t",sizeof(uint8_t));
    Serial.println(); 
    show("             short",sizeof(short));
    show("          uint16_t",sizeof(uint16_t));
    show("              word",sizeof(word));
    Serial.println(); 
    show("               int",sizeof(int));
    show("      unsigned int",sizeof(unsigned int));
    show("            size_t",sizeof(size_t));
    Serial.println(); 
    show("             float",sizeof(float));
    show("              long",sizeof(long));
    show("     unsigned long",sizeof(unsigned long));
    show("          uint32_t",sizeof(uint32_t));
    Serial.println(); 
    show("            double",sizeof(double));
    Serial.println(); 
    show("         long long",sizeof(long long));
    show("unsigned long long",sizeof(unsigned long long));
    show("          uint64_t",sizeof(uint64_t));
    Serial.println(); 
    show("    struct numbers",sizeof(numbers));
}

void loop() {}
