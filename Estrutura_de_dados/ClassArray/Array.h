class Array {
    private:
        int n;
        float *vet;
        bool verifica(int indice);
    public:
        Array(int _numLados, float _tamanhoLado);
        ~Array();
        
        void set(int indice, float valor);
        float get(int indice);
};

