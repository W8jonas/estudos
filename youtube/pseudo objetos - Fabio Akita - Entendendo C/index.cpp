#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <inttypes.h>

#define Class struct

Class Person {
    char name[10];
    uint8_t age;
    uint8_t height;
    void (*show)(Person *);
};

void printPerson(Person *self) {
    printf("person name: %s\nperson age: %d\nperson height: %d\n\n",
        self->name, self->age, self->height);
}


Class Person * newPerson(char name[], uint8_t age, uint8_t height) {
    
    Class Person *self = (Class Person *) malloc(sizeof(Class Person *newPerson));

    strcpy(self->name, name);
    self->age = age;
    self->height = height;

    self->show = &printPerson;

    return self;
}


int main() {
    Class Person *person2 = 
    (Class Person *) newPerson("Jonas", 19, 185);

    person2->show(person2);

    return 1;
}
