//Components
import { Metadata } from "next"
import { BannerHeroBlog } from "@/components/blog/BannerHeroBlog"
import { ArticleMain } from "@/components/blog/ArticleMain"


export const metadata: Metadata = {
    title: "TMH – Soluciones integrales en Logística-Blog",
    description: "",
    keywords: []
}


export default function Blog() {
    return (
        <main>
            <BannerHeroBlog />
            <ArticleMain />
        </main>
    )
}