import Image from "next/image";

export default function Pokemon({ pokemon }) {
    return (
      <div className="border-2 border-green-800 md:border-green-400 rounded-2xl" key={pokemon.id}>
        <span>#{String(pokemon.id).padStart(3, '0')}</span>
        <Image
          src={pokemon.image}
          width={250}
          height={250}
          alt={pokemon.name}
        />
        <h1 className="bg-green-800 md:bg-green-400 rounded-b-xl px-2 py-1 text-3xl text-center text-white font-bold capitalize">{pokemon.name}</h1>
    </div>
   )
}

