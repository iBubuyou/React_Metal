const cors = require('cors'); // เพิ่มไลบรารี cors
const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3001;

// เชื่อมต่อกับฐานข้อมูล MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678', // รหัสผ่านของคุณ
  database: 'metalproject'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware
app.use(express.json());

app.use(cors());

app.post('/api/metal', (req, res) => {
  // รับข้อมูลจากฟอร์มการจอง
  const { buzzer_status, touch_module, datetimestamp } = req.body;

  // หาค่า reservationid ที่มากที่สุดในฐานข้อมูล
  connection.query('SELECT MAX(id) AS maxId FROM metalinfo', (err, results) => {
    if (err) {
      console.error('Error retrieving max id from MySQL: ', err);
      res.status(500).json({ status: 'error', message: 'Failed to submit metalinfo' });
      return;
    }

    // หาค่า reservationid ที่มากที่สุดและเพิ่มด้วย 1 เพื่อให้เป็นค่าใหม่
    const newid = results[0].maxId ? results[0].maxId + 1 : 1;

    // บันทึกข้อมูลลงในฐานข้อมูล MySQL พร้อมกับการกำหนดค่า reservationid
    const query = `INSERT INTO metalinfo (id, buzzer_status, touch_module, datetimestamp) 
               VALUES (?, ?, ?, ?)`;
connection.query(query, [newid, buzzer_status, touch_module, datetimestamp], (err, results) => {
      if (err) {
        console.error('Error inserting data into MySQL: ', err);
        res.status(500).json({ status: 'error', message: 'Failed to submit metalinfo' });
        return;
      }
      console.log('metalinfo submitted successfully');
      res.json({ status: 'ok', message: `metalinfo submitted successfully.` });
    });
  });
});

// เพิ่มเส้นทางสำหรับ GET request เพื่อรับข้อมูลการจองทั้งหมด
// ... (your existing code)

// Define a simple query function
const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// ... (your existing code)

// Add the missing 'query' function to handle database queries
app.get("/api/malte", async (req, res) => {
  try {
    const Metal = await query("SELECT * FROM metalinfo");
    res.json(Metal);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

// ... (your existing code)


app.listen(PORT, () => {
  console.log(`Server is running on port`, PORT);
});


