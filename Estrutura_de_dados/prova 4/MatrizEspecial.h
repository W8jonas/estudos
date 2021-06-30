class MatrizEspecial {
    private:
        int numLine;
        int numColumn;
        float *vet;
        int detInd(int _line, int _column);
        bool inverteSinal();

    public:
        MatrizEspecial(int line, int column);
        ~MatrizEspecial();
        
        float get(int line, int column);
        void set(int line, int column, float val);
};
