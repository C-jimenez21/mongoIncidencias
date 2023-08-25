import { Expose } from 'class-transformer';
import { IsDefined, IsString} from 'class-validator';
export class login {

    @Expose({ name: 'Correo_electronico' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La Correo_electronico es obligatorio y debe ser un string`}}})
    @IsString({message: ()=>{throw {status: 406, message:"El formato del parametro Correo_electronico no es correcto"}}})
    email: string;

    @Expose({ name: 'Contraseña' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `La contraseña es obligatoria y debe ser un string`}}})
    @IsString({message: ()=>{throw {status: 406, message:"El formato del parametro Contraseña no es correcto"}}})
    password: string;

    constructor(data:Partial<login>) {
        Object.assign(this, data);
        this.email = "Faker";
        this.password = "";
    }
}
