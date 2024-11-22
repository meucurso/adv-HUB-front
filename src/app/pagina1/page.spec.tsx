import { render, screen } from "@testing-library/react"
import React from "react"
import { describe, expect, it } from "vitest"
import Pagina1 from "./page"

describe("Pagina1", () => {
	it("deve renderizar o texto corretamente", () => {
		render(<Pagina1 />)
		const elemento = screen.getByText("Página1")
		expect(elemento).toBeInTheDocument()
	})
})
