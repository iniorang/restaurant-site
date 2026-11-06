import { HeaderWithBG } from "../components/header";
import Card from "../components/card";
import UseLoadJson from "../hook/useLoadJson"

const labelItems = [

]

export default function MenuPage() {
    const { data, loading, error, reload } = UseLoadJson()

    const menuItems = data.map(item => ({
        id: item.id,
        title: item.name,
        description: item.desc,
        imageUrl: item.pict,
        alt: item.alt
    }))

    return (
        <main>
            <HeaderWithBG
                subtitle="Our Menu"
                title="Delicious Dishes"
                backgroundImageUrl="/assets/img/Perayaan/NasiBancaan.png"
                titleId="menu-title"
            />
        </main>
    )
}