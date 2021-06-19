class Array {
    private:
        int n;
        float *vet;
        bool verifica(int indice);
    public:
        Array(int tam);
        ~Array();
        
        void set(int indice, float valor);
        float get(int indice);
};

