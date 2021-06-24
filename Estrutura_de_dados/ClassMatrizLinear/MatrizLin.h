class MatrizLin {
    private:
        int numLine;
        int numColumn;
        float *vet;
        bool detInd(int index);
        int length;

    public:
        MatrizLin(int line, int column);
        ~MatrizLin();
        
        float get(int line, int column);
        void set(int line, int column, float val);
        int getLength();
};
