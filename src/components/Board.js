export default function Board(props){
    let boardArray = [];

    const getTileSizeStyle = () => {
        const size = 1100 / props.size;
        const sizeString = size + "px";
        return sizeString;
    }

    for(let i=0; i<props.size; i++){
        let row = [];
        for(let j=0; j<props.size; j++){
            if ((i+j)%2){
                row.push(1);
            }
            else {
                row.push(0);
            }
        }
        boardArray.push(row);
    }

    const tileSize = getTileSizeStyle();

    const tileStyle = {
        width:tileSize,
        height:tileSize
    }




    return(
        <div className="board">
            {boardArray.map((element) => {
                return (<div className="row">
                    {element.map((tile) => {
                    if (tile === 0){
                        return <div className="blackTile" style={tileStyle}></div> 
                    }
                    if (tile === 1){
                        return <div className="whiteTile" style={tileStyle}></div>
                    }
                    else{
                        return 0;
                    }
                })}
                </div>)   
            })}
        </div>
    )
}