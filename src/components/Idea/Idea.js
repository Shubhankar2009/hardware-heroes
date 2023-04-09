import React from 'react'
import { Link } from 'react-router-dom'
import "./idea_style.css"

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../config'

export default function Idea() {
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"Idea")

    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })


  return (
    <div className='main'>
        <Link className='add_my_idea' to="/my-idea">ADD MY IDEA</Link>
        <div className="ideas">


        {list.map((post) =>{
            return <div className="idea">
                <h2 className="name_idea">{post.Name}</h2>
                <h2 className='tagline_idea'>{post.Tagline}</h2>
                <p className="description_idea">{post.Description}</p>
                
                <p className="skills_idea">Skills Required For Collaboration: {post.Skill}</p>
                <p className="skills_idea">Material Required For Project: {post.Material}</p>
                
                <div className="image_idea_div">
                    <img className='image_idea'
                    src={post.Image}
                    alt="No Image Found"
                    />
                <div className="button_support_div">
                  <button onClick={()=>{window.location.href = `mailto:${post.Email}?subject=`+`I Can Support You!`+`&body=`+`Enter your details here`;}} className='support'>SUPPORT</button>
                  <button onClick={()=>{window.location.href = `mailto:${post.Email}?subject=`+`I Want To Work With You!`+`&body=`+`Enter your details here`;}} className='support'>COLLABORATE</button>
  
                </div>
            </div>
          </div>
             })} 
        
        </div>
        
    </div>
  )
}