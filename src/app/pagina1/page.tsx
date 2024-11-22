"use client"

import { usePagina1Model } from "./pagina1.model"
import Pagina1View from "./pagina1.view"

export default function Pagina1() {
	const methods = usePagina1Model()
	return <Pagina1View {...methods} />
}
