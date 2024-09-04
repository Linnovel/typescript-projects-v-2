export function formatcurrency(amount:number){
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(amount)
}

export function formatDate(dateStr : string) : string {
    const dateObj  = new Date(dateStr)
    const option: Intl.DateTimeFormatOptions = {
         year: "numeric",
          month: "short",
           day: "numeric",
            weekday: "long" } 

    return new Intl.DateTimeFormat('es-ES', option).format(dateObj)
}