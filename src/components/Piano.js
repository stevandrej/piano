import React from 'react';
import Tile from './Tile';
import '../style.css';
import UIfx from 'uifx';
import notaDoFX from '../notes/do.mp3';
import notaReFX from '../notes/re.mp3';
import notaMiFX from '../notes/mi.mp3';
import notaFaFX from '../notes/fa.mp3';
import notaSolFX from '../notes/sol.mp3';
import notaLaFX from '../notes/la.mp3';
import notaSiFX from '../notes/si.mp3';
import notaDoHighFX from '../notes/do-high.mp3';

class Piano extends React.Component {
    state = {
        notes: ['DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI', 'DO'],
        sounds:[]
    }

    notesMap = () =>
    {
        //DO
        const notaDO = new UIfx(
            notaDoFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaDO);

          //RE
          const notaRE = new UIfx(
            notaReFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaRE);

          //MI
          const notaMI = new UIfx(
            notaMiFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaMI);

          //FA
          const notaFA = new UIfx(
            notaFaFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaFA);

          //SOL
          const notaSOL = new UIfx(
            notaSolFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaSOL);

          //LA
          const notaLA = new UIfx(
            notaLaFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaLA);

          //SI
          const notaSI = new UIfx(
            notaSiFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaSI);

          //DO HIGH
          const notaDOHigh = new UIfx(
            notaDoHighFX,
            {
                volume:1.0
            }
        )
        this.state.sounds.push(notaDOHigh);



        return this.state.notes.map((item, i) => {
            return (
                <Tile noteName={item} key={i} click={()=>{
                    return(this.state.sounds[i].play());
                   }
                } />
            );
        })
    }

    render() {
        return (
            <div className="ui equal width grid">
                <div className="row">
                    {this.notesMap()}
                </div>
            </div>
        );
    }
}

export default Piano;