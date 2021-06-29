class Opcao {
    private:
        char *nome;
        char letraTipo;
        int preco;
    public:
        Opcao(char letra, int preco);
        ~Opcao();
        
        char* GetTipo();
        int GetPreco();
        void imprime();
};

