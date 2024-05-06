import './MyLabel.css';


interface Props {
    /** Text to display. */
    label:string,
    /** Label size. */
    size?: 'normal' | 'h1' | 'h2' | 'h3',
    /** Label size. */
    allCaps?:boolean,
    /** Label color. */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
    /** Font color. */
    fontColor?:string,
}

export const Mylabel = ({label, size='normal', allCaps=false, color='text-primary', fontColor}:Props)=>{
    return (
        <>
            <span className={`${size} ${color}`} style={{color:fontColor, textTransform: (allCaps ? 'uppercase' : 'none')}}>{label}</span>
        </>
    )
}