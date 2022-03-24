import { Level } from "../../helprs/imc";
import styles from './gridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    item: Level
}
//<!--<img src={item.icon === 'up' ? upImage : downImage} alt={} />--!>

export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <img src={upImage} width={30} alt="Mão fechada apenas o dedo polegar levantado que simbolizar sinal de legal ou beleza" />}
                {item.icon === 'down' && <img src={downImage} width={30} alt="Mão fechada apenas o dedo polegar para baixo que simbolizar sinal de negativo" />}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourImc &&
                <div className={styles.yourImc}>
                    Seu IMC é de {item.yourImc} Kg/M²
                </div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre  <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}