import inquirer from "inquirer";

export async function comparePass() {
    const pass = await inquirer.prompt({
        type: 'input',
        name: 'password',
        message: 'type a password: '
    })
    

    if(pass.password.length < 8){
        console.log("contrasena insegura muy pocos caracteres")
    }

    let numberCount = 0
    let characterCount = 0
    let upperCount = 0
    let arr = []

    for (let i = 0; i < pass.password.length; i++) {

        //console.log(+pass.password[i] === NaN, pass.password[i].toUpperCase())
        arr[i] = pass.password[i].toUpperCase()

        // if(!isNaN(arr[i])){
        //     arr[i] = arr[i]
        //     
        //     
        // }

        if(isNaN(pass.password[i])) {
            arr[i] = pass.password[i]
            //console.log("arr = ", arr[i])
            if(arr[i] == arr[i].toUpperCase()) upperCount++
            
        }else{
            numberCount++
        }

        //console.log(+pass.password[i], arr[i])
        

        if(typeof pass.password[i] == 'string'){
            characterCount++
        }
    }

    console.log("cantidad de caracteres: ", characterCount)
    console.log("cantidad de mayusculas: ",upperCount)
    console.log("cantidad de numeros", numberCount)

    if(upperCount > 0 && numberCount > 0 && pass.password.length > 7){
        console.log("contrasena segura")
    }


}
comparePass()