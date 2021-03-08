#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <inttypes.h>

struct Person {
    char name[10];
    uint8_t age;
    uint8_t height;
};


void createPerson(char name[], uint8_t age, uint8_t height, void (* function_pointer)(struct Person)) {
    Person person;
    strcpy(person.name, name);
    person.age = age;
    person.height = height;

    (* function_pointer)(person);
}


void printPerson(Person person) {
    printf("person name: %s\nperson age: %d\nperson height: %d\n\n", person.name, person.age, person.height);
}


void printPersonDiferente(Person person) {
    printf("person name: %s\n\n", person.name);
}


int main() {
    createPerson("Jonas", 19, 185, &printPerson);
    createPerson("Henrique", 19, 185, &printPersonDiferente);
    return 1;
}
