import express from "express";

const app = express();

app.use(express.json());

const PORT = 5000;

const students = [];

app.get('/health', (req, res) => {
    res.json({ status: 'All good! All set' });
});


app.get('/students', (req, res) => {
    res.json({
        success: true,
        data: students,
        message: 'succesfully fetch all student',
    })
});

app.post('/student', (req, res) => {
    const { name, age, mobile, email } = req.body;


    if (!name) {
        return res.json({
            success: false,
            message: 'name is required'
        })
    }

    if (!age) {
        return res.json({
            success: false,
            message: 'age is required'
        })
    }

    if (!mobile) {
        return res.json({
            success: false,
            message: 'mobile is required'
        })
    }

    if (!email) {
        return res.json({
            success: false,
            message: 'email is reqired'
        })
    }
    const id = Math.floor(Math.random() * 100000) + 1;

    const newStudent = {
        id,
        name,
        age,
        mobile,
        email,
    }

    students.push(newStudent);

    res.json({
        success: true,
        data: newStudent,
        message: 'succesfully added all student',
    })
});

app.get('/student', (req, res) => {
    const { id } = req.query;

    let student = null;

    students.forEach((stud) => {
        if (stud.id == id)
            student = stud;
    })

    if(student == null){
        return res.json({
            success:false,
            message:'student not found'
        })
    }

    res.json({
        success: true,
        data: student,
        message: 'succesfully find new student',
    })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});