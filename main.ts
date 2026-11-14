function Uhrprogramm () {
    matrix.clearMatrix(8, 15)
    i2c.rtc_read()
    i2c.rtc_25led(i2c.rtc_e25led.Zeit)
    matrix.writeClock(24, 23, 24, i2c.rtc_get_int(i2c.rtc_Register(i2c.rtc_eRegister.Stunde)), i2c.rtc_get_int(i2c.rtc_Register(i2c.rtc_eRegister.Minute)))
    matrix.writeTextCharset(11, 12, i2c.rtc_get_string(i2c.rtc_eFormat.ddd))
    matrix.writeTextCharset(13, 0, i2c.rtc_get_string(i2c.rtc_eFormat.ddMM20yy), 8, -2, matrix.eTransparent.u, matrix.matrix_eFaktor(matrix.eFaktor.f1), matrix.matrix_eFaktor(matrix.eFaktor.f3))
    matrix.comment("gedreht")
    matrix.imageArrayCharset(i2c.rtc_get_string(i2c.rtc_eFormat.hhmss))
    matrix.writeImageArray(matrix.imageArrayDrehen(matrix.matrix_Images(), matrix.eZeichenDrehen.links), 0, 64, 16, 0, matrix.eTransparent.u, matrix.matrix_eFaktor(matrix.eFaktor.f2), matrix.matrix_eFaktor(matrix.eFaktor.f2))
    matrix.displayMatrix()
}
if (!(i2c.simulator())) {
    matrix.init(matrix.ePages.y128)
    matrix.writeTextCharset(0, 0, matrix.matrix_text("matrix-pins-83"))
    matrix.writeTextCharset(15, 7, matrix.matrix_text("(128,128)"))
    matrix.displayMatrix()
}
loops.everyInterval(500, function () {
    matrix.comment("Blöcke sind in I²C - Tastaturen")
    i2c.raiseKeypadEvent(false)
    i2c.raiseKeyboardEvent(true)
    if (i2c.rtc_connected()) {
        Uhrprogramm()
    }
})
