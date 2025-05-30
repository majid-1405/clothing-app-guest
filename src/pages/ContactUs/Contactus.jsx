export default function Contactus() {
    return (
        <div>
            
            <br />
            <div className="card">
            <center><h1>Constact Us</h1>
            <br />
                <Deskripsi/></center>
            <br />
                <Input label="Nama: "/>
                <br />
                <Input label="Email "/>
                <br />
                <Input label="No Hp" />
                <br />
                <Input label="Pesan yang ingin di sampaaikan: "/>
                <br />
                <Button/>
            </div>

        </div>
    )
}



function Deskripsi(){
    return(
        <div> 
            <p>Hubungi kami untuk mendapaatkan infomarsi lebih lanjut</p>
            <p>Email: clothingapp.com</p>
            <p>Phone: 08123456789</p>
    </div>
   

    )   
}

function Input(props){
    return(
       <form action="" className="Form">
            <div className="Row">
                <label> {props.label}</label>
                
            </div>
            <div>
                <input type="text" className="text"/>
            </div>
       </form>
       )
}

function Button(){
    return(
        <center>
            <div className="button button1">
                <input type="submit" className="button"/>
             </div>
        </center>     
    )
}