
import './List.css';

const List =(props)=>{
    const { setPeople} = props;
    console.log(props);
    function clearAll()
    {
        setPeople([]);
    }
    return (
        <div className="preson">
            <ul className="container">
                { props.arr.map((itemObj)=>{
                  return (
                      <li key={itemObj.id}>
                          <div>
                              <img 
                              className="image"
                                  src={itemObj.image}
                                  alt="no image"
                                  width={100}
                                  height={100}
                                  />
                              </div>
                              <div>
                  <h3>{itemObj.name}</h3>
                  <p>{itemObj.age}</p>
                              </div>
                      </li>
                  );

                })}
            </ul>
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
};

export default List;