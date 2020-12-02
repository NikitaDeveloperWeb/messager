import React from 'react';
import { Navigation, Wrapper } from '../components';

function Home() {
  return (
    <section className="home">
      <aside>
        <div className="home__navigation">
          <Navigation />
        </div>
      </aside>
      <main>
        <Wrapper />
      </main>
    </section>
  );
}

export default Home;
