import React,{useRef,useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eye from '../assets/eye.png'
import Ceye from '../assets/Ceye.png'
import copy from '../assets/copy.png'
import edit from '../assets/edit.png'
import Delete from '../assets/Delete.png'
import { v4 as uuidv4 } from 'uuid';
const Manager = () => {
  const ref= useRef();
  const passwordref = useRef();
  const [form, setForm] = useState({site:"",username:"",password:""})
  const [passwordsArray, setPasswordsArray] = useState([])
  useEffect(() => {
         let passwords = localStorage.getItem("passwords");
         if(passwords){
            setPasswordsArray(JSON.parse(passwords)) 
          }
  }, [])
  const showPassword=()=>{
     passwordref.current.type = "text"
     if(ref.current.src.includes("Ceye.png")){
       passwordref.current.type = "password"
       ref.current.src=eye
     }
     else{
      ref.current.src= Ceye
      passwordref.current.type="text"
     }
  }

  const SavePassword=()=>{
    if(form.site.length>3 && form.username.length>3 && form.password.length>3){
    setPasswordsArray([...passwordsArray,{...form, id: uuidv4()}])
    localStorage.setItem("passwords",JSON.stringify([...passwordsArray,{...form, id: uuidv4()}]))
    console.log([...passwordsArray,form])
    setForm({site:"",username:"",password:""})
    toast('Password Saved', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      toast('Password Not Saved', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  
   const DeletePassword=(id)=>{
    console.log("Deleting password with id",id)
    let c =confirm("Do you really want to delete this password")
    if(c){
       setPasswordsArray(passwordsArray.filter(item=>item.id!=id))
       localStorage.setItem("passwords",JSON.stringify(passwordsArray.filter(item=>item.id!=id)))
       toast('Password Deleted', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } 
  }

  const editPassword=(id)=>{
    console.log("Editing password with id",id)
    setForm(passwordsArray.filter(item=>item.id===id)[0])
    setPasswordsArray(passwordsArray.filter(item=>item.id!=id))
   
  }



 const copyText = (text)=>{
    toast('Text Copied to Clickboard!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    navigator.clipboard.writeText(text)
 }
  const handleChange=(e)=>{
      setForm({...form,[e.target.name]: e.target.value})
  }
  return (
    <div>
         <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

        <div className="  p-2 md:p-0 md:myContainer mx-auto  max-w-250  rounded-2xl ">
            <h1 className=" font-bold text-center"><span className="text-purple-900 text-2xl">&lt;</span><span className="text-purple-300 text-2xl">Cred</span><span className="text-purple-900 text-2xl">Lock</span><span className="text-purple-900 text-2xl">/&gt;</span></h1>
            <p className=" font-medium text-purple-950 text-center">Your Own Password Manager</p>

        <div className="text-white flex flex-col p-4">
            <input id="site" value={form.site} onChange={handleChange} name="site" placeholder="Enter website name"type="text" className="border-2 border-purple-900 rounded-2xl mb-4 text-purple-900 px-2" />
            <div className="flex flex-col md:flex-row justify-between gap-4">
                 <input id="username" value={form.username} onChange={handleChange} name="username" type="text" placeholder="Enter username" className="border-2 border-purple-900 flex-1 rounded-2xl text-purple-900 px-2" />
                 <div className=" relative flex-1">
                  <input ref = {passwordref} value={form.password} onChange={handleChange} id="password" type="password" name="password" placeholder="Enter password"className=" w-full border-2 border-purple-900 rounded-2xl text-purple-900 px-2"/>
                  <span className="absolute right-0 pr-2 text-purple-950 cursor-pointer" onClick={showPassword}>
                    <img ref ={ref} src={eye} className="right-0 py-1.5" width={15} alt="eye" />
                  </span>
                 </div>
                 
            </div>
            
        </div>
        <div className="flex items-center justify-center">
            <button onClick={SavePassword} className="flex items-center gap-2 px-3 border-2 border-purple-900 rounded-2xl  font-semibold text-purple-950 hover:bg-purple-900 hover:text-white hover:scale-110 transition duration-100 ">
               <lord-icon
            src="https://cdn.lordicon.com/efxgwrkc.json"
            trigger="hover"
            >
            </lord-icon>
              
              
              Save</button>
        </div>

        <div className="passwords">
           <h2 className="font-bold text-2xl text-purple-950 text-center mt-10 mb-3">Your Passwords</h2>
           {passwordsArray.length ===0 && <div className="">No passwords to show</div>}
           {passwordsArray!=0 &&
           <table className="table-auto w-full overflow-hidden rounded-md mb-5">
              <thead className="bg-purple-900 text-white">
                <tr>
                  <th className="py-1.5">Site</th>
                  <th className="py-1.5">UserName</th>
                  <th className="py-1.5">Password</th>
                  <th className="py-1.5">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-purple-50">
                {passwordsArray.map((item,index)=>{

                  return <tr key={index}>
                     
                        <td className="text-center w-32 py-1.5">
                          <div className="flex items-center justify-center gap-1.5">
                              <a href={item.site} target='_blank'>{item.site}</a>
                              <img className="w-4 h-4 cursor-pointer" onClick={()=>{copyText(item.site)}} src={copy} alt="" />
                          </div>
                        </td>
                      
                      <td className="text-center w-32 py-1.5">
                        <div className="flex items-center justify-center gap-1.5">
                                {item.username}
                              <img className="w-4 h-4 cursor-pointer"  onClick={()=>{copyText(item.username)} }src={copy} alt="" />
                          </div>
                        </td>
                      <td className="text-center w-32 py-1.5">
                         <div className="flex items-center justify-center gap-1.5">
                                {item.password}
                              <img className="w-4 h-4 cursor-pointer"  onClick={()=>{copyText(item.password)}} src={copy} alt="" />
                          </div>
                      </td>
                      <td className="text-center w-32 py-1.5">
                          <div className="flex items-center justify-center gap-3">
                             <span>
                              <img onClick={()=>{editPassword(item.id)}} className="w-4 h-4" src={edit} alt="" />
                            </span>
                            <span>
                              <img onClick={()=>{DeletePassword(item.id)}} className="w-4 h-4"src={Delete} alt="" />
                            </span>
                           
                          </div>
                          
                        </td>
                    </tr>
                })}
              </tbody>
            </table>
          }

        </div>
        
        </div>

    </div>
  )
}

export default Manager 