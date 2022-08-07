function start()
{
	var buttonCalculateIMC = document.querySelector('#button-calculate-imc')
	buttonCalculateIMC.addEventListener('click',handleButtonClick)

	var inputWeight = document.querySelector('#input-weight')
	var inputHeight = document.querySelector('#input-height')

	inputWeight.addEventListener('input',handleButtonClick)
	inputHeight.addEventListener('input',handleButtonClick)
	handleButtonClick()
}

function calculateIMC(weight, height)
{
	return weight / (height*height)
}

function handleButtonClick()
{
	var weight = Number(document.querySelector('#input-weight').value)
	var height = Number(document.querySelector('#input-height').value)
	var imcResult = document.querySelector('#imc-result')
	var imc = calculateIMC(weight,height)
	var formattedIMC = imc.toFixed(2).replace('.',',')
	imcResult.textContent = formattedIMC


}
start()