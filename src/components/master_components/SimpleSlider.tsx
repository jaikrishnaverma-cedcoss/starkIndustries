import React, {  useState } from "react";

export default function SimpleSlider({ arr ,styles}: { arr: string[]|string ,styles?:any}) {
  // My Own designed Slider 
const [count,setCount]=useState(0)
//for fill the nav dots shown on image
const fill=()=>{
  let x=[]
  for(let i=0; i<arr.length; i++){
   x.push(<span key={i+x.length.toString()} className={`dots m-1 rounded-circle ${(i===count)?'p-2 on-screen':'p-1'}`}></span>)
  }
  return x
}

  return (
     <div key={arr.toString()} className="d-flex flex-column align-items-center position-relative" >
          <img
            src={(Array.isArray(arr))?arr[count]:arr}
            style={(styles)?styles:{ maxWidth: "80px", maxHeight: "100px"}}
            onClick={()=>setCount(prev=>(prev>=arr.length-1?0:prev+1))}
            alt={count+arr[count]}
          />
          <div className="d-flex align-items-center text-primary my-1 sliderCount " style={{maxWidth:'100%',overflow:'hidden'}} onClick={()=>setCount(prev=>(prev>=arr.length-1?0:prev+1))}>
            {
             fill()
            }
            </div>
     </div>
  );
}
