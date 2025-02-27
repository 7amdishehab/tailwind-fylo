function Footer() {
  return (
    <footer className="pt-[230px] bg-[#0b1524] text-white py-16">
      <div className="container con">
        <div className="flex flex-col justify-center items-start gap-[40px]">
          <div>
            <a href="/">
                <img src="/src/assets/images/logo.svg" alt="Fylo Logo" className="w-[175px] h-auto object-contain" />
              </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] md:gap-[60px] xl:gap-[100px]">
            <div className="flex flex-col gap-6 max-w-md">
              <div className="flex gap-4">
                <img src="/src/assets/images/icon-location.svg" alt="location" className="w-6 h-6" />
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi dignissimos unde ipsum modi facilis nam magni, assumenda ad fuga.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src="/src/assets/images/icon-phone.svg" alt="phone" className="icon" />
                <p className="text-sm">+20121212121</p>
              </div>
              <div className="flex gap-4 items-center">
                <img src="/src/assets/images/icon-email.svg" alt="email" className="icon" />
                <p className="text-sm">example@fylo.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">About Us</h2>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Jobs</a></li>
                <li><a href="#" className="hover:underline">Press</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold">Contact Us</h2>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Terms</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a href="#" className="footer-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <p className="text-sm mx-auto mt-8"><span className="text-primary" >&copy;</span> {new Date().getFullYear()} <span className="text-primary">Hamdi Shehab</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;