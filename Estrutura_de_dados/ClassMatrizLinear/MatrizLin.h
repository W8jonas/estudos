class MatrizLin {
    private:
        int numLine;
        int numColumn;
        float *vet;
        int getIndex(int _line, int _column);
        int length;

    public:
        MatrizLin(int line, int column);
        ~MatrizLin();
        
        float get(int line, int column);
        void set(int line, int column, float val);
        int getLength();
        bool isSymmetrical();
};
