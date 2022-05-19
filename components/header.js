const headers = document.querySelectorAll("header")
headers.forEach(header => {
	// Javascript
	const heading = header.getAttribute("heading")
	const description = header.getAttribute("description")
	const html = `
		<div>
			<table>
				<tr>
					<td rowspan=2><img src="images/logo.png"></td>
					<td class="content"><h1>${heading}</h1></td>
				</tr>
				<tr>
					<td class="content"><p>${description}</p></td>
				</tr>
			</table>
		</div>
	`
	header.innerHTML = html

	// CSS
	const bgColor = ["#fd0", "#f80"]
	const fgColor = "#222"

	document.body.style.margin = "0"
	const div = header.querySelector("div")
	div.style.margin = "0"
	div.style.padding = "10px"
	div.style.backgroundImage = `linear-gradient(${bgColor[0]}, ${bgColor[1]})`
	div.style.color = fgColor
	div.style.borderLeft = `15px solid ${fgColor}`
	div.style.borderRight = `15px solid ${fgColor}`
	div.style.borderBottom =` 5px solid ${fgColor}`
	div.style.boxShadow = `0 5px 10px ${fgColor}`

	header.querySelector(".content").style.width = "100%"
	header.querySelectorAll(".content").forEach(td => td.style.textAlign = "center")

	const img = header.querySelector("img")
	img.style.height = "125px"
	img.style.width = "125px"
	img.style.marginRight = "10px"

	const h1 = header.querySelector("h1")
	h1.style.fontSize = "35px"
	h1.style.margin = "0"

	const p = header.querySelector("p")
	p.style.fontSize = "25px"
	p.style.fontWeight = "bold"
	p.style.margin = "0"
})