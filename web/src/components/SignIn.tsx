import { User } from 'lucide-react'

export function SignIn() {
  return (
    <a
      href=""
      className="item-center flex gap-3 text-left transition-colors hover:text-gray-50"
    >
      <div className=" flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="2-5 h-5 text-gray-500"></User>
      </div>

      <p className="max-w-[140px] text-sm leading-snug">
        <span className="underline ">Crie sua conta</span> e salve suas
        memórias!
      </p>
    </a>
  )
}
