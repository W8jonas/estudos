#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define HASH_SIZE 100

struct Node {
    int *key;
    char *value;
    struct Node* next;
};

struct Hash {
    struct Node *list[HASH_SIZE];
};



void main() {

    struct Hash *hash = (struct Hash*) malloc(sizeof(struct Hash));

    insertNode(hash, "Fabio", "Akita");
    insertNode(hash, "Jonas", "Henrique");

    printf("&s\n", search(hash, "Fabio"));
    printf("&s\n", search(hash, "Jonas"));

}