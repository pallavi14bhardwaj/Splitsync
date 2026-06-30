// Footer

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">

        <h1 className="text-3xl font-bold">
          SplitSync
        </h1>

        <div className="flex gap-8 mt-5 md:mt-0">

          <a href="#">About</a>

          <a href="#">Contact</a>

          <a href="#">Privacy</a>

          <a href="#">Terms</a>

        </div>

      </div>

      <p className="text-center text-gray-400 mt-8">
        © 2026 SplitSync. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;