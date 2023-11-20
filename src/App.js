function App() {
  return (
    <div className="bg-[#EAE4CF] p-4 font-sans min-h-screen text-[#3C5142]">
      <div className="p-4 border-2 border-[#3C5142] h-full rounded-2xl">
        <h1 className="text-3xl mt-2 font-bold">Clémence Pham</h1>
        <h2 className="text-2xl font-bold text-right">Développeuse web</h2>
        <main className="py-4">
          <p className="text-center my-4 py-6 px-2 border-2 border-[#3C5142] rounded-2xl">Refonte complète du site en cours</p>
          <p className="px-2">
            Pendant cette transition, retrouvez mon travail sur{" "}
            <a
              href="https://github.com/ClemDSC"
              target="_blank"
              rel="noreferrer"
              className="font-semibold"
            >
              Github
            </a>.
          </p>
          <p className="px-2">Voici un aperçu des changements en cours :</p>
          <div className="pt-6 px-2 flex flex-col justify-evenly md:flex-row">
            <figure>
              <img src="../assets/avant.jpeg" alt="before" />
              <figcaption className="text-center italic">Avant</figcaption>
            </figure>
            <figure className="pt-6">
              <img src="../assets/apres.jpeg" alt="after" />
              <figcaption className="text-center italic">Après</figcaption>
            </figure>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
