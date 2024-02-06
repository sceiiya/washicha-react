import "./App.css"

function App() {
  return (
    <>
      <nav className="flex items-center justify-center font-['Protest Strike'] sticky bg-[#539941] text-white p-4 top-0 m-0 gap-5">
        <div className="text-[#215b10] text-3xl max-sm:text-xl font-['Paytone One'] font-extrabold ">Washi<span className="font-['Pacifico'] font-bold text-[#86f867]">Tea</span></div>
        <button className="">Home</button>
        <button className="">About</button>
        <button className="">Contact</button>
        <button className="">Buy Now</button>
        <div>
          <button>Login/Register</button>
        </div>  
      </nav>
      <main className="w-full p-0 m-0 [&>*:nth-child(odd)]:bg-[#87f86794]">
        <div className="flex justify-center h-screen items-center ">Hero</div>
        <div className="flex justify-center h-screen items-center ">1 tea</div>
        <div className="flex justify-center h-screen items-center ">A blog</div>
        <div className="flex justify-center h-screen items-center ">3 Teas</div>
        <div className="flex justify-center h-screen items-center ">HealthTea</div>
        <div className="flex justify-center h-screen items-center ">Delivery service</div>
      </main>
      <footer className="flex justify-center items-center bg-[#86f867]">
        <div>
          <address>Adress here</address>
        </div>
        <div>
          <input type="email" name="" id=""  placeholder="example@urmail.com" />
          <input type="submit" value="Subscribe" />
        </div>
        <div className="">
          Socail Media
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Twitter</div>
          <div>Tiktok</div>
        </div>
        <div>
          <p>All right reserved &copy; 2024</p>
        </div>
      </footer>
      <div className="bg-black text-white text-center">
          Designed and Developed by <span><a className="hover:text-slate-400" href="https://github.com/sceiiya">Sceiiya</a></span>
      </div>
    </>
  )
}

export default App