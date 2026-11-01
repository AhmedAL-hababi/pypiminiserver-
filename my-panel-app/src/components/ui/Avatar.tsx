export function Avatar({ name, src }: { name: string; src?: string }) {
  return src
    ? <img src={src} alt={name} className="h-8 w-8 rounded-full object-cover" />
    : <span title={name} className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent-purple to-pink text-xs font-semibold text-white">
        {name.slice(0, 1).toUpperCase()}
      </span>;
}