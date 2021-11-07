import styles from './CSSModule.module.scss';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            hi, i'm <sapn className="something">CSS Module!!</sapn>
        </div>
    )
}

export default CSSModule;