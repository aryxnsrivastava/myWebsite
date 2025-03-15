function Home(){
    return(
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Aryan's Portfolio!</h1>
        <p className="text-lg">Hey! Welcome to my website</p>
        <img 
          src="/images/myROOM.jpeg" 
          alt="Portfolio" 
          className="w-full max-w-4xl rounded-lg shadow-lg mt-6"
        />
        <p className="mt-4 text-center max-w-2xl">
          I'm a third-year CS student at Dal. I'm interested in Formula One (Huge McLaren fan) and playing different sports like badminton, football, and going to the gym.
        </p>
      </div>
    );
  }
  
  export default Home;