import { useState} from "react";
import CreateProduct from "./Product";


function Dashboard() {
    const [productStae, setProductState] = useState([
        { id: 1, name: "A", price: 200 },
        { id: 2, name: "B", price: 400 }
    ]);

    return (
        <div>
            {
                productStae.map(
                    item => {
                        return (
                            <CreateProduct
                                key={item.id}
                                name={item.name}
                                price={item.price}
                            ></CreateProduct>
                        )
                    }
                )


            }
        </div>

    );
}

export default Dashboard;