import {
  Footer,
  Header,
  Section1,
  Section10,
  Section11,
  Section12,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
} from "./components"

function App() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50 shadow-xl">
        <Header />
      </header>
      <main className="mb-20">
        {/* Section 1 */}
        <Section1 />
        {/* Section 2 */}
        <Section2 />
        {/* Section 3 */}
        <Section3 />
        {/* Section 4 */}
        <Section4 />
        {/* Section 5 */}
        <Section5 />
        {/* Section 6 */}
        <Section6 />
        {/* Section 7 */}
        <Section7 />
        {/* Section 8 */}
        <Section8 />
        {/* Section 9 */}
        <Section9 />
        {/* Section 10 */}
        <Section10 />
        {/* Section 11 */}
        <Section11 />
        {/* Section 12 */}
        <Section12 />
      </main>
      {/* Footer */}
      <footer className="bg-dd-400">
        <Footer />
      </footer>
    </>
  )
}

export default App
