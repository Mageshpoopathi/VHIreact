const db = require("./db");
const mssql = require('mssql');

exports.InsertReportData = (data) => {
    db.getConnection((err, connection) => {
        if(err)
            throw err;
        console.log('Connected to MSSQL database');
        console.log("insertValues", data);
        let insertData = Object.assign(data);
        let sql = `INSERT INTO course_details SET ?`
        db.query(sql,insertData, (err, res) =>{
            if(err)
                return err;
            console.log("res",res);
            return res;
            })
        connection.release();
    })
            // insertValues.map((data) => {
            //     const req = new mssql.Request(pool);
            //     let sql = "INSERT INTO course_details (programName, startdate, endDate, duration, participantId, participantName, trainerId, trainerName) VALUES ?";
            //     sql += util.format("('%s', '%s', '%s', %d, %d, %d, '%s')", data.Domain, data.Type, data.Application, data.NoOfCase, data.NoOfPass, data.NoOfFail, data.Environment);
            //     req.query(sql)
            //         .then(result => {
            //             return result;
            //         })
            //         .catch(err => {
            //             console.error('Error inserting record:', err);
            //         })
            // })
        // })
        // .catch((err) => {
        //     console.error('Error connecting to MSSQL database:', err);
        // });
}