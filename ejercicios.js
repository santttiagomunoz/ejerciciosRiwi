
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
    let letterCount = 0
    let upperCount = 0
    let arr = []

    for (let i = 0; i < pass.password.length; i++) {

        //console.log(+pass.password[i] === NaN, pass.password[i].toUpperCase())
        arr[i] = pass.password[i].toUpperCase()

        if(pass.password[i] === arr[i]) upperCount++

        console.log(+pass.password[i], arr[i])

        if (typeof +pass.password[i] == 'number') {
            numberCount++
        }

        if(typeof pass.password[i] == 'string'){
            letterCount++
        }
    }

    console.log(letterCount)
    console.log(upperCount)

    if(upperCount > 0 && numberCount > 0 && pass.password.length > 7){
        console.log("contrasena segura")
    }


}
comparePass()