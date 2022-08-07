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
	obesidade(imc)

}

function obesidade(imc)
{
	var result = document.querySelector('#obesity')
	result.textContent = 'Este valor considera que você está na faixa '

	if(imc >= 16 && imc <= 16.9)
	{
		result.innerHTML += '<strong>Muito abaixo do peso</strong>'
	}
	else if (imc >= 17 && imc <= 18.4)
	{
		result.innerHTML += '<strong>Abaixo do peso</strong>'
	}
	else if (imc >= 18.5 && imc <= 24.9)
	{
		result.innerHTML += '<strong>Peso normal</strong>'
	}
	else if (imc >= 25 && imc <= 29.9)
	{
		result.innerHTML += '<strong>Acima do peso</strong>'
	}
	else if (imc >= 30 && imc <= 34.9)
	{
		result.innerHTML += '<strong>Obesidade grau I</strong>'
	}
	else if (imc >=35 && imc <= 40)
	{
		result.innerHTML += '<strong>Obesidade grau II</strong>'
	}
	else if(imc > 40)
	{
		result.innerHTML += '<strong>Obesidade grau III</strong>'	
	}
	else
	{
		result.innerHTML = '<strong>Resultado inválido</strong>'		
	}
}
start()