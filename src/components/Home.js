import Card from "./Card";
function Home() {
  return (
    <div id="home" className="home-background">
      <div className="right">
        <Card
          className="card mb-3"
          maxWidth="26rem"
          txtcolor="black"
          header="Bad Bank of America"
          title="Welcome to BadBank"
          text="We purchased our Security Software Second Hand from Target."
          body={
            <img src="/img/safe.jpg" className="img-fluid" alt="Logo" />
          }
        />
      </div>
    </div>
  );
}

export default Home;
