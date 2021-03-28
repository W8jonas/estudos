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



unsigned int hashCode(char *key) {
    unsigned long hash = 5381;
    unsigned int c;

    while(c =*key++) {
        hash = ((hash << 5) + hash) + c;
    }
    return hash % HASH_SIZE;
}


struct Node* createNode(char *key, char *value) {
    struct Node *node = (struct Node*) malloc(sizeof(struct Node));
    node->key = key;
    node->value = value;
    return node;
};



void main() {

    struct Hash *hash = (struct Hash*) malloc(sizeof(struct Hash));

    insertNode(hash, "Fabio", "Akita");
    insertNode(hash, "Jonas", "Henrique");

    printf("&s\n", search(hash, "Fabio"));
    printf("&s\n", search(hash, "Jonas"));

}