import { useState } from 'react';
import styles from './App.module.css';
import leftArrowImage from './assets/leftarrow.png';
import poweredImage from './assets/powered.png';
import {GridItem} from './componets/gridItem';


import {levels, calculateIMC, Level} from './helprs/imc';


const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setToShow] =  useState<Level | null>(null);

  

  const handleCalculateButton = () => {
    if (heightField && weightField){
      setToShow(calculateIMC(heightField, weightField));
    }else {
      alert('Preencha todos os Campos.')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className={styles.main}>
      <header>
        <div className= {styles.headerContainer}>
          <img src={poweredImage} width={150} alt="Logo maraca da empresa com um fundo azul e com as letras i,m,c em cores branca" />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla Indice de Massa Corpórea. Parâmentro
            Adotado pela Organização Mundial de Saúde para 
            calcular o peso ideal de cada pessoa.
          </p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em Métros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={showItem ? true : false} 
          />

          <input 
            type="number"
            placeholder='Digite o seu peso. Ex: 70.3 (em KG)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={showItem ? true : false} 
          />

          <button onClick={handleCalculateButton} disabled={showItem ? true : false} >Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!showItem &&
            <div className={styles.grid}>
              {
                levels.map((item, key) => {
                  return (
                    <GridItem key={key} item={item} />
                  )
                })
              }
            </div>
          }
          {showItem &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt=" Seta para volta ao inicio com valores zerados" width={20} />
              </div>
              <GridItem item={showItem} />
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}

export default App;