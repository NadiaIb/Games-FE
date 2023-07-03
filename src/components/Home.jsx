import img from "../img/boardGameHome.jpeg";
function Home() {
  return (
    <section>
      <div className="homePageFlex">
        <p className="homePage">
          Welcome to GameGeek Reviews, the home for all game enthusiasts, click
          Reviews above to get started. Here you will have access to a number of
          game reviews which you can vote on, read more about and leave comments
          on. Enjoy!{" "}
          <img
            className="homeImg"
            src={img}
            alt="picture of two different board games"
          />
        </p>
      </div>
    </section>
  );
}

export default Home;
