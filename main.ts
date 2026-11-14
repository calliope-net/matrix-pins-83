if (!(i2c.simulator())) {
    matrix.init(matrix.ePages.y128)
    matrix.writeTextCharset(0, 0, matrix.matrix_text("matrix-pins-83"))
    matrix.writeTextCharset(15, 7, matrix.matrix_text("(128,128)"))
    matrix.displayMatrix()
}
