import React, { useState } from "react"
import { login,signup } from "../interaction"
import '../App.css';
export const Login = ({history})=>{
   const [user,setUser]=useState({email:"",password:"",firstname:"",lastname:""})
    const [isSignup,toggle]=useState(false);
    const [message,setMessage]=useState("");
    const [custommessage,setcustomMessage]=useState("");


    const handlepage=()=>{
        toggle(!isSignup);
    }
   const handleSubmit = ()=>{
        const {email,password} =user
      
        if(email==="")
        {
            setcustomMessage("Enter valid email")
        }
        else if(password==="")
        {
            setcustomMessage("Enter valid Password")
        }
        else
        {
            setcustomMessage(" ")
        login(email,password)
       .then((data)=>{
            const {email,message}=data;
            if(email)
            {
                setMessage(" ");
                alert("Logged in")               
                history.push(`/Header`)
                
                
            }
            else
            {
                setcustomMessage(message);
            }        
        })
        .catch((error)=>{
           console.log("error");
        })
        }
    }

    const handleSignup=()=>{

        setMessage("");
        const {email,firstname,lastname,password,} =user
        if(email==="")
        {
            setcustomMessage("Enter valid email")
        }
        else if(firstname==="")
        {
            setcustomMessage("Enter your name")
        }
        else if(lastname==="")
        {
            setcustomMessage("Enter your lastname")
        }
        else if(password==="")
        {
            setcustomMessage("Enter valid Password")
        }
        else{
        signup(email,firstname,lastname,password)
        .then((data)=>{
            const {message}=data;
          
            alert("Posted Successfully You can login now");
            toggle(!isSignup);
            

        })
        .catch((error)=>{
            console.log(error)
        })
    }
    }
    
    if(isSignup)
    {   

        return(

            <div className="container p-5  center"  style={{backgroundColor: "lightblue"}}>
                <form >
                <h1>Signup</h1>
                <div className="row">
                    <div offset="col-2">
                        <div className="row">
                <div  className="col-12">
                    <label for="email"> Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className="form-control" 
                        placeholder="Enter Email"
                        value = {user.email}
                        required
                        onChange={(e)=>{
                            setUser((usr)=>({...usr, email:e.target.value}))
                        }}
                        />
                    </div>
                <div className="col-12">
                    <label for="fname">FirstName</label>
                <input 
                    type="text" 
                    name="firstname" 
                    id="fname"
                    className="form-control" 
                    placeholder="Enter FirstName"
                    value = {user.firstname}
                    required
                    onChange={(e)=>{
                        setUser((usr)=>({...usr, firstname:e.target.value}))
                    }}
                    />
                </div>
                <div className="col-12">
                <label for="lname">LastName</label>
                <input 
                    type="text" 
                    name="lastname" 
                    id="lname"
                    className="form-control" 
                    placeholder="Enter LastName"
                    value = {user.lastname}
                    required
                    onChange={(e)=>{
                        setUser((usr)=>({...usr, lastname:e.target.value}))
                    }}
                    />
                </div>

                <div className="col-12">
                <label for="password">Password</label>
                    <input
                    type="password" 
                    name="password" 
                    id="password"
                    className="form-control" 
                    placeholder="Enter Your password"
                    value = {user.password}
                    onChange={(e)=>{
                        setUser((usr)=>({...usr, password:e.target.value}))
                    }}
                    required/>
                </div>
                </div>
                    <p style={{color: "red"}}>{custommessage}</p>
                    <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSignup}
                    >Signup</button>
                    
                    
                    <p style={{color: "green"}}>{message}</p>
                    </div>
                 
                    </div>
                    
                </form>
            </div>
        )

    }
    return(

        <div className="container p-5  center"  style={{backgroundColor: "lightblue"}}>
            <form>
                <h1>Login</h1>
                <div className="row" >
                    <div offset="col-2">
                <div className="row">
                    <div className="col-12">
                        <label for="email">Email</label>
                            <input 
                        type="email" 
                        name="email" 
                        id="email"
                        className="form-control" 
                        placeholder="Enter Email"
                        value = {user.email} 
                        onChange={(e)=>{
                            setUser((usr)=>({...usr, email:e.target.value}))
                        }}
                        required/>
                    </div>
                 <div  className=" col-12">
                        <label for="password">Password</label>

                        <input 
                        type="password" 
                        name="password" 
                        id="password"
                        className="form-control" 
                        placeholder="Enter Your password"
                        value = {user.password}
                    
                        onChange={(e)=>{
                            setUser((usr)=>({...usr, password:e.target.value}))
                        }}
                        required/>
                </div>
                </div>
               <p style={{color: "red"}}>{custommessage}</p>
                <button 
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                >Login</button> 
                <p style={{color: "green"}}>{message}</p>
                <span>Not an user already</span>
                <button type="button" className="btn btn-link" style={{color: "green"}}onClick={handlepage}>Sign up</button>
                </div>
                </div>
                
            </form>
        </div>
    )
}