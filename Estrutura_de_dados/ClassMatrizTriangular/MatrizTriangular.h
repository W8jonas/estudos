class MatrizTriangular {
    private:
        int dimensions;
        char* type;
        float *vet;
        int getIndex(int _line, int _column);
        int length;

    public:
        MatrizTriangular(int dimensions, char* type);
        ~MatrizTriangular();
        
        float get(int line, int column);
        void set(int line, int column, float val);
        int getLength();
        MatrizTriangular* getTransposed();
};
