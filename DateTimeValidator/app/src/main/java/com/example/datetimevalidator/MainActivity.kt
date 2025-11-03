package com.example.datetimevalidator

import android.os.Build
import android.os.Bundle
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import android.widget.TextView
import android.widget.EditText
import android.widget.Button
import androidx.annotation.RequiresApi
import java.time.LocalDate
import java.time.format.DateTimeParseException

class MainActivity : AppCompatActivity() {
    @RequiresApi(Build.VERSION_CODES.O)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContentView(R.layout.activity_main) // 🔹 Gắn layout XML này vào Activity

        // 🔹 Liên kết các view với ID trong XML
        val edtDay = findViewById<EditText>(R.id.edtDay)
        val edtMonth = findViewById<EditText>(R.id.edtMonth)
        val edtYear = findViewById<EditText>(R.id.edtYear)
        val btnCheck = findViewById<Button>(R.id.btnCheck)
        val txtResult = findViewById<TextView>(R.id.txtResult)

        btnCheck.setOnClickListener {
            val dayText = edtDay.text.toString()
            val monthText = edtMonth.text.toString()
            val yearText = edtYear.text.toString()

            // 🔹 Kiểm tra có bỏ trống không
            if (dayText.isBlank() || monthText.isBlank() || yearText.isBlank()) {
                txtResult.text = "⚠️ Vui lòng nhập đủ ngày, tháng, năm!"
                return@setOnClickListener
            }

            try {
                val day = dayText.toInt()
                val month = monthText.toInt()
                val year = yearText.toInt()

                // 🔹 Tạo LocalDate để xác thực
                val date = LocalDate.of(year, month, day)
                txtResult.text = "✅ Ngày hợp lệ: $date"

            } catch (e: DateTimeParseException) {
                txtResult.text = "❌ Ngày không hợp lệ!"
            } catch (e: Exception) {
                txtResult.text = "❌ Ngày không hợp lệ!"
            }
        }
    }
}