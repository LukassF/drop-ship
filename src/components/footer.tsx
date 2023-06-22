export default function Footer() {
  return (
    <footer className="z-20 w-screen  bg-stone-800 md:h-init-screen/2 relative justify-self-end self-end bottom-0 flex flex-col-reverse md:flex-row px-1 py-4">
      <div className="text-3xl md:text-5xl text-slate-200 flex items-center justify-center px-6 py-6 md:p-5 flex-1">
        Drop & Ship <span className="text-xl"> ©</span>
      </div>
      <div className="flex flex-col gap-2 md:gap-10 text-slate-100 px-6 py-1 md:p-5 md:pt-20 flex-1">
        <h2 className="text-xl md:text-3xl">Contact Us</h2>
        <span className="text-xs md:text-md text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          expedita pariatur nesciunt animi saepe possimus iure porro odio,
          aperiam eius, maxime nihil voluptate atque necessitatibus! animi saepe
          possimus iure porro odio, aperiam eius, maxime nihil voluptate atque
          necessitatibus!
        </span>
        <ul className="flex p-0 items-center gap-6 text-xl [&>*]:cursor-pointer">
          <li>
            <i aria-hidden className="fa fa-facebook"></i>
          </li>
          <li>
            <i aria-hidden className="fa fa-instagram"></i>
          </li>
          <li>
            <i aria-hidden className="fa fa-linkedin"></i>
          </li>
          <li>
            <i aria-hidden className="fa fa-envelope"></i>
          </li>
          <li>
            <i aria-hidden className="fa-brands fa-tiktok"></i>
          </li>
        </ul>
      </div>
      <div className="md:max-xl:hidden flex items-center justify-center px-6 py-5 md:p-5 flex-1">
        <div className="w-full h-full md:w-3/4 md:h-3/4 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d133948.06069954668!2d19.72954491027613!3d50.05129077279212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1sen!2spl!4v1686831669143!5m2!1sen!2spl"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:gap-10 text-slate-200 px-6 pt-5 md:p-5 md:pt-20 flex-1">
        <h2 className="text-xl md:text-3xl">Summary</h2>
        <ul className="text-xs md:text-md text-slate-400 md:pr-16 flex flex-col gap-0 md:gap-2">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            recusandae
          </li>
          <li>
            sit amet consectetur adipisicing elit. Aliquid, vitae iste nihil
            beatae dolorum
          </li>
          <li>
            Lorem ipsum dolor sit sed adipisci tempora perspiciatis fugit autem!
          </li>
        </ul>
      </div>
    </footer>
  );
}
