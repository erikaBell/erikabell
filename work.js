 const workTitle1 = document.getElementById('work-title-1')
 const workTitle2 = document.getElementById('work-title-2')
 const workTitle3 = document.getElementById('work-title-3')
 const workTitle4 = document.getElementById('work-title-4')
 const workTitle5 = document.getElementById('work-title-5')
 
 const workInfo1 = document.getElementById('work-info-1')
 const workInfo2 = document.getElementById('work-info-2')
 const workInfo3 = document.getElementById('work-info-3')
 const workInfo4 = document.getElementById('work-info-4')
 const workInfo5 = document.getElementById('work-info-5')

 let workInfoArray = [workInfo1, workInfo2, workInfo3, workInfo4, workInfo5]


 workTitle1.addEventListener("click", function(){
	workInfo1.style.display === "none" ? workInfo1.style.display = "block" : workInfo1.style.display = "none"

	if (workInfoArray[1].style.display === 'block') {
		workInfoArray[1].style.display = 'none'
		workInfo1.style.display = "block"
	} else if (workInfoArray[2].style.display === 'block') {
		workInfoArray[2].style.display = 'none'
		workInfo1.style.display = "block"
	} else if (workInfoArray[3].style.display === 'block') {
		workInfoArray[3].style.display = 'none'
		workInfo1.style.display = "block"
	} else if (workInfoArray[4].style.display === 'block') {
		workInfoArray[4].style.display = 'none'
		workInfo1.style.display = "block"
	}  
 })
 workTitle2.addEventListener("click", function(){
 	workInfo2.style.display === "none" ? workInfo2.style.display = "block" : workInfo2.style.display = "none"
 	
 	if (workInfoArray[0].style.display === 'block') {
		workInfoArray[0].style.display = 'none'
		workInfo2.style.display = "block"
	} else if (workInfoArray[2].style.display === 'block') {
		workInfoArray[2].style.display = 'none'
		workInfo2.style.display = "block"
	} else if (workInfoArray[3].style.display === 'block') {
		workInfoArray[3].style.display = 'none'
		workInfo2.style.display = "block"
	} else if (workInfoArray[4].style.display === 'block') {
		workInfoArray[4].style.display = 'none'
		workInfo2.style.display = "block"
	} 
 })
 workTitle3.addEventListener("click", function(){
 	workInfo3.style.display === "none" ? workInfo3.style.display = "block" : workInfo3.style.display = "none"
 
 	if (workInfoArray[0].style.display === 'block') {
		workInfoArray[0].style.display = 'none'
		workInfo3.style.display = "block"
	} else if (workInfoArray[1].style.display === 'block') {
		workInfoArray[1].style.display = 'none'
		workInfo3.style.display = "block"
	} else if (workInfoArray[3].style.display === 'block') {
		workInfoArray[3].style.display = 'none'
		workInfo3.style.display = "block"
	} else if (workInfoArray[4].style.display === 'block') {
		workInfoArray[4].style.display = 'none'
		workInfo3.style.display = "block"
	} 
 })
 workTitle4.addEventListener("click", function(){
 	workInfo4.style.display === "none" ? workInfo4.style.display = "block" : workInfo4.style.display = "none"
 
 	if (workInfoArray[0].style.display === 'block') {
		workInfoArray[0].style.display = 'none'
		workInfo4.style.display = "block"
	} else if (workInfoArray[1].style.display === 'block') {
		workInfoArray[1].style.display = 'none'
		workInfo4.style.display = "block"
	} else if (workInfoArray[2].style.display === 'block') {
		workInfoArray[2].style.display = 'none'
		workInfo4.style.display = "block"
	} else if (workInfoArray[4].style.display === 'block') {
		workInfoArray[4].style.display = 'none'
		workInfo4.style.display = "block"
	}
 })
 workTitle5.addEventListener("click", function(){
 	workInfo5.style.display === "none" ? workInfo5.style.display = "block" : workInfo5.style.display = "none" 
 
 	if (workInfoArray[0].style.display === 'block') {
		workInfoArray[0].style.display = 'none'
		workInfo5.style.display = "block"
	} else if (workInfoArray[1].style.display === 'block') {
		workInfoArray[1].style.display = 'none'
		workInfo5.style.display = "block"
	} else if (workInfoArray[2].style.display === 'block') {
		workInfoArray[2].style.display = 'none'
		workInfo5.style.display = "block"
	} else if (workInfoArray[3].style.display === 'block') {
		workInfoArray[3].style.display = 'none'
		workInfo5.style.display = "block"
	}
 })
