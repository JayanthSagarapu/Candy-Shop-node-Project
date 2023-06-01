const name = document.getElementById("item");
const description = document.getElementById("description");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const list = document.getElementById("list");
const container = document.getElementById("container");

window.addEventListener("DOMContentLoaded", reloadpage);

async function reloadpage() {
  try {
    const response = await axios.get("http://localhost:5000/getItems");
    for (let i = 0; i < response.data.length; i++) {
      showOnScreen(response.data[i]);
    }
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

//AddingItems
async function addItem(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const description = e.target.description.value;
  const price = e.target.price.value;
  const quantity = e.target.quantity.value;

  const Item = {
    name,
    description,
    price,
    quantity,
  };

  if (name && description && price && quantity) {
    try {
      const response = await axios.post(
        "http://localhost:5000/items/createItem",
        Item
      );
      showOnScreen(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  } else {
    const errmsg = document.createElement("div");
    errmsg.className = "bg-danger w-75 ";
    errmsg.textContent = "Fill the details";
    container.append(errmsg);

    setTimeout(() => {
      errmsg.className = "bg-danger w-75 d-none";
    }, 1000);
  }
}

//Displaying on screen
async function showOnScreen(res) {
  //creating list
  const li = document.createElement("li");
  li.className =
    "list-group-item align-self-center w-100 mb-1 p-1 d-block d-flex";
  li.id = "list-item";

  //creating error
  const errmsg = document.createElement("div");
  errmsg.className = "bg-danger w-75 d-none text-white";
  errmsg.textContent = "Required Quantity Not Available";
  list.append(errmsg);

  const div0 = document.createElement("div");
  div0.className = "card card-body";
  div0.id = "div0";
  div0.textContent = res.name;
  li.append(div0);

  const div1 = document.createElement("div");
  div1.className = "card card-body";
  div1.id = "div1";
  div1.textContent = res.description;
  li.append(div1);

  const div2 = document.createElement("div");
  div2.className = "card card-body";
  div2.id = "div2";
  div2.textContent = res.price;
  li.append(div2);

  const div3 = document.createElement("div");
  div3.className = "card card-body";
  div3.id = "div3";
  div3.textContent = res.quantity;
  li.append(div3);

  //creating and adding eventlistner to Buy buttons

  const buybtn1 = document.createElement("button");
  buybtn1.className = "btn btn-sm float-right border-dark mr-3 d-block";
  buybtn1.textContent = `Buy1`;
  li.append(buybtn1);

  buybtn1.onclick = async () => {
    console.log(res.name);
    var value = 1;
    if (res.quantity >= value) {
      res.quantity = res.quantity - 1;
      buybtnsUpdate();
    } else {
      errmsg.className = "bg-danger w-75 d-block text-white";
      setTimeout(() => {
        errmsg.className = "bg-danger w-75 d-none";
      }, 1000);
    }
  };

  const buybtn2 = document.createElement("button");
  buybtn2.className = "btn btn-sm float-right border-dark mr-3 d-block";
  buybtn2.textContent = "Buy2";
  li.append(buybtn2);

  buybtn2.onclick = async () => {
    if (res.quantity >= 2) {
      res.quantity = res.quantity - 2;
      buybtnsUpdate();
    } else {
      errmsg.className = "bg-danger w-75 d-block text-white";
      setTimeout(() => {
        errmsg.className = "bg-danger w-75 d-none";
      }, 1000);
    }
  };

  const buybtn3 = document.createElement("button");
  buybtn3.className = "btn btn-sm float-right border-dark mr-3 d-block";
  buybtn3.textContent = "Buy3";
  li.append(buybtn3);

  buybtn3.onclick = async () => {
    if (res.quantity >= 3) {
      res.quantity = res.quantity - 3;
      buybtnsUpdate();
    } else {
      errmsg.className = "bg-danger w-75 d-block text-white";
      setTimeout(() => {
        errmsg.className = "bg-danger w-75 d-none";
      }, 1000);
    }
  };

  async function buybtnsUpdate() {
    if (res.quantity > 0) {
      let updatedItem = {
        name: res.name,
        description: res.description,
        price: res.price,
        quantity: res.quantity,
      };
      try {
        await axios.put(
          `http://localhost:5000/updateItem/${res.id}`,
          updatedItem
        );
        div3.textContent = updatedItem.quantity;
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        list.removeChild(li);
        const response = await axios.delete(
          `http://localhost:5000/deleteItem/${res.id}`
        );
      } catch (err) {
        console.log(err);
      }
    }
  }

  list.append(li);

  form.reset();
}
