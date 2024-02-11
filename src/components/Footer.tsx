function Footer() {
  return (
    <>
        <footer className="flex justify-center flex-col items-center bg-[#86f867]">
            <div className="py-2">
                <address className="italic">Adress here</address>
            </div>
            <div className="py-2">
                <input type="email" name="subscriberEmail" id="subscriberEmail"  placeholder="example@urmail.com" />
                <input type="submit" value="Subscribe" />
            </div>
            <div className="flex py-2">
                Socail Media
                <div className="px-2 py-1 rounded-lg bg-white">Facebook</div>
                <div className="px-2 py-1 rounded-lg bg-white">Instagram</div>
                <div className="px-2 py-1 rounded-lg bg-white">Twitter</div>
                <div className="px-2 py-1 rounded-lg bg-white">Tiktok</div>
            </div>
            <div className="py-2">
                <p>All right reserved &copy; 2024</p>
            </div>
        </footer>
        <div className="bg-black text-white text-center">
            Designed and Developed by <span><a className="hover:text-slate-400" href="https://github.com/sceiiya">Sceiiya</a></span>
        </div></>
  )
}

export default Footer