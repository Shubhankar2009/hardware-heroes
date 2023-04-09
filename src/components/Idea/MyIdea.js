import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../../config'
import {useNavigate} from "react-router-dom"
import "./my_idea_style.css"

export default function MyIdea() {
    const navigate = useNavigate();

    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Tagline, setTagline] = useState()
    const [Skill, setSkill] = useState()
    const [Material, setMaterial] = useState()
    const [Image, setImage] = useState()

    const [Description, setDescription] = useState()


    const collection_ref = collection(db,"Idea")
    const Sumbit =  async() =>{
        if (Skill !== "" & Name !== "" & Email !== ""  & Description!=="" & Tagline!==""  & Material!=="" & Image!=="") {
            await addDoc(collection_ref, {Skill,Name,Description,Email,Tagline,Material,Image })
            navigate("/idea")

        }else{
            alert("all fields are mandatory")
        }
    }
  return (
    <div className='Add'>
        <div className="Container">
                <h1 className="maintitle">Get Support For Your Idea</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        <label>
                            <h5 className="input_label" >Your Name :</h5>
                            <input className="input_form" type="text" placeholder="By What Set Of Characters You Are Identified"  onChange={(event)=>{setName(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Your Email Address :</h5>
                            <input className="input_form" type="email" placeholder="Where Do You Live In This World Of Emails"  onChange={(event)=>{setEmail(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Tagline For Your Idea  :</h5>
                            <input className="input_form" type="text" placeholder="Define Your Idea In One Attractive Line"  onChange={(event)=>{setTagline(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Skills Required To Collaborate With You  :</h5>
                            <input className="input_form" type="text" placeholder="Find Your Team !"  onChange={(event)=>{setSkill(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Material Which You Need For Your Idea  :</h5>
                            <input className="input_form" type="text" placeholder="It can be anything like Rasberry Pi , etc"  onChange={(event)=>{setMaterial(event.target.value)}} />
                        </label>
                        <label>
                            <h5 className="input_label" >Description Of Your Idea :</h5>
                            <textarea name="" id="" onChange={(event)=>{setDescription(event.target.value)}} className='textarea'></textarea>
                        </label>
                        <label>
                            <h5 className="input_label" >Images Related To Your Idea  :</h5>
                            <input className="input_form" type="text" placeholder="Link Of Some Visual Stuff..."  onChange={(event)=>{setImage(event.target.value)}} />
                        </label>
                        
       
                </div>
            <h3 className="subtitle">Just A Step Away From Getting Support For Your Idea.......</h3>

            <button id="submit-btn" onClick={Sumbit} name="action">Submit</button>
</div>
    </div>
  )
}