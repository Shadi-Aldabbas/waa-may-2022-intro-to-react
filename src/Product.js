
function CreateProduct(props) {


    return (
        <div className="App">
            <div>
                <h1>
                    Name : {props.name}
                   <br />
                   Price:  {props.price}
                </h1>
            </div>



        </div>
    );
}

export default CreateProduct;