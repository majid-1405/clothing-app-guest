export default function Aboutus() {
    return (
        <div>
            <Navbar/>
            <AboutUs/>
        </div>
    )
}

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">ClothingApp</div>
            <ul className="navbar-menu">
            <li className="navbar-item"><a href="index.html">Home</a></li>
                <li className="navbar-item"><a href="#home">Shop</a></li>
                <li className="navbar-item"><a href="#about">Features</a></li>
                <li className="navbar-item"><a href="AboutUs.html">About US</a></li>
                <li className="navbar-item"><a href="ContactUs.html">Contact</a></li>
                <li className="navbar-item"><a href="#contact">Services</a></li>
            </ul>
        </nav>
        
    )
}

function AboutUs(){
    return (    
        <div className="about-us">
            <h1>Abous US</h1>
            <p>
                Selamat datang di Clothing app, tempat di mana gaya bertemu kenyamanan. Kami adalah
                perusahaan fashion yang berkomitmen untuk menyediakan pakaian berkualitas tinggi dengan desain
                yang trendi dan harga yang terjangkau.
            </p>
            <h2>Misi Kami</h2>
            <p>
                Misi kami adalah untuk memberikan pengalaman berbelanja yang luar biasa dengan menawarkan
                koleksi pakaian yang beragam, dari pakaian kasual hingga formal, yang dapat memenuhi
                kebutuhan setiap pelanggan. Kami percaya bahwa setiap orang berhak untuk merasa percaya diri
                dan nyaman dengan apa yang mereka kenakan.
            </p>
            <h2>Visi Kami</h2>
            <p>
                Visi kami adalah menjadi merek fashion terkemuka yang dikenal karena inovasi, kualitas, dan
                keberlanjutan. Kami berkomitmen untuk menggunakan bahan ramah lingkungan dan praktik produksi
                yang etis untuk menciptakan pakaian yang tidak hanya terlihat baik tetapi juga baik untuk
                planet kita.
            </p>
            <h2>Nilai-Nilai Kami</h2>
            <ul>
                <li><strong>Kualitas:</strong> Kami hanya menggunakan bahan terbaik untuk memastikan setiap
                    produk yang kami tawarkan memenuhi standar tinggi kami.</li>
                <li><strong>Inovasi:</strong> Kami selalu mengikuti tren terbaru dan berusaha untuk
                    menghadirkan desain yang unik dan menarik.</li>
                <li><strong>Keberlanjutan:</strong> Kami berkomitmen untuk praktik ramah lingkungan dalam
                    setiap aspek bisnis kami.</li>
                <li><strong>Pelayanan Pelanggan:</strong> Kami percaya bahwa pelanggan adalah yang terpenting,
                    dan kami berusaha untuk memberikan layanan terbaik kepada setiap pelanggan.</li>
            </ul>
            <h2>Tim Kami</h2>
            <p>
                Kami memiliki tim yang terdiri dari desainer berbakat, ahli mode, dan profesional layanan
                pelanggan yang berdedikasi untuk membantu Anda menemukan pakaian yang sempurna. Setiap anggota
                tim kami memiliki hasrat untuk fashion dan berkomitmen untuk memberikan pengalaman berbelanja
                yang luar biasa.
            </p>
        </div>
        
    )
}