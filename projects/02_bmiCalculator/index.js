const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector('.results')

    if (height == '' || height < 0 || isNaN(height)) {
        results.textContent = `Please enter a valid height${height}`
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        results.textContent = `Please enter a valid weight${weight}`
    } else {
        const bmi = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);
        results.textContent = `Your BMI is ${bmi}`
    }
    const bmiGuide = document.createElement('h2')
    const node = document.createTextNode("BMI Guide")
    bmiGuide.appendChild(node)
    results.after(bmiGuide)
    const lowRange = document.createElement('p')
    const lowRangeText = document.createTextNode("Underweight: BMI < 18.5")
    lowRange.appendChild(lowRangeText)
    bmiGuide.after(lowRange)
    const normalRange = document.createElement('p')
    const normalRangeText = document.createTextNode("Normal weight: BMI = 18.5-24")
    normalRange.appendChild(normalRangeText)
    lowRange.after(normalRange)
    const overRange = document.createElement('p')
    const overRangeText = document.createTextNode("Overweight: BMI = 25-29")
    overRange.appendChild(overRangeText)
    normalRange.after(overRange)

})

