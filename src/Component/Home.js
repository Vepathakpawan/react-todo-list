import React, { useEffect, useState } from "react";


const getLocalItems =() =>{
  let list = localStorage.getItem('list');
  console.log(list)
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return[]
  }
}

const Home = () => {
  const handleclick = () => {
    localStorage.clear();
    window.location.reload();
  };


  const [inputtitle, setInputTitle] = useState("");
  const [inputdate, setInputDate] = useState(" ");
  const [toggleBtn, setToggleBtn] = useState(false);
  const [isEditItems, setEditItems] = useState(null);

  const [items, setItems] = useState(getLocalItems() );

  //adding items
  const addItems = () => {
    if (!inputtitle) {
      alert("please fill details");
    } else if ( inputtitle  && !toggleBtn) {
  
      setItems(
        items.map((elem) => {
        if (elem.id === isEditItems) {
            return { ...elem, name: inputtitle};
          }
          return elem;
        })
      )

      setToggleBtn(true)

      setInputTitle('');
      
      setInputDate('');

      setEditItems(null);

    } else {
      let newData = {
        id: new Date().getTime().toString(),
        name: inputtitle,
        date: inputdate,
      };
      setItems([...items, newData]);
    }
  };

  //delet items
  const deletItems = (index) => {
    const newItems = items.filter((elem) => elem.id !== index);
    setItems(newItems);
  };

  // edit Items
  const editItem = (ind) => {

    const editData = items.find((elem) => elem.id === ind);
    setToggleBtn(false);
    setInputTitle(editData.name);
    setEditItems(ind);
  };



useEffect( () => {
localStorage.setItem('list', JSON.stringify(items));
}, [items]);


const ClearAll = () =>{
  setItems([]);
}

  return (
    <>
      <div className="dashboard">
        <div className="login-wrapper todolist">
          <div className="row  active">
            <div className="list-outline col-md-5 text-start title-wrapper">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={inputtitle}
                onChange={(e) => setInputTitle(e.target.value)}
              ></input>
            </div>
            <div className="list-outline  col-md-5  date-wrapper">
              <label>Date</label>
              <input id="datePicker"
                type="date"
                className="form-control"
                value={inputdate}
                onChange={(e) => setInputDate(e.target.value)}
              ></input>
            </div>

            <div className="list-outline col-md-2">
              {
              toggleBtn ? (
                
 <button
                  type="submit"
                  className="add-btn addItem"
                  onClick={addItems}
                >
                  Add
                </button>
              ) : (
                <button
                  type="submit"
                  className="add-btn addItem"
                  onClick={addItems}
                >
                  Add
                </button>
              )}
            </div>
          </div>
          {items.map((elem) => {
            return (
              <>
                <div className="added-list" key="elem.id">
                  <div className="col col-md-5 title-section">
                    <p>{elem.name}</p>
                  </div>
                  <div className="col col-md-3 Date-section">
                    <p >{elem.date}</p>
                  </div>
                  <div className="col col-md-2 edit-section">
                    <button
                      className="list-btn edit"
                      onClick={() => editItem(elem.id)}
                    >
                      <i className="icon-edit-pencil"></i>
                    </button>
                  </div>
                  <div className="col col-md-2 delet-section">
                    <button
                      className="list-btn delet"
                      onClick={() => deletItems(elem.id)}
                    >
                      <i className=" icon-trash-can"></i>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <div className="d-row d-flex text-center  ">
            <div className="md-4">   <button className="logout-btn" onClick={handleclick}>Logout</button></div>
            <div className="md-4">   <button className="clear-btn" onClick={ClearAll}>Clear</button></div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Home;
