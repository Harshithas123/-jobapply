import { async } from "@firebase/util";
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { firebasedatabase } from "../backend/firebasehandler.js";
import '../jobdetails/jobdetails.style.css';

const RecordData = () => {
    const [studentData, setstudentData] = useState({
        name:"",
        post:"",
        package:"",
        Location:"",
        SSLCcutoff:"",
        PUCcutoff:"",
        semcutoff:"",
        currentCGPAcutoff:""
    

    })

    const handlerChange = (event) => {
        const { name, value} = event.target;
        setstudentData({
            ...studentData,
            [name]: value
        })
    }
    const handleSave = async() => {
       const recordRef = ref(firebasedatabase, `COMPANY_RECORDS/${studentData.name}`);
       await set(recordRef, studentData);
       alert("Data recorded!")
    }
    return (
            <div className="record-data1">
                <div className="record-data2">
                <input className="inputs" value={studentData.name} onChange={handlerChange} name="name" placeholder="companyname" />
                    <input className="inputs" value={studentData.name} onChange={handlerChange} name="post" placeholder="post name" />
                    <input className="inputs" value={studentData.usn} onChange={handlerChange} name="package" placeholder="package" type={'number'} />
                    <input className="inputs" value={studentData.name} onChange={handlerChange} name="Location" placeholder="located" />
                    <input className="inputs" value={studentData.name} onChange={handlerChange} name="SSLCcutoff" placeholder="SSLC IN % only" type={'number' } />
                    <input className="inputs" value={studentData.name} onChange={handlerChange} name="PUCcutoff" placeholder="PUC IN % only" type={'number'} />
                    <input className="inputs" value={studentData.name} onChange={handlerChange} name="semcutoff" placeholder="sem in % only" type={'number'} />
                    <input className="inputs" value={studentData.name} onChange={handlerChange} name="currentCGPAcutoff" placeholder="CGPA" type={'number'} />
                    <button className="SUBMIT" onClick={handleSave}>SUBMIT</button>
        
        </div>
        </div>

    )
}
export default RecordData;