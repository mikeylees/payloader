const users=
[
    {
        email:'admin',
        password:'12345',
        firstName:"Michael"
    },
    {
        email:'user',
        password:'reguser',
        firstName:"Kevin"
    }
];
let Luser;
let output = document.getElementById('output');
let loginForm = document.getElementById('form_Login');
loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    let Pass = login(username,password); 
    if (Pass){
        genTable(output,Luser);
    }
       
})


function login(username,password){
    let loginPass = false;
    for(let i = 0; i<users.length;i++){
        if (users[i].email == username && users[i].password == password){
            loginPass = true;
            Luser=users[i]
            break;
        }
    }
    return loginPass;
}
function genTable(output, Luser){
    let outStream = "";
    if(Luser != undefined){
        outStream="Hello " + Luser.firstName
    }
    if (output instanceof HTMLDivElement){
        output.innerHTML= outStream;
    }
}