import Footer from '../footer'
import Header from '../header'
import mm from '../mm.json'

export default function NamesMM() {
  const mmNames = mm

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className='columns-3 gap-16'>{
          mmNames.map((name, i) => (
            <div key={i}>{name}</div>
          ))
        }
        </div>
      </main>
      <Footer />
    </div>
  )
}
