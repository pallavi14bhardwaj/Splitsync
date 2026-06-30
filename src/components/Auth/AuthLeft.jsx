// Left side of the authentication page

function AuthLeft() {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center bg-emerald-500 text-white p-10">

      <h1 className="text-5xl font-bold mb-8">
        SplitSync
      </h1>

      <div className="bg-white/20 rounded-3xl p-8 w-full max-w-md">

        <div className="flex justify-between mb-6">
          <span>🏖 Goa Trip</span>
          <span>+₹2340</span>
        </div>

        <div className="flex justify-between mb-6">
          <span>💼 Office</span>
          <span>+₹4800</span>
        </div>

        <div className="flex justify-between">
          <span>👫 Friends</span>
          <span>-₹850</span>
        </div>

      </div>

      <h2 className="text-4xl font-bold text-center mt-10">
        Split expenses,
        <br />
        not friendships.
      </h2>

      <p className="text-center mt-6 text-emerald-100">
        Join thousands of users managing shared expenses effortlessly.
      </p>

    </div>
  );
}

export default AuthLeft;