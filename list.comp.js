import React, { useEffect, useState } from "react";
import { set,ref, onValue, DataSnapshot } from "firebase/database";
import { firebasedatabase  } from "../backend/firebasehandler.js";
import '../list/list.style.css';

const Detail = () => {

        const [comList,  setComList] = useState([]);
        
   
        useEffect(() => {  
            const fetchData = async () => {
       
       const Ref = ref(firebasedatabase  , `COMPANY_RECORDS`);
                onValue(Ref, (DataSnapshot) => {
                    if (DataSnapshot.exists()) {
                        const tempVal = DataSnapshot.val();
                        console.log(Object.values(tempVal))
   
                        const temp = [];
                        for (const name in DataSnapshot.val()) {
                            const comList = DataSnapshot.child(name).val();
                            temp.push(comList);
                            nav("/jobdetail")
                        }
                        setComList(temp);
                    }else{
                        alert("No records found!")
                    }
                })
            }
            fetchData()
        }, []);
   
        return (
            <div>
                <h1> List of companies</h1>
                <div className="cont1">
                    {
                        comList.map((item) => {
                            return (
                                <div className="cont2">
                                    <h3>{item.name}</h3>
                        
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
        )
   }


export default Detail;