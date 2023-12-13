import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-6xl py-4 px-6 rounded-full'><Link href={`/products/`}>Products</Link></button>
      </div>
    </main>
  )
}
