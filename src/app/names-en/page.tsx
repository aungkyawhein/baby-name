import en from '../data/en.json'
import Footer from '../footer'
import Header from '../header'

export default function NamesEN() {
  const enNames = en

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className='columns-3 gap-16'>{
          enNames.map((name, i) => (
            <div key={i}>{name}</div>
          ))
        }
        </div>
      </main>
      <Footer />
    </div>
  )
}
