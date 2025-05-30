export default function ErrorPage({code}){
    let style = {};
    if(code == '400'){
        style ={img:"./public/img/400.png"}
    } else if(code == '401'){
        style ={img:"./public/img/401.png"}
    } else if(code == '403'){
        style ={img:"./public/img/403.png"}
    }else if(code == '404'){
        style ={img:"./public/img/404.png"}
    };

    return(
        <>
        <center><img src={style.img} alt={`Error ${code}`}  /></center>
        
        </>
      
    )
}