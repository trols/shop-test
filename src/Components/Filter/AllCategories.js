import Filter from "./Filter";

const AllCategories = () =>{
    return(
        <div className="categories">
                
            {
               ['КАТАЛОГ','ФРУКТЫ','ОВОЩИ','МЯСО','РЫБА','ХЛЕБ','АЛКОГОЛЬ']
               .map((category,index) =><Filter key={index}category={category}/>
                    )
             }
        </div>
           )
}
export default AllCategories;