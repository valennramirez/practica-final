import { inject } from "@angular/core";
import { Observable, catchError, map, tap } from "rxjs";
import { AutService } from "../service/aut.service";


function checkAutenticationStatus () : Observable<boolean>
{
    const autService = inject(AutService); 

    //router otro inject para que una vez verificado eso, pase a la parte privada

    return autService.checkAutenticationStatus().pipe(
        tap( e => {if(e){/**rutear al private */}}),
        map(e => !e)
    )
}

export const LoginGuard = () => 
{
    return checkAutenticationStatus(); 
}