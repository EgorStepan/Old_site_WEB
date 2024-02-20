const list = document.querySelector('.list')
const butpr=document.querySelectorAll('.button__0')
items=document.querySelectorAll('.blocks__item') 
localstr = document.querySelector('.localstr')
butpr.innerHTML
var accepdor;

function canorno(){
	butpr.forEach(button => {
    button.addEventListener('click', event => {
      accepdor = event.target.dataset.id
      console.log(accepdor)
      if(accepdor == 'yes'){
      	localStorage.setItem('accept',accepdor)
      }
      localstr.style.display = 'none'

    });
  });
}

function filter(){
	list.addEventListener('click',  function(event){
		const targetId = event.target.dataset.id
		if(accepdor == 'yes'){
			if (targetId == 'all'){
				localStorage.removeItem('key')
				console.log("localStorage.removeItem('key')")
			}else{
				 localStorage.setItem('key',targetId)
			}
        }
		switch(targetId){
			case 'all':
				getItems(targetId)
				localStorage.removeItem('key')
				console.log("localStorage.removeItem('key')")
				break
			case 'home':
				getItems(targetId)
				break
			case 'apartment':
				getItems(targetId)
				break
		}

	})
}
function getItems(className){
	items.forEach(item =>{
					if(className == 'all'){
						item.style.display = 'flex'
					}else{
						item.style.display = 'flex'
					if(item.classList.contains(className)){
						item.style.display = 'flex'
					}else{
						item.style.display = 'none'
					}}
				})
}
function startpr(){
     if(localStorage.getItem('accept')){
     	localstr.style.display = 'none'
     }
     if(localStorage.getItem('key')){
     	getItems(localStorage.getItem('key'))
     }
     filter()
}
canorno()
startpr()