import { inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AutService } from "../service/aut.service";


function checkAutenticationStatus() : Observable<boolean>
{
    const autService = inject(AutService); 

    return autService.checkAutenticationStatus().pipe(
        tap(estado => {if(!estado){  /*rutear al login*/ }})
    )

}


export const AutGuard = () =>
{
    return checkAutenticationStatus(); 
}