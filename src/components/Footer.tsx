function Footer() {
  return (
    <>
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
        </div></>
  )
}

export default Footer