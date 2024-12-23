
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    const emailname=document.getElementById("email");
    const confirmpass=document.getElementById("confirm-password");
    const form=document.getElementById("form");

    form.addEventListener('submit',(e)=>
    {
        e.preventDefault();

        validateInputs();

    })

    const validateInputs=()=>{
        const usernameValue=username.value.trim();

        const emailValue=emailname.value.trim();

        const passwordValue=password.value.trim();

        const confirmpassValue=confirmpass.value.trim();


        if(usernameValue === " ")
        {
            setError(username,"Username is Required");
        }
        else{
            setSuccess(username);
        }


        if(passwordValue === " ")
            {
                setError(passwordValue,"Password is Required");
            }
            else if(passwordValue.length>8 )
                {
                    setError(passwordValue,"Password Length Must not Exceed 8 Characters");
                }
            else{
                setSuccess(passwordValue);
            }

}

const setError=(element,message)=>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess=(element)=>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
    errorDisplay.innerText=" ";
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}