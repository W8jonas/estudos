class MatrizLin {
    private:
        int numLine;
        int numColumn;
        float *vet;
        bool detInd(int index);

    public:
        MatrizLin(int tam);
        ~MatrizLin();
        
        float get(int line, int column);
        void set(int line, int column, float val);
};
