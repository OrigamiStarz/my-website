import style from '/styles/container.module.css'

function ListItems(props) {
  if (props.listType === "ordered")
    return (
      <ol>
        {props.listItems.map(item => <li>{item}</li>)}
      </ol>
    );
  return (
    <ul>
      {props.listItems.map(item => <li>{item}</li>)}
    </ul>
  );
}

export default function List(props) {
  return (
    <div className={style.outer}>
        <h1 className={style.heading}>{props.title}</h1>
        <p>{props.content}</p>
        <ListItems listType={props.listType} listItems={props.items}></ListItems>
    </div>
  )
}
