function Navbar() {
  return (
    <>
        <nav className="flex items-center justify-center font-['Protest Strike'] sticky bg-[#539941] text-white p-4 top-0 m-0 gap-5">
            <div className="text-[#215b10] text-3xl max-sm:text-xl font-['Paytone One'] font-extrabold ">Washi<span className="font-['Pacifico'] font-bold text-[#86f867]">Cha</span>
            </div>
            <button className="">Home</button>
            <button className="">About</button>
            <button className="">Contact</button>
            <button className="">Buy Now</button>
            <div>
              <button>Login/Register</button>
            </div>  
        </nav>    
    </>
  )
}

export default Navbar