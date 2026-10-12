import "./Home.css"

function Home() {
  return (
    <main className="home">
      <section className="home-content">
        <p className="home-eyebrow">
          So, you want to travel to
        </p>

        <h1 className="home-title">
          Space
        </h1>

        <p className="home-description">
          Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge
          of it. Well sit back, and relax because we’ll give you a truly
          out of this world experience!
        </p>

        <a className="home-explore" href="/destination">
          Explore
        </a>
      </section>
    </main>
  )
}

export default Home