'use client'

import { useEffect, useState } from "react"

export default function Main() {
  const [name, setName] = useState('')

  const mmNames = [
    'ကို',
    'ကောင်း',
    'ကျော်',
    'ခင်',
    'ခိုင်',
    'ဂျမ်း',
    'ငြိမ်း',
    'စိုး',
    'စံ',
    'ဆန်း',
    'ဇံ',
    'ဇာ',
    'ဇင်',
    'ဇွဲ',
    'ဇော်',
    'ညိမ်း',
    'ဏ',
    'တင်',
    'တွတ်',
    'ထင်',
    'ထိန်',
    'ထွန်း',
    'ထက်',
    'ဒွေး',
    'ဒေါင်း',
    'ဒွန်း',
    'နီ',
    'နှင်း',
    'ပြည့်',
    'ပု',
    'ပုံ',
    'ပို',
    'ပေါ်',
    'ဖေ',
    'ဖြိုး',
    'ဗေ',
    'ဘု',
    'ဘ',
    'မင်း',
    'မှုံ',
    'ယု',
    'ရန်',
    'လု',
    'လင်း',
    'လေး',
    'လ',
    'လွင်',
    'ဝင်း',
    'ဝိန်း',
    'သန့်',
    'ဟိန်း',
    'အောင်',
    'အေး',
  ]

  const enNames = [
    'Andy',
    'Bryan',
    'Charlotte',
    'Dylan',
    'Evelyn',
    'Frank',
    'Grace',
    'Henry',
    'Isla',
    'Jack',
    'Katherine',
    'Liam',
    'Mason',
    'Nora',
    'Oliver',
    'Peyton',
    'Quinn',
    'Ryan',
    'Sophia',
    'Thomas',
    'Uma',
    'Violet',
    'William',
    'Xander',
    'Yvonne',
    'Zachary'
  ]

  const names = [
    ...mmNames,
    ...enNames,
  ]

  function getRandomName(namesArray: string[]): string {
    const randomName: string[] = []

    while (randomName.length < 3) {
      const randomIndex = Math.floor(Math.random() * namesArray.length)
      const selectedName = namesArray[randomIndex]

      // Avoid duplicates
      if (!randomName.includes(selectedName)) {
        randomName.push(selectedName)
      }
    }

    return randomName.join(' ')
  }

  useEffect(() => {
    const _name = getRandomName(names)
    setName(_name)
  }, [])

  const handleClick = () => {
    const _name = getRandomName(names)
    setName(_name)
  }

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <h3 className="text-xl text-stone-800">
        { name }
      </h3>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          onClick={handleClick}
        >
          Generate
        </button>
        {/* <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Reset
        </button> */}
      </div>

      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">
          Get started by generating random names.
        </li>
        <li className="mb-2">(Coming soon) <em>Save the names you like as favorite.</em></li>
        <li>(Coming soon) <em>Share screenshot.</em></li>
      </ol>
    </main>
  );
}