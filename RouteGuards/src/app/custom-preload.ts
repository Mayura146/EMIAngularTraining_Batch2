import { PreloadingStrategy, Route } from "@angular/router";
import { map, Observable, of, timer } from "rxjs";

export class CustomPreload implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if(route.data && route.data["preload"])
        {
            if (route.data['delay']) {
                return timer(5000).pipe(map(() => load()));
              }
            return load();
        }
        else
        {
            return of(null);
        }
        
    }
}
