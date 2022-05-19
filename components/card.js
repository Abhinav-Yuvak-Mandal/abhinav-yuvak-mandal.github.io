const cards = document.querySelectorAll("card")
cards.forEach(card => {
	// Javascript
	const img = card.getAttribute("img")
	const url = card.getAttribute("url")
	const	heading = card.getAttribute("heading")
	const description = card.getAttribute("description")
	const html = `
		<div>
			<table>
				<tr>
					<td><img src=${img}></td>
					<td class="heading"><h3>${heading}</h3></td>
				</tr>
				<tr>
					<td colspan=2><p>${description}</p></td>
				</tr>
			</table>
		</div>
	`
	card.innerHTML = html
	card.addEventListener("click", () => {
		open(url, "_blank")
	})

	// CSS
	const fgColor = "#222"

	const div = card.querySelector("div")
	div.style.margin = "10px"
	div.style.border = `2px solid ${fgColor}`
	div.style.borderRadius = "10px"
	div.style.borderLeft = "10px solid red"
	div.style.fontFamily = "Calibri"
	div.style.borderRight = "10px solid red"
	div.style.cursor = "pointer"
	div.style.backgroundImage = "linear-gradient(#fff, #ddd)"
	div.style.boxShadow = `0 2px 5px ${fgColor}`
	div.addEventListener("mouseover", () => {
		div.style.boxShadow = `0 5px 10px ${fgColor}`
		div.style.transform = "translateY(-2px)"
	})
	div.addEventListener("mouseout", () => {
		div.style.boxShadow = `0 2px 5px ${fgColor}`
		div.style.transform = "translateY(2px)"
	})

	card.querySelector(".heading").style.width = "100%"

	const imgTag = card.querySelector("img")
	imgTag.style.width = "50px"
	imgTag.style.height = "50px"
	imgTag.style.margin = "10px"

	const h3 = card.querySelector("h3")
	h3.style.fontSize = "30px"
	h3.style.margin = "0"

	const p = card.querySelector("p")
	p.style.fontSize = "20px"
	p.style.margin = "10px"
	p.style.marginTop = "0"
})