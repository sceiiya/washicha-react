function Navbar() {
  return (
    <>
        <nav className="flex items-center justify-between font-['Protest Strike'] sticky bg-[#539941] text-white px-[12%] py-4 top-0 m-0">
            <div className="text-[#215b10] text-3xl max-sm:text-xl font-['Paytone One'] font-extrabold ">Washi<span className="font-['Pacifico'] font-bold text-[#86f867]">Cha</span>
            </div>
            <div className="flex gap-5">
            <button className="">Home</button>
            <button className="">About</button>
            <button className="">Contact</button>
            <button className="">Buy Now</button>
            </div>
            <div className="">
              <button>Login/Register</button>
            </div>  
        </nav>    
    </>
  )
}

export default Navbar