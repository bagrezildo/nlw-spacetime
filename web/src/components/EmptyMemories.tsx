export function EmptyMemories() {
  return (
    <div className="flex h-full flex-1 items-center justify-center">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não criou nennhuma lembrança.{' '}
        <a href="" className="underline hover:text-gray-50">
          Comece agora!
        </a>
      </p>
    </div>
  )
}
