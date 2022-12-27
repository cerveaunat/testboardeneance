export default function SizeSelect(props){

    let sizes = [1,3,5,8,10,30,50,80,100,300,500,800,1000,10000];

    const handleChange = (event) => {
        props.setSize(event.target.value);
    }

    return (
    <div className="SizeSelect">
        <select onChange={handleChange}>
            {sizes.map((element) => {
                return(<option value={element}>{element}</option>);
            })}
        </select>
    </div>);
}
