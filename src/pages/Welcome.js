function Welcome() {
  return (
    <div className="h-screen bg-bgLight flex flex-col justify-center">
      <header className="text-center">
        <img className="w-full max-w-xs mx-auto" src="/assets/CryptoWallet-logo_nobg.png" alt="Crypto Wallet Logo" />
        <h1 className="text-primary text-5xl font-bold mt-5">
        <span className="text-secondary">C</span>rypto
          <span className="text-secondary">W</span>allet
        </h1>
      </header>
      <div className="mt-20 flex flex-col items-center justify-center gap-4">
        <button className="w-48">
          <a href="" className="w-full bg-bgPrimary shadow-xl text-secondary flex justify-center items-center py-3 rounded-3xl text-2xl font-bold uppercase">Log in</a>
        </button>
        <a href="" className="uppercase text-primary text-xl">Sign up</a>
      </div>

    </div>
  );
}

export default Welcome;
