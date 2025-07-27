export interface Product {
      image: {
            thumbnail: string,
            desktop: string,
            mobile: string,
            tablet:string
       },
       name: string,
       category: string,
       price: number
}

export interface   Item extends Product{
    zahl:number,
  }