Feature('Validate DateTime');

Scenario('Kiểm tra ngày hợp lệ', async ({ I }) => {
  I.wait(2);

  I.fillField('//android.widget.EditText[@resource-id="com.example.datetimevalidator:id/edtDay"]', '29');
  I.fillField('//android.widget.EditText[@resource-id="com.example.datetimevalidator:id/edtMonth"]', '02');
  I.fillField('//android.widget.EditText[@resource-id="com.example.datetimevalidator:id/edtYear"]', '2024');

  I.tap('//android.widget.Button[@resource-id="com.example.datetimevalidator:id/btnCheck"]');

  I.waitForText('Ngày hợp lệ', 5, '//android.widget.TextView[@resource-id="com.example.datetimevalidator:id/txtResult"]');
});

Scenario('Kiểm tra ngày không hợp lệ', async ({ I }) => {
  I.fillField('//android.widget.EditText[@resource-id="com.example.datetimevalidator:id/edtDay"]', '31');
  I.fillField('//android.widget.EditText[@resource-id="com.example.datetimevalidator:id/edtMonth"]', '02');
  I.fillField('//android.widget.EditText[@resource-id="com.example.datetimevalidator:id/edtYear"]', '2023');

  I.tap('//android.widget.Button[@resource-id="com.example.datetimevalidator:id/btnCheck"]');

  I.waitForText('Ngày không hợp lệ', 5, '//android.widget.TextView[@resource-id="com.example.datetimevalidator:id/txtResult"]');
});
