import { useContext, FormEvent, useState, ChangeEvent } from "react";
import { CartContext } from "../../context/CartContext";
import postData from "../../helpers/postData";
import useForm from "../../hooks/useForm";
import { Customer, Order } from "../../types/typeApp";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  address: "",
};
const Form = () => {
  const { cartItems, dispatch } = useContext(CartContext);
  const { formValue, handleInputChange, resetValues } =
    useForm<Customer>(initialState);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formValue);
    const orderDetails = cartItems.map(({ id, image, ...item }) => item);

    if (orderDetails.length > 0) {
      const order: Order = {
        customer: {
          name: formValue.name,
          lastName: formValue.lastName,
          email: formValue.email,
          address: formValue.address,
        },
        order_details: orderDetails,
      };
      const fetchApi = await postData(order);
      if (!fetchApi.ok) {
        console.log("error");
      } else {
        resetValues();
        dispatch({
          payload: [],
          type: "CLEAR",
        });
      }
    } else {
      console.log("no hay nada en el carrito");
    }
  };

  //   const [formValue, setFormValue] = useState({
  //     name: "",
  //     lastName: "",
  //     email: "",
  //     address: "",
  //   });
  //   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //     // { x : y }
  //     // [x]:y
  //     console.log(e);
  //     const { name, value } = e.target;

  //     setFormValue({
  //       ...formValue,
  //       [name]: value,
  //     });
  //   };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6" style={{ padding: "0" }}>
            <input
              type="text"
              className="form-control"
              style={{ width: "96%" }}
              name="name"
              id="name"
              placeholder="Nombre"
              value={formValue.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-6" style={{ padding: "0" }}>
            <input
              type="text"
              style={{ width: "96%" }}
              className="form-control"
              name="lastName"
              id="lastName"
              placeholder="Apellidos"
              value={formValue.lastName}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="col-12" style={{ padding: "0" }}>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="email"
              value={formValue.email}
              onChange={handleInputChange}
            />
          </div>
          <br />
          <div className="col-12" style={{ padding: "0" }}>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              placeholder="Direccion"
              value={formValue.address}
              onChange={handleInputChange}
            />
          </div>
          <hr />
          <button className="w-100 btn btn-primary" type="submit">
            Procesar orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
