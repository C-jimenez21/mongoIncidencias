var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';
export class login {
    constructor(data) {
        Object.assign(this, data);
        this.email = "Faker";
        this.password = "";
    }
}
__decorate([
    Expose({ name: 'Correo_electronico' }),
    IsDefined({ message: () => { throw { status: 422, message: `La Correo_electronico es obligatorio y debe ser un string` }; } }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro Correo_electronico no es correcto" }; } }),
    __metadata("design:type", String)
], login.prototype, "email", void 0);
__decorate([
    Expose({ name: 'Contraseña' }),
    IsDefined({ message: () => { throw { status: 422, message: `La contraseña es obligatoria y debe ser un string` }; } }),
    IsString({ message: () => { throw { status: 406, message: "El formato del parametro Contraseña no es correcto" }; } }),
    __metadata("design:type", String)
], login.prototype, "password", void 0);
