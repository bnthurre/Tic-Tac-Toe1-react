import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const HandlerEditClick = () => {
    setIsEditing(!isEditing);
  };

  let playerName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerName = <input type="text"  required value={name}/>;
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandlerEditClick}>{isEditing ? 'save' : 'edit'}</button>
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
