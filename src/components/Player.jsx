import { useState } from "react";

export default function Player({ initisalName, symbol }) {
  const [playerName, setPlayerName] = useState(initisalName);

  const [isEditing, setIsEditing] = useState(false);

  const HandlerEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  const handlerChange =(e)=>{
    setPlayerName(e.target.value);

  }

  let EditablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    EditablePlayerName = <input onChange={handlerChange} type="text" required value={playerName} />;
  }
  return (
    <li>
      <span className="player">
        {EditablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandlerEditClick}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}

//another way of rendering content conditionally

{
  /* <li>
      <span className="player">
        {/* {isEditing && <span className="player-name">{name}</span>} */
}
//         {isEditing ? <span className="player-name">{name}</span> : null}
//         <span className="player-symbol">{symbol}</span>
//       </span>
//       <button onClick={editHandler}>edit</button>
//       {!isEditing && <input type="text" name="" id="" />}

// </li> */}
