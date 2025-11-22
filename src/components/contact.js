

const sectionElement = document.createElement('section');
sectionElement.className = 'contact container-lg py-5 d-flex flex-column align-items-center gap-4';



[
    {
        type:'text',
        placeholder:'enter your name',
        msg:'Special characters and numbers not allowed',
        regex:/^[a-zA-Z]+$/
    },
    {
        type:'email',
        placeholder:'enter your email',
        msg:'Email not valid *exemple@yyy.zzz ',
        regex:/^[a-zA-Z][a-zA-Z0-9\._]*@[a-zA-Z][a-zA-Z0-9\._]*(\.[a-zA-Z][a-zA-Z0-9]*)+$/
    },
    {
        type:'text',
        placeholder:'enter your phone',
        msg:'Enter valid Phone Number  ',
        regex:/^((\+[0-9]{1,3})|0)1[0-25][0-9]{8}?$/
      
    },
    {
        type:'number',
        placeholder:'enter your age',
        msg:'Enter valid age',
        regex:/^(([1-9])|([1-9][0-9])|([1][0-9]{2})|(200))$/
      
    },
    {
        type:'password',
        placeholder:'enter your password',
        msg:'Enter valid password *Minimum eight characters, at least one letter and one number:* ',
        regex:/^\d*[a-zA-Z]*(\d+[a-zA-Z]+|[a-zA-Z]+\d+)+\d*[a-zA-Z]*$/
        
      
    },
    ,
    {
        type:'password',
        placeholder:'repassword',
        msg:'Enter valid repassword  ',
        regex:/^\d*[a-zA-Z]*(\d+[a-zA-Z]+|[a-zA-Z]+\d+)+\d*[a-zA-Z]*$/
        
      
    },
].forEach(input=>{

    const inputTag = document.createElement('input');
    inputTag.className = 'form-control';
    inputTag.type = input.type;
    inputTag.placeholder = input.placeholder;

    const ContainerDiv = document.createElement('div');
    ContainerDiv.className = 'input-container position-relative'
    ContainerDiv.setAttribute('msg',input.msg)
    ContainerDiv.append(inputTag);

    sectionElement.append(ContainerDiv);

    // handler of input
    inputTag.addEventListener('input',function(eve){

        console.log(sectionElement.querySelector('input[type="password"]:not(:has([placeholder="repassword"]))').value)

        if( inputTag.placeholder == 'repassword' && input.regex.test(this.value)){

            if( this.value == sectionElement.querySelector('input[type="password"]:not([placeholder="repassword"])').value ){
                this.classList.add('is-valid')
                this.classList.remove('is-invalid')
            }else{
                 this.classList.remove('is-valid')
                 this.classList.add('is-invalid')

            }

        
        }
        else if(input.regex.test(this.value) && (input.type =='password'?this.value.length >= 8 : true )){
            this.classList.add('is-valid')
            this.classList.remove('is-invalid')
        }else{
            this.classList.remove('is-valid')
            this.classList.add('is-invalid')
        }

        activeBtn()
    });


})

// email input ++++++++++++++++++++++++++++++++++++++++++++++++++++++


const btnSubmit = document.createElement('button');
btnSubmit.innerHTML = 'submit'
sectionElement.append(btnSubmit);

btnSubmit.addEventListener('click', function(eve){
    if(this.classList.contains('active')){
        console.log('can be submit')
    }else{
        
    }
})

function activeBtn(){
    
   const result =    Array.from(sectionElement.querySelectorAll('input')).reduce((acc,ele)=>{

        return (acc && ele.classList.contains('is-valid') && ele.value.length > 0)

    },true)

    if(result){
        btnSubmit.classList.add('active');
    }else{
        btnSubmit.classList.remove('active');
      
    }

    

}
// --------------------------------------------------------------------------------------------


export function contact(){

    Array.from(sectionElement.querySelectorAll('input')).forEach(ele=>ele.value = null)

    return sectionElement



}
