import React from 'react'
import { useState } from 'react'

export default function frmRegister() {

  const [prefixName, setprefixName] = useState("");
  const [firstName, setfirstName] = useState("");
  const [surName, setsurName] = useState("");
  const [sexData, setsexData] = useState("");
  const [addressDT, setaddressDT] = useState("");
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");

  const handleClick =(event)=>{
        alert('สมัครเรียบร้อย');
    }


  return (
    <div class="container">
        <div class="row pt-3">
            <div class="col-2">
                <select class="form-select" name="prefixName" onChange={(event) => {setprefixName(event.target.value)}}>
                    <option value="">-คำนำหน้า-</option>
                    <option value="นาย">นาย</option>
                    <option value="นาง">นาง</option>
                    <option value="นางสาว">นางสาว</option>
                </select>
            </div>
            <div class="col-2">
                <input type="text" class="form-control" placeholder="ชื่อ" onChange={(event) => {setfirstName(event.target.value)}} />
            </div>
            <div class="col-2">
                <input type="text" class="form-control" placeholder="นามสกุล" onChange={(event) => {setsurName(event.target.value)}} />
            </div>
        </div>

        <div class="row pt-3">
            <div class="col-1">
                เพศ : <input type="radio" class="form-check-input" name="sex" value="ชาย" onChange={(event) => {setsexData(event.target.value)}}/> ชาย
            </div>
            <div class="col-1">
                <input type="radio" class="form-check-input" name="sex" value="หญิง" onChange={(event) => {setsexData(event.target.value)}}/> หญิง
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-3">
                <textarea class="form-control" rows="4" placeholder="ที่อยู่" onChange={(event) => {setaddressDT(event.target.value)}} />
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-2">
                <input type="username" class="form-control" placeholder="Username" onChange={(event) => {setuserName(event.target.value)}} />
            </div>
        </div>
        <div class="row pt-3">
            <div class="col-2">
                <input type="password" class="form-control" placeholder="Password" onChange={(event) => {setpassWord(event.target.value)}} />
            </div>
        </div>
        <div class="row pt-2" align="left">
            <div class="col-3">
                <br />ชื่อ : {prefixName} {firstName} {surName}
                <br />เพศ : {sexData}
                <br />ที่อยู่ : {addressDT}
                <br />Username : {userName}
                <br />Password : {passWord}
                <br />
                <br /><input type="checkbox"/> ยอมรับเงื่อนไข
                <br /><button className='btn btn-primary' onClick={handleClick}>ยืนยันการสมัคร</button>
                <br />
                <br />
            </div>
        </div>
    </div>
  )
}
