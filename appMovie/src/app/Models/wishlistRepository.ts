import { Wishlist } from "./wishlist";
import { Movie } from './movie';

export class WishlistRepository{
  private wishlist:Wishlist[];
  public wish:Wishlist;

  constructor(){

    this.wishlist=[

      // {id:1, title:"High Life", movieId:4,image:"../../assets/Images/1.png"}

      ]
  }

  getWishlist():Wishlist[]{



    return this.wishlist
  }

  getWishlistById(id:number):Wishlist| undefined{
    return this.wishlist.find(m=>m.id==id);
  }

  AddWish(whish: Wishlist) {
    this.wishlist.push(whish);

    this.wishlist.forEach(element => {

      console.log(element)
    });

  }

  RemoveWish(item: any) {

    this.wishlist.forEach((value,index)=>{
      // alert(value.id +" "+item.id)
      if(value.id==item.id)
      {
        this.wishlist.splice(index,1);

      }
    });



  }


}
