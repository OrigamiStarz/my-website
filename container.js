import style from '/styles/container.module.css'

export default function Container(props) {
  return (
    <div className={style.outer}>
        <h1 className={style.heading}>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  )
}
