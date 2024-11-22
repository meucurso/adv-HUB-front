import type { usePagina1Model } from "./pagina1.model"

type Pagina1ViewProps = ReturnType<typeof usePagina1Model>

export default function Pagina1View(props: Pagina1ViewProps) {
	const { count, handleCounter } = props
	return (
		<>
			<h1>Página1</h1>
			<button
				onClick={handleCounter}
				type="button"
			>
				+
			</button>
			{count}
		</>
	)
}
