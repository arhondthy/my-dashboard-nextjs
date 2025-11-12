import Link from "next/link"
import { simplePokemon } from "../interfaces/simplePokemon"
import Image from 'next/image'
import { IoHeartOutline } from "react-icons/io5";
interface Props {
    pokemons: simplePokemon;
}
const PokemonCard = ({ pokemons }: Props) => {
    const { id, name } = pokemons
    return (

        <div className="mx-auto right-0 mt-2 w-60">
            <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">


                    <Image
                        key={id}
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                        width={100}
                        height={100}
                        alt={name}
                        priority={false} />

                    <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
                    <p className="text-sm text-gray-100">John@Dosse.com</p>
                    <div className="mt-5">
                        <Link href={`/dashboard/pokemon/${name}`}
                            className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                        >
                            Mas info
                        </Link>
                    </div>
                </div>
                <div className="border-b">
                    <Link href="/dashboard/main" className="px-4 py-2 hover:bg-gray-100 flex items-center">

                        <div className="text-green-600">
                            <IoHeartOutline />
                        </div>
                        <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                                favorito
                            </p>
                            <p className="text-xs text-gray-500">click para meencorazona</p>
                        </div>

                    </Link>
                </div>


            </div>
        </div>
    )
}

export default PokemonCard
