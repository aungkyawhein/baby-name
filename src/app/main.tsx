'use client'

import { useEffect, useState } from "react"
import en from './data/en.json'
import mm from './data/mm.json'

export default function Main() {
  const [name, setName] = useState('')

  const mmNames = mm
  const enNames = en
  const names = [
    ...mmNames,
    ...enNames,
  ]

  function getPermutations<T>(arr: T[]): T[][] {
    if (arr.length === 0) return [[]];
    const result: T[][] = [];

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
      const perms = getPermutations(remaining);

      for (const perm of perms) {
        result.push([current, ...perm]);
      }
    }
    return result;
  }

  function getRandomName(namesArray: string[]): string {
    const randomNames: string[] = []

    while (randomNames.length < 3) {
      const randomIndex = Math.floor(Math.random() * namesArray.length)
      const selectedName = namesArray[randomIndex]

      // Avoid duplicates
      if (!randomNames.includes(selectedName)) {
        randomNames.push(selectedName)
      }
    }

    return randomNames.join(' ')
  }

  function setRandomNames(): void {
    const _name = getRandomName(names)
    setName(_name)
  }

  useEffect(() => {
    setRandomNames()
  }, [])

  const handleClick = () => {
    setRandomNames()
  }

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <h3 className="text-xl text-stone-800 dark:text-stone-200 border border-solid border-zinc-600 dark:border-zinc-400 px-12 py-3 rounded-full">
        { name }
      </h3>

      <div className="flex flex-row gap-4 text-slate-500 text-sm">{
        getPermutations(name.split(' ')).map((item, i) => {
          if (i > 0) {
            return <div key={i}>{item.join(' ')}</div>
          }
        })
      }</div>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 px-4"
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
